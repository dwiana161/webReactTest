import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
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