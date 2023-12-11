import React from 'react'
// ** React Imports
import { useState } from 'react'
// ** MUI Imports
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
// ** Custom Component Import
import TextField from '@mui/material/TextField';
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Box from "@mui/material/Box";
import { Typography } from '@mui/material'

// Styled component for the form
const Form = styled('form')(({ theme }) => ({
    maxWidth: 400,
    padding: theme.spacing(12),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`
  }))
const PasswordManagement = ( {setNewPasswordPermission}) => {
    // ** State
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // Handle New Password
  const handleNewPassword = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })
  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }
  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }
  return (
    <div>
        <Card >
          
        <Typography sx={{display:"flex",justifyContent:"center",fontSize:20,fontWeight:"bold" ,marginTop:10  }}>
          Password Management
          </Typography>          
          <CardContent   sx={{ minHeight: 500, display: 'flex', alignItems: 'center',
           justifyContent: 'center','& .MuiCardContent-root':{pl:0} 
           }}>
            <Form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={5}>
                <TextField
                  fullWidth
                  autoFocus
                  label='New Password'
                  placeholder='············'
                  value={values.newPassword}
                  sx={{ display: 'flex', mb: 4 }}
                  id='auth-reset-password-new-password'
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
                <TextField
                  fullWidth
                  label='Confirm Password'
                  placeholder='············'
                  sx={{ display: 'flex', mb: 4 }}
                  value={values.confirmNewPassword}
                  id='auth-reset-password-confirm-password'
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

                {setNewPasswordPermission && (
                   <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                    Set New Password
                  </Button> 
                )}
                             
              </Grid>
            </Form>
          </CardContent>
        </Card>
    </div>
  )
}
export default PasswordManagement