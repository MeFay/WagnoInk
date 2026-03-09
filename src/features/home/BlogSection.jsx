import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../../components/UI/Card";

const MotionBox = motion(Box);

// --- Data ---
const blogPosts = [
  {
    title: "The Complete Guide to Tattoo Aftercare",
    excerpt:
      "Everything you need to know about caring for your new tattoo to ensure it heals perfectly and stays vibrant for years.",
    date: "March 03, 2026",
    readTime: "5 min read",
    category: "Aftercare",
    image: "/blog-images/aftercare.jpg",
    link: "/blog/aftercare",
  },
  {
    title: "Choosing Your First Tattoo: What to Consider",
    excerpt:
      "A beginner's guide to making the right choice for your first piece of permanent art.",
    date: "March 01, 2026",
    readTime: "7 min read",
    category: "Guide",
    image: "/blog-images/first-tattoo.jpg",
    link: "/blog/first-tattoo",
  },
  {
    title: "The Evolution of Tattoo Styles",
    excerpt:
      "From traditional to contemporary - explore how tattoo art has transformed over the decades.",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Art & Culture",
    image: "/blog-images/styles.jpg",
    link: "/blog/tattoo-styles",
  },
];

// --- Component ---
const BlogSection = () => (
  <Box
    sx={{
      py: { xs: 12, md: 16 },
      px: { xs: 2, md: 6 },
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: { xs: 8, md: 12 },
    }}
  >
    {/* Header */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 12, md: 13 },
          fontWeight: 600,
          letterSpacing: 3,
          color: "primary.main",
          textTransform: "uppercase",
          maxWidth: 700,
        }}
      >
        Insights & Stories
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
          maxWidth: 700,
        }}
      >
        Latest from the Blog
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          lineHeight: 1.7,
          maxWidth: 700,
        }}
      >
        Expert advice, tattoo care tips, and stories from the studio.
      </Typography>
    </MotionBox>

    {/* Grid */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: { xs: 3, md: 4 },
        maxWidth: 1400,
        width: "100%",
        alignSelf: "center",
      }}
    >
      {blogPosts.map((post, index) => (
        <Card key={post.link} {...post} index={index} />
      ))}
    </Box>

    {/* View All */}
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box
        component={Link}
        to="/blog"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 4,
          py: 1.5,
          borderRadius: 999,
          background: "rgba(198,40,40,0.1)",
          border: "1px solid rgba(198,40,40,0.3)",
          color: "primary.main",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 1,
          transition: "all 0.3s ease",

          "&:hover": {
            background: "rgba(198,40,40,0.2)",
            borderColor: "rgba(198,40,40,0.5)",
            transform: "translateY(-2px)",
            gap: 1.5,
          },
        }}
      >
        VIEW ALL POSTS
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </Box>
    </MotionBox>
  </Box>
);

export default BlogSection;
