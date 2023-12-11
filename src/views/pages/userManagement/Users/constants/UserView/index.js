// ** MUI Imports
import Grid from '@mui/material/Grid';

// // ** Demo Components Imports
// import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
// import UserViewRight from 'src/views/apps/user/view/UserViewRight'
import ActivityTimeline from '../../constants/Activity Timeline';
import UserLeftCard from '../../card/UserLeftCard';
import UserRightCard from '../../card/UserRightCard';
// import axios from 'axios'
// import { useEffect,useState } from 'react'

const UserView = () => {

//  const token = localStorage.getItem("token")
//   const [user, setUser] = useState([]);

//   //Axios Get All
//   useEffect(() => {
//     getUserData();
//   }, [token, id]);

//   //  console.log("token", token)
//   const getUserData = async () => {
//     try {
//       let data = {
//         id: id,
//       };

//       let config = {
//         method: "get",
//         maxBodyLength: Infinity,
//         url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/platform-user/list-by-id`,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         params: data,
//       };

//       axios
//         .request(config)
//         .then((response) => {
//           console.log(JSON.stringify(response.data.data));
//           setUser(response.data.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       //  console.log(users)
//     } catch (error) {
//       console.log("error", error);
//     }
//   };


  return (
    
    <Grid container spacing={2}> 
      <Grid item xs={12} md={5} lg={4}>
        <UserLeftCard />
      </Grid>      
      <Grid item xs={12} md={7} lg={8}>
        <UserRightCard />
        </Grid>

        <Grid item xs={12} lg={12}>
      <ActivityTimeline/>
      </Grid>
      
    </Grid>                               
  )
}

export default UserView
