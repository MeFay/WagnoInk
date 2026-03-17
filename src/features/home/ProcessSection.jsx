import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BrushIcon from "@mui/icons-material/Brush";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SectionContainer from "../../components/SectionContainer";

const MotionBox = motion(Box);

const steps = [
  {
    number: "01",
    icon: ChatBubbleOutlineIcon,
    title: "Consult",
    description:
      "We talk through your idea, placement, size, and style. No pressure — just an honest conversation about what'll work best on your skin.",
  },
  {
    number: "02",
    icon: BrushIcon,
    title: "Design",
    description:
      "Every piece is drawn from scratch for you. You'll see the design before we ever touch a needle — adjustments welcome.",
  },
  {
    number: "03",
    icon: AutoFixHighIcon,
    title: "Ink",
    description:
      "Session day. Clean studio, focused work, no rush. Aftercare instructions included so your tattoo heals exactly as it should.",
  },
];

const ProcessSection = () => (
  <SectionContainer sx={{ overflow: "hidden" }}>
    {/* Background watermark — sits behind everything */}
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
      Process
    </Typography>

    {/* Header — centered */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}
    >
      <Typography sx={{ fontSize: { xs: 11, md: 12 }, fontWeight: 600, letterSpacing: 4, color: "primary.main", textTransform: "uppercase" }}>
        How It Works
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, maxWidth: 500 }}>
        From Idea to Ink
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.7, maxWidth: 560 }}>
        A simple process built around your vision — from first conversation to finished piece.
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
              "&:hover": { borderColor: "rgba(198,40,40,0.2)" },
            }}
          >
            {/* Ghost step number */}
            <Typography aria-hidden sx={{ position: "absolute", top: -10, right: 16, fontSize: "7rem", fontWeight: 900, color: "rgba(200,146,58,0.1)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
              {step.number}
            </Typography>

            {/* Icon */}
            <Box sx={{ width: 52, height: 52, borderRadius: 2, background: "linear-gradient(135deg, rgba(198,40,40,0.15), rgba(142,0,0,0.15))", border: "1px solid rgba(198,40,40,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon sx={{ color: "primary.main", fontSize: 26 }} />
            </Box>

            {/* Text */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ fontSize: { xs: 20, md: 22 }, fontWeight: 800, color: "white", letterSpacing: 0.5 }}>
                {step.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.75 }}>
                {step.description}
              </Typography>
            </Box>
          </MotionBox>
        );
      })}
    </Box>
  </SectionContainer>
);

export default ProcessSection;