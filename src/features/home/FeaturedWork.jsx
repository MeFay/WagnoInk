import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "../../components/SectionContainer";
import { typeScale } from "../../styles/theme";

const MotionBox = motion(Box);

const featuredProjects = [
  {
    title: "Character Sleeve",
    category: "Forearm Tattoo",
    image: "/artist-images/Tattoos/12.webp",
    link: "https://www.instagram.com/p/DOVu30vDBoR/?img_index=1",
  },
  {
    title: "Realistic Profile",
    category: "Leg Tattoo",
    image: "/artist-images/Tattoos/6.webp",
    link: "https://www.instagram.com/p/C_TIlKOpS77/",
  },
];

const cardOverlay = `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)`;
const cardOverlayHover = `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0) 100%)`;

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
      height: { xs: "70vw", sm: "60vw", md: tall ? 680 : 500 },
      minHeight: { xs: 300, md: tall ? 680 : 500 },
      borderRadius: 3,
      overflow: "hidden",
      position: "relative",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      transition: "box-shadow 0.5s ease",
      "&::before": { content: '""', position: "absolute", inset: 0, background: cardOverlay, transition: "background 0.5s ease", zIndex: 1 },
      "&:hover": { boxShadow: "0 40px 80px rgba(0,0,0,0.7)" },
      "&:hover::before": { background: cardOverlayHover },
      "&:hover .card-img": { transform: "scale(1.06)" },
      "&:hover .card-arrow": { transform: "translateX(5px)", opacity: 1 },
      "&:hover .card-title": { transform: "translateY(-3px)" },
    }}
  >
    <Box className="card-img" sx={{ position: "absolute", inset: 0, backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)", zIndex: 0 }} />
    <Box sx={{ position: "relative", zIndex: 2, p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography sx={{ fontSize: typeScale.label, fontWeight: 700, letterSpacing: 3, color: "rgba(255,255,255,0.75)", textTransform: "uppercase" }}>
        {project.category}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography className="card-title" sx={{ color: "white", fontWeight: 800, fontSize: { xs: "1.5rem", md: tall ? "2.25rem" : "1.875rem" }, lineHeight: 1.15, letterSpacing: 0.3, transition: "transform 0.4s ease" }}>
          {project.title}
        </Typography>
        <ArrowForwardIcon className="card-arrow" sx={{ color: "white", fontSize: { xs: 18, md: 22 }, opacity: 0, transition: "all 0.3s ease", flexShrink: 0 }} />
      </Box>
    </Box>
  </MotionBox>
);

const GhostCard = ({ index = 2 }) => {
  const theme = useTheme();
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      component={Link}
      to="/gallery"
      sx={{
        flex: "0.7",
        height: { xs: "auto", sm: "40vw", md: 400 },
        minHeight: { xs: 120, md: 400 },
        py: { xs: 3, md: 0 },
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1, md: 3 },
        border: `1px dashed ${alpha(theme.palette.accent.main, 0.25)}`,
        background: `radial-gradient(ellipse at center, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
        transition: "border-color 0.4s ease, background 0.4s ease",
        "&:hover": {
          borderColor: alpha(theme.palette.accent.main, 0.5),
          background: `radial-gradient(ellipse at center, ${alpha(theme.palette.accent.main, 0.1)} 0%, transparent 70%)`,
        },
        "&:hover .ghost-arrow": { transform: "translateX(5px)" },
      }}
    >
      <Typography sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, fontWeight: 900, color: alpha(theme.palette.accent.main, 0.18), lineHeight: 1, userSelect: "none" }}>
        30+
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Typography sx={{ color: "text.primary", fontWeight: 700, fontSize: typeScale.heading, letterSpacing: 0.3 }}>
          More work in the gallery
        </Typography>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, color: "accent.main", fontSize: typeScale.caption, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
          View all
          <ArrowForwardIcon className="ghost-arrow" sx={{ fontSize: 16, transition: "transform 0.3s ease" }} />
        </Box>
      </Box>
    </MotionBox>
  );
};

const FeaturedWork = () => (
  <SectionContainer
    id="section-featured-work"
    sx={{
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 200,
        background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 0,
      },
    }}
    innerSx={{ position: "relative", zIndex: 1 }}
  >
    {/* Header */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "flex-start", md: "flex-end" }, justifyContent: "space-between", gap: { xs: 3, md: 4 } }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ fontSize: typeScale.label, fontWeight: 600, letterSpacing: 4, color: "accent.main", textTransform: "uppercase" }}>
          Featured Work
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
          Recent<br />pieces
        </Typography>
      </Box>
      <Typography sx={{ color: "text.secondary", fontSize: typeScale.body, lineHeight: 1.7, maxWidth: 340, textAlign: { xs: "left", md: "right" }, pb: { md: 0.5 } }}>
        A look at some recent tattoos. Want to see more? Head over to the full gallery.
      </Typography>
    </MotionBox>

    {/* Cards */}
    <MotionBox
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "flex-end" }, gap: { xs: 3, md: 4 } }}
    >
      {featuredProjects.map((project, index) => (
        <FeaturedCard key={project.title} project={project} tall={index === 0} index={index} />
      ))}
      <GhostCard index={featuredProjects.length} />
    </MotionBox>

  </SectionContainer>
);

export default FeaturedWork;