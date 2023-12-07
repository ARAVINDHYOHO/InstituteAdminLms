//MUI Import
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Skeleton,
} from "@mui/material";

// React Import
import { Fragment, useEffect, useState } from "react";

const Skeletoncard = () => {
  //Loader
  const [loading, setLoading] = useState(true);
  // const [dummyCard, setDummyCard] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid sx={{ mt: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
       
      >
        {dummyCard?.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{}}>
              <CardHeader
                avatar={
                  <>
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  </>
                }
                action={
                  loading ? null : (
                    <IconButton aria-label="settings"></IconButton>
                  )
                }
                title={
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={
                  <Skeleton animation="wave" height={10} width="40%" />
                }
                sx={{mb:2}}
              />

              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />

              <CardContent>
                <Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </Fragment>
              </CardContent>
            </Card>
          </Grid>
        ))}

  
      </Grid>
    </Grid>
  );
};

export default Skeletoncard;
