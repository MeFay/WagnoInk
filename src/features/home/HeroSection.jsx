import CustomButton from "../../components/UI/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, md: 6 },
        pt: { xs: 4, md: 8 },
        pb: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 900, mb: 2, color: "text.primary" }}
      >
        WAGNO TATTOO
      </Typography>

      <Typography
        variant="h6"
        sx={{ mb: 4, maxWidth: 500, color: "text.secondary" }}
      >
        Unique tattoos designed for your story. Explore our gallery for
        inspiration.
      </Typography>

      <CustomButton onClick={() => navigate("/gallery")} size="medium">
        View Gallery
      </CustomButton>
    </Box>
  );
};

export default HeroSection;
