import React from 'react'
import Icon from "../../../../../../@core/components/icon"
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton
  } from "@mui/material";
  import { Fragment } from 'react';
  import UserView from "../../constants/UserView/index"

const ViewModal = () => {
  return (
    <div>
    <Fragment>
      <Dialog fullScreen aria-labelledby='full-screen-dialog-title'
        open={OpenView}
        disableEscapeKeyDown
        aria-describedby='alert-dialog-description'

        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleCloseView()
          }
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleCloseView}
          sx={{ top: 8, right: 10, position: 'absolute', color: 'grey.500' }}
        >
          <Icon icon='tabler:x' style={{ color: "#ea5455" }} />
        </IconButton>
        <DialogTitle className='text-center'>Edit User Information</DialogTitle>
        <DialogContent>
        <UserView tab={tab} invoiceData={invoiceData} />
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{ marginRight: 5 }} style={{ backgroundColor: "#ea5455" }} variant='contained' onClick={handleCloseView} >
              Cancel
            </Button>
            <Button sx={{ marginRight: 8 }} variant='contained' onClick={handleCloseView}>
              Ok
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Fragment>
  </div>
  )
}

export default ViewModal
