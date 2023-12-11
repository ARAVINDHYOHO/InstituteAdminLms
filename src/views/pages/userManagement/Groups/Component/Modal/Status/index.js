import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { Button } from '@mui/material'
import { Fragment } from 'react'
import Box from '@mui/material/Box'
import DialogContentText from '@mui/material/DialogContentText'


const Status = ({ isOpen, onClose, onOk }) => {
  const [modalData, setModalData] = useState('');

  const handleInputChange = (event) => {
    setModalData(event.target.value);
  };

  const handleOkClick = () => {
    // You can perform any necessary validation or processing here before updating the response
    const newResponseData = modalData;
    onOk(newResponseData); // Call the onOk function to update the response
    setModalData(''); // Clear the input field
  };
 

  return (
<Box>
<Fragment>
  <Dialog
    open={isOpen}
    disableEscapeKeyDown
    onClose={(event, reason) => {
      if (reason !== 'backdropClick') {
        onClose
      }
    }}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
    sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
  >
    <DialogTitle className='text-center'
      sx={{
        textAlign: 'center',
        fontSize: '1.5rem !important',
        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
      }}

    >Are You Want to Change..?</DialogTitle>
    <DialogContent style={{ justifyContent: "center", display: "flex" }}>
      <DialogContentText sx={{ mb: 3 }}>
      <input type="text" value={modalData} onChange={handleInputChange} />
      </DialogContentText>
    </DialogContent>

    <DialogActions
      sx={{
        justifyContent: 'center',
        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
      }}
    >   
      <Button sx={{ backgroundColor: "#ea5455", mr: 2, }} variant='tonal' color='secondary'  onClick={onClose}>
        No
      </Button>
      <Button variant='contained' onClick={handleOkClick}>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
</Fragment>
</Box>
  );
};

export default Status;
