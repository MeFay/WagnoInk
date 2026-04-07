import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import CustomButton from "../../components/UI/Button";
import { typeScale } from "../../styles/theme";
import { WHATSAPP_URL } from "../../config/contact";

const MotionBox = motion(Box);

const HomeCTA = () => {
  const { t } = useTranslation();
  return (
  <SectionContainer id="section-cta">
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: 4, md: 5 },
        maxWidth: 640,
        mx: "auto",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontSize: typeScale.label,
            fontWeight: 600,
            letterSpacing: 4,
            color: "accent.main",
            textTransform: "uppercase",
          }}
        >
          {t("homeCTA.label")}
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontWeight: 900, lineHeight: 1.1 }}
        >
          {t("homeCTA.title").split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: typeScale.body,
            lineHeight: 1.7,
          }}
        >
          {t("homeCTA.description")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <CustomButton
          variant="whatsapp"
          size="large"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ fontSize: 18 }} />
          {t("homeCTA.whatsappBtn")}
        </CustomButton>

        <CustomButton
          variant="primary"
          size="large"
          component={Link}
          to="/info"
        >
          {t("homeCTA.infoBtn")} <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </CustomButton>
      </Box>
    </MotionBox>
  </SectionContainer>
  );
};

export default HomeCTA;
