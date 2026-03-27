import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "../../components/SectionContainer";
import CustomButton from "../../components/UI/Button";

const MotionBox = motion(Box);

const WHATSAPP_URL =
  "https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem.";

const HomeCTA = () => (
  <SectionContainer>
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
            fontSize: { xs: 11, md: 12 },
            fontWeight: 600,
            letterSpacing: 4,
            color: "#c8923a",
            textTransform: "uppercase",
          }}
        >
          Ready to Begin?
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.1,
          }}
        >
          Every Tattoo Starts<br />with a Conversation.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
          }}
        >
          Tell me your idea — I'll handle everything from design to ink.
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
          Open WhatsApp
        </CustomButton>

        <CustomButton
          variant="primary"
          size="large"
          component={Link}
          to="/info"
        >
          Contact & Info <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </CustomButton>
      </Box>
    </MotionBox>
  </SectionContainer>
);

export default HomeCTA;
