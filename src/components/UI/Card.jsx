import { Box, Typography, Chip, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTranslation } from "react-i18next";
import { typeScale } from "../../styles/theme";

const MotionBox = motion(Box);

// animateOnMount — when true, the card animates to visible on mount (no scroll trigger).
// Use this in sections where the cards are already in view when rendered (e.g. home page blog section),
// so language changes don't cause them to disappear while waiting for a viewport re-entry event.
// Default (false) keeps the scroll-reveal behaviour used on the full Blog page.
const Card = ({ title, excerpt, date, readTime, category, image, link, index = 0, animateOnMount = false }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const motionProps = animateOnMount
    ? { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.1 } };

  return (
    <MotionBox
      {...motionProps}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      component={Link}
      to={link}
      sx={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        background: "rgba(26,26,26,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: alpha(theme.palette.primary.main, 0.3),
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        },
        "&:hover .blog-image": { transform: "scale(1.05)" },
        "&:hover .arrow": { transform: "translateX(4px)" },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          height: 240,
          overflow: "hidden",
          position: "relative",
          bgcolor: "rgba(40,40,40,0.5)",
        }}
      >
        <Box
          className="blog-image"
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: image
              ? `url(${image})`
              : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.primary.dark, 0.2)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.6s ease",
          }}
        />
        <Chip
          label={category}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: alpha(theme.palette.primary.main, 0.9),
            color: "white",
            fontSize: typeScale.label,
            fontWeight: 600,
            height: 28,
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
        {/* Meta */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: typeScale.caption, color: "text.secondary" }}>
            {date}
          </Typography>
          <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.3)" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography sx={{ fontSize: typeScale.caption, color: "text.secondary" }}>
              {readTime}
            </Typography>
          </Box>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: typeScale.heading,
            color: "white",
            lineHeight: 1.3,
            letterSpacing: 0.3,
          }}
        >
          {title}
        </Typography>

        {/* Excerpt */}
        <Typography sx={{ color: "text.secondary", fontSize: typeScale.body, lineHeight: 1.7, flexGrow: 1 }}>
          {excerpt}
        </Typography>

        {/* Read more */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
            fontWeight: 600,
            fontSize: typeScale.body,
            letterSpacing: 0.5,
          }}
        >
          {t("blog.readArticle")}
          <ArrowForwardIcon className="arrow" sx={{ fontSize: 18, transition: "transform 0.3s ease" }} />
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Card;
