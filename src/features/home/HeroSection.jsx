import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomButton from "../../components/UI/Button";
import { typeScale } from "../../styles/theme";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const VIDEO_SRC = "/video/HeroVideoCropped.mp4";

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "500+", label: "Tattoos done" },
  { value: "100%", label: "Custom adapted to you" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="section-hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        mt: "-72px",
        pt: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "@keyframes scroll-pulse": {
          "0%, 100%": { height: "40px", opacity: 0.4 },
          "50%": { height: "60px", opacity: 1 },
        },
      }}
    >
      {/* Video background */}
      <Box
        component="video"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5,
          "&:not([src]), &[src='']": { display: "none" },
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom,
            rgba(10,10,10,0.4) 0%,
            transparent 15%,
            transparent 70%,
            #0a0a0a 100%
          )`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: 3, md: 4 },
          px: { xs: 3, md: 6 },
          pt: { xs: 10, md: 0 },
          pb: { xs: "120px", md: "80px" },
          maxWidth: 960,
        }}
      >
        {/* Overline */}
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            fontSize: typeScale.label,
            fontWeight: 600,
            letterSpacing: 4,
            color: "accent.main",
            textTransform: "uppercase",
          }}
        >
          Porto, Portugal · Since 2016
        </MotionTypography>

        {/* Main heading */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          sx={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              letterSpacing: { xs: 2, md: 6 },
              fontSize: { xs: "3.5rem", md: "6rem", lg: "7.5rem" },
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            Wagno
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 300,
              letterSpacing: { xs: 8, md: 18 },
              fontSize: { xs: "1.4rem", md: "2.2rem", lg: "2.6rem" },
              color: "text.secondary",
              textTransform: "uppercase",
              pl: { xs: "8px", md: "18px" },
            }}
          >
            Tattoo Artist
          </Typography>
        </MotionBox>

        {/* Tagline */}
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            color: "text.secondary",
            maxWidth: 520,
            fontSize: typeScale.body,
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          Based mainly in Porto. Let's create something you'll love. Your idea,
          my craft, together we make it happen.
        </MotionTypography>

        {/* CTAs */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
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
            See my work
          </CustomButton>
          <CustomButton
            href="https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem."
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            Book a consultation
          </CustomButton>
        </MotionBox>

        {/* Stats */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          sx={{
            display: "flex",
            gap: { xs: 5, md: 10 },
            pt: { xs: 5, md: 6 },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {stats.map(({ value, label }) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 800,
                  color: "accent.main",
                  lineHeight: 1,
                }}
              >
                {value}
              </Typography>
              <Typography
                sx={{
                  fontSize: typeScale.label,
                  color: "text.secondary",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </MotionBox>
      </MotionBox>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        sx={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 10,
            letterSpacing: 3,
            color: "text.disabled",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 1.5,
            height: 40,
            bgcolor: "accent.main",
            borderRadius: 1,
            animation: "scroll-pulse 2s ease-in-out infinite",
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default HeroSection;
