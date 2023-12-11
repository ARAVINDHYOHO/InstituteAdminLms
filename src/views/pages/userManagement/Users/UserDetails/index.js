// ** React Imports
import React from 'react';
// import { Button } from '@mui/material'
// import Box from '@mui/material/Box'
// import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent';
import UserView from '../constants/UserView';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();

  const id = location;
  return (
    <DialogContent sx={{ p: 0 }}>
      <UserView id={id} />
    </DialogContent>
  );
};

export default UserDetails;
