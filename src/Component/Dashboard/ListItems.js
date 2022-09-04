import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';


const ListItems = () => {

  const navigate = useNavigate();

  return (
  <>
    <ListItemButton button sx={{ color: '#FFFFFF'}}>
      <ListItemIcon>
        <DashboardIcon onClick={() => {navigate('/')}} sx={{color: '#FFFFFF'}} />
      </ListItemIcon>
      <ListItemText onClick={() => {navigate('/')}} primary="Data WareHouse" />
    </ListItemButton>
  </>
  );
};

export default ListItems;