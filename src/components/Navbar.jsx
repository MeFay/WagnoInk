import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
  alpha,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/about", label: "About", icon: PersonIcon },
  { path: "/blog", label: "Blog", icon: ArticleIcon },
  { path: "/gallery", label: "Gallery", icon: PhotoLibraryIcon },
  { path: "/info", label: "Info", icon: InfoIcon },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "PT", label: "Português" },
  { code: "ES", label: "Español" },
];

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const nav = theme.navigation;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const hoverBg = alpha(theme.palette.secondary.main, 0.1);
  const activeBg = alpha(theme.palette.primary.main, 0.2);
  const containerBg = alpha(theme.palette.text.primary, 0.05);
  const dividerColor = alpha(theme.palette.primary.main, 0.3);

  const navItemBase = {
    display: "flex",
    alignItems: "center",
    gap: 0.8,
    px: 2,
    py: 1,
    borderRadius: nav.borderRadius,
    fontSize: nav.fontSize,
    color: "white",
    transition: "all 0.2s ease",
    cursor: "pointer",
  };

  const openWhatsApp = () => {
    const phone = "SEUNUMERO"; // replace with actual number
    const text = encodeURIComponent("Olá! Quero agendar uma tatuagem.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Top Navbar */}
      <Box
        component="nav"
        sx={{
          height: nav.height,
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backdropFilter: "blur(10px)",
          bgcolor: alpha(theme.palette.background.default, 0.95),
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              WAGNO TATTOO
            </Typography>

            {/* Desktop nav */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.5,
                p: 0.5,
                borderRadius: nav.borderRadius,
                bgcolor: containerBg,
              }}
            >
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                const showDividerAfter = item.path === "/" || item.path === "/info";

                return (
                  <React.Fragment key={item.path}>
                    <Box
                      component={Link}
                      to={item.path}
                      sx={{
                        ...navItemBase,
                        bgcolor: isActive ? activeBg : "transparent",
                        "&:hover": { bgcolor: hoverBg, color: theme.palette.secondary.main },
                        textDecoration: "none",
                        color:"white",
                      }}
                    >
                      <Icon sx={{ fontSize: "1rem" }} />
                      {item.label}
                    </Box>

                    {showDividerAfter && (
                      <Box
                        sx={{
                          width: "1px",
                          height: 20,
                          bgcolor: dividerColor,
                          mx: 0.5,
                        }}
                      />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Language */}
              <Box
                role="button"
                aria-haspopup="menu"
                aria-expanded={Boolean(languageAnchor)}
                tabIndex={0}
                onClick={(e) => setLanguageAnchor(e.currentTarget)}
                sx={{
                  ...navItemBase,
                  cursor: "pointer",
                  "&:hover": { bgcolor: hoverBg, color: theme.palette.secondary.main },
                }}
              >
                <LanguageIcon sx={{ fontSize: "1rem" }} />
                {currentLanguage}
              </Box>
            </Box>

            {/* CTA Booking */}
            <Box
              onClick={openWhatsApp}
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 1,
                bgcolor: theme.palette.secondary.main,
                px: 3,
                py: 1.2,
                borderRadius: nav.borderRadius,
                cursor: "pointer",
                fontSize: nav.fontSize,
                fontWeight: 600,
                transition: "all 0.2s ease",
                "&:hover": { bgcolor: alpha(theme.palette.secondary.main, 0.85) },
              }}
            >
              Book Now
              <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
            </Box>

            {/* Mobile button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { lg: "none" },
                width: nav.mobileMenuButtonSize,
                height: nav.mobileMenuButtonSize,
                bgcolor: "white",
                "&:hover": { opacity: 0.9 },
              }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Language menu */}
      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={() => setLanguageAnchor(null)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: theme.palette.background.elevated,
              border: `1px solid ${dividerColor}`,
              borderRadius: 2,
              mt: 1,
            },
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => {
              setCurrentLanguage(lang.code);
              setLanguageAnchor(null);
            }}
            sx={{
              fontSize: nav.fontSize,
              "&:hover": { bgcolor: hoverBg },
            }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer from right */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              maxWidth: 360,
              bgcolor: theme.palette.background.paper,
              color: "white",
              display: "flex",
              flexDirection: "column",
              p: 4,
            },
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" mb={6}>
          <Typography fontWeight={700} variant="h5">
            WAGNO TATTOO
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <List sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    bgcolor: isActive ? activeBg : "transparent",
                    "&:hover": { bgcolor: hoverBg },
                    borderRadius: nav.borderRadius,
                  }}
                >
                  <ListItemIcon>
                    <Icon sx={{ color: isActive ? theme.palette.secondary.main : "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          color: "white",
                          fontSize: nav.fontSize,
                          fontWeight: isActive ? 600 : 400,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* Mobile CTA */}
        <Box mt={4}>
          <ListItemButton
            onClick={openWhatsApp}
            sx={{
              bgcolor: theme.palette.secondary.main,
              "&:hover": { bgcolor: alpha(theme.palette.secondary.main, 0.85) },
              borderRadius: nav.borderRadius,
              justifyContent: "center",
              py: 1.5,
            }}
          >
            <ListItemText
              primary="Book Now"
              slotProps={{
                primary: { sx: { color: "white", fontWeight: 700, textAlign: "center" } },
              }}
            />
          </ListItemButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
