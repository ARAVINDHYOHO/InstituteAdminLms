// React import
// Mui Meterial imports
import { Box, Button, Grid, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const HomeCard = ({ CourseCards }) => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };
  return (
    <Grid>
      <Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Feature Courses</Typography>
          <Button variant="outlined" sx={{ borderRadius: 5 }}>
            View All
          </Button>
        </Box>
      </Grid>

      {/* <Grid>
        <Box SX={{maxWidth: { xs: 350, sm: 480,lg:"85%" },}}>
        <Slider {...settings}>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              marginTop: 5
            }}
          
          >
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.orange.dark,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 }
              }}
            >
              Graphic Design
            </Box>

            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Web Development
            </Box>

            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Digital Art
            </Box>

            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.grey[600],
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              SEO Marketing
            </Box>

            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.success.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Photography
            </Box>
          </Grid>
          </Slider>
        </Box>
      </Grid> */}

      <Grid sx={{ marginTop: 4 }}>
        <Slider {...settings}>
          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.orange.dark,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 0, lg: 2 }

              }}
            >
              Graphic Design
            </Box>
          </div>

          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Web Development
            </Box>
          </div>

          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Digital Art
            </Box>
          </div>

          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.grey[600],
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              SEO Marketing
            </Box>
          </div>

          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.success.main,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2 }
              }}
            >
              Photography
            </Box>
          </div>

          <div>
            <Box
              height={40}
              width={180}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: '1px',
                backgroundColor: theme.palette.orange.dark,
                color: 'white',
                borderRadius: 1,
                marginTop: { xs: 2, sm: 2, lg: 0 },
                marginLeft: { xs: 0, sm: 2, lg: 2 }
              }}
            >
              Graphic Design
            </Box>
          </div>
        </Slider>
      </Grid>

      <Grid>
        <Box>
          <Typography variant="h3" sx={{ marginTop: 7 }}>
            My Courses
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {CourseCards.map((item, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, maxHeight: 380, marginTop: 4 }}>
                  <Link to="CourseDetails">
                    <CardMedia sx={{ height: 200 }} image={item.image} title={item.coursename} />
                  </Link>

                  <CardContent>
                    <Typography variant="h5" color="black">
                      {item.Description}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                      <Box sx={{ display: 'flex' }}>
                        <Typography>Students :</Typography>
                        <Typography variant="h4" sx={{ marginLeft: 1 }}>
                          {item.Students}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex' }}>
                        <Typography>Teachers :</Typography>
                        <Typography variant="h4" sx={{ marginLeft: 1 }}>
                          {item.Teachers}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon />
                      <Typography sx={{ marginTop: 0.5, marginLeft: 0.5 }}> {item.time}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AttachmentIcon />
                      <Typography sx={{ marginTop: 0.5, marginLeft: 0.5 }}> {item.followers}</Typography>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeCard;
