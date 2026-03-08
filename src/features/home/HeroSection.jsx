import CustomButton from "../../components/UI/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "85vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 3, md: 6 },
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Floating accent glows - BEFORE content */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,111,0,0.12), transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,

          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(198,40,40,0.15), transparent 70%)",
          filter: "blur(50px)",
          animation: "float 6s ease-in-out infinite 1s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2.5, md: 3 },
          maxWidth: 900,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Overline text */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            letterSpacing: 3,
            color: "primary.main",
            textTransform: "uppercase",
          }}
        >
          Premium Tattoo Artistry
        </MotionTypography>

        {/* Main heading */}
        <MotionTypography
          variant="h1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          sx={{
            fontWeight: 900,
            letterSpacing: { xs: 1, md: 2 },
            fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            lineHeight: 1.1,
            background: "linear-gradient(to bottom, #ffffff 60%, #999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WAGNO INK
        </MotionTypography>

        {/* Subtitle */}
        <MotionTypography
          variant="h6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            color: "text.secondary",
            maxWidth: 600,
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Precision-driven tattoo work with a contemporary edge. Where art meets
          skin.
        </MotionTypography>

        {/* CTA Buttons */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          sx={{
            display: "flex",
            gap: 2,
            pt: 1,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <CustomButton onClick={() => navigate("/gallery")} size="large">
            View Gallery
          </CustomButton>

          <CustomButton
            href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            Book Consultation
          </CustomButton>
        </MotionBox>

        {/* Stats */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          sx={{
            display: "flex",
            gap: { xs: 4, md: 8 },
            pt: { xs: 4, md: 5 },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              8+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 14 },
                color: "text.secondary",
                letterSpacing: 1,
              }}
            >
              YEARS EXPERIENCE
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              500+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 14 },
                color: "text.secondary",
                letterSpacing: 1,
              }}
            >
              SATISFIED CLIENTS
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              100%
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 14 },
                color: "text.secondary",
                letterSpacing: 1,
              }}
            >
              CUSTOM DESIGNS
            </Typography>
          </Box>
        </MotionBox>
      </MotionBox>

      {/* Scroll Indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 2,
            height: 40,
            bgcolor: "rgba(198,40,40,0.5)",
            borderRadius: 1,
            animation: "scroll 2s ease-in-out infinite",
            "@keyframes scroll": {
              "0%, 100%": { height: "40px", opacity: 0.5 },
              "50%": { height: "60px", opacity: 1 },
            },
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default HeroSection;
