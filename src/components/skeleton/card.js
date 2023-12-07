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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Grid
        item
        xs={6}
        md={12}
        lg={4}
        sx={{ display: "flex", gap: 1, flexDirection: "row" }}
      >
        <Card sx={{ width: 300, m: 2 }}>
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
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
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

        <Card sx={{ width: 300, m: 2 }}>
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
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
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

        <Card sx={{ width: 300, m: 2 }}>
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
              loading ? null : <IconButton aria-label="settings"></IconButton>
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
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
    </div>
  );
};

export default Skeletoncard;
