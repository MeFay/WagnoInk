import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "../../components/SectionContainer";
import Card from "../../components/UI/Card";
import CustomButton from "../../components/UI/Button";

const MotionBox = motion(Box);

const blogPosts = [
  {
    title: "The Complete Guide to Tattoo Aftercare",
    excerpt: "Everything you need to know about caring for your new tattoo to ensure it heals perfectly and stays vibrant for years.",
    date: "March 03, 2026",
    readTime: "5 min read",
    category: "Aftercare",
    image: "/artist-images/Blog/aftercare.webp",
    link: "/blog/aftercare",
  },
  {
    title: "Choosing Your First Tattoo: What to Consider",
    excerpt: "A beginner's guide to making the right choice for your first piece of permanent art.",
    date: "March 01, 2026",
    readTime: "7 min read",
    category: "Guide",
    image: "/artist-images/Blog/first.webp",
    link: "/blog/first-tattoo",
  },
  {
    title: "The Evolution of Tattoo Styles",
    excerpt: "From traditional to contemporary - explore how tattoo art has transformed over the decades.",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Art & Culture",
    image: "/artist-images/Blog/history.webp",
    link: "/blog/tattoo-styles",
  },
];

const BlogSection = () => (
  <SectionContainer>
    {/* Header — centered */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}
    >
      <Typography sx={{ fontSize: { xs: 11, md: 12 }, fontWeight: 600, letterSpacing: 4, color: "#c8923a", textTransform: "uppercase" }}>
        Insights & Stories
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, maxWidth: 700 }}>
        Latest from the Blog
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.7, maxWidth: 560 }}>
        Expert advice, tattoo care tips, and stories from the studio.
      </Typography>
    </MotionBox>

    {/* Grid */}
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: { xs: 3, md: 4 } }}>
      {blogPosts.map((post, index) => (
        <Card key={post.link} {...post} index={index} />
      ))}
    </Box>

    {/* View All */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <CustomButton variant="secondary" size="medium" href="/blog">
          View All Posts
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </CustomButton>
      </MotionBox>
  </SectionContainer>
);

export default BlogSection;