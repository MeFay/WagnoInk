import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import CustomButton from "../components/UI/Button";
import {
  Box,
  Typography,
  useTheme,
  alpha,
  Menu,
  MenuItem,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/blog", label: "Blog" },
  { path: "/info", label: "Info" },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "PT", label: "Português" },
  { code: "ES", label: "Español" },
];

// ── Hamburger icon — three lines that animate to X ──────────────────
const HamburgerIcon = ({ open }) => (
  <Box sx={{ width: 24, height: 16, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <Box
      component={motion.span}
      animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      sx={{ display: "block", height: "1.5px", bgcolor: "white", borderRadius: 1, transformOrigin: "center" }}
    />
    <Box
      component={motion.span}
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.2 }}
      sx={{ display: "block", height: "1.5px", bgcolor: "white", borderRadius: 1 }}
    />
    <Box
      component={motion.span}
      animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      sx={{ display: "block", height: "1.5px", bgcolor: "white", borderRadius: 1, transformOrigin: "center" }}
    />
  </Box>
);

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const nav = theme.navigation;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);


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
      {/* ── Fixed navbar bar ──────────────────────────────────────── */}
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
                    {item.label}
                  </Box>
                  {showDividerAfter && (
                    <Box sx={{ width: "1px", height: 20, bgcolor: dividerColor }} />
                  )}
                </React.Fragment>
              );
            })}

            {/* Language selector — fixed width prevents layout shift */}
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

          {/* Mobile hamburger — just an icon button, no background */}
          <Box
            component="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            sx={{
              display: { lg: "none" },
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 1,
              ml: 1,
              zIndex: 1200,
              position: "relative",
            }}
          >
            <HamburgerIcon open={mobileOpen} />
          </Box>
        </Box>
      </Box>

      {/* ── Language menu ────────────────────────────────────────── */}
      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={() => setLanguageAnchor(null)}
        disableScrollLock
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              bgcolor: "#111111",
              border: `1px solid rgba(198,40,40,0.2)`,
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
              fontSize: 13,
              fontWeight: currentLanguage === lang.code ? 700 : 400,
              color: currentLanguage === lang.code ? "primary.main" : "rgba(255,255,255,0.7)",
              letterSpacing: 1,
              py: 1.5,
              px: 2.5,
              transition: "all 0.2s ease",
              "&:hover": { bgcolor: "rgba(198,40,40,0.1)", color: "white" },
              "&.Mui-selected": { bgcolor: "rgba(198,40,40,0.08)" },
              "&.Mui-selected:hover": { bgcolor: "rgba(198,40,40,0.15)" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 2 }}>
              {lang.label}
              <Typography component="span" sx={{ fontSize: 11, letterSpacing: 2, color: "inherit", opacity: 0.6 }}>
                {lang.code}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* ── Mobile full-screen overlay menu ──────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionBox
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 1099,
              background: `radial-gradient(ellipse 800px 500px at 50% 0%, rgba(198,40,40,0.15) 0%, transparent 60%), #0a0a0a`,
              display: "flex",
              flexDirection: "column",
              px: 6,
              pt: `calc(${nav.height}px + 32px)`,
              pb: 6,
            }}
          >
            {/* Nav links — large editorial style */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {NAV_ITEMS.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <MotionBox
                    key={item.path}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Box
                      component={Link}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        py: 1.5,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        color: isActive ? "primary.main" : "white",
                        transition: "color 0.2s ease, padding-left 0.2s ease",
                        "&:hover": {
                          color: "primary.main",
                          pl: 1,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          fontWeight: 800,
                          letterSpacing: 1,
                          lineHeight: 1.2,
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </MotionBox>
                );
              })}
            </Box>

            {/* Bottom section */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {/* Language switcher */}
              <Box sx={{ display: "flex", gap: 2 }}>
                {LANGUAGES.map((lang) => (
                  <Box
                    key={lang.code}
                    component="button"
                    onClick={() => setCurrentLanguage(lang.code)}
                    sx={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      px: 0,
                      py: 0.5,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 2,
                      color: currentLanguage === lang.code ? "primary.main" : "rgba(255,255,255,0.4)",
                      fontFamily: "inherit",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {lang.code}
                  </Box>
                ))}
              </Box>

              {/* Book Now CTA */}
              <CustomButton
                size="large"
                component="a"
                href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                Book a Consultation <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </CustomButton>

              {/* Footer note */}
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}>
                Porto, Portugal · Est. 2016
              </Typography>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;