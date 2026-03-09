import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: "relative",

          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            background: `radial-gradient(ellipse 1200px 700px at 50% 20vh, rgba(198,40,40,0.22) 0%, transparent 70%)`,
            zIndex: 0,
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;