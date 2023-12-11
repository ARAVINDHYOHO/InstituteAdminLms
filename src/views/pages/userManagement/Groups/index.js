// Mui Imports
import {
  Grid,
  Stack,
  Typography,
  Box,
  Pagination,
  Container,
  Card,
  CardContent,
  Chip,
  AvatarGroup,
  Avatar,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

//React Imports
import React, { useState, useEffect } from "react";

//React Helmet Imports
// import { Helmet } from "react-helmet-async";

// Custom Component Imports
import Header from "components/Header";
import Delete from "./Component/Modal/Delete";

// Mui styles Imports
// import { makeStyles } from "@mui/styles";

// Axios Import
import axios from "axios";

// React Router Link Import
import { Link } from "react-router-dom";

// React Feather Icon Imports
import { Users } from "react-feather";
import { PlusCircle } from "react-feather/dist";
// import GroupSkeleton from "../../../../components/skeleton/GroupSkeleton"
import { DummyData } from "./Component/DummyData";

const GroupManagement = () => {
  // ** Model State
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [selectedId, setSelectedID] = useState("");
  // const [groups, setGroups] = useState();

  const [searchQuery, setSearchQuery] = useState("");

  // ** Loading State
  // const [shimmerLoading, setShimmerLoading] = useState(true);

  // ** Open Add Model Function
  const handleOpenDeleteModel = () => setOpenDeleteModel(true);
  // ** Close Add Model Function
  const handleCloseAddModel = () => setOpenAddModel(false);
  // ** Close Delete Model Function
  const handleDeleteCloseModel = () => setOpenDeleteModel(false);
  
  //Axios Get All Groups Function
  const getAllGroups = async () => {
    setShimmerLoading(true);
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/role/show-all`,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      };
      await axios
        .request(config)
        .then((response) => {
          setGroups(response.data.data);
          console.error("Groups :", response.data);
          setShimmerLoading(false);
        })
        .catch((error) => {
          setShimmerLoading(false);
          console.error("Groups Error:", error);
        });
    } catch (error) {
      console.log("error", error);
      setShimmerLoading(false);
    }
    setShimmerLoading(false);
  };

  const [filteredCards, setFilteredCards] = useState([]);

  // Handle Search Function
  const handleSearch = (query) => {
    const filtered = DummyData.cardData.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
    setSearchQuery(query);
  };

  // Render Group Cards
  const renderCards = () => {
    const cardsToRender = filteredCards.length > 0 ? filteredCards : DummyData.cardData;
    return cardsToRender.map((item) => (
      <Grid item xs={12} sm={6} lg={4} key={item.id}>
        <Card sx={{ border: "1px solid #088f8f87" ,height: 200,display:"flex"}}>
          <CardContent>
          <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    }}
  >

            <Box
              sx={{
                // mb: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                <Chip
                  variant="outlined"
                  color={"primary"}
                  icon={<Users size={18} />}
                  label={` ${item?.totalUsers.length} users`}
                  sx={{ alignItems: "center", p: 1 }}
                ></Chip>
              </Typography>
              <AvatarGroup
                max={4}
                className="pull-up"
                sx={{
                  "& .MuiAvatar-root": {
                    fontSize: (theme) => theme.typography.body2.fontSize,
                  },
                }}
              >
                {/* {item?.map((img, index) => (
                  <Avatar
                    key={index}
                    alt={item.title}
                    src={"/images/avatars/${img}"}
                  />
                ))} */}

{Array.isArray(item) && item.map((img, index) => (
  <Avatar
    key={index}
    alt={item.title}
    src={`/images/avatars/${img}`} 
  />
))}

              </AvatarGroup>
            </Box>
            <Box>
              <Typography variant="h3" sx={{paddingLeft:1}}>{item?.title}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  <TextField
                    sx={{
                      // m: 1,
                      minWidth: 120,
                      "&  .MuiInputBase-input": {
                        padding: "12px 14px",
                      },

                      borderRadius: 1,
                    }}
                    select
                    // className={
                    //   item?.role?.is_active === "yes"
                    //     ? classes.greenBackground
                    //     : classes.redBackground
                    // }
                    id="select-without-label"
                    value={item?.role?.is_active}
                    onChange={async (e) => {
                      try {
                        const response = await axios.put(
                          `${process.env.REACT_APP_PUBLIC_API_URL}api/platform/admin/user-management/role/status`,
                          {
                            id: item?.role?.id,
                            is_active: e.target.value,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        console.log("Group Status Response : ", response.data);
                        getAllGroups();
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="yes">Active</MenuItem>
                    <MenuItem value="no">InActive</MenuItem>
                  </TextField>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to={"view-group"}>
                  <IconButton
                    sx={{
                      color: "primary.main",
                      textDecoration: "none",
                      alignItems: "end",
                      display: "flex",
                    }}
                  >
                    <svg
                      style={{ color: "#5F57BE" }}
                      size="small"
                      // variant="contained"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                      />
                    </svg>
                  </IconButton>
                </Link>

                <Link to={"edit-group"}>
                  <IconButton>
                    <svg
                      style={{ color: "#5F57BE" }}
                      // variant="contained"
                      // onClick={handleClicOpenEdit}
                      size="small"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                      >
                        <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
                      </g>
                    </svg>
                  </IconButton>
                </Link>

                <IconButton
                  onClick={() => {
                    setSelectedID(item?.id);
                    handleOpenDeleteModel();
                  }}
                >
                  <svg
                    style={{ color: "#ea5455" }}
                    // variant="contained"
                    size="small"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                    />
                  </svg>
                </IconButton>
              </Box>
            </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  // Style Overrides
  // const useStyles = makeStyles(() => ({
  //   greenBackground: {
  //     border: "2px solid #00C853",
  //     "&  .MuiInputBase-input": {
  //       color: "lightgreen",
  //       // color: "white",
  //     },
  //   },
  //   redBackground: {
  //     border: "2px solid #FF1744",
  //     "&  .MuiInputBase-input": {
  //       color: "red",

  //       // color: "white",
  //     },
  //   },
  // }));

  //Get Token from Local Storage
  const token = localStorage.getItem("token");

  // const classes = useStyles();

  // Parent to Child State
  const handleDataFromChild = (data) => {
    setShimmerLoading(data);
  };

  useEffect(() => {
    getAllGroups();
  }, []);
  // Handle Search Function
  // const handleSearch = (query) => {
  //   const filtered = DummyData.cardData.filter((card) =>
  //     card.title.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredCards(filtered);
  //   setSearchQuery(query);
  // };

  // Logs
  console.log("Delete Selected role ID : ", selectedId);

  return (
    <Box>
      {/* <Helmet>
        <title> User: UserManagement | Yoho Marketplace </title>
      </Helmet> */}

      <Container sx={{}}>
        <Header
          title="Groups"
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          // handleFilter={"hhh"}
        />

        <>
          {/* {shimmerLoading ? (
            <GroupSkeleton />
          ) : ( */}
            <Box>
              <Grid
                container
                spacing={2}
                className="match-height"
                sx={{ marginTop: 0 }}
              >
                {DummyData?.cardData.length === 0 && (
                  <Grid item xs={12} sm={12} lg={12}>
                    <Link
                      to={"create-group"}
                      sx={{ textDecoration: "none !important" }}
                      className="addNewGroup"
                    >
                      <Card
                        sx={{
                          cursor: "pointer",
                          height: "100%",
                          borderRadius: 5,
                          border: "1px dashed  #088f8f",
                          backgroundColor: "#d0f2ff",
                          minHeight: "50vh",
                        }}
                        openAdd={openAddModel}
                        handleAddClose={handleCloseAddModel}
                      >
                        <Grid
                          container
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Grid item xs={7}>
                            <CardContent
                              sx={{
                                pl: 0,
                                height: "100%",
                                justifyContent: "center",
                                //  backgroundColor:"red",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              ></Box>

                              <Box textAlign={"center"}>
                                <PlusCircle
                                  size={50}
                                  strokeWidth={1}
                                  color="#088F8F"
                                />

                                <Typography sx={{ color: "text.secondary" }}>
                                  Add New Group
                                </Typography>
                              </Box>
                            </CardContent>
                          </Grid>
                        </Grid>
                      </Card>
                    </Link>
                  </Grid>
                )}
                {DummyData?.cardData.length > 0 && (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Link
                      to={"create-group"}
                      sx={{ textDecoration: "none !important" }}
                      className="addNewGroup"
                    >
                      <Card
                        sx={{
                          height: 200,
                          cursor: "pointer",

                          borderRadius: 5,
                          border: "1px dashed  #088f8f",
                          backgroundColor: "#d0f2ff",
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Grid item xs={7}>
                            <CardContent
                              sx={{
                                height: "100%",
                                justifyContent: "center",
                                //  backgroundColor:"red",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              ></Box>

                              <Box
                                textAlign={"center"}
                                sx={{
                                  alignItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                <PlusCircle
                                  size={50}
                                  strokeWidth={1}
                                  color="#088F8F"
                                />

                                <Typography sx={{ color: "text.secondary" }}>
                                  Add New Group
                                </Typography>
                              </Box>
                            </CardContent>
                          </Grid>
                        </Grid>
                      </Card>
                    </Link>
                  </Grid>
                )}
                {renderCards()}
              </Grid>

              {/* Delete */}
              <Delete
                handleClickOpenDelete={handleOpenDeleteModel}
                openDelete={openDeleteModel}
                handleDeleteClose={handleDeleteCloseModel}
                id={selectedId}
                loading={handleDataFromChild}
              />
            </Box>
          {/* )} */}
        </>
        {/* Pagination */}
        <Stack sx={{ marginTop: 5 }}>
          <Typography style={{ display: "flex", justifyContent: "end" }}>
            <Pagination count={10} shape="rounded" color="primary" />
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default GroupManagement;
