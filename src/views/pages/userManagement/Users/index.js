// Mui Imports
import {
  Box,
  // Container,
  IconButton,
  Button,
  DialogActions,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  // CardActions,
  // CardContent,
  MenuItem,
  Grid,
  TextField,
  Typography
} from '@mui/material';

// import { Controller, useForm } from "react-hook-form";

//React Imports
import { useState, Fragment, useEffect } from 'react';

// // Mui styles Imports
// import { makeStyles } from "@mui/styles";

//React Helmet Imports
// import { Helmet } from 'react-helmet-async';

// React Router Link Import
import { Link } from 'react-router-dom';

// import { Image } from '@material-ui/icons';
//mui Data Grid
import { DataGrid } from '@mui/x-data-grid';

import { styled } from '@mui/material/styles';

// Axios Import
// import axios from "axios";

// Custom Component Imports
import Icon from '../../../../@core/components/icon';
import Header from '../../../../components/Header';
// import DeleteModal from "../Users/component/DeleteModal/index"

import MainCard from 'ui-component/cards/MainCard';

// import ViewModal from "../Users/component/ViewModal"
import Skeletonstable from 'components/skeleton/tableSkeleton';
// import { auto } from '@popperjs/core';
// import permissionData from "../../../components/Permission";
// import EditModal from "../Users/Component/Modal/EditModal";
// import CreateModal from "./Component/Modal/CreateModal";
// import DeleteModal from "./Component/Modal/DeleteModal";

// Mui Style overwrite

// const useStyles = makeStyles((theme) => ({
//   greenBackground: {
//     border: "2px solid #00C853",
//     "&  .MuiInputBase-input": {
//       color: "lightgreen",
//       // color: "white",
//     },
//   },
//   redBackground: {
//     border: "2px solid #FF1744",
//     "&  .MuiInputBase-input": {
//       color: "red",

//       // color: "white",
//     },
//   },
// }));

const UserManagementUser = () => {
  // ** Permission State
  // const [exportPermission, setExportPermission] = useState(null);
  // const [addPermission, setAddPermission] = useState(null);
  // const [viewPermission, setViewPermission] = useState(null);
  // const [editPermission, setEditPermission] = useState(null);
  // const [deletePermission, setDeletePermission] = useState(null);
  // const token = localStorage.getItem("token");

  // const permissions = permissionData.permission;

  // useEffect(() => {
  //   const datas = permissions.filter(
  //     (data) => data.module == "user-management"
  //   );
  //   // console.log(datas);
  //   const datas2 = permissions.filter((data) => data.screen == "users");
  //   const exportPermission = datas2?.find(
  //     (data) => data.name == "users-export"
  //   );
  //   setExportPermission(exportPermission);

  //   const addPermission = datas2?.find((data) => data.name == "users-add");
  //   setAddPermission(addPermission);

  //   const viewPermission = datas2?.find((data) => data.name == "users-view");
  //   setViewPermission(viewPermission);

  //   const editPermission = datas2?.find((data) => data.name == "users-edit");
  //   setEditPermission(editPermission);

  //   const deletePermission = datas2?.find(
  //     (data) => data.name == "users-delete"
  //   );
  //   setDeletePermission(deletePermission);
  // }, [permissions]);

  // const [users, setUsers] = useState([]);

  // //Axios Get All Users

  // useEffect(() => {
  //   getAllUsers();
  //   getAllRoleGroup();
  // }, [token]);

  // //  console.log("token", token)
  // const getAllUsers = async () => {
  //   try {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/platform-user/show`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     await axios
  //       .request(config)
  //       .then((response) => {
  //         console.log(JSON.stringify(response.data.data.data));
  //         setUsers(response.data.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //      console.log(users)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // //Axios Get Role Group

  // const [role, setRole] = useState([]);
  // const getAllRoleGroup = async () => {
  //   try {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/role/show`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "content-type": "application/json",
  //       },
  //     };
  //     await axios
  //       .request(config)
  //       .then((response) => {
  //         // console.log(JSON.stringify(response.data.data));
  //         setRole(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     // console.log(role);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // //Axios Group Field Menu item

  // // const [roles, setRoles] = useState([]);
  // const [selectedRoleId, setSelectedRoleId] = useState(
  //   role?.role_group?.role.id
  // );

  // const handleRoleChange = async (e) => {
  //   setSelectedRoleId(e.target.value);

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/platform-user/update-role'`,
  //       {
  //         user_id: 8,
  //         role_id: 1,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     // console.log(response)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Parent to Child State
  // const handleDataFromChild = (textdata) => {
  //   setProcessLoading(textdata);
  // };

  //Loader
  // const [progressLoading, setProcessLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setProcessLoading(false);
  //   }, 800);
  // }, []);

  //Add model image upload
  const [image, setImage] = useState(null);

  const handleInputImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleInputImageReset = () => {
    setImage(null);
  };

  // const [imgSrc, setImgSrc] = useState('/images/avatars/15.png');

  // const handleInputImageChange = (file) => {
  //   const reader = new FileReader();
  //   const { files } = file.target;
  //   if (files && files.length !== 0) {
  //     reader.onload = () => setImgSrc(reader.result);
  //     reader.readAsDataURL(files[0]);
  //     if (reader.result !== null) {
  //       setInputValue(reader.result);
  //     }
  //   }
  // };

  // const handleInputImageReset = () => {
  //   setInputValue('');
  //   setImgSrc('/images/avatars/15.png');
  // };

  const ImgStyled = styled('img')(({ theme }) => ({
    // width: 100,
    // height: 100,
    marginRight: theme.spacing(6),
    borderRadius: theme.shape.borderRadius
  }));

  // User Permission
  const edit = true;

  // // ** States Open
  // const [open, setOpen] = useState(false);
  // const handleDialogToggle = () => setOpen(!open);

  const [selectdata, setselectdata] = useState('');

  // ** States Edit
  const [openEdit, setOpenEdit] = useState(false);
  const handleEditClickOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);

  // // ** State delete
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // // ** State create
  const [openCreate, setOpenCreate] = useState(false);
  const handleClickOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  // // ** State View User
  const [setOpenView] = useState(false);
  const handleClickView = () => setOpenView(true);
  // const handleCloseView = () => setOpenView(false);

  //Table loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // // Variables
  // const classes = useStyles();

  const columns = [
    {
      flex: 0.25,
      minWidth: 80,
      field: 'ID',
      headerName: 'ID',
      renderCell: (params) => {
        const { row } = params;

        return (
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {row.id}
          </Typography>
        );
      }
    },
    {
      flex: 0.25,
      minWidth: 120,
      field: 'image',
      headerName: 'Image',

      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <img src="img_avatar.png" alt="Avatar" style="width:200px"></img> */}
            <ImgStyled
              values={row}
              src={'https://uploads.celebheightwiki.com/images/39/shane-campbell-soccer.jpg'}
              // src="img_avatar.png"
              //  src={imgSrc}
              width={50}
              height={50}
              style={{
                borderRadius: 50,
                '& .MuiInputBase-input': {
                  padding: '10px 9px !important'
                }
              }}
            />
            {/* <img
              src={`${process.env.REACT_APP_PUBLIC_API_URL}public/${row.profile_image}`}
              width={50}
              height={50}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://cdn-icons-png.flaticon.com/128/1829/1829586.png";
              }}
            /> */}
          </Box>
        );
      }
    },
    {
      flex: 0.25,
      minWidth: 200,
      field: 'name',
      headerName: 'Name',
      renderCell: (params) => {
        const { row } = params;

        return (
          <Typography noWrap variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
            {row.name}
          </Typography>
        );
      }
    },
    {
      flex: 0.25,
      field: 'group',
      minWidth: 180,
      headerName: 'Group',
      renderCell: (params) => {
        const { row } = params;

        return (
          <TextField
            select
            // fullWidth

            value={row?.user}
            defaultValue={10}
            sx={{
              minWidth: 170,
              '& .MuiInputBase-input': {
                padding: '10px 9px !important'
              },

              borderRadius: 1
            }}
            // sx={{
            //   m: 1,
            //   minWidth: 150,
            //   '&  .MuiInputBase-input': {
            //     padding: '7px 14px'
            //     // color: "white",
            //   },

            //   // borderRadius: 1
            // }}
            id="select-without-label"
            // onChange={async (e) => {
            //   console.log("RoleId", e.target.value);
            //   console.log("userId", row?.id);

            //   try {
            //     const response = await axios.post(
            //       `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/platform-user/update-role`,
            //       {
            //         user_id: row?.id,
            //         role_id: e.target.value,
            //       },
            //       {
            //         headers: {
            //           Authorization: `Bearer ${token}`,
            //         },
            //       }
            //     );
            //     console.log(response);
            //     getAllUsers();
            //   } catch (error) {
            //     console.error(error);
            //   }
            // }}
          >
            <MenuItem value="10">Administrator</MenuItem>
            <MenuItem value="20">Service</MenuItem>
            <MenuItem value="30">User</MenuItem>
          </TextField>
        );
      }
    },
    {
      flex: 0.25,
      field: 'email',
      minWidth: 250,
      headerName: 'Email',
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.email}
        </Typography>
      )
    },
    {
      flex: 0.25,
      field: 'Phone Number',
      minWidth: 120,
      headerName: 'Phone Number',
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.phonenumber}
        </Typography>
      )
    },
    {
      flex: 0.25,
      field: 'Designation',
      minWidth: 160,
      headerName: 'Designation',
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.designation}
        </Typography>
      )
    },
    {
      flex: 0.25,
      minWidth: 200,
      maxWidth: 170,
      field: 'status',
      headerName: 'Status',
      renderCell: (params) => {
        // const status = statusObj[params.row.status]
        const { row } = params;
        return (
          <TextField
            sx={{
              minWidth: 170,
              '& .MuiInputBase-input': {
                padding: '10px 9px !important'
              },

              borderRadius: 1
            }}
            // inputProps={{
            //   style: {
            //     height: "8px",
            //   },
            // }}
            // fullWidth
            select
            defaultValue={20}
            // className={
            //   row?.is_active === "yes"
            //     ? classes.greenBackground
            //     : classes.redBackground
            // }
            id="select-without-label"
            value={row.Active}
            // onChange={async (e) => {
            //   try {
            //     const response = await axios.post(
            //       `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/platform-user/status`,
            //       {
            //         id: row?.id,
            //         is_active: e.target.value,
            //       },
            //       {
            //         headers: {
            //           Authorization: `Bearer ${token}`,
            //         },
            //       }
            //     );
            //     console.log(response);
            //     getAllRoleGroup();
            //   } catch (error) {
            //     console.error(error);
            //   }
            // }}
            // inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="10">Active</MenuItem>
            <MenuItem value="20">InActive</MenuItem>
          </TextField>
        );
      }
    },
    {
      flex: 0.25,
      minWidth: 150,
      field: 'Actions',
      headerName: 'Actions',

      renderCell: (params) => {
        // const { row } = params;
        if (edit == true) {
          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Link to="user-details">
                {/* {viewPermission && ( */}
                <IconButton>
                  <Icon style={{ color: '#5f57be' }} onClick={() => handleClickView()} icon="tabler:eye" />
                </IconButton>
                {/* // )} */}
              </Link>

              {/* {editPermission && ( */}
              <IconButton>
                <Icon
                  style={{ color: '#5f57be' }}
                  onClick={() => {
                    setselectdata(params.row);
                    handleEditClickOpen();
                  }}
                  icon="tabler:edit"
                />
              </IconButton>
              {/* )} */}

              {/* {deletePermission && ( */}
              <IconButton>
                <Icon style={{ color: '#ea5455' }} onClick={handleClickOpenDelete} icon="material-symbols:delete-outline" />
              </IconButton>
              {/* )} */}
            </Box>
          );
        }
      }
    }
  ];

  const rows = [
    {
      id: 1,
      avatar: '8.png',
      user_ID: '201',
      name: 'RamHari',
      post: 'Nuclear Power Engineer',
      email: 'ramhari@thetimes.co.uk',
      city: 'Chennai',
      start_date: '09/23/2016',
      salary: 23896.35,
      group: '61',
      experience: '1 Year',
      status: 2,
      phonenumber: 9876543210,
      designation: 'Front-End'
    },
    {
      id: 2,
      avatar: '',
      user_ID: '301',
      name: 'Manikandan',
      post: 'Environmental Specialist',
      email: 'manik@thetimes.co.uk',
      city: 'Lampuyang',
      start_date: '10/15/2017',
      salary: 18991.67,
      group: '59',
      experience: '9 Years',
      status: 3,
      phonenumber: 8545484577,
      designation: 'Back-End'
    },
    {
      id: 3,
      avatar: '',
      user_ID: '301',
      name: 'Santhosh',
      post: 'Sales Representative',
      email: 'santhoshs@thetimes.co.uk',
      city: 'Singapore',
      start_date: '06/12/2018',
      salary: 19252.12,
      group: '30',
      experience: '0 Year',
      status: 4,
      phonenumber: 9123456780,
      designation: 'Software Testing'
    },
    {
      id: 4,
      avatar: '7.png',
      user_ID: '401',
      name: 'StellaMarry',
      post: 'Operator',
      email: 'stellamarry2@thetimes.co.uk',
      city: 'Hyderbad',
      start_date: '03/24/2018',
      salary: 13076.28,
      group: '66',
      experience: '6 Years',
      status: 5,
      phonenumber: 7760984211,
      designation: 'Data Sciences'
    },
    {
      id: 5,
      avatar: '',
      user_ID: '501',
      name: 'Raju KumarVeera',
      post: 'Senior Cost Accountant',
      email: 'veerakumar@gnu.org',
      city: 'Lucan',
      start_date: '08/25/2017',
      salary: 10909.52,
      group: '33',
      experience: '3 Years',
      status: 2,
      phonenumber: 8545484577,
      designation: 'Senior Accountant'
    }
  ];

  // Function to convert the array to a CSV string
  const convertToCSV = (array) => {
    const header = Object.keys(array[0]).join(',');
    const csvData = array.map((item) =>
      Object.values(item)
        .map((value) => `"${value}"`)
        .join(',')
    );
    return [header, ...csvData].join('\n');
  };

  // Function to trigger the CSV download
  const downloadCSV = () => {
    const csv = convertToCSV(rows);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rows.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  // Search States
  const handleSearch = (searchValue) => {
    setSearchText(searchValue);

    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');

    const filteredRows = rows.filter((rows) => {
      return Object.keys(rows).some((field) => {
        return searchRegex.test(rows[field].toString());
      });
    });
    if (searchValue.length) {
      setFilteredData(filteredRows);
    } else {
      setFilteredData([]);
    }
  };

  // ** States
  // const [selectdata, setselectdata] = useState("");
  // const [data] = useState(users);
  const [searchText, setSearchText] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  // const [paginationModel, setPaginationModel] = useState({
  //   page: 0,
  //   pageSize: 7,
  // });

  // .css-17pmaar-MuiCardContent-root

  return (
    // <>
    //   {progressLoading ? (
    //     <Loader />
    //   ) : (
    <>
      <MainCard sx={{ p: 0 }}>
        {/* <Helmet>
              <title> User: UserManagement | Yoho Marketplace </title>
            </Helmet> */}

        <Box maxWidth="xl">
          <Header
            title="Users"
            handleExport={downloadCSV}
            handleSearch={handleSearch}
            searchQuery={searchText}
            handleFilter={'hhh'}
            handleAdd={handleClickOpenCreate}
            addTitle={'Add User'}
          />

          {/* // Add Modal  */}
          <Dialog
            open={openCreate}
            disableEscapeKeyDown
            fullWidth
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
          >
            <DialogTitle
              id="user-view-edit"
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem !important',
                px: '10px !important',
                pt: '10px !important'
              }}
            >
              Add User
            </DialogTitle>
            <DialogContent
              sx={{
                pb: (theme) => `${theme.spacing(8)} !important`,
                px: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`]
              }}
            >
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 3, ml: 9 }}>
                  {/* <ImgStyled src={imgSrc} alt="Profile Pic" 
                    style={{
                          width: 100,
                          height: 100,
                          marginRight: 6,
                          borderRadius: 5,
                          borderWidth: 5,
                          backgroundColor:"red"
                        }}/> */}
                  <ImgStyled
                    // src={
                    //   'https://static.wixstatic.com/media/565794_76c1fd4ab0fc48e5947f0d9789a6af80~mv2.png/v1/fit/w_728,h_410,q_90/565794_76c1fd4ab0fc48e5947f0d9789a6af80~mv2.png'
                    // }
                    // width={50}
                    // height={50}
                    src={image ? URL.createObjectURL(image) : 'https://cdn-icons-png.flaticon.com/128/1829/1829586.png'}
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 6,
                      borderRadius: 5,
                      borderWidth: 5
                    }}
                  />
                  {/* <image
                        src={image ? URL.createObjectURL(image) : 'https://cdn-icons-png.flaticon.com/128/1829/1829586.png'}
                        style={{
                          width: 100,
                          height: 100,
                          marginRight: 6,
                          borderRadius: 5,
                          borderWidth: 5
                        }}
                      /> */}
                  <Grid>
                    <Button component="label" variant="contained" htmlFor="account-settings-upload-image" sx={{ mr: 1 }}>
                      Upload New Photo
                      <input
                        hidden
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleInputImageChange}
                        id="account-settings-upload-image"
                      />
                    </Button>
                    <Button
                      color="primary"
                      variant="tonal"
                      sx={{ backgroundColor: '#ea5455', color: 'white' }}
                      onClick={handleInputImageReset}
                    >
                      Reset
                    </Button>
                    <Typography sx={{ mt: 1, color: 'text.disabled', fontSize: 13 }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                  </Grid>
                </Box>
                {/* <Box style={{marginBottom:15}}> */}
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="Name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    value={name}
                    label="Name"
                    id="name"
                    type="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    // error={Boolean(errors.Name)}
                    // aria-describedby="validation-basic-OrderDate"
                    // {...(errors.Name && {
                    //   helperText: 'This  field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    // value={email}
                    label="Email"
                    // onChange={(event) => setEmail(event.target.value)}
                    // error={Boolean(errors.email)}
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    placeholder="carterleonard@gmail.com"
                    // aria-describedby="validation-schema-email"
                    // // {...(errors.email && { helperText: errors.email.message })}
                    // {...(errors.Email && {
                    //   helperText: 'This field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="Password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    // value={password}
                    label="Password"
                    // onChange={(event) => setpassword(event.target.value)}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    // error={Boolean(errors.Password)}
                    // aria-describedby="validation-basic-Password"
                    // {...(errors.Password && {
                    //   helperText: 'This field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="Confirm_Password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    // value={password}
                    label="Confirm Password"
                    // onChange={(event) => setpassword(event.target.value)}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    // error={Boolean(errors.Confirm_Password)}
                    // aria-describedby="validation-basic-Confirm_Password"
                    // {...(errors.Confirm_Password && {
                    //   helperText: 'This field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="Phone_Number"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    // value={phone}
                    label="Phone Number"
                    type="number"
                    // onChange={(event) => setphone(event.target.value)}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    // error={Boolean(errors.Phone_Number)}
                    // aria-describedby="validation-basic-Phone_Number"
                    // {...(errors.Phone_Number && {
                    //   helperText: 'This field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item md={12} lg={6} style={{}}>
                  {/* <Controller
                        name="Designation"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => ( */}
                  <TextField
                    fullWidth
                    // value={designation}
                    label="Designation"
                    // onChange={(event) => setdesignation(event.target.value)}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    // error={Boolean(errors.Designation)}
                    // aria-describedby="validation-basic-TaxAmount"
                    // {...(errors.Designation && {
                    //   helperText: 'This field is required'
                    // })}
                  />
                  {/* )}
                      /> */}
                </Grid>
                <Grid item xs={12} style={{}}>
                  <TextField
                    fullWidth
                    select
                    label="Select Group"
                    defaultValue=""
                    inputProps={{
                      style: {
                        height: '10px'
                      }
                    }}
                  >
                    <MenuItem value={10}>Active</MenuItem>
                    <MenuItem value={20}>De-active</MenuItem>
                  </TextField>
                </Grid>
                {/* </Box> */}
              </Grid>
            </DialogContent>

            <DialogActions sx={{ display: 'flex', justifyContent: 'center' ,ml:6 }} className="dialog-actions-dense">
              {/* <Box> */}
                <Button sx={{ marginRight: 5 }} style={{ backgroundColor: '#ea5455' }} variant="contained" onClick={handleCloseCreate}>
                  Cancel
                </Button>
                <Button
                  sx={{  marginRight: 8 }}
                  variant="contained"
                  onClick={handleCloseCreate}
                >
                  Ok
                </Button>
              {/* </Box> */}
            </DialogActions>
            {/* <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box>
                <Button variant="contained" style={{ backgroundColor: '#ea5455' }} sx={{ mr: 2 }} onClick={handleCloseCreate}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleCloseCreate} type="submit" sx={{ mr: 2 }}>
                  Submit
                </Button>
              </Box>
            </DialogActions> */}
            {/* </CardContent> */}
          </Dialog>

          {loading ? (
            <Skeletonstable />
          ) : (
            <Box
            // style={{ width: '100%' }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight={true}
                sx={{
                  '& .MuiDataGrid-cell:focus': {
                    outline: ' none'
                  },
                  mt: 2
                }}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 25 }
                  },

                  toolbar: {
                    value: searchText
                    // clearSearch: () => handleSearch(''),
                    // onChange: (event) => handleSearch(event.target.value)
                  }
                }}
                slotProps={{
                  baseButton: {
                    size: 'medium',
                    variant: 'outlined'
                  }
                }}
              />
            </Box>
          )}
        </Box>

        {/*  Edit modal Component  */}

        <Fragment>
          <Dialog
            open={openEdit}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            onClose={(event, reason) => {
              if (reason !== 'backdropClick') {
                handleEditClose();
              }
            }}
          >
            <DialogTitle
              id="user-view-edit"
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem !important',
                px: (theme) => [`${theme.spacing(3)} !important`, `${theme.spacing(3)} !important`],
                pt: '20px !important'
              }}
            >
              Edit User
            </DialogTitle>
            <DialogContent
              sx={{
                pb: (theme) => `${theme.spacing(8)} !important`,
                px: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`]
              }}
            >
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop:3, ml: 10 }}>
                  {/* <ImgStyled  alt="Profile Pic" /> */}
                  {/* <img
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "https://cdn-icons-png.flaticon.com/128/1829/1829586.png"
                    }
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 6,
                      borderRadius: 5,
                      borderWidth: 5,
                    }}
                  /> */}
                  <ImgStyled
                    // src={
                    //   'https://static.wixstatic.com/media/565794_76c1fd4ab0fc48e5947f0d9789a6af80~mv2.png/v1/fit/w_728,h_410,q_90/565794_76c1fd4ab0fc48e5947f0d9789a6af80~mv2.png'
                    // }
                    // width={50}
                    // height={50}
                    src={image ? URL.createObjectURL(image) : 'https://cdn-icons-png.flaticon.com/128/1829/1829586.png'}
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 6,
                      borderRadius: 5,
                      borderWidth: 5
                    }}
                  />
                  <Grid>
                    <Button component="label" variant="contained" htmlFor="account-settings-upload-image" sx={{ mr: 2 }}>
                      Upload New Photo
                      <input
                        hidden
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleInputImageChange}
                        id="account-settings-upload-image"
                      />
                    </Button>
                    <Button
                      color="primary"
                      variant="tonal"
                      sx={{ backgroundColor: '#ea5455', color: 'white' }}
                      onClick={handleInputImageReset}
                    >
                      Reset
                    </Button>
                    <Typography sx={{ mt: 2, color: 'text.disabled', fontSize: 13 }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                  </Grid>
                </Box>

                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    // value={name}
                    label="Name"
                    id="name"
                    type="name"
                    defaultValue={selectdata?.name}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    // value={email}
                    defaultValue={selectdata?.email}
                    label="Email"
                    // onChange={(event) => {
                    //   setEmail(event.target.value);
                    // }}
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    // value={password}
                    label="Password"
                    // onChange={(event) => {
                    //   setpassword(event.target.value);
                    // }}
                    defaultValue={selectdata?.password}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    // value={password}
                    label="Confirm Password"
                    // onChange={(event) => {
                    //   setpassword(event.target.value);
                    // }}
                    defaultValue={selectdata?.confirm_password}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    // value={phone}
                    label="Phone Number"
                    type="number"
                    // onChange={(event) => {
                    //   setphone(event.target.value);
                    // }}
                    defaultValue={selectdata?.phonenumber}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                    aria-describedby="validation-basic-Phone_Number"
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TextField
                    fullWidth
                    // value={designation}
                    label="Designation"
                    // onChange={(event) => {
                    //   setdesignation(event.target.value);
                    // }}
                    defaultValue={selectdata?.designation}
                    placeholder=""
                    inputProps={{
                      style: {
                        height: '15px'
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ display: 'flex', justifyContent: 'center' ,ml:6 }} className="dialog-actions-dense">
              <Box>
                <Button sx={{ mb: 2, marginRight: 5 }} style={{ backgroundColor: '#ea5455' }} variant="contained" onClick={handleEditClose}>
                  Cancel
                </Button>
                <Button
                  sx={{ mb: 2, marginRight: 8 }}
                  variant="contained"
                  onClick={handleEditClose}
                >
                  Ok
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
        </Fragment>

        {/* // View Modal */}

        {/* <ViewModal  OpenView={OpenView} handleCloseView={handleCloseView}/> */}

        {/* Delete Modal Component */}
        <Fragment>
          <Dialog
            open={openDelete}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
            onClose={(event, reason) => {
              if (reason !== 'backdropClick') {
                handleCloseDelete();
              }
            }}
          >
            <DialogTitle
              id="user-view-edit"
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem !important',
                px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: (theme) => [`${theme.spacing(4)} !important`, `${theme.spacing(4)} !important`]
              }}
            >
              Are You Want to Delete..?
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
              <DialogContentText id="alert-dialog-description">
                Tables display sets of data. They can be fully customized. Tables display information in a way that easy to scan.
              </DialogContentText>
            </DialogContent>
            <DialogActions
              className="dialog-actions-dense"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box>
                <Button
                  sx={{ mb: 2, marginRight: 8 }}
                  style={{ backgroundColor: '#ea5455' }}
                  variant="contained"
                  onClick={handleCloseDelete}
                  size="small"
                >
                  No
                </Button>

                <Button
                  sx={{ mb: 2, marginRight: 5 }}
                  variant="contained"
                  // onClick={handleDeleteUser}
                  size="small"
                >
                  Yes
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
        </Fragment>
      </MainCard>
    </>
    //   )}
    // </>
  );
};
export default UserManagementUser;
