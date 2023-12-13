
// React import
import React, { useRef } from 'react';
import { Box, Typography, Card, Grid,Divider} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {

  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  

  return (
    <>
      <Box
        position="relative"
        display="inline-block"
        sx={{
          backgroundColor: '#1565C0',
          minHeight: '250px' // Set a minimum height for better responsiveness
        }}
      >
        {/* Image */}
        <img
          src="https://dreamslms.dreamstechnologies.com/html/assets/img/instructor/instructor-bg-banner.png"
          alt="profile"
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            borderRadius: '8px'
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="8px"
        >
          <Box sx={{ p: 0.5, borderRadius: '8px', backgroundColor: '#ffffff' }}>
            {/* <img
              src="https://wallpapercave.com/uwp/uwp3388054.png"
              alt="profile"
              style={{
                height: '80px',
                width: '80px',
                display: 'block',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            /> */}
          </Box>
          <Box sx={{ my: 1 }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" color="#ffffff">
                Introduction to TypeScript
              </Typography>

            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>

            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button variant="contained"  >
                  Resume
                </Button>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Button variant="outlined" style={{ color: "white" }} >
                  Start Over
                </Button>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',

          alignItems: 'center',

        }} >
        <Box>
          <img
            alt='ee'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

            style={{ width: 50, height: 50 }}
          />
        </Box>
        <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
      </Box>

      <Box style={{ marginTop: 15,display:"flex" }}>
        <Typography variant="h4">
          LEARNING PATHS
        </Typography>
      <Divider sx={{ borderStyle: "dashed",borderColor:"black", }} />
      </Box>
      
      <Grid container item xs={12} sm={12} spacing={3} sx={{padding:2,marginTop:1}}>
        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid lg={4} sx={{ flexDirection: { xs: "column", sm: "row", lg: "row" },padding:0.5 }}>
          <Card sx={{padding:1}}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',

              }} >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }} >
                <Box>
                  <img
                    alt='ee'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box
                  style={{
                    marginLeft: 5,
                  }}>
                  <Typography variant="h4" >
                    Angular Fundamentals
                  </Typography>
                  <Typography variant="h5" >
                    with Elijah Murray
                  </Typography>
                </Box>
              </Box>

              <Box >
                <Button variant="outlined"  >
                  Resume
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
      
      <Box style={{ marginTop: 15 }}>
        <Typography variant="h4">
        DEVELOPMENT COURSES
        </Typography>
      </Box>

      <Grid container item xs={12} sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
      <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
     </Grid>
         
     <Box style={{ marginTop: 15 }}>
        <Typography variant="h4">
        DESIGN COURSES
        </Typography>
      </Box>

      <Grid container item xs={12} sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
      <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            title="Some text you want to display"
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
       <Grid lg={3} sx={{padding:1}}>
      <Card>
      <img
            alt='ee'
            src='https://blog.talent500.co/wp-content/uploads/2022/05/AngularToolKit_Banner.png'
            style={{ height: 140,width:"100%" }}
            
          />
           <Box
          style={{
            marginLeft: 5,
          }}>
          <Typography variant="h4" >
            Angular Fundamentals
          </Typography>
          <Typography variant="h5" >
            with Elijah Murray
          </Typography>
        </Box>
        <Box style={{
          marginLeft: 5,
        }}>
          <Stack>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </Box>
        <Divider sx={{ borderStyle: "line",borderColor:"black",mt:1 }} />
        <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:6,
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="h6"sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="h6"  sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>
      </Card>
       </Grid>
     </Grid>



     <Box style={{ marginTop: 15 }}>
        <Typography variant="h4">
        ACHIEVEMENTS
        </Typography>
      </Box>

      
      <Grid sx={{ pl: 5, pr: 5, mt: 10, alignItems: 'center', justifyContent: 'center' }}>
      <Slider {...settings}>

      <div>
     <Grid container item xs={12}  sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
     <Card sx={{ width: '100%', margin: '0 8px' }}>
     <Box
        position="relative"
        display="inline-block"
        sx={{
          backgroundColor: '#1565C0',
          minHeight: '250px' // Set a minimum height for better responsiveness
        }}
      >
        {/* Image */}
        <img
          src="https://dreamslms.dreamstechnologies.com/html/assets/img/instructor/instructor-bg-banner.png"
          alt="profile"
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            borderRadius: '8px'
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="8px"
        >
          <Box sx={{ p: 0.5, borderRadius: '8px', backgroundColor: '#ffffff' }}>
         
          </Box>
          <Box sx={{ my: 1 }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" color="#ffffff">
                Introduction to TypeScript
              </Typography>

            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>

            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button variant="contained"  >
                  Resume
                </Button>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Button variant="outlined" style={{ color: "white" }} >
                  Start Over
                </Button>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
     </Card>
     </Grid>
     </div>

     <div>
     <Grid container item xs={12} sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
     <Card sx={{ width: '100%', margin: '0 8px' }}>
     <Box
        position="relative"
        display="inline-block"
        sx={{
          backgroundColor: '#1565C0',
          minHeight: '250px' // Set a minimum height for better responsiveness
        }}
      >
        {/* Image */}
        <img
          src="https://dreamslms.dreamstechnologies.com/html/assets/img/instructor/instructor-bg-banner.png"
          alt="profile"
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            borderRadius: '8px'
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="8px"
        >
          <Box sx={{ p: 0.5, borderRadius: '8px', backgroundColor: '#ffffff' }}>
         
          </Box>
          <Box sx={{ my: 1 }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" color="#ffffff">
                Introduction to TypeScript
              </Typography>

            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>

            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button variant="contained"  >
                  Resume
                </Button>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Button variant="outlined" style={{ color: "white" }} >
                  Start Over
                </Button>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
     </Card>
     </Grid>
     </div>

     <div>
     <Grid container item xs={12} sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
    
     <Card sx={{ width: '100%', margin: '0 8px' }}>
     <Box
        position="relative"
        display="inline-block"
        sx={{
          backgroundColor: '#1565C0',
          minHeight: '250px' // Set a minimum height for better responsiveness
        }}
      >
        {/* Image */}
        <img
          src="https://dreamslms.dreamstechnologies.com/html/assets/img/instructor/instructor-bg-banner.png"
          alt="profile"
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            borderRadius: '8px'
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="8px"
        >
          <Box sx={{ p: 0.5, borderRadius: '8px', backgroundColor: '#ffffff' }}>
         
          </Box>
          <Box sx={{ my: 1 }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" color="#ffffff">
                Introduction to TypeScript
              </Typography>

            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>

            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button variant="contained"  >
                  Resume
                </Button>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Button variant="outlined" style={{ color: "white" }} >
                  Start Over
                </Button>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
     </Card>
     
     </Grid>
     </div>

     <div>
     <Grid container item xs={12} sm={12} spacing={4} sx={{padding:2,marginTop:1}}>
     
     <Card sx={{ width: '100%', margin: '0 8px' }}>
     <Box
        position="relative"
        display="inline-block"
        sx={{
          backgroundColor: '#1565C0',
          minHeight: '250px' // Set a minimum height for better responsiveness
        }}
      >
        {/* Image */}
        <img
          src="https://dreamslms.dreamstechnologies.com/html/assets/img/instructor/instructor-bg-banner.png"
          alt="profile"
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            borderRadius: '8px'
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="8px"
        >
          <Box sx={{ p: 0.5, borderRadius: '8px', backgroundColor: '#ffffff' }}>
         
          </Box>
          <Box sx={{ my: 1 }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h2" color="#ffffff">
                Introduction to TypeScript
              </Typography>

            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AccessTimeIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  50 minutes left
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <PlayCircleFilledIcon />
                <Typography variant="body1" color="#ffffff" sx={{ ml: 0.5 }}>
                  12 lesson
                </Typography>
              </Box>

            </Box>

            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button variant="contained"  >
                  Resume
                </Button>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <Button variant="outlined" style={{ color: "white" }} >
                  Start Over
                </Button>
              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
     </Card>
  
     </Grid>
     
     </div>
  
     </Slider>

     <Button onClick={handleNextClick} variant="outlined">
        Next
      </Button>
     </Grid>
    </>
  );  
};

export default Courses;
