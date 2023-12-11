// // ** React Imports
// import { useState, useEffect } from 'react'

// // ** Next Import
// // import { useRouter } from 'next/router'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import TabPanel from '@mui/lab/TabPanel'
// import TabContext from '@mui/lab/TabContext'
// import { styled } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'
// import MuiTab from '@mui/material/Tab'
// import MuiTabList from '@mui/lab/TabList'
// import CircularProgress from '@mui/material/CircularProgress'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // // ** Demo Components Imports
// // import UserViewBilling from 'src/views/apps/user/view/UserViewBilling'
// // import UserViewAccount from 'src/views/apps/user/view/UserViewAccount'
// // import UserViewSecurity from 'src/views/apps/user/view/UserViewSecurity'
// // import UserViewConnection from 'src/views/apps/user/view/UserViewConnection'
// // import UserViewNotification from 'src/views/apps/user/view/UserViewNotification'


// import UserViewBilling from '../../UserViewBilling'
// import UserViewAccount from '../../UserViewAccount'
// // import UserViewBilling from '../../UserViewBilling'
// import UserViewSecurity from '../../UserViewSecurity'
// import UserViewNotification from '../../UserViewNotification'
// import UserViewConnection from '../../UserViewConnection'

// // ** Styled Tab component
// const Tab = styled(MuiTab)(({ theme }) => ({
//   flexDirection: 'row',
//   '& svg': {
//     marginBottom: '0 !important',
//     marginRight: theme.spacing(1.5)
//   }
// }))

// const TabList = styled(MuiTabList)(({ theme }) => ({
//   borderBottom: '0 !important',
//   '&, & .MuiTabs-scroller': {
//     boxSizing: 'content-box',
//     padding: theme.spacing(1.25, 1.25, 2),
//     margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
//   },
//   '& .MuiTabs-indicator': {
//     display: 'none'
//   },
//   '& .Mui-selected': {
//     boxShadow: theme.shadows[2],
//     backgroundColor: theme.palette.primary.main,
//     color: `${theme.palette.common.white} !important`
//   },
//   '& .MuiTab-root': {
//     lineHeight: 1,
//     borderRadius: theme.shape.borderRadius,
//     '&:hover': {
//       color: theme.palette.primary.main
//     }
//   }
// }))

// const UserViewRight = ({ tab, invoiceData }) => {
//   // ** State
//   const [activeTab, setActiveTab] = useState(tab)
//   const [isLoading, setIsLoading] = useState(true)

//   // ** Hooks
// //   const router = useRouter()

//   const handleChange = (event, value) => {
//     setIsLoading(true)
//     setActiveTab(value)
//     // router
//       .push({
//         pathname: `/apps/user/view/${value.toLowerCase()}`
//       })
//       .then(() => setIsLoading(false))
//   }
//   useEffect(() => {
//     if (tab && tab !== activeTab) {
//       setActiveTab(tab)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tab])
//   useEffect(() => {
//     if (invoiceData) {
//       setIsLoading(false)
//     }
//   }, [invoiceData])

//   return (
   
    
//     <>
//     </>
//   )
// }

// export default UserViewRight
 

// ** React Imports
import { useState } from 'react';

// ** Next Import
// import { Link } from "react-router-dom";

// ** MUI Imports
import Icon from "../../../../../../@core/components/icon"
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// ** Custom Component Import



// const data = [
//   {
//     color: 'info.main',
//     location: 'Switzerland',
//     device: 'HP Specter 360',
//     icon: 'tabler:brand-windows',
//     browser: 'Chrome on Windows',
//     recentActivity: '10, July 2022 20:07'
//   },
//   {
//     color: 'error.main',
//     device: 'iPhone 12x',
//     location: 'Australia',
//     browser: 'Chrome on iPhone',
//     icon: 'tabler:device-mobile',
//     recentActivity: '13, July 2022 10:10'
//   },
//   {
//     location: 'Dubai',
//     color: 'success.main',
//     device: 'OnePlus 9 Pro',
//     icon: 'tabler:brand-android',
//     browser: 'Chrome on Android',
//     recentActivity: '4, July 2022 15:15'
//   },
//   {
//     location: 'India',
//     device: 'Apple IMac',
//     color: 'secondary.main',
//     icon: 'tabler:brand-apple',
//     browser: 'Chrome on macOS',
//     recentActivity: '20, July 2022 21:01'
//   },
//   {
//     color: 'info.main',
//     location: 'Switzerland',
//     device: 'HP Specter 360',
//     browser: 'Chrome on Windows',
//     icon: 'tabler:brand-windows',
//     recentActivity: '15, July 2022 11:15'
//   },
//   {
//     location: 'Dubai',
//     color: 'success.main',
//     device: 'OnePlus 9 Pro',
//     icon: 'tabler:brand-android',
//     browser: 'Chrome on Android',
//     recentActivity: '14, July 2022 20:20'
//   }
// ]

const UserRightCard = () => {

  // ** States
  // const [defaultValues, setDefaultValues] = useState({ mobile: '+1(968) 819-2547' })
  // const [mobileNumber, setMobileNumber] = useState(defaultValues.mobile)
  // const [openEditMobileNumber, setOpenEditMobileNumber] = useState(false)

  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })

  // Handle Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  // Handle edit mobile number dialog
  // const handleEditMobileNumberClickOpen = () => setOpenEditMobileNumber(true)
  // const handleEditMobileNumberClose = () => setOpenEditMobileNumber(false)

  // Handle button click inside the dialog
  // const handleCancelClick = () => {
  //   setMobileNumber(defaultValues.mobile)
  //   handleEditMobileNumberClose()
  // }

  // const handleSubmitClick = () => {
  //   setDefaultValues({ ...defaultValues, mobile: mobileNumber })
  //   handleEditMobileNumberClose()
  // }

  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Change Password' />
          <CardContent>
            <Alert icon={false} severity='warning' sx={{ mb: 4 }}>
              <AlertTitle
                sx={{ fontWeight: 500, fontSize: '1.125rem', mb: theme => `${theme.spacing(2.5)} !important` }}
              >
                Ensure that these requirements are met
              </AlertTitle>
              Minimum 8 characters long, uppercase & symbol
            </Alert>

            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='New Password'
                    placeholder='············'
                    value={values.newPassword}
                    id='user-view-security-new-password'
                    onChange={handleNewPasswordChange('newPassword')}
                    type={values.showNewPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowNewPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon fontSize='1.25rem' icon={values.showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder='············'
                    label='Confirm New Password'
                    value={values.confirmNewPassword}
                    id='user-view-security-confirm-new-password'
                    type={values.showConfirmNewPassword ? 'text' : 'password'}
                    onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                            onClick={handleClickShowConfirmNewPassword}
                          >
                            <Icon
                              fontSize='1.25rem'
                              icon={values.showConfirmNewPassword ? 'tabler:eye' : 'tabler:eye-off'}
                            />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type='submit' variant='contained' style={{backgroundColor:"#5e35b1"}}>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Two-step verification'
            titleTypographyProps={{ }}
            subheader='Keep your account secure with authentication step.'
            sx={{
              '& .MuiCardHeader-subheader': {
                mt: 0,
                color: 'text.secondary',
                fontSize: theme => theme.typography.body1.fontSize
              }
            }}
          />
          <CardContent>
            <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>SMS</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ color: 'text.secondary' }}>mobileNumber</Typography>
              <div>
              <FormControlLabel
                    control={<Switch defaultChecked style={{color:"#5e35b1"}} />}
                  />
              </div>
            </Box>

            <Divider
              sx={{ mt: theme => `${theme.spacing(0.75)} !important`, mb: theme => `${theme.spacing(2)} !important` }}
            />

            <Typography sx={{ color: 'text.secondary', '& a': { color: 'primary.main', textDecoration: 'none' } }}>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.{' '}
              {/* <Link href='/' onClick={e => e.preventDefault()}>
                Learn more
              </Link> */}
              .
            </Typography>
          </CardContent>

         
        </Card>
      </Grid>

      
    </Grid>
  )
}

export default UserRightCard
  
