import React from "react";
import Logo from "../logo";
import Box from "@mui/material/Box";
// import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: 600,
        }}
      >
        <Box sx={{ alignItems: "center", justifyContent: "center" }}>
          <div>
            <Logo sx={{ width: 60, height: 60 }} />
          </div>
          <div>
            <CircularProgress sx={{ ml: 1 }} />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Loader;
