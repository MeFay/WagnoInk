import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import { typeScale } from "../../styles/theme";

const MotionBox = motion(Box);

const credentials = [
  { label: "Realism" },
  { label: "Fine Line" },
  { label: "Blackwork" },
];

const ArtistIntro = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <SectionContainer id="section-artist-intro" sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 8, md: 10 },
          alignItems: "stretch",
        }}
      >
        {/* whileInView means the animation only starts when this element enters the viewport.
            viewport={{ once: true }} makes it animate only the first time, not every time you scroll past. */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            position: "relative",
            minHeight: { xs: 320, sm: 400 },
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -20,
              left: -20,
              width: 120,
              height: 120,
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              opacity: 0.25,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <Box
            component="img"
            src="/artist-images/About/Wagno.webp"
            alt="Wagno Reis, tattoo artist based in Porto"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
          />

          {/* Award badge — slides in slightly after the photo with a scale animation */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            sx={{
              position: "absolute",
              bottom: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1.5,
              borderRadius: 2,
              background: "rgba(17,17,17,0.88)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${alpha(theme.palette.accent.main, 0.35)}`,
              zIndex: 2,
            }}
          >
            <EmojiEventsOutlinedIcon
              sx={{ color: "accent.main", fontSize: 22 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
              <Typography
                sx={{
                  fontSize: typeScale.label,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "accent.main",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                {t("artistIntro.awardLabel")}
              </Typography>
              <Typography
                sx={{
                  fontSize: typeScale.caption,
                  color: "text.secondary",
                  lineHeight: 1,
                }}
              >
                {t("artistIntro.awardSub")}
              </Typography>
            </Box>
          </MotionBox>
        </MotionBox>

        {/* Right column slides in from the opposite direction to create a split entrance effect */}
        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Typography
            sx={{
              fontSize: typeScale.label,
              fontWeight: 600,
              letterSpacing: 4,
              color: "accent.main",
              textTransform: "uppercase",
            }}
          >
            {t("artistIntro.label")}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
              Wagno
            </Typography>
            <Typography
              sx={{
                fontSize: typeScale.body,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              {t("artistIntro.bio1")}
            </Typography>
            <Typography
              sx={{
                fontSize: typeScale.body,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              {t("artistIntro.bio2")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {credentials.map((c) => (
              <Box
                key={c.label}
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: typeScale.caption,
                  fontWeight: 600,
                  color: "text.primary",
                  letterSpacing: 0.5,
                }}
              >
                {c.label}
              </Box>
            ))}
          </Box>

          <Box
            component={Link}
            to="/about"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "accent.main",
              textDecoration: "none",
              fontSize: typeScale.caption,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              width: "fit-content",
              transition: "all 0.3s ease",
              "&:hover": { gap: 1.5, color: "accent.light" },
            }}
          >
            {t("artistIntro.readMore")}
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </MotionBox>
      </Box>
    </SectionContainer>
  );
};

export default ArtistIntro;
