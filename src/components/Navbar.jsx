import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { typeScale } from "../styles/theme";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArticleIcon from "@mui/icons-material/Article";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomButton from "../components/UI/Button";
import {
  Box,
  Typography,
  useTheme,
  alpha,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/about", label: "About", icon: PersonIcon },
  { path: "/gallery", label: "Gallery", icon: CollectionsIcon },
  { path: "/blog", label: "Blog", icon: ArticleIcon },
  { path: "/info", label: "Info", icon: InfoOutlinedIcon },
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

  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverBg = alpha(theme.palette.secondary.main, 0.1);
  const activeBg = alpha(theme.palette.primary.main, 0.2);
  const containerBg = alpha(theme.palette.text.primary, 0.05);
  const dividerColor = alpha(theme.palette.accent.main, 0.45);

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

  const mobileIconBtn = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    borderRadius: nav.borderRadius,
    transition: "all 0.2s ease",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <>
      {/* ── Fixed top navbar ──────────────────────────────────────── */}
      <Box
        component="nav"
        sx={{
          height: nav.height,
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          backgroundColor: "transparent",
          transition: "backdrop-filter 0.4s ease",
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" maxWidth={1400} mx="auto">
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: 800,
              fontSize: { xs: 15, md: 16 },
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Wagno Ink
          </Typography>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.5,
              p: 0.5,
              borderRadius: nav.borderRadius,
              bgcolor: scrolled ? containerBg : "transparent",
            }}
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = location.pathname === item.path;
              const showDividerAfter = i === 0 || i === NAV_ITEMS.length - 1;
              const Icon = item.icon;
              return (
                <React.Fragment key={item.path}>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      ...navItemBase,
                      bgcolor: isActive ? activeBg : "transparent",
                      "&:hover": { bgcolor: hoverBg },
                    }}
                  >
                    <Icon sx={{ fontSize: "1rem", flexShrink: 0 }} />
                    {item.label}
                  </Box>
                  {showDividerAfter && (
                    <Box sx={{ width: "1px", height: 20, bgcolor: dividerColor }} />
                  )}
                </React.Fragment>
              );
            })}

            {/* Language selector */}
            <Box
              role="button"
              tabIndex={0}
              onClick={(e) => setLanguageAnchor(e.currentTarget)}
              sx={{
                ...navItemBase,
                width: 72,
                justifyContent: "center",
                "&:hover": { bgcolor: hoverBg },
                cursor: "pointer",
              }}
            >
              <LanguageIcon sx={{ fontSize: "1rem", flexShrink: 0 }} />
              <Box component="span" sx={{ width: 24, textAlign: "center" }}>
                {currentLanguage}
              </Box>
            </Box>
          </Box>

          {/* Desktop Book Now */}
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <CustomButton
              size="medium"
              href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </CustomButton>
          </Box>
        </Box>
      </Box>

      {/* ── Language menu ────────────────────────────────────────── */}
      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={() => setLanguageAnchor(null)}
        disableScrollLock
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        slotProps={{
          paper: {
            sx: {
              mb: 1,
              bgcolor: "#111111",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              borderRadius: 2,
              boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
              minWidth: 140,
              overflow: "hidden",
            },
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => { setCurrentLanguage(lang.code); setLanguageAnchor(null); }}
            selected={currentLanguage === lang.code}
            sx={{
              fontSize: typeScale.caption,
              fontWeight: currentLanguage === lang.code ? 700 : 400,
              color: currentLanguage === lang.code ? "primary.main" : "text.secondary",
              letterSpacing: 1,
              py: 1.5,
              px: 2.5,
              transition: "all 0.2s ease",
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.1), color: "white" },
              "&.Mui-selected": { bgcolor: alpha(theme.palette.primary.main, 0.08) },
              "&.Mui-selected:hover": { bgcolor: alpha(theme.palette.primary.main, 0.15) },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 2 }}>
              {lang.label}
              <Typography component="span" sx={{ fontSize: typeScale.label, letterSpacing: 2, color: "text.disabled" }}>
                {lang.code}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* ── Mobile bottom pill nav ────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          pb: "20px",
          zIndex: 1100,
          pointerEvents: "none",
        }}
      >
        <MotionBox
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          sx={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            px: 1,
            py: 1,
            borderRadius: nav.borderRadius,
            bgcolor: alpha(theme.palette.text.primary, 0.05),
            backdropFilter: "blur(16px)",
            border: `1px solid ${alpha("#ffffff", 0.07)}`,
            boxShadow: "0 8px 40px rgba(0,0,0,0.7)",
          }}
        >
          {NAV_ITEMS.map((item, i) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <React.Fragment key={item.path}>
                <Tooltip title={item.label} placement="top" arrow>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      ...mobileIconBtn,
                      color: "white",
                      bgcolor: isActive ? activeBg : "transparent",
                      "&:hover": { bgcolor: isActive ? activeBg : hoverBg },
                    }}
                  >
                    <Icon sx={{ fontSize: 19 }} />
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          bgcolor: theme.palette.primary.main,
                        }}
                      />
                    )}
                  </Box>
                </Tooltip>
                {(i === 0 || i === NAV_ITEMS.length - 1) && (
                  <Box sx={{ width: "1px", height: 20, bgcolor: dividerColor, mx: 0.5 }} />
                )}
              </React.Fragment>
            );
          })}

          {/* Language icon */}
          <Tooltip title={currentLanguage} placement="top" arrow>
            <Box
              role="button"
              tabIndex={0}
              onClick={(e) => setLanguageAnchor(e.currentTarget)}
              sx={{
                ...mobileIconBtn,
                color: "white",
                "&:hover": { bgcolor: hoverBg },
              }}
            >
              <LanguageIcon sx={{ fontSize: 19 }} />
            </Box>
          </Tooltip>
        </MotionBox>
      </Box>
    </>
  );
};

export default Navbar;
