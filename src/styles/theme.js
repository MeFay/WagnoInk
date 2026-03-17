import { createTheme, alpha } from "@mui/material/styles";

const AMBER = "#c8923a";

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 768, md: 1024, lg: 1440, xl: 1820 },
  },

  spacing: 8,
  shape: { borderRadius: 12 },

  navigation: {
    height: 72,
    itemHeight: 44,
    fontSize: 14,
    borderRadius: 999,
    mobileMenuButtonSize: 52,
  },

  palette: {
    mode: "dark",

    primary: {
      main: "#c62828",
      light: "#e53935",
      dark: "#8e0000",
      contrastText: "#ffffff",
    },

    // Amber — third accent for awards, highlights, warmth
    accent: {
      main: AMBER,
      light: "#daa95a",
      dark: "#a0721f",
      contrastText: "#ffffff",
    },

    // WhatsApp green — kept for the specific social link only
    whatsapp: {
      main: "#25D366",
    },

    secondary: {
      main: "#aaaaaa",
      contrastText: "#ffffff",
    },

    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
      elevated: "#222222",
    },

    text: {
      primary: "#ffffff",
      secondary: "#e0e0e0",
      disabled: "#999999",
    },

    divider: alpha("#c62828", 0.25),
  },

  typography: {
    fontFamily: "Geist, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: "4rem",    fontWeight: 900, lineHeight: 1.1,  color: "#ffffff" },
    h2: { fontSize: "3rem",    fontWeight: 800, lineHeight: 1.15, color: "#ffffff" },
    h3: { fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.2,  color: "#ffffff" },
    h4: { fontWeight: 700, color: "#ffffff" },
    h5: { fontWeight: 700, color: "#ffffff" },
    h6: { fontWeight: 700, color: "#ffffff" },
    body1: { fontSize: "1rem",      lineHeight: 1.6 },
    body2: { fontSize: "0.875rem",  lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "#0a0a0a", color: "#ffffff" },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "10px 22px",
          transition: "all 0.2s ease",
          "&:hover": { backgroundColor: "transparent" },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: { "&:hover": { backgroundColor: alpha("#ffffff", 0.05) } },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: "#111111" },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&:hover": { backgroundColor: alpha(AMBER, 0.08) },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1a1a1a",
          border: `1px solid ${alpha("#c62828", 0.25)}`,
        },
      },
    },
  },
});

export default theme;