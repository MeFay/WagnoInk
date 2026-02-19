import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import CustomButton from "../components/UI/Button";
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

// --- Data ---
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

// --- NavLinkItem component (desktop or mobile) ---
const NavLinkItem = ({
  item,
  isMobile = false,
  navItemStyle,
  activeBg,
  hoverBg,
  location,
  onClick,
}) => {
  const Icon = item.icon;
  const isActive = location.pathname === item.path;

  const commonProps = {
    sx: isMobile
      ? {
          bgcolor: isActive ? activeBg : "transparent",
          "&:hover": { bgcolor: hoverBg },
          borderRadius: 2,
        }
      : {
          ...navItemStyle,
          bgcolor: isActive ? activeBg : "transparent",
          "&:hover": { bgcolor: hoverBg },
        },
    component: Link,
    to: item.path,
    onClick,
  };

  if (isMobile) {
    return (
      <ListItem disablePadding>
        <ListItemButton {...commonProps}>
          <ListItemIcon>
            <Icon sx={{ color: isActive ? "secondary.main" : "white" }} />
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            slotProps={{
              primary: {
                sx: { color: "white", fontWeight: isActive ? 600 : 400 },
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Box {...commonProps}>
      <Icon sx={{ fontSize: "1rem" }} />
      {item.label}
    </Box>
  );
};

// --- Navbar ---
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
    textDecoration: "none",
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
              WAGNO INK
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
                const showDividerAfter =
                  item.path === "/" || item.path === "/info"; // dividers
                return (
                  <React.Fragment key={item.path}>
                    <NavLinkItem
                      item={item}
                      navItemStyle={navItemBase}
                      activeBg={activeBg}
                      hoverBg={hoverBg}
                      location={location}
                    />
                    {showDividerAfter && (
                      <Box
                        sx={{
                          width: "1px",
                          height: 20,
                          bgcolor: dividerColor,
                        }}
                      />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Language selector */}
              <Box
                role="button"
                aria-haspopup="menu"
                aria-expanded={Boolean(languageAnchor)}
                tabIndex={0}
                onClick={(e) => setLanguageAnchor(e.currentTarget)}
                sx={{
                  ...navItemBase,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: hoverBg,
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <LanguageIcon sx={{ fontSize: "1rem" }} />
                {currentLanguage}
              </Box>
            </Box>

            {/* Desktop Book Now */}
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <CustomButton
                size="medium"
                component="a"
                href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </CustomButton>
            </Box>

            {/* Mobile menu button */}
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
            sx={{ fontSize: nav.fontSize, "&:hover": { bgcolor: hoverBg } }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
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
            WAGNO INK
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <List
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLinkItem
              key={item.path}
              item={item}
              isMobile
              activeBg={activeBg}
              hoverBg={hoverBg}
              location={location}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </List>

        {/* Mobile Book Now */}
        <Box mt={4}>
          <CustomButton
            size="medium"
            fullWidth
            component="a"
            href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </CustomButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
