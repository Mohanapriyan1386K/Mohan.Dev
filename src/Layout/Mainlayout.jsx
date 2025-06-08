import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material"; // or wherever you're importing Box from
import Footer from "./Footer";

function Maninlayout() {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Maninlayout;
