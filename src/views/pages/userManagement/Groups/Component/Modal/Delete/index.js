import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";

const Delete = ({ openDelete, handleDeleteClose, id, loading }) => {
  
  const token = localStorage.getItem("token");

  const handleDeleteGroup = async () => {
    loading(true);
    try {
      let data = {
        id: id,
      };
      let config = {
        method: "post",
        maxBodyLength: Infinity,

        url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/role/delete`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(
            JSON.stringify("Group Delete Response : ", response.data)
          );
          loading(false);
        })
        .catch((error) => {
          console.log("Group Delete Error : ", error);
          loading(false);
        });
    } catch (error) {
      console.log("error", error);
      loading(false);
    }
    handleDeleteClose();
  };
  return (
    <Box>
      <Fragment>
        <Dialog
          open={openDelete}
          disableEscapeKeyDown
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleDeleteClose();
            }
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 650 } }}
        >
          <DialogTitle
            className="text-center"
            sx={{
              textAlign: "center",
              fontSize: "1.5rem !important",
              px: (theme) => [
                `${theme.spacing(5)} !important`,
                `${theme.spacing(15)} !important`,
              ],
              pt: (theme) => [
                `${theme.spacing(4)} !important`,
                `${theme.spacing(4)} !important`,
              ],
            }}
          >
            Are You Want to Delete Group..?
          </DialogTitle>
          <DialogContent style={{ justifyContent: "center", display: "flex" }}>
            <DialogContentText sx={{ mb: 3 }}>
              Tables display sets of data. Tables display information want to
              Remove.
            </DialogContentText>
          </DialogContent>

          <DialogActions
            sx={{
              justifyContent: "center",
              px: (theme) => [
                `${theme.spacing(5)} !important`,
                `${theme.spacing(15)} !important`,
              ],
              pb: (theme) => [
                `${theme.spacing(4)} !important`,
                `${theme.spacing(4)} !important`,
              ],
            }}
          >

            <Box>
              <Button
                sx={{ mb: 2, marginRight: 8 }}
                style={{ backgroundColor: "#ea5455" }}
                variant="contained"
                onClick={handleDeleteClose}
                size="medium"
              >
                No
              </Button>
              <Button
                sx={{ mb: 2, marginRight: 5 }}
                variant="contained"
                onClick={handleDeleteGroup}
                size="medium"
              >
                Yes
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </Fragment>
    </Box>
  );
};

export default Delete;
