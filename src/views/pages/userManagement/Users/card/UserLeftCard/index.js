// ** React Imports
// import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
// import { styled } from '@mui/material/styles'

// ** Icon Imports
// import Icon from "../../../../../../@core/components/icon"

// ** Custom Components
import CustomAvatar from '../../../../../../@core/components/mui/avatar';
// import CustomChip from '../../../../../../@core/components/mui/chip';

// ** Utils Import
// import axios from 'axios'
import { getInitials } from '../../../../../../@core/utils/get-initials';

const data = {
  id: 101,
  role: 'Admin',
  status: 'active',
  username: 'Ram Krishna',
  avatarColor: 'primary',
  country: 'India',
  company: 'Yotz PVT LTD',
  billing: 'Manual - Cash',
  contact: '9876543210',
  designation:'Software Developer ',
  currentPlan: 'enterprise',
  fullName: 'Daisy Patterson',
  email: 'ramkrishna@abc.net',
  avatar: '/images/avatars/14.png'
};

// const roleColors = {
//   admin: 'error',
//   editor: 'info',
//   author: 'warning',
//   maintainer: 'success',
//   subscriber: 'primary'
// };

// const statusColors = {
//   active: 'success',
//   pending: 'warning',
//   inactive: 'secondary'
// }

// // ** Styled <sup> component
// const Sup = styled('sup')(({ theme }) => ({
//   top: 0,
//   left: -10,
//   position: 'absolute',
//   color: theme.palette.primary.main
// }))

// // ** Styled <sub> component
// const Sub = styled('sub')(({ theme }) => ({
//   alignSelf: 'flex-end',
//   color: theme.palette.text.disabled,
//   fontSize: theme.typography.body1.fontSize
// }))

const UserViewLeft = () => {
  // // ** States
  // const [openEdit, setOpenEdit] = useState(false)
  // const [openPlans, setOpenPlans] = useState(false)
  // const [suspendDialogOpen, setSuspendDialogOpen] = useState(false)
  // const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

  // // Handle Edit dialog
  // const handleEditClickOpen = () => setOpenEdit(true)
  // const handleEditClose = () => setOpenEdit(false)

  // // Handle Upgrade Plan dialog
  // const handlePlansClickOpen = () => setOpenPlans(true)
  // const handlePlansClose = () => setOpenPlans(false)

  // // Status Color
  // const statusColors = {
  //   active: "success",
  //   pending: "warning",
  //   inactive: "secondary",
  // };
  // // Group Color
  // const groupColors = {
  //   user1: "warning",
  //   user2: "success",
  //   user3: "secondary",
  // };

  // const token = localStorage.getItem("token");
  // const [role, setRole] = useState([]);
  // const getAllRoleGroup = async () => {
  //   try {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/role/show`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
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

  if (data) {
    return (
    
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {data.avatar ? (
                <CustomAvatar src={data.avatar} variant="rounded" alt={data.fullName} sx={{ width: 100, height: 100, mb: 4 }} />
              ) : (
                <CustomAvatar
                  skin="light"
                  variant="rounded"
                  color={data.avatarColor}
                  sx={{ width: 100, height: 100, mb: 4, fontSize: '3rem' }}
                >
                  {getInitials(data.fullName)}
                </CustomAvatar>
              )}
              <Typography variant="h4" sx={{ mb: 3 }}>
                {data.username}
              </Typography>
              {/* <CustomChip
                rounded
                skin='light'
                size='small'
                label={data.role}
                color={roleColors[data.id]}
                sx={{ textTransform: 'capitalize', p: 2 }}
              /> */}
              <Chip color="primary" variant="outlined" label={data.role} sx={{textTransform: 'capitalize', borderRadius: 1 }} />
            </CardContent>

            {/* <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2.5, width: 38, height: 38 }}>
                    <Icon fontSize='1.75rem' icon='tabler:checkbox' />
                  </CustomAvatar>
                  <div>
                    <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>1.23k</Typography>
                    <Typography variant='body2'>Task Done</Typography>
                  </div>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2.5, width: 38, height: 38 }}>
                    <Icon fontSize='1.75rem' icon='tabler:briefcase' />
                  </CustomAvatar>
                  <div>
                    <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>568</Typography>
                    <Typography variant='body2'>Project Done</Typography>
                  </div>
                </Box>
              </Box>
            </CardContent> */}

            <Divider sx={{ my: '0 !important', mx: 6 }} style={{ backgroundColor: 'red' }} />

            <CardContent>
              <Typography variant="body2" sx={{ fontWeight: 1000, color: 'text.disabled', textTransform: 'uppercase' }}>
                Details
              </Typography>
              <Box sx={{ pt: 4, mr: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                ></Box>
                <Box>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <Typography sx={{ mr: 6, fontWeight: 500, color: 'text.secondary' }}>Name:</Typography>
                    <Typography sx={{ mr: 3, color: 'text.secondary' }}>{data.fullName}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <Typography sx={{ mr: 6, fontWeight: 500, color: 'text.secondary' }}>Group:</Typography>
                    {/* <CustomChip
                      rounded
                      skin="light"
                      size="small"
                      label={data.id}
                      sx={{
                        textTransform: 'capitalize',
                        color: 'white',
                        p: 2
                      }}
                    /> */}
                      <Chip  color="primary" variant="outlined" skin="light"
                      size="small" label={data.id}  sx={{borderRadius:1}}/>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <Typography sx={{ mr: 1, fontWeight: 500, color: 'text.secondary' }}>Designation:</Typography>
                    <Chip
                      // rounded
                      color="primary"
                      variant="outlined"
                      skin="light"
                      size="small"
                      label={data.designation}
                      sx={{
                        textTransform: 'capitalize',
                        // p: 2
                      }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <Typography sx={{ mr: 7, fontWeight: 500, color: 'text.secondary' }}>Email:</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{data.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <Typography sx={{ mr: 6, fontWeight: 500, color: 'text.secondary' }}>Status:</Typography>
                    <Chip
                      rounded
                      color='primary'
                      variant="outlined"
                      skin="light"
                      size="small"
                      label={data.is_active === 'yes' ? 'Active' : 'InActive'}
                      sx={{
                        textTransform: 'capitalize'
                      }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <Typography sx={{ mr: 1, fontWeight: 500, color: 'text.secondary' }}>Phone Number:</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>+91 {data.contact}</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
    
    );
  } else {
    return null;
  }
};

export default UserViewLeft;
