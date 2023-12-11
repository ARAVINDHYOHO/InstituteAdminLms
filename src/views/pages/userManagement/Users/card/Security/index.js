import React from 'react'
// ** React Imports
import { useState } from 'react'
// ** MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
//** Two Step Switch */ 
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
const SecurityCard = () => {
  return (
    <div>
         <Card >
          <FormGroup  >
            <CardContent sx={{ minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: "space-evenly" }}>             
              <Typography>Two Step Verification</Typography>
              <FormControlLabel control={<Switch defaultChecked color='success' />} />            
            </CardContent>
          </FormGroup>
        </Card>
    </div>
  )
}
export default SecurityCard