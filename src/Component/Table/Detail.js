import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import useStyles from './styles';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useCallback } from 'react';

const columns = [
  { field: 'id', 
  headerName: 'ID', 
  width: 50, 
  flex: 1,
  headerClassName: 'super-app-theme--header',
  headerAlign: 'center'},
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
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  }
];

export default function TableWarehouseDetail() {
  const id = useParams();

  const classes = useStyles();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const idData = id.id;
  const navigate = useNavigate();

  console.log('id', idData)
  const wareHouseDetail = useCallback(async () => {
    setLoading(true)
    const res = await axios.get(`https://api.belajartableau.com/api/WarehouseReps/${idData}`);
    console.log('detail', res.data);
    setData(res.data);
    setLoading(false);
  },[idData]);

  useEffect(() => {
      wareHouseDetail();
  },[wareHouseDetail])

  console.log('data', data)

  const rows = [{
    id: 1, 
    branch: data.Branch, 
    active: data.Active, 
    desc: data.Description,
    lastsync: data.LastSync,
  },
  {
    id:2 , 
    branch: data.Branch, 
    active: data.Active, 
    desc: data.Description,
    lastsync: data.LastSync,
  },
]

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
    >
      <Button  
      sx={{ fontSize: 12,
            color: 'black'}}
      onClick={() => {navigate('/')}}>Home / Warehouse</Button> 
      / DETAIL LOCATION WAREHOUSE - RETAIL</Box>
    <Box 
      sx={{ fontWeight: 'bold', mt: '12%' }}
      variant="h3"
    >Detail Location Warehouse - Retail</Box>
    </Typography>
    <Box sx={{ 
      height: 250, 
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(rows) => rows.id}
        loading={loading}
      />
    </Box>
    </>
  );
}
