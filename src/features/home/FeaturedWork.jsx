import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const FeaturedWork = () => {
  return (
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
      {/* Secondary accent glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(255,111,0,0.12), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(100px)",
        }}
      />

      {/* Section Header */}
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
          position: "relative",
          zIndex: 1,
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
            maxWidth: 700,
          }}
        >
          Recent Masterpieces
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.7,
            maxWidth: 700,
          }}
        >
          Explore our latest custom tattoo creations, each piece telling a
          unique story.
        </Typography>
      </MotionBox>

      {/* Projects Grid */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {featuredProjects.map((project, index) => (
          <MotionBox
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              height: { xs: "75vh", md: 600 },
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

              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",

              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: `
                  linear-gradient(
                    to top,
                    rgba(0,0,0,0.85) 0%,
                    rgba(0,0,0,0.3) 40%,
                    rgba(0,0,0,0.1) 70%,
                    transparent 100%
                  )
                `,
                transition: "background 0.5s ease",
                zIndex: 1,
              },

              "&::after": {
                content: '""',
                position: "absolute",
                inset: -2,
                borderRadius: 3,
                background:
                  "linear-gradient(135deg, rgba(198,40,40,0.4), rgba(229,57,53,0.4))",
                opacity: 0,
                transition: "opacity 0.5s ease",
                zIndex: 0,
              },

              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 30px 70px rgba(0,0,0,0.7)",
                borderColor: "rgba(198,40,40,0.4)",
              },

              "&:hover::before": {
                background: `
                  linear-gradient(
                    to top,
                    rgba(198,40,40,0.4) 0%,
                    rgba(0,0,0,0.4) 30%,
                    rgba(0,0,0,0.1) 60%,
                    transparent 100%
                  )
                `,
              },

              "&:hover::after": {
                opacity: 1,
              },

              "&:hover .arrow": {
                transform: "translate(4px, -4px)",
                opacity: 1,
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
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  alignSelf: "flex-start",
                  borderRadius: 999,
                  border: "1px solid rgba(198,40,40,0.4)",
                  background: "rgba(198,40,40,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 11, md: 12 },
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    color: "primary.light",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: { xs: 26, md: 34 },
                    letterSpacing: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </Typography>

                <ArrowForwardIcon
                  className="arrow"
                  sx={{
                    color: "primary.main",
                    fontSize: 28,
                    opacity: 0.7,
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 14 },
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                View on Instagram →
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>

      {/* View All Link */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          component="a"
          href="/gallery"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
            textDecoration: "none",
            fontSize: { xs: 14, md: 16 },
            fontWeight: 600,
            letterSpacing: 1,
            transition: "all 0.3s ease",

            "&:hover": {
              gap: 1.5,
              color: "primary.light",
            },
          }}
        >
          EXPLORE FULL GALLERY
          <ArrowForwardIcon sx={{ fontSize: 20 }} />
        </Box>
      </MotionBox>
    </Box>
  );
};

export default FeaturedWork;
