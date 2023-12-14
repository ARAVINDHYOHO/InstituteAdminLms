import { Box, Grid, Typography } from '@mui/material'
// import React from 'reect'
import Slider from "react-slick";
import React from 'react'
const ModuleVideos = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000

  }

  return (
   
    <Grid>

      <div>
       
          
        <Slider {...settings}>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 ",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',display:"flex"}} >
              <Typography  >Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgoundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:181,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
          <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>  <div>
            <Box sx={{width:180,height:45,border:"0.5 orange",backgroundColor:"red",color:"white",borderRadius:2,textAlign:"center",alignItems: 'center',justifyContent: 'center',}} >
              <Typography>Graphic Design</Typography>
            </Box>
          </div>
        </Slider>
         
      </div>
   
    </Grid>
  )
}

export default ModuleVideos
