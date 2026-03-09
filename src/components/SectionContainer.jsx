import { Box } from "@mui/material";

const SectionContainer = ({ children, sx = {}, innerSx = {}, ...props }) => (
  <Box
    sx={{
      width: "100%",
      py: { xs: 12, md: 16 },
      px: { xs: 3, sm: 5, md: 8, lg: 10 },
      position: "relative",
      ...sx,
    }}
    {...props}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, md: 12 },
        ...innerSx,
      }}
    >
      {children}
    </Box>
  </Box>
);

export default SectionContainer;
