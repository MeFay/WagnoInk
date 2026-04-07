import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BrushIcon from "@mui/icons-material/Brush";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/UI/Button";
import SectionContainer from "../../components/SectionContainer";
import { typeScale } from "../../styles/theme";
import { WHATSAPP_URL } from "../../config/contact";

const MotionBox = motion(Box);

const STEP_ICONS = [ChatBubbleOutlineIcon, BrushIcon, AutoFixHighIcon];

const ProcessSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const steps = [
    { number: "01", icon: STEP_ICONS[0], title: t("process.step1Title"), description: t("process.step1Desc") },
    { number: "02", icon: STEP_ICONS[1], title: t("process.step2Title"), description: t("process.step2Desc") },
    { number: "03", icon: STEP_ICONS[2], title: t("process.step3Title"), description: t("process.step3Desc") },
  ];

  return (
  <SectionContainer id="section-process" sx={{ overflow: "hidden" }}>
    {/* Background watermark */}
    <Typography
      aria-hidden
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: { xs: "20vw", md: "14vw" },
        fontWeight: 900,
        letterSpacing: { xs: 4, md: 16 },
        color: "rgba(255,255,255,0.025)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
      }}
    >
      {t("process.watermark")}
    </Typography>

    {/* Header */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}
    >
      <Typography sx={{ fontSize: typeScale.label, fontWeight: 600, letterSpacing: 4, color: "accent.main", textTransform: "uppercase" }}>
        {t("process.label")}
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 900, maxWidth: 500 }}>
        {t("process.title")}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: typeScale.body, lineHeight: 1.7, maxWidth: 560 }}>
        {t("process.description")}
      </Typography>
    </MotionBox>

    {/* Steps */}
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 4, md: 3 } }}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <MotionBox
            key={step.number}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }} viewport={{ once: true }}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              p: { xs: 4, md: 5 },
              borderRadius: 3,
              background: "rgba(26,26,26,0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
              transition: "border-color 0.3s ease",
              "&:hover": { borderColor: alpha(theme.palette.primary.main, 0.2) },
            }}
          >
            {/* Ghost step number */}
            <Typography aria-hidden sx={{ position: "absolute", top: -10, right: 16, fontSize: "7rem", fontWeight: 900, color: alpha(theme.palette.accent.main, 0.1), lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
              {step.number}
            </Typography>

            {/* Icon */}
            <Box sx={{ width: 52, height: 52, borderRadius: 2, background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.dark, 0.15)})`, border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon sx={{ color: "primary.main", fontSize: 26 }} />
            </Box>

            {/* Text */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ fontSize: typeScale.heading, fontWeight: 800, color: "white", letterSpacing: 0.5 }}>
                {step.title}
              </Typography>
              <Typography sx={{ fontSize: typeScale.body, color: "text.secondary", lineHeight: 1.75 }}>
                {step.description}
              </Typography>
            </Box>
          </MotionBox>
        );
      })}
    </Box>

    {/* CTA */}
    <MotionBox
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 3 }}
    >
      <Typography sx={{ fontSize: typeScale.body, color: "text.secondary", lineHeight: 1.7 }}>
        {t("process.readyLabel")}
      </Typography>
      <CustomButton
        variant="whatsapp"
        size="large"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("process.ctaBtn")}
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </CustomButton>
    </MotionBox>
  </SectionContainer>
  );
};

export default ProcessSection;
