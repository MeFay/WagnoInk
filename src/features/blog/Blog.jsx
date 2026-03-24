import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blogPosts } from "./Blog.data";

const MotionBox = motion.create(Box);

// ── Featured — full width, text overlaid on image ────────────────────
const FeaturedCard = ({ post }) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
    component={Link}
    to={`/blog/${post.slug}`}
    sx={{
      textDecoration: "none",
      position: "relative",
      display: "block",
      borderRadius: 4,
      overflow: "hidden",
      height: { xs: 420, md: 560 },
      cursor: "pointer",
      "&:hover .feat-img": { transform: "scale(1.04)" },
      "&:hover .feat-arrow": { transform: "translateX(6px)" },
      "&:hover .feat-overlay": { opacity: 1 },
    }}
  >
    {/* Background image — using img tag for crisp rendering */}
    <Box
      component="img"
      src={post.coverImage}
      alt={post.title}
      className="feat-img"
      sx={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
        transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
        display: "block",
      }}
    />

    {/* Gradient — strong at bottom, light at top */}
    <Box sx={{
      position: "absolute", inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 100%)",
    }} />

    {/* Hover tint */}
    <Box className="feat-overlay" sx={{
      position: "absolute", inset: 0,
      background: "rgba(198,40,40,0.06)",
      opacity: 0, transition: "opacity 0.4s ease",
    }} />

    {/* Category top-left */}
    <Box sx={{
      position: "absolute", top: 24, left: 24,
      px: 1.5, py: 0.5, borderRadius: 999,
      bgcolor: "rgba(198,40,40,0.9)", backdropFilter: "blur(8px)",
    }}>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: "white", letterSpacing: 0.8 }}>
        {post.category}
      </Typography>
    </Box>

    {/* Featured label top-right */}
    <Box sx={{
      position: "absolute", top: 24, right: 24,
      px: 1.5, py: 0.5, borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.25)",
      backdropFilter: "blur(8px)",
    }}>
      <Typography sx={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: 2, textTransform: "uppercase" }}>
        Featured
      </Typography>
    </Box>

    {/* Text content — bottom */}
    <Box sx={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      p: { xs: 3, md: 5 },
      display: "flex", flexDirection: { xs: "column", md: "row" },
      alignItems: { md: "flex-end" }, justifyContent: "space-between",
      gap: 3,
    }}>
      <Box sx={{ maxWidth: 680 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{post.date}</Typography>
          <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.3)" }} />
          <AccessTimeIcon sx={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }} />
          <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{post.readTime}</Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 900, color: "white", lineHeight: 1.1, mb: 1.5 }}>
          {post.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, display: { xs: "none", sm: "block" } }}>
          {post.excerpt}
        </Typography>
      </Box>

      <Box sx={{
        display: "flex", alignItems: "center", gap: 1.5,
        px: 3, py: 1.5, borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.08)",
        color: "white", fontWeight: 600, fontSize: 14,
        flexShrink: 0, whiteSpace: "nowrap",
        transition: "all 0.3s ease",
      }}>
        Read article
        <ArrowForwardIcon className="feat-arrow" sx={{ fontSize: 17, transition: "transform 0.3s ease" }} />
      </Box>
    </Box>
  </MotionBox>
);

// ── Regular card — taller, more generous ─────────────────────────────
const PostCard = ({ post, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
    component={Link}
    to={`/blog/${post.slug}`}
    sx={{
      textDecoration: "none",
      display: "flex", flexDirection: "column",
      borderRadius: 4, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(22,22,22,0.7)",
      backdropFilter: "blur(10px)",
      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      "&:hover": {
        transform: "translateY(-8px)",
        borderColor: "rgba(198,40,40,0.3)",
        boxShadow: "0 32px 60px rgba(0,0,0,0.5)",
      },
      "&:hover .card-img": { transform: "scale(1.06)" },
    }}
  >
    {/* Image — taller */}
    <Box sx={{ height: { xs: 220, md: 280 }, overflow: "hidden", position: "relative", bgcolor: "rgba(30,30,30,0.8)" }}>
      <Box
        className="card-img"
        sx={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${post.coverImage})`,
          backgroundSize: "cover", backgroundPosition: "center",
          transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {/* Subtle bottom fade */}
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,22,22,0.6) 0%, transparent 50%)" }} />
      <Box sx={{
        position: "absolute", top: 16, left: 16,
        px: 1.5, py: 0.4, borderRadius: 999,
        bgcolor: "rgba(198,40,40,0.85)", backdropFilter: "blur(8px)",
      }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "white", letterSpacing: 0.5 }}>
          {post.category}
        </Typography>
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.date}</Typography>
        <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.15)" }} />
        <AccessTimeIcon sx={{ fontSize: 13, color: "text.disabled" }} />
        <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.readTime}</Typography>
      </Box>

      <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.15rem" }, fontWeight: 800, color: "white", lineHeight: 1.25 }}>
        {post.title}
      </Typography>

      <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.75, flexGrow: 1 }}>
        {post.excerpt}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, color: "primary.main", fontWeight: 600, fontSize: 13, pt: 0.5 }}>
        Read article
        <ArrowForwardIcon sx={{ fontSize: 15 }} />
      </Box>
    </Box>
  </MotionBox>
);

// ── Divider with post count ───────────────────────────────────────────
const SectionDivider = ({ count }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
    <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(255,255,255,0.07)" }} />
    <Typography sx={{ fontSize: 11, color: "text.disabled", letterSpacing: 2, textTransform: "uppercase", flexShrink: 0 }}>
      {count} more {count === 1 ? "post" : "posts"}
    </Typography>
    <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(255,255,255,0.07)" }} />
  </Box>
);

// ── Page ─────────────────────────────────────────────────────────────
const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, pb: { xs: 12, md: 16 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", flexDirection: "column", gap: { xs: 6, md: 8 } }}>

        {/* ── Header ── */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "flex-end" }, justifyContent: "space-between", gap: 3 }}
        >
          <Box>
            <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "primary.main", textTransform: "uppercase", mb: 1 }}>
              Insights & Stories
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, lineHeight: 1 }}>
              The Blog
            </Typography>
          </Box>
          <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 380, pb: { md: 0.5 } }}>
            Tattoo aftercare, style guides, and stories from the studio.
          </Typography>
        </MotionBox>

        {/* ── Featured ── */}
        {featured && <FeaturedCard post={featured} />}

        {/* ── Divider ── */}
        {rest.length > 0 && <SectionDivider count={rest.length} />}

        {/* ── Rest — adaptive columns ── */}
        {rest.length > 0 && (
          <Box sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: rest.length === 1 ? "minmax(0, 560px)" : "repeat(2, 1fr)",
              lg: rest.length >= 3 ? "repeat(3, 1fr)" : rest.length === 1 ? "minmax(0, 560px)" : "repeat(2, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mx: rest.length === 1 ? "auto" : 0,
          }}>
            {rest.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default Blog;