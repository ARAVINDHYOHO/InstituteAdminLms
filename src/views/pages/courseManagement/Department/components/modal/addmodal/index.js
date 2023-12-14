// React
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";


const AddModal = ({ openAdd, handleAddClose}) => {
 
const ImgStyled = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6),
  borderRadius: theme.shape.borderRadius
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(2)
  }
}));
  

return(

  <Dialog
  open={openAdd}
  disableEscapeKeyDown
  aria-labelledby="user-view-edit"
  aria-describedby="user-view-edit-description"
  sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
  onClose={(event, reason) => {
    if (reason !== 'backdropClick') {
      handleAddClose();
    }
  }}
>
  <DialogTitle
    id="user-view-edit"
    sx={{
      textAlign: 'center',
      fontSize: '1.5rem !important',
      px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
      pt: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
    }}
  >
    Add Department
  </DialogTitle>
  <DialogContent
    sx={{
      pb: (theme) => `${theme.spacing(8)} !important`,
      px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
      <ImgStyled src="https://tipa.in/wp-content/uploads/2021/05/Online-courses.jpg" alt="Profile Pic" />
      <div>
         <ButtonStyled component="label" variant="contained" htmlFor="account-settings-upload-image">
          Upload New Photo
          <input
            hidden
            type="file"
            // defaultValue={selectdata.avatar}
            // value={inputValue}
            accept="image/png, image/jpeg"
            // onChange={handleInputImageChange}
            id="account-settings-upload-image"
          />
        </ButtonStyled>
        <ResetButtonStyled color="secondary" variant="tonal">
          Reset
        </ResetButtonStyled> 
        <Typography sx={{ mt: 4, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
      </div>
    </Box>

 

    <TextField
      select
      defaultValue=""
      id="select-without-label"
      label="Department"
      autoFocus
      fullWidth
      SelectProps={{ displayEmpty: true }}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value=""></MenuItem>
      <MenuItem value={10}>Bsc Computer Science</MenuItem>
      <MenuItem value={20}>B-Tech IT</MenuItem>
      <MenuItem value={30}>BCA</MenuItem>
      <MenuItem value={40}>Msc</MenuItem>
    </TextField>
  </DialogContent>
  <DialogActions
    sx={{
      justifyContent: 'center'
    }}
  >
    <Button sx={{ mb: 2, marginRight: 5 }} style={{ backgroundColor: '#ea5455' }} variant="contained" onClick={handleAddClose}>
      Cancel
    </Button>

    <Button sx={{ mb: 2, marginRight: 8 }} variant="contained" onClick={handleAddClose}>
      Ok
    </Button>
  </DialogActions>
</Dialog>
)
};

export default AddModal;
