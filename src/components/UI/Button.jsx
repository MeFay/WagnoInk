import { Box } from "@mui/material";
import React from "react";

const CustomButton = React.forwardRef(
  (
    { children, size = "medium", onClick, href, target, rel, ...props },
    ref,
  ) => {
    const sizes = {
      small: { px: 2.5, py: 0.8, fontSize: 13 },
      medium: { px: 3.5, py: 1.1, fontSize: 14 },
      large: { px: 4.5, py: 1.3, fontSize: 15 },
    };

    const Component = href ? "a" : "button";

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
          // Reset
          all: "unset",

          // Layout
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          cursor: "pointer",
          userSelect: "none",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",

          // Typography
          fontFamily: 'Geist, "Geist Fallback"',
          fontWeight: 500,
          letterSpacing: 0.5,

          // Sizing
          ...sizes[size],

          // Shape
          borderRadius: 999,

          background:
            "linear-gradient(135deg, rgba(198,40,40,0.15), rgba(142,0,0,0.15))",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(198,40,40,0.3)",

          color: "#ffffff",

          // Shadow with red glow
          boxShadow: `
            0 2px 8px rgba(0,0,0,0.3),
            0 0 0 0 rgba(198,40,40,0)
          `,

          // Smooth transitions
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

          // 🔥 Animated gradient border on hover (using ::before)
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            padding: "1.5px",
            background: "linear-gradient(90deg, #c62828, #e53935, #c62828)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.4s ease",
          },

          // 🔥 Shimmer effect on hover (using ::after)
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transition: "left 0.6s ease",
          },

          // Hover state
          "&:hover": {
            background: "rgba(198,40,40,0.15)",
            borderColor: "rgba(198,40,40,0.4)",
            transform: "translateY(-3px)",
            boxShadow: `
              0 8px 24px rgba(0,0,0,0.4),
              0 0 40px rgba(198,40,40,0.3)
            `,
          },

          // Show gradient border on hover
          "&:hover::before": {
            opacity: 1,
          },

          // Shimmer animation on hover
          "&:hover::after": {
            left: "100%",
          },

          // Active state
          "&:active": {
            transform: "translateY(-1px)",
            boxShadow: `
              0 4px 12px rgba(0,0,0,0.3),
              0 0 20px rgba(198,40,40,0.2)
            `,
          },

          // Focus state
          "&:focus-visible": {
            outline: "2px solid rgba(198,40,40,0.6)",
            outlineOffset: "3px",
          },
        }}
      >
        {children}
      </Box>
    );
  },
);

export default CustomButton;
