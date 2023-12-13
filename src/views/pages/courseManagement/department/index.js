import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Fragment, useState } from 'react';
import Icon from '../../../../@core/components/icon';
// ** Utils Import
import MenuItem from '@mui/material/MenuItem';

import Header from 'components/Header';
import Addmodal from '../Department/Component/Addmodal'

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

// const theme = useTheme();
// ** renders client column
// const renderClient = params => {
//    const { row } = params
//    const stateNum = Math.floor(Math.random() * 6)
//    const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
//   // const color = states[stateNum]
//   // if (row.avatar?.length) {
//   //   return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
//   // } else {
//   //   return (
//   //     <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
//   //       {getInitials(row.full_name ? row.full_name : 'John Doe')}
//   //     </CustomAvatar>
//   //   )
//   // }
// }

// const statusObj = {
//   1: { title: 'current', color: 'primary' },
//   2: { title: 'professional', color: 'success' },
//   3: { title: 'rejected', color: 'error' },
//   4: { title: 'resigned', color: 'warning' },
//   5: { title: 'applied', color: 'info' }
// }

const DepartmentPage = () => {
  // ** State Remove
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // ** States
  const [openEdit, setOpenEdit] = useState(false);
  const handleEditClickOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);

  // ** States
  const [openAdd, setOpenAdd] = useState(false);
  const handleAddClickOpen = () => setOpenAdd(true);
  const handleAddClose = () => setOpenAdd(false);

  const [selectdata, setselectdata] = useState('');

  //permission table

  // const [deptID, setdeptID] = useState('')
  // const [deptName, setdeptName] = useState('')
  // const [status, setstatus] = useState('')
  // const [actions, setactions] = useState('')
  // const [imgSrc, setImgSrc] = useState('/images/avatars/15.png')
  // const [inputValue, setInputValue] = useState('')

  const handleInputImageChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      if (reader.result !== null) {
        setInputValue(reader.result);
      }
    }
  };

  const handleInputImageReset = () => {
    setInputValue('');
    setImgSrc('/images/avatars/15.png');
  };

  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: 'id ',
      headerName: 'Course id',
      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.Dept_ID}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 120,
      field: 'image',
      headerName: 'Image',

      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(params)} */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.avatar}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 110,
      field: 'name',
      headerName: 'Course Name',
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.Dept_name}
        </Typography>
      )
    },

    {
      flex: 0.1,
      type: 'name',
      minWidth: 120,
      headerName: 'Department ',
      field: 'start_date',
      valueGetter: (params) => new Date(params.value),
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.city}
        </Typography>
      )
    },
    {
      flex: 0.1,
      type: 'name',
      minWidth: 120,
      headerName: 'Category ',
      field: 'date',
      valueGetter: (params) => new Date(params.value),
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.city}
        </Typography>
      )
    },

    {
      flex: 0.1,
      type: 'name',
      minWidth: 120,
      headerName: 'SubCategory ',
      field: 'Sub category',
      valueGetter: (params) => new Date(params.value),
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {params.row.city}
        </Typography>
      )
    },

    // {
    //   flex: 0.1,
    //   minWidth: 140,
    //   field: 'status',
    //   headerName: 'Status',
    //   renderCell: params => {
    //     const status = statusObj[params.row.status]

    //     return (

    //       <TextField
    //         select
    //         defaultValue='10'
    //         id='select-without-label'
    //         fullWidth
    //         SelectProps={{ displayEmpty: true }}
    //         inputProps={{ 'aria-label': 'Without label' }}
    //         sx={{
    //           "& fieldset": {
    //             border: "none",
    //           },
    //         }}

    //       >
    //         <MenuItem value=''>

    //         </MenuItem>
    //         <MenuItem value={10}>Active</MenuItem>
    //         <MenuItem value={20}>Inactive</MenuItem>

    //       </TextField>

    //     )
    //   }
    // },

    {
      flex: 0.1,
      minWidth: 100,

      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

            <Dialog
              open={openEdit}
              disableEscapeKeyDown
              aria-labelledby="user-view-edit"
              aria-describedby="user-view-edit-description"
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
                  px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                  pt: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                }}
              >
                Edit Category
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
                        onChange={handleInputImageChange}
                        id="account-settings-upload-image"
                      />
                    </ButtonStyled>
                    <ResetButtonStyled color="secondary" variant="tonal" onClick={handleInputImageReset}>
                      Reset
                    </ResetButtonStyled>
                    <Typography sx={{ mt: 4, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                  </div>
                </Box>

                <TextField
                  id="name"
                  autoFocus
                  fullWidth
                  type="name"
                  label="Category Name"
                  defaultValue={selectdata.category_name}
                  sx={{ mb: 5 }}
                />

                <TextField
                  select
                  defaultValue="10"
                  id="select-without-label"
                  label="Department"
                  autoFocus
                  fullWidth
                  SelectProps={{ displayEmpty: true }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Inactive</MenuItem>
                </TextField>
              </DialogContent>
              <DialogActions
                sx={{
                  justifyContent: 'center'
                }}
              >
                <Button sx={{ mb: 2, marginRight: 5 }} style={{ backgroundColor: '#ea5455' }} variant="contained" onClick={handleEditClose}>
                  Cancel
                </Button>

                <Button sx={{ mb: 2, marginRight: 8 }} variant="contained" onClick={handleEditClose}>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>

            <IconButton>
              <Icon style={{ color: '#ea5455' }} onClick={handleClickOpenDelete} icon="material-symbols:delete-outline" />
            </IconButton>
          </Box>
        );
      }
    }
  ];

  const rows = [
    {
      id: 1,
      avatar: '8.png',
      Dept_ID: '201',
      Dept_name: 'Web Desgin',
      post: 'Nuclear Power Engineer',
      email: 'kocrevy0@thetimes.co.uk',
      city: 'Krasnosilka',
      start_date: '09/23/2016',
      salary: 23896.35,
      age: '61',
      experience: '1 Year',
      status: 2
    },
    {
      id: 2,
      avatar: '',
      Dept_ID: '301',
      Dept_name: 'Back-End',
      post: 'Environmental Specialist',
      email: 'ediehn6@163.com',
      city: 'Lampuyang',
      start_date: '10/15/2017',
      salary: 18991.67,
      age: '59',
      experience: '9 Years',
      status: 3
    },
    {
      id: 3,
      avatar: '',
      Dept_ID: '301',
      Dept_name: 'SAP',
      post: 'Sales Representative',
      email: 'dfalloona@ifeng.com',
      city: 'Colima',
      start_date: '06/12/2018',
      salary: 19252.12,
      age: '30',
      experience: '0 Year',
      status: 4
    },
    {
      id: 4,
      avatar: '7.png',
      Dept_ID: '401',
      Dept_name: 'Testing',
      post: 'Operator',
      email: 'sganderton2@tuttocitta.it',
      city: 'Golcowa',
      start_date: '03/24/2018',
      salary: 13076.28,
      age: '66',
      experience: '6 Years',
      status: 5
    },
    {
      id: 5,
      avatar: '7.png',
      Dept_ID: '501',
      Dept_name: 'UI & UX Desgin',
      post: 'Senior Cost Accountant',
      email: 'hnisius4@gnu.org',
      city: 'Lucan',
      start_date: '08/25/2017',
      salary: 10909.52,
      age: '33',
      experience: '3 Years',
      status: 2
    }
  ];

  // const escapeRegExp = value => {
  //   return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  // }

  // Function to convert the array to a CSV string
  const convertToCSV = (array) => {
    const header = Object.keys(array[1]).join(',');
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

  const [searchText, setSearchText] = useState('');

  const handleSearch = (searchValue) => {
    setSearchText(searchValue);
    // const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
  };

  return (
    <div>
      {/* <Helmet>
            <title> Courses : Courses | Yoho Marketplace </title>
          </Helmet> */}

      <Container maxWidth="xl">
        <Header
          title="Categories"
          handleExport={downloadCSV}
          handleSearch={handleSearch}
          searchQuery={searchText}
          handleFilter={'hhh'}
          handleAdd={handleAddClickOpen}
          addTitle={'Add Categories'}
        />

        {/* <Toaster position="top-right" /> */}

        <Addmodal
          // handleAddClickOpen={handleAddClickOpen}
          openAdd={openAdd}
          handleAddClose={handleAddClose}
          // textdata={handleDataFromChild}
        />
        {/* 
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            paddingLeft: 0,
            paddingTop: 0,
            marginTop: 3
          }}
        >
          <Typography
            sx={{
              display: '',
              justifyContent: '',
              alignItems: 'flex-end',
              marginRight: 0,
              marginTop: { xs: 2, sm: 0 },
              textAlign: { xs: 'center', sm: 'right' }
            }}
          >
            <Button sx={{ marginRight: 5, marginTop: 0.5 }} size="medium" variant="outlined">
              <Icon icon="bi:filter" /> Filter
            </Button>
            <Button sx={{ marginRight: 5, marginTop: 1 }} variant="outlined" size="medium" onClick={downloadCSV}>
              <Icon icon="material-symbols:download-sharp" /> Export
            </Button>
          </Typography>
          <div>
            <TextField
              sx={{ marginTop: 0.3 }}
              placeholder="Search..."
              // value={searchQuery}
              inputProps={{
                style: {
                  height: '10px'
                }
              }}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </Grid> */}

        <div style={{ height: 400, width: '100%', marginTop: 30 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              '& .MuiDataGrid-cell:focus': {
                outline: ' none'
              },
              '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
                outline: 'none'
              }
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              },
              toolbar: {
                value: searchText,
                clearSearch: () => handleSearch(''),
                onChange: (event) => handleSearch(event.target.value)
              }
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </Container>

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
              pt: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
            }}
          >
            Are You Want to Delete..?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>
                Tables display sets of data. They can be fully customized. Tables display information in a way thats easy to scan.
              </Typography>
            </DialogContentText>
          </DialogContent>

          <DialogActions className="dialog-actions-dense" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Button sx={{ mb: 2, marginRight: 8 }} style={{ backgroundColor: '#ea5455' }} variant="contained" onClick={handleCloseDelete}>
                No
              </Button>

              <Button sx={{ mb: 2, marginRight: 5 }} variant="contained" onClick={handleCloseDelete}>
                Yes
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </Fragment>
    </div>
  );
};
export default DepartmentPage;
