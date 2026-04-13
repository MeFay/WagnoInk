import { Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";

// I built a custom button instead of using MUI's default because I needed
// specific visual effects (shimmer, gradient border, glow) that MUI doesn't support out of the box.
//
// 3 variants:
//   primary   — red glow + shimmer animation on hover (default, used for main CTAs)
//   secondary — subtle border, no colour — used for ghost actions and social links
//   whatsapp  — green tinted, used only for WhatsApp links
//
// 3 sizes: "small" | "medium" | "large"
// Pass fullWidth to make it stretch to 100% of its container.
const CustomButton = React.forwardRef(
  (
    { children, size = "medium", variant = "primary", onClick, href, target, rel, fullWidth, ...props },
    ref,
  ) => {
    const theme = useTheme();

    const sizes = {
      small:  { px: 2.5, py: 0.8,  fontSize: 13 },
      medium: { px: 3.5, py: 1.1,  fontSize: 14 },
      large:  { px: 4.5, py: 1.3,  fontSize: 15 },
    };

    const Component = href ? "a" : "button";

    const primaryStyles = {
      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.dark, 0.15)})`,
      backdropFilter: "blur(12px)",
      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
      color: "#ffffff",
      boxShadow: `0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 ${alpha(theme.palette.primary.main, 0)}`,

      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: 999,
        padding: "1.5px",
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        opacity: 0,
        transition: "opacity 0.4s ease",
      },

      // ::after is the shimmer — a semi-transparent white strip that slides across on hover.
      // It starts off the left edge (left: -100%) and slides to the right on hover (left: 100%).
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "left 0.6s ease",
      },

      "&:hover": {
        background: alpha(theme.palette.primary.main, 0.15),
        borderColor: alpha(theme.palette.primary.main, 0.4),
        transform: "translateY(-3px)",
        boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 40px ${alpha(theme.palette.primary.main, 0.3)}`,
      },
      "&:hover::before": { opacity: 1 },
      "&:hover::after": { left: "100%" },

      "&:active": {
        transform: "translateY(-1px)",
        boxShadow: `0 4px 12px rgba(0,0,0,0.3), 0 0 20px ${alpha(theme.palette.primary.main, 0.2)}`,
      },
      "&:focus-visible": {
        outline: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`,
        outlineOffset: "3px",
      },
    };

    const secondaryStyles = {
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.82)",
      boxShadow: "none",

      "&::before": { display: "none" },
      "&::after": { display: "none" },

      "&:hover": {
        background: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.22)",
        color: "#ffffff",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      },

      "&:active": { transform: "translateY(0px)" },

      "&:focus-visible": {
        outline: "2px solid rgba(255,255,255,0.4)",
        outlineOffset: "3px",
      },
    };

    const whatsappStyles = {
      background: alpha(theme.palette.whatsapp.main, 0.12),
      backdropFilter: "blur(12px)",
      border: `1px solid ${alpha(theme.palette.whatsapp.main, 0.3)}`,
      color: "#ffffff",
      boxShadow: "none",

      "&::before": { display: "none" },
      "&::after": { display: "none" },

      "&:hover": {
        background: alpha(theme.palette.whatsapp.main, 0.22),
        borderColor: alpha(theme.palette.whatsapp.main, 0.5),
        transform: "translateY(-2px)",
        boxShadow: `0 8px 24px ${alpha(theme.palette.whatsapp.main, 0.2)}`,
      },

      "&:active": { transform: "translateY(0px)" },

      "&:focus-visible": {
        outline: `2px solid ${alpha(theme.palette.whatsapp.main, 0.5)}`,
        outlineOffset: "3px",
      },
    };

    const variantStyles = {
      primary: primaryStyles,
      secondary: secondaryStyles,
      whatsapp: whatsappStyles,
    };

    return (
      <Box
        ref={ref}
        component={Component}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        {...props}
        sx={{
          all: "unset",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          cursor: "pointer",
          userSelect: "none",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
          width: fullWidth ? "100%" : undefined,
          boxSizing: fullWidth ? "border-box" : undefined,
          fontFamily: 'Geist, "Geist Fallback"',
          fontWeight: 500,
          letterSpacing: 0.5,
          borderRadius: 999,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          ...sizes[size],
          ...(variantStyles[variant] ?? primaryStyles),
        }}
      >
        {children}
      </Box>
    );
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
