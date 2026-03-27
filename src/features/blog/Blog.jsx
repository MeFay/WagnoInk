import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blogPosts } from "./Blog.data";

const MotionBox = motion.create(Box);

const AMBER = "#c8923a";
const ALL = "All";
const getCategories = (posts) => [ALL, ...new Set(posts.map((p) => p.category))];

// ── Animated header decoration ─────────────────────────────────────────
const BlogDecoration = () => (
  <MotionBox
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    sx={{ flex: 1, display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "flex-end", gap: 1.5, justifyContent: "center", py: 2 }}
  >
    {[
      { w: "72%", amber: true,  delay: 0    },
      { w: "88%", amber: false, delay: 0.15 },
      { w: "52%", amber: true,  delay: 0.3  },
      { w: "78%", amber: false, delay: 0.45 },
      { w: "42%", amber: true,  delay: 0.6  },
      { w: "68%", amber: false, delay: 0.75 },
      { w: "58%", amber: true,  delay: 0.9  },
    ].map((line, i) => (
      <MotionBox
        key={i}
        animate={{ scaleX: [1, 0.78, 1] }}
        transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, delay: line.delay + 0.8, ease: "easeInOut" }}
        sx={{ width: line.w, height: "1.5px", borderRadius: 999, bgcolor: line.amber ? alpha(AMBER, 0.33) : "rgba(255,255,255,0.1)", transformOrigin: "right" }}
      />
    ))}
  </MotionBox>
);

// ── Category filter bar ────────────────────────────────────────────────
const CategoryFilter = ({ categories, active, onChange }) => (
  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
    {categories.map((cat) => (
      <Box key={cat} component="button" onClick={() => onChange(cat)}
        sx={{
          background: "none",
          border: active === cat ? "1px solid rgba(198,40,40,0.6)" : "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer", px: 2, py: 0.75, borderRadius: 999,
          fontSize: 12, fontWeight: 600, letterSpacing: 0.5,
          color: active === cat ? "white" : "text.secondary",
          bgcolor: active === cat ? "rgba(198,40,40,0.15)" : "transparent",
          fontFamily: "inherit",
          transition: "all 0.2s ease",
          "&:hover": { borderColor: "rgba(255,255,255,0.35)", color: "text.primary" },
        }}
      >
        {cat}
      </Box>
    ))}
  </Box>
);

// ── Featured card ──────────────────────────────────────────────────────
const FeaturedCard = ({ post }) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
    component={Link} to={`/blog/${post.slug}`}
    sx={{
      textDecoration: "none", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(22,22,22,0.7)", backdropFilter: "blur(10px)",
      minHeight: { xs: "auto", md: 420 }, transition: "all 0.4s ease",
      "&:hover": { borderColor: "rgba(198,40,40,0.3)", boxShadow: "0 32px 60px rgba(0,0,0,0.5)" },
      "&:hover .feat-img": { transform: "scale(1.04)" },
      "&:hover .feat-arrow": { transform: "translateX(6px)" },
    }}
  >
    <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 3, order: { xs: 2, md: 1 } }}>
      <Box>
        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Box sx={{ px: 1.5, py: 0.5, borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)" }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: "text.secondary", letterSpacing: 2, textTransform: "uppercase" }}>Featured</Typography>
          </Box>
          <Box sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: "rgba(198,40,40,0.9)" }}>
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: "text.primary" }}>{post.category}</Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 900, color: "text.primary", lineHeight: 1.15, mb: 2 }}>{post.title}</Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.8 }}>{post.excerpt}</Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
          <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.date}</Typography>
          <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "text.disabled" }} />
          <AccessTimeIcon sx={{ fontSize: 13, color: "text.disabled" }} />
          <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.readTime}</Typography>
        </Box>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "primary.main", fontWeight: 700, fontSize: 14 }}>
          Read article
          <ArrowForwardIcon className="feat-arrow" sx={{ fontSize: 16, transition: "transform 0.3s ease" }} />
        </Box>
      </Box>
    </Box>
    <Box sx={{ position: "relative", overflow: "hidden", height: { xs: 240, md: "auto" }, order: { xs: 1, md: 2 } }}>
      <Box component="img" src={post.coverImage} alt={post.title} className="feat-img"
        sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </Box>
  </MotionBox>
);

// ── Post card ──────────────────────────────────────────────────────────
const PostCard = ({ post, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
    component={Link} to={`/blog/${post.slug}`}
    sx={{
      textDecoration: "none", display: "flex", flexDirection: { xs: "row", md: "column" },
      borderRadius: 3, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(22,22,22,0.7)", backdropFilter: "blur(10px)",
      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      "&:hover": { transform: "translateY(-6px)", borderColor: "rgba(198,40,40,0.3)", boxShadow: "0 24px 48px rgba(0,0,0,0.5)" },
      "&:hover .card-img": { transform: "scale(1.06)" },
    }}
  >
    <Box sx={{ width: { xs: 110, md: "100%" }, height: { xs: "auto", md: 200 }, flexShrink: 0, overflow: "hidden", position: "relative" }}>
      <Box component="img" src={post.coverImage} alt={post.title} className="card-img"
        sx={{ width: "100%", height: { xs: "100%", md: 200 }, objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <Box sx={{ display: { xs: "none", md: "flex" }, position: "absolute", top: 12, left: 12, px: 1.5, py: 0.4, borderRadius: 999, bgcolor: "rgba(198,40,40,0.85)", backdropFilter: "blur(8px)" }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "text.primary" }}>{post.category}</Typography>
      </Box>
    </Box>
    <Box sx={{ p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", gap: { xs: 1, md: 1.5 }, flexGrow: 1 }}>
      <Typography sx={{ display: { xs: "block", md: "none" }, fontSize: 10, fontWeight: 700, color: "primary.main", textTransform: "uppercase", letterSpacing: 1 }}>
        {post.category}
      </Typography>
      <Typography sx={{ fontSize: { xs: "0.9rem", md: "1.05rem" }, fontWeight: 800, color: "text.primary", lineHeight: 1.25 }}>{post.title}</Typography>
      <Typography sx={{ fontSize: 13, color: "text.secondary", lineHeight: 1.7, display: { xs: "none", md: "block" }, flexGrow: 1 }}>{post.excerpt}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "auto" }}>
        <AccessTimeIcon sx={{ fontSize: 12, color: "text.disabled" }} />
        <Typography sx={{ fontSize: 12, color: "text.disabled" }}>{post.readTime}</Typography>
      </Box>
    </Box>
  </MotionBox>
);

// ── Page ──────────────────────────────────────────────────────────────
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const categories = getCategories(blogPosts);
  const filtered = activeCategory === ALL ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, pb: { xs: 10, md: 12 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", flexDirection: "column", gap: { xs: 5, md: 7 } }}>

        {/* ── Header ── */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { md: 6 }, pt: { xs: 6, md: 8 } }}>
          <MotionBox
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Box>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: AMBER, textTransform: "uppercase", mb: 1 }}>
                Insights & Stories
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, lineHeight: 1, mb: 2 }}>
                The Blog
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480 }}>
                Tattoo aftercare, style guides, and stories from the studio.
              </Typography>
            </Box>
            <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
          </MotionBox>

          <BlogDecoration />
        </Box>

        {featured && <FeaturedCard post={featured} />}

        {rest.length > 0 && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(255,255,255,0.07)" }} />
            <Typography sx={{ fontSize: 11, color: "text.disabled", letterSpacing: 2, textTransform: "uppercase", flexShrink: 0 }}>
              {rest.length} more {rest.length === 1 ? "post" : "posts"}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(255,255,255,0.07)" }} />
          </Box>
        )}

        {rest.length > 0 && (
          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: rest.length === 1 ? "minmax(0,560px)" : "repeat(2,1fr)", lg: rest.length >= 3 ? "repeat(3,1fr)" : rest.length === 1 ? "minmax(0,560px)" : "repeat(2,1fr)" },
            gap: { xs: 2, md: 3 },
            mx: rest.length === 1 ? "auto" : 0,
          }}>
            {rest.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
          </Box>
        )}

        {filtered.length === 0 && (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography sx={{ color: "text.disabled", fontSize: 14 }}>No posts in this category yet.</Typography>
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default Blog;
