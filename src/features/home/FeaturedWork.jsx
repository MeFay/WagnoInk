import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const MotionBox = motion(Box);

const featuredProjects = [
  {
    title: "Character Sleeve",
    category: "Forearm Tattoo",
    image: "/artist-images/1.png",
    link: "https://www.instagram.com/p/DOVu30vDBoR/?img_index=1",
  },
  {
    title: "Realistic Profile",
    category: "Leg Tattoo",
    image: "/artist-images/2.png",
    link: "https://www.instagram.com/p/C_TIlKOpS77/",
  },
];

// Overlay gradient shared across both cards
const cardOverlay = `linear-gradient(
  to top,
  rgba(0,0,0,0.9) 0%,
  rgba(0,0,0,0.3) 45%,
  transparent 100%
)`;

const cardOverlayHover = `linear-gradient(
  to top,
  rgba(198,40,40,0.45) 0%,
  rgba(0,0,0,0.35) 35%,
  transparent 100%
)`;

const FeaturedCard = ({ project, tall = false, index = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    component="a"
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      flex: tall ? "1.4" : "1",
      height: { xs: "72vw", sm: "60vw", md: tall ? 680 : 500 },
      minHeight: { md: tall ? 680 : 500 },
      borderRadius: 3,
      overflow: "hidden",
      position: "relative",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundImage: `url(${project.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid rgba(255,255,255,0.07)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: cardOverlay,
        transition: "background 0.5s ease",
        zIndex: 1,
      },

      "&:hover": {
        transform: "translateY(-6px) scale(1.015)",
        boxShadow: "0 36px 80px rgba(0,0,0,0.75)",
        borderColor: "rgba(198,40,40,0.35)",
      },

      "&:hover::before": {
        background: cardOverlayHover,
      },

      "&:hover .card-arrow": {
        transform: "translate(4px, -4px)",
        opacity: 1,
      },

      "&:hover .card-label": {
        borderColor: "rgba(198,40,40,0.6)",
        background: "rgba(198,40,40,0.2)",
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {/* Category pill */}
      <Box
        className="card-label"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          px: 2,
          py: 0.5,
          alignSelf: "flex-start",
          borderRadius: 999,
          border: "1px solid rgba(198,40,40,0.3)",
          background: "rgba(198,40,40,0.1)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 10, md: 11 },
            fontWeight: 700,
            letterSpacing: 2,
            color: "primary.light",
            textTransform: "uppercase",
          }}
        >
          {project.category}
        </Typography>
      </Box>

      {/* Title + arrow */}
      <Box
        sx={{ display: "flex", alignItems: "flex-end", gap: 1.5, flexWrap: "wrap" }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 800,
            fontSize: { xs: "1.5rem", md: tall ? "2.25rem" : "1.875rem" },
            lineHeight: 1.15,
            letterSpacing: 0.3,
          }}
        >
          {project.title}
        </Typography>
        <OpenInNewIcon
          className="card-arrow"
          sx={{
            color: "primary.main",
            fontSize: { xs: 20, md: 24 },
            opacity: 0.5,
            mb: "3px",
            transition: "all 0.3s ease",
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: 12, md: 13 },
          color: "rgba(255,255,255,0.5)",
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        View on Instagram
      </Typography>
    </Box>
  </MotionBox>
);

const FeaturedWork = () => (
  <Box
    sx={{
      width: "100%",
      px: { xs: 2, md: 6 },
      py: { xs: 12, md: 16 },
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: { xs: 6, md: 10 },
      overflow: "hidden",
    }}
  >
    {/* Top fade — blends with hero bottom */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        background:
          "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />

    {/* Watermark */}
    <Typography
      aria-hidden
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -55%)",
        fontSize: { xs: "22vw", md: "15vw" },
        fontWeight: 900,
        letterSpacing: { xs: 2, md: 12 },
        color: "rgba(255,255,255,0.02)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
      }}
    >
      Work
    </Typography>

    {/* Header — left-aligned, splits from the centered pattern of other sections */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-end" },
        justifyContent: "space-between",
        gap: { xs: 3, md: 4 },
        maxWidth: 1400,
        mx: "auto",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: 11, md: 12 },
            fontWeight: 600,
            letterSpacing: 4,
            color: "primary.main",
            textTransform: "uppercase",
          }}
        >
          Featured Work
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2rem", md: "3rem" },
            background: "linear-gradient(to bottom, #ffffff 60%, #999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.1,
          }}
        >
          Recent<br />Masterpieces
        </Typography>
      </Box>

      {/* Description pushed to bottom-right on desktop */}
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.7,
          maxWidth: 340,
          textAlign: { xs: "left", md: "right" },
          pb: { md: 0.5 },
        }}
      >
        Every piece is drawn from scratch. Explore the latest work —
        or see the full collection in the gallery.
      </Typography>
    </MotionBox>

    {/* Asymmetric card grid — first card is taller */}
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "flex-end" },
        gap: { xs: 3, md: 4 },
        maxWidth: 1400,
        mx: "auto",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {featuredProjects.map((project, index) => (
        <FeaturedCard
          key={project.title}
          project={project}
          tall={index === 0}
          index={index}
        />
      ))}
    </MotionBox>

    {/* View all */}
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        maxWidth: 1400,
        mx: "auto",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        component={Link}
        to="/gallery"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          color: "primary.main",
          textDecoration: "none",
          fontSize: { xs: 13, md: 14 },
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          transition: "all 0.3s ease",

          "&:hover": {
            gap: 1.5,
            color: "primary.light",
          },
        }}
      >
        Explore Full Gallery
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </Box>
    </MotionBox>
  </Box>
);

export default FeaturedWork;