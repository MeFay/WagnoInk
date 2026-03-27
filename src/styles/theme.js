import { createTheme, alpha } from "@mui/material/styles";

const AMBER = "#c8923a";

// Soft off-white — not pure #fff, warmer and easier on the eyes
const SOFT_WHITE = "#e8e4df";

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
      contrastText: SOFT_WHITE,
    },

    // Amber — third accent for awards, highlights, warmth
    accent: {
      main: AMBER,
      light: "#daa95a",
      dark: "#a0721f",
      contrastText: SOFT_WHITE,
    },

    // WhatsApp green — kept for the specific social link only
    whatsapp: {
      main: "#25D366",
    },

    secondary: {
      main: "#aaaaaa",
      contrastText: SOFT_WHITE,
    },

    background: {
      default: "#111111",
      paper: "#1a1a1a",
      elevated: "#222222",
    },

    text: {
      primary: SOFT_WHITE,
      secondary: "#d8d4cf",
      disabled: "#a8a4a0",
    },

    divider: alpha("#c62828", 0.25),
  },

  typography: {
    fontFamily: "Geist, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: "4rem",    fontWeight: 900, lineHeight: 1.1,  color: SOFT_WHITE },
    h2: { fontSize: "3rem",    fontWeight: 800, lineHeight: 1.15, color: SOFT_WHITE },
    h3: { fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.2,  color: SOFT_WHITE },
    h4: { fontWeight: 700, color: SOFT_WHITE },
    h5: { fontWeight: 700, color: SOFT_WHITE },
    h6: { fontWeight: 700, color: SOFT_WHITE },
    body1: { fontSize: "1rem",      lineHeight: 1.6 },
    body2: { fontSize: "0.875rem",  lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "#111111", color: SOFT_WHITE },
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
        root: { "&:hover": { backgroundColor: alpha(SOFT_WHITE, 0.05) } },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: "#0a0a0a" },
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
