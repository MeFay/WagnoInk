import { createTheme, alpha } from "@mui/material/styles";

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
      secondary: "#e0e0e0", // 🔥 Brighter from #d0d0d0
      disabled: "#999999", // 🔥 Brighter from #7b7575
    },

    divider: alpha("#c62828", 0.25),
  },

  typography: {
    fontFamily: "Geist, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: "4rem", fontWeight: 900, lineHeight: 1.1 },
    h2: { fontSize: "3rem", fontWeight: 800, lineHeight: 1.15 },
    h3: { fontSize: "2.25rem", fontWeight: 700 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "10px 22px",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: alpha("#ffffff", 0.05) },
        },
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
          "&:hover": { backgroundColor: alpha("#ff6f00", 0.08) },
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
