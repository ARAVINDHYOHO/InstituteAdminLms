// Mui Meterial imports
import { Card, Grid, Typography, Box, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
// Mui Lab Imports
import TabContext from '@mui/lab/TabContext';
// import { TabList } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// Mui Icons Meterial Imports
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GetAppIcon from '@mui/icons-material/GetApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// React Import
import React, { useState } from 'react';
import Faq from '../../profileManagement/faqs';
import DummyData from '../../courseManagement/DummyData';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Icon from '../../../../@core/components/icon';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const CourseDetails = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [collapse] = useState(false);

  const [Project] = useState(DummyData.courseprojects);
  return (
    <>
      <Grid>
        {/* <Grid item lg={4} md={5} xs={12}>
          <Card sx={{ color: 'black', padding: 3 }}>
            <Typography variant="h3">Modul</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  1
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Introduction
                </Typography>
              </Box>
              <Typography>13:12</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  2
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Design? What is this?
                </Typography>
              </Box>
              <Typography>43:12</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  3
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  User Interface
                </Typography>
              </Box>
              <Typography>42:62</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  4
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Website or Mobiles?
                </Typography>
              </Box>
              <Typography>21:21</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  5
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Website partition
                </Typography>
              </Box>
              <Typography>14:55</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  6
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Landing Page{' '}
                </Typography>
              </Box>
              <Typography>12:02</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  7
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Illustration Type
                </Typography>
              </Box>
              <Typography>34:57</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  8
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  {' '}
                  Publish Portifolio
                </Typography>
              </Box>
              <Typography>01:24</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  height={30}
                  width={30}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: '1px',
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    borderRadius: 1
                  }}
                >
                  9
                </Box>
                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                  Post Credit Scene
                </Typography>
              </Box>
              <Typography>01:62</Typography>
            </Box>
          </Card>
        </Grid> */}

        <Grid>
          <Grid>
            <Grid>
              <Box sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img
                  src="https://www.vedantsri.net/wp-content/uploads/2022/11/Web-Designing-Course-Fees-Eligibility-Duration-Online-Certificate-5-1024x512.jpg.webp"
                  alt=""
                  style={{ width: '100%', height: 500 }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <Typography variant="h3">Creating Beautifull Landing Page in 1 Hour</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <AccessTimeIcon />
                  <GetAppIcon />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', marginTop: 3 }}>
                <Typography>Geo Vanni</Typography>
                <Divider orientation="vertical" variant="middle" flexItem color="black" />
                <Typography sx={{ marginLeft: 2 }}>Interface, Experience</Typography>
                <Divider orientation="vertical" variant="middle" flexItem color="black" />
                <Typography color="primary" sx={{ marginLeft: 2 }}>
                  + Follow Mentor
                </Typography>
              </Box>
            </Grid>

            <Grid sx={{ marginTop: 4 }}>
              <TabContext value={value} defaultValue={1}>
                <Box sx={{ maxWidth: { xs: 350, sm: 480, lg: '100%' }, borderBottom: 1, borderColor: 'divider', marginLeft: 3 }}>
                  <Tabs
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab label="CLASS DETAIL" value="1" />
                    <Tab label="ASSIGNMENTS" value="2" />
                    <Tab label="PROJECTS" value="3" />
                    <Tab label="EXAMS" value="4" />
                    <Tab label="FAQ" value="5" />
                  </Tabs>
                </Box>

                <TabPanel value="1">
                  <Grid item xs={12} sm={12}>
                    <Card sx={{ padding: 3 }}>
                      <Grid
                        style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'none', alignItems: 'center' }}
                      >
                        <Typography variant="h3">Modul</Typography>
                        <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}>Add</Button>
                      </Grid>
                      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          height={30}
                          width={30}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            border: '1px',
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            borderRadius: 1
                          }}
                        >
                          1
                        </Box>
                        <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                          Introduction
                        </Typography>
                      </Box>
                      <Typography>13:12</Typography>
                    </Box> */}
                      <Grid item xs={12} sm={12}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<Icon fontSize="1.875rem" icon={collapse ? 'tabler:chevron-up' : 'tabler:chevron-down'} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                  height={30}
                                  width={30}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  sx={{
                                    border: '1px',
                                    backgroundColor: theme.palette.secondary.main,
                                    color: 'white',
                                    borderRadius: 1
                                  }}
                                >
                                  1
                                </Box>
                                <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                                  Introduction
                                </Typography>

                                {/* <Typography sx={{ marginLeft: 4 }}>13:12</Typography> */}
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <IconButton>
                                  <Icon style={{ color: '#5f57be' }} icon="tabler:edit" />
                                </IconButton>

                                <IconButton>
                                  <Icon style={{ color: '#ea5455' }} icon="material-symbols:delete-outline" />
                                </IconButton>
                              </Box>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails sx={{ backgroundColor: theme.palette.primary.light }}>
                            Get started with the Full Stack Java Developer course and explore everything about the program.
                          </AccordionDetails>
                        </Accordion>
                      </Grid>

                      {/* <Grid item xs={12} sm={12}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Grid xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItem: 'center', textAlign: 'center' }}>
                                <Typography sx={{ marginTop: 0.5, marginLeft: 2 }}>Introduction</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItem: 'center' }}>
                                <IconButton>
                                  <Icon style={{ color: '#5f57be' }} icon="tabler:edit" />
                                </IconButton>
                                <IconButton>
                                  <Icon style={{ color: '#ea5455' }} icon="material-symbols:delete-outline" />
                                </IconButton>
                              </Box>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid xs={12} sm={12} sx={{ pl: 1 }}>
                              <Button variant="outlined">Add Article</Button>
                              <Button sx={{ ml: 2 }} variant="outlined">
                                Add Description
                              </Button>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid> */}

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            2
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Design? What is this?
                          </Typography>
                        </Box>
                        <Typography>43:12</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            3
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            User Interface
                          </Typography>
                        </Box>
                        <Typography>42:62</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            4
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Website or Mobiles?
                          </Typography>
                        </Box>
                        <Typography>21:21</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            5
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Website partition
                          </Typography>
                        </Box>
                        <Typography>14:55</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            6
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Landing Page{' '}
                          </Typography>
                        </Box>
                        <Typography>12:02</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            7
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Illustration Type
                          </Typography>
                        </Box>
                        <Typography>34:57</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            8
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            {' '}
                            Publish Portifolio
                          </Typography>
                        </Box>
                        <Typography>01:24</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            height={30}
                            width={30}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              border: '1px',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              borderRadius: 1
                            }}
                          >
                            9
                          </Box>
                          <Typography variant="h5" sx={{ marginLeft: 2, color: 'black' }}>
                            Post Credit Scene
                          </Typography>
                        </Box>
                        <Typography>01:62</Typography>
                      </Box>
                    </Card>
                  </Grid>
                </TabPanel>

                <TabPanel value="2">
                  <Card sx={{ padding: 3 }}>
                    <Typography variant="h5">1. Collecting Moodboard from Dribbble.com</Typography>
                    <Typography sx={{ marginTop: 2 }}>
                      Lets return design thinking.Over time designers have built up their own body of approaches to solving classes of
                      problems
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', lg: 'row' },
                        marginTop: 3
                      }}
                    >
                      <Box>
                        <Button sx={{ backgroundColor: theme.palette.grey[500], color: 'white', alignItems: 'center' }}>
                          <CalendarMonthIcon /> See Calendar
                        </Button>
                        <Button sx={{ backgroundColor: theme.palette.orange.dark, color: 'white', marginLeft: 2 }}>ViewDetails</Button>
                      </Box>
                      <Box sx={{ display: 'flex', marginTop: { xs: 2, lg: 0 } }}>
                        <Typography>32 Students Collected</Typography>
                        <Typography sx={{ color: theme.palette.orange.dark, marginLeft: 2 }}>1 Days Left</Typography>
                      </Box>
                    </Box>
                  </Card>

                  <Card sx={{ padding: 3, marginTop: 3 }}>
                    <Typography variant="h5">1. Collecting Moodboard from Dribbble.com</Typography>
                    <Typography sx={{ marginTop: 2 }}>
                      Lets return design thinking.Over time designers have built up their own body of approaches to solving classes of
                      problems
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 3,
                        flexDirection: { xs: 'column', lg: 'row' }
                      }}
                    >
                      <Box>
                        <Button sx={{ backgroundColor: theme.palette.grey[500], color: 'white' }}>
                          <CalendarMonthIcon /> See Calendar
                        </Button>
                        <Button sx={{ backgroundColor: theme.palette.orange.dark, color: 'white', marginLeft: 2 }}>ViewDetails</Button>
                      </Box>
                      <Box sx={{ display: 'flex', marginTop: { xs: 2, lg: 0 } }}>
                        <Typography>32 Students Collected</Typography>
                        <Typography sx={{ color: theme.palette.orange.dark, marginLeft: 2 }}>1 Days Left</Typography>
                      </Box>
                    </Box>
                  </Card>
                </TabPanel>

                <TabPanel value="3">
                  <Grid container spacing={3}>
                    {Project.map((item, index) => {
                      return (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                          <Card sx={{ marginTop: 3 }}>
                            <Box>
                              <Typography sx={{ padding: 2 }}>{item.project}</Typography>
                              <Typography variant="h4" sx={{ padding: 2 }}>
                                {item.projectname}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                backgroundColor: theme.palette.primary.light,
                                padding: 3,
                                marginTop: 1,
                                marginRight: 1,
                                marginLeft: 1,
                                marginBottom: 1
                              }}
                            >
                              <Typography>{item.Description}</Typography>
                            </Box>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
                <TabPanel value="5">
                  <Faq />
                </TabPanel>
              </TabContext>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseDetails;
