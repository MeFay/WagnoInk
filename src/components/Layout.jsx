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

      {/* Main content with glow background */}
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
            background: `
              radial-gradient(
                ellipse 1400px 900px at 50% 30vh,
                rgba(198,40,40,0.35) 0%,
                rgba(198,40,40,0.20) 20%,
                rgba(198,40,40,0.10) 40%,
                transparent 65%
              )
            `,
            zIndex: 0,
            pointerEvents: "none",
          },

          // Subtle dot pattern overlay
          "&::after": {
            content: '""',
            position: "fixed",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        {/* Content wrapper */}
        <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;