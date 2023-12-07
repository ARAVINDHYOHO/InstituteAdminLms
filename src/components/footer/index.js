import React from 'react'
import Grid from '@mui/material/Grid'
import {Typography}  from '@mui/material'

const Footer = () => {
  return (
    <>
    <hr/>
  
    <Grid container spacing={12} >
     
     
      <Grid item xs={12} lg={6}>
        <Typography>
        © Copyright XYZ and contributors 2023
        </Typography>
      </Grid>
     
      <Grid item xs={12}   lg={6} sx={{textAlign:"end"}}   >   
      <Typography>
        Social Media               
        </Typography>
      </Grid>

    </Grid>
    </>
    
  )
}

export default Footer