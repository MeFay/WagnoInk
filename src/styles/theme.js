import { createTheme, alpha } from "@mui/material/styles";

const AMBER = "#c8923a";
const PRIMARY_RED = "#c62828";
const PRIMARY_RED_DARK = "#8e0000";

// Soft off-white — not pure #fff, warmer and easier on the eyes
const SOFT_WHITE = "#e8e4df";

// ── Type scale ────────────────────────────────────────────────────────
// Single source of truth for all font sizes across the app.
// Import { typeScale } from "styles/theme" and use in sx={{ fontSize: typeScale.X }}
export const typeScale = {
  label:   "0.6875rem",               // overlines, badges, micro labels (11px)
  caption: "0.75rem",                 // meta, dates, chips, links (12px)
  body:    "0.9375rem",               // all body text: descriptions, paragraphs (15px)
  heading: { xs: "1rem", md: "1.125rem" }, // card/entry headings
};

// ── Base theme ────────────────────────────────────────────────────────
let theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 768, md: 1024, lg: 1440, xl: 1820 },
  },

  spacing: 8,
  shape: { borderRadius: 12 },

  navigation: {
    height: 72,
    itemHeight: 44,
    fontSize: 15,
    borderRadius: 999,
    mobileMenuButtonSize: 52,
  },

  palette: {
    mode: "dark",

    primary: {
      main: PRIMARY_RED,
      light: "#e53935",
      dark: PRIMARY_RED_DARK,
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

    // Instagram pink — kept for the specific social link only
    instagram: {
      main: "#E4405F",
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

    divider: alpha(PRIMARY_RED, 0.25),
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
          border: `1px solid ${alpha(PRIMARY_RED, 0.25)}`,
        },
      },
    },
  },
});

// ── Responsive typography overrides ──────────────────────────────────
// Applied in a second pass so we can reference theme.breakpoints.
theme = createTheme(theme, {
  components: {
    MuiTypography: {
      styleOverrides: {
        // h2 used for all section headings: 3rem on md+, 2rem below
        h2: {
          [theme.breakpoints.down("md")]: { fontSize: "2rem" },
        },
        // h3 used for sub-headings: 2.25rem on md+, 1.75rem below
        h3: {
          [theme.breakpoints.down("md")]: { fontSize: "1.75rem" },
        },
      },
    },
  },
});

export default theme;
