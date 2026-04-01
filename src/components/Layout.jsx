import React from "react";
import { Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: "relative",
          pb: { xs: "96px", lg: 0 },
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `radial-gradient(ellipse 1200px 700px at 50% 35vh, ${alpha(theme.palette.primary.main, 0.35)} 0%, ${alpha(theme.palette.primary.main, 0.22)} 25%, ${alpha(theme.palette.primary.main, 0.10)} 50%, ${alpha(theme.palette.primary.main, 0.03)} 65%, transparent 75%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
            backgroundSize: "cover, 256px 256px",
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
