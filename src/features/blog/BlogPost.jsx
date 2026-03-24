import { Box, Typography } from "@mui/material";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getPostBySlug, blogPosts } from "./Blog.data";

const MotionBox = motion.create(Box);

// ── Content block renderer ────────────────────────────────────────────
const ContentBlock = ({ block, index }) => {
  const baseDelay = 0.3 + index * 0.06;

  if (block.type === "heading") return (
    <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: baseDelay }}
      sx={{ mt: index === 0 ? 0 : 5, mb: 0.5 }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" }, fontWeight: 800, color: "white", lineHeight: 1.25 }}
      >
        {block.text}
      </Typography>
    </MotionBox>
  );

  if (block.type === "paragraph") return (
    <MotionBox initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: baseDelay }}
      sx={{ mt: 1.5 }}
    >
      <Typography sx={{ fontSize: { xs: "0.97rem", md: "1.05rem" }, color: "text.secondary", lineHeight: 1.9 }}>
        {block.text}
      </Typography>
    </MotionBox>
  );

  if (block.type === "quote") return (
    <MotionBox
      initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: baseDelay }}
      sx={{
        mt: 4, mb: 2,
        borderLeft: "3px solid", borderColor: "primary.main",
        pl: 3, py: 1.5,
        background: "rgba(198,40,40,0.05)",
        borderRadius: "0 8px 8px 0",
      }}
    >
      <Typography sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, fontStyle: "italic", color: "white", lineHeight: 1.7, fontWeight: 500 }}>
        "{block.text}"
      </Typography>
      {block.author && (
        <Typography sx={{ fontSize: 13, color: "primary.main", fontWeight: 600, mt: 1 }}>
          — {block.author}
        </Typography>
      )}
    </MotionBox>
  );

  if (block.type === "image") return (
    <MotionBox initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: baseDelay }}
      sx={{ mt: 4, mb: 2 }}
    >
      <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
        <Box component="img" src={block.src} alt={block.caption || ""} sx={{ width: "100%", display: "block" }} />
      </Box>
      {block.caption && (
        <Typography sx={{ fontSize: 12, color: "text.disabled", textAlign: "center", mt: 1.5, letterSpacing: 0.3 }}>
          {block.caption}
        </Typography>
      )}
    </MotionBox>
  );

  return null;
};

// ── Post page ─────────────────────────────────────────────────────────
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Related posts — other posts excluding current
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, pb: { xs: 12, md: 16 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
      <Box sx={{ maxWidth: 760, mx: "auto" }}>

        {/* Back link */}
        <MotionBox
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          sx={{ mb: 6 }}
        >
          <Box
            component={Link}
            to="/blog"
            sx={{
              display: "inline-flex", alignItems: "center", gap: 1,
              textDecoration: "none", color: "text.secondary", fontSize: 14,
              transition: "color 0.2s ease",
              "&:hover": { color: "white" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Back to Blog
          </Box>
        </MotionBox>

        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}
        >
          {/* Category + meta */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ px: 1.5, py: 0.4, borderRadius: 999, bgcolor: "rgba(198,40,40,0.15)", border: "1px solid rgba(198,40,40,0.3)" }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "primary.main", letterSpacing: 1, textTransform: "uppercase" }}>
                {post.category}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{post.date}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 14, color: "text.secondary" }} />
              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{post.readTime}</Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, lineHeight: 1.1 }}>
            {post.title}
          </Typography>

          {/* Excerpt */}
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, color: "text.secondary", lineHeight: 1.7, fontStyle: "italic" }}>
            {post.excerpt}
          </Typography>
        </MotionBox>

        {/* Cover image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          sx={{ borderRadius: 3, overflow: "hidden", mb: 6, boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
        >
          <Box
            component="img"
            src={post.coverImage}
            alt={post.title}
            sx={{ width: "100%", display: "block", maxHeight: 480, objectFit: "cover" }}
          />
        </MotionBox>

        {/* Content */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} />
          ))}
        </Box>

        {/* Divider */}
        <Box sx={{ mt: 10, mb: 8, height: "1px", bgcolor: "rgba(255,255,255,0.07)" }} />

        {/* Related posts */}
        {related.length > 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "primary.main", textTransform: "uppercase" }}>
              Read More
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
              {related.map((p) => (
                <Box
                  key={p.slug}
                  component={Link}
                  to={`/blog/${p.slug}`}
                  sx={{
                    textDecoration: "none",
                    display: "flex", flexDirection: "column", gap: 1.5,
                    p: 3, borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(26,26,26,0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": { borderColor: "rgba(198,40,40,0.25)", transform: "translateY(-4px)" },
                  }}
                >
                  <Box sx={{ height: 120, borderRadius: 2, overflow: "hidden", bgcolor: "rgba(40,40,40,0.5)" }}>
                    <Box sx={{ width: "100%", height: "100%", backgroundImage: `url(${p.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  </Box>
                  <Typography sx={{ fontSize: 11, color: "primary.main", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                    {p.category}
                  </Typography>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "white", lineHeight: 1.3 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{p.date}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default BlogPost;