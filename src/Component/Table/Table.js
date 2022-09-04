import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import useStyles from './styles';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const columns = [
  { field: 'id', 
    headerName: 'ID',
    width: 50,
    flex: 1, 
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    renderCell: (params) => (
    <Link to={`/warehouse/${params.value}`}>{params.value}</Link>
  ) },
  {
    field: 'branch',
    headerName: 'Branch',
    width: 150,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'active',
    headerName: 'Active',
    width: 150,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'desc',
    headerName: 'Desc',
    width: 110,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'lastsync',
    headerName: 'Last Sync',
    width: 160,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  }
];

export default function TableWarehouse() {
  const classes = useStyles();

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const wareHouseReps = async () => {
    setLoading(true)
    const res = await axios.get('https://api.belajartableau.com/api/WarehouseReps');
    console.log(res.data);
    setTableData(res.data);
    setLoading(false)
  }

  useEffect(() => {
    wareHouseReps();
  },[])

  const rows = tableData.map((row) => ({
    id: row.WarehouseID, 
    branch: row.Branch, 
    active: row.Active, 
    desc: row.Description,
    lastsync: row.LastSync.split(/[T]/, 1),
  }))

  return (
    <>
    <Typography
      sx={{ml: '2%', mt: '1%'}} 
      component="div"
      className={classes.title} 
    >
    <Box 
      sx={{ fontSize: 12}}
      variant="subititle2"
    >HOME / WAREHOUSE</Box>
    <Box 
      sx={{ fontWeight: 'bold', mt: '32%' }}
      variant="h3"
    >Warehouse</Box>
    </Typography>
    <Box sx=
          {{ 
            height: 300, 
            width: '100%', 
            ml:'2%', 
            mt:'2%',
            '& .super-app-theme--header': {
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              color: '#FFFFFF'
            }, 
          }}>
      <DataGrid
        rowHeight={25}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={loading}
      />
    </Box>
    </>
  );
}
