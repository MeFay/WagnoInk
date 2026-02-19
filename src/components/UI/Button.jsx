import { Button as MuiButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";

const CustomButton = React.forwardRef(
  ({ children, size = "medium", ...props }, ref) => {
    const sizes = {
      small: { px: 2, py: 1, fontSize: 14, height: 36 },
      medium: { px: 3, py: 1.2, fontSize: 16, height: 42 },
      large: { px: 4, py: 1.5, fontSize: 18, height: 50 },
    };

    return (
      <MuiButton
        ref={ref}
        {...props} // <-- forward href, target, rel, onClick, etc.
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: "#ffffff",
          fontWeight: 400,
          fontFamily: 'Geist, "Geist Fallback"',
          textTransform: "none",
          borderRadius: 16,
          border: `1.6px solid ${alpha(theme.palette.primary.main, 0.7)}`,
          backgroundColor: alpha(theme.palette.primary.main, 0.25),
          backdropFilter: "blur(4px)",
          cursor: "pointer",
          transition: "all 0.25s ease",
          ...sizes[size],
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
            borderColor: alpha(theme.palette.primary.main, 0.6),
            transform: "scale(1.025)",
          },
        })}
      >
        {children}
      </MuiButton>
    );
  }
);

export default CustomButton;
