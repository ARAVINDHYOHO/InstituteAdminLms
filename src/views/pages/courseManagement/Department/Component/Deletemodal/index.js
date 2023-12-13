//React
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "src/components/loader";
import Swal from "sweetalert2";
import { Toaster } from "react-hot-toast";

const Deletemodal = ({
  textdata,
  selectdata,
  openDelete,
  handleCloseDelete,
}) => {
  // Loader Logo
  const [progressLoading, setProcessLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setProcessLoading(false);
    }, 1000);
  }, []);

  const token = localStorage.getItem("token");
  
  // Delete methods in API

  const handleDeleteCourse = async () => {
    handleCloseDelete();
    textdata(true);

    let data = JSON.stringify({
      id: selectdata
        });

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/course-management/courses/delete`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleCloseDelete();
        toast.success("Deleted Successfully..!");
        textdata(false);
      })
      .catch((error) => {
        console.log(error);
        textdata(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred while adding the Department..!",
        });
      });
    textdata(false);
  };
  console.log("s",selectdata)

  return (
    <div>
      {progressLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Dialog
            open={openDelete}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 650 } }}
            onClose={(event, reason) => {
              if (reason !== "backdropClick") {
                handleCloseDelete();
              }
            }}
          >
            <DialogTitle
              id="user-view-edit"
              sx={{
                textAlign: "center",
                fontSize: "1.5rem !important",
                // px: (theme) => [
                //   `${theme.spacing(5)} !important`,
                //   `${theme.spacing(15)} !important`,
                // ],
                pt: (theme) => [
                  `${theme.spacing(8)} !important`,
                  `${theme.spacing(4)} !important`,
                ],
              }}
            >
              Are You Want to Delete..?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" sx={{textAlign:"center"}}>
                Tables display sets of data. They can be fully customized.
                Tables display information in a way that's easy to scan.
              </DialogContentText>
            </DialogContent>

            <DialogActions
              className="dialog-actions-dense"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Button
                  sx={{ mb: 2, marginRight: 8 }}
                  style={{ backgroundColor: "#ea5455" }}
                  variant="contained"
                  onClick={handleCloseDelete}
                >
                  No
                </Button>

                <Button
                  sx={{ mb: 2, marginRight: 5 }}
                  variant="contained"
                  onClick={handleDeleteCourse}
                >
                  Yes
                </Button>
                <Toaster position="top-right" reverseOrder={false} />
              </Box>
            </DialogActions>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Deletemodal;
