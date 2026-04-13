import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/UI/Button";
import { typeScale } from "../../styles/theme";
import { WHATSAPP_URL } from "../../config/contact";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const VIDEO_SRC = "/video/HeroVideoCropped.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = [
    { value: "8+",   label: t("hero.stat1Label") },
    { value: "100%", label: t("hero.stat3Label") },
  ];

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
      {/* objectFit: cover makes the video always fill the full screen without stretching,
          regardless of the screen size or aspect ratio.
          preload="none" means the video won't be downloaded until the page loads — saves bandwidth.
          playsInline is required on iOS to prevent the video from going fullscreen automatically. */}
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

      {/* Gradient overlay — darkens the top and bottom of the video
          so the navbar and page content below don't clash with the footage */}
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

      {/* Each child inside here has a different delay on its animation,
          so the location label, name, tagline, and buttons appear one after another */}
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
          {t("hero.location")}
        </MotionTypography>

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
            {t("hero.subtitle")}
          </Typography>
        </MotionBox>

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
          {t("hero.tagline")}
        </MotionTypography>

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
            {t("hero.cta1")}
          </CustomButton>
          <CustomButton
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            {t("hero.cta2")}
          </CustomButton>
        </MotionBox>

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

      {/* Animated line that pulses up and down to hint the user can scroll.
          The @keyframes animation is defined in the parent Box's sx above. */}
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
          {t("hero.scroll")}
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
