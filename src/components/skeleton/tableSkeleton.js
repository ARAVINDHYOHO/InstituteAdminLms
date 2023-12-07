import React from 'react'
import Skeleton from "@mui/material/Skeleton";
import { useEffect , useState } from 'react';


const Skeletonstable = () => {


   // Added loading state

   const [setLoading] = useState(true);
  //  const [media, setMedia] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
      setLoading(false);
     }, 2000);
     return () => clearTimeout(timer);
   }, []);

   

  return (
    <div>
      <>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />

          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={40}
            animation="wave"
            sx={{ marginBottom: 2 }}
          />
        </>
    </div>
  )
}

export default Skeletonstable
