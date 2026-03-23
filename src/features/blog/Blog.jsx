import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { blogPosts } from "./Blog.data";

const MotionBox = motion(Box);

const BlogCard = ({ post, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    component={Link}
    to={`/blog/${post.slug}`}
    sx={{
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(26,26,26,0.5)",
      backdropFilter: "blur(10px)",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-6px)",
        borderColor: "rgba(198,40,40,0.25)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
      },
      "&:hover .card-img": { transform: "scale(1.05)" },
    }}
  >
    {/* Cover image */}
    <Box sx={{ height: 220, overflow: "hidden", position: "relative", bgcolor: "rgba(40,40,40,0.5)" }}>
      <Box
        className="card-img"
        sx={{
          width: "100%", height: "100%",
          backgroundImage: `url(${post.coverImage})`,
          backgroundSize: "cover", backgroundPosition: "center",
          transition: "transform 0.6s ease",
        }}
      />
      {/* Category chip */}
      <Box sx={{
        position: "absolute", top: 14, left: 14,
        px: 1.5, py: 0.4, borderRadius: 999,
        bgcolor: "rgba(198,40,40,0.85)",
        backdropFilter: "blur(8px)",
      }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "white", letterSpacing: 0.5 }}>
          {post.category}
        </Typography>
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1.5, flexGrow: 1 }}>
      {/* Meta */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.date}</Typography>
        <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.2)" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: 13, color: "text.disabled" }} />
          <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.readTime}</Typography>
        </Box>
      </Box>

      <Typography sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, fontWeight: 700, color: "white", lineHeight: 1.3 }}>
        {post.title}
      </Typography>

      <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.7, flexGrow: 1 }}>
        {post.excerpt}
      </Typography>

      <Typography sx={{ fontSize: 13, color: "primary.main", fontWeight: 600, letterSpacing: 0.5, mt: 0.5 }}>
        Read article →
      </Typography>
    </Box>
  </MotionBox>
);

const Blog = () => (
  <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, pb: { xs: 12, md: 16 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
    <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", flexDirection: "column", gap: { xs: 8, md: 10 } }}>

      {/* Header */}
      <MotionBox
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "primary.main", textTransform: "uppercase" }}>
          Insights & Stories
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, lineHeight: 1 }}>
          The Blog
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.7, maxWidth: 520 }}>
          Tattoo aftercare, style guides, and stories from the studio.
        </Typography>
      </MotionBox>

      {/* Grid */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: { xs: 3, md: 4 } }}>
        {blogPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </Box>

    </Box>
  </Box>
);

export default Blog;