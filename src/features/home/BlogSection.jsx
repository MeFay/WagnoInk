import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const MotionBox = motion(Box);

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

const BlogSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 2, md: 6 },
        position: "relative",
        display: "flex", // 🔥 Flex container
        flexDirection: "column",
        gap: { xs: 8, md: 12 }, // 🔥 Gap between header, grid, and button
      }}
    >
      {/* Section Header */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{
          width: "100%", // 🔥 Full width
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 🔥 Centers children
          textAlign: "center",
          gap: 2, // 🔥 Gap between elements
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, md: 13 },
            fontWeight: 600,
            letterSpacing: 3,
            color: "primary.main",
            textTransform: "uppercase",
            maxWidth: 700, // 🔥 Constraint on element itself
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
            maxWidth: 700, // 🔥 Constraint on element itself
          }}
        >
          Latest from the Blog
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.7,
            maxWidth: 700, // 🔥 Constraint on element itself
          }}
        >
          Expert advice, tattoo care tips, and stories from the studio.
        </Typography>
      </MotionBox>

      {/* Blog Grid */}
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
          width: "100%", // 🔥 Full width
          alignSelf: "center", // 🔥 Center the grid
        }}
      >
        {blogPosts.map((post, index) => (
          <MotionBox
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            component="a"
            href={post.link}
            sx={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              overflow: "hidden",
              background:
                "linear-gradient(135deg, rgba(40,40,40,0.8), rgba(26,26,26,0.6))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              position: "relative",

              "&:hover": {
                transform: "translateY(-8px)",
                borderColor: "rgba(198,40,40,0.3)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              },

              "&:hover .blog-image": {
                transform: "scale(1.05)",
              },

              "&:hover .arrow": {
                transform: "translateX(4px)",
              },
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
                  backgroundImage: post.image
                    ? `url(${post.image})`
                    : "linear-gradient(135deg, rgba(198,40,40,0.2), rgba(142,0,0,0.2))",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.6s ease",
                }}
              />

              {/* Category Badge */}
              <Chip
                label={post.category}
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  bgcolor: "rgba(198,40,40,0.9)",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 600,
                  height: 28,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </Box>

            {/* Content */}
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2, // 🔥 Gap between all elements
                flexGrow: 1,
              }}
            >
              {/* Meta info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2, // 🔥 Gap between meta items
                  color: "text.secondary",
                  fontSize: 13,
                }}
              >
                <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                  {post.date}
                </Typography>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.3)",
                  }}
                />
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontSize: 13 }}>{post.readTime}</Typography>
                </Box>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 19, md: 21 },
                  color: "white",
                  lineHeight: 1.3,
                  letterSpacing: 0.3,
                }}
              >
                {post.title}
              </Typography>

              {/* Excerpt */}
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {post.excerpt}
              </Typography>

              {/* Read More Link */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "primary.main",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  pt: 1, // 🔥 Padding-top instead of margin-top
                }}
              >
                READ ARTICLE
                <ArrowForwardIcon
                  className="arrow"
                  sx={{
                    fontSize: 18,
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            </Box>
          </MotionBox>
        ))}
      </Box>

      {/* View All Posts Link */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        sx={{
          width: "100%", // 🔥 Full width
          display: "flex",
          justifyContent: "center", // 🔥 Center the button
        }}
      >
        <Box
          component="a"
          href="/blog"
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
};

export default BlogSection;
