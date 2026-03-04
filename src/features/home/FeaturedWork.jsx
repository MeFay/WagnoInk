import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const featuredProjects = [
  {
    title: "Dragon Sleeve",
    image: "/artist-images/1.png",
    link: "https://www.instagram.com/p/DOVu30vDBoR/?img_index=1",
  },
  {
    title: "Geometric Backpiece",
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
        py: { xs: 8, md: 14 },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {featuredProjects.map((project) => (
          <Box
            key={project.title}
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              height: { xs: "80vh", md: 520 }, // 🔥 Bigger mobile
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              textDecoration: "none",
              display: "flex",
              alignItems: "flex-end",
              p: 4,
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 1s ease, box-shadow 0.6s ease",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                zIndex: 1,
              },

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              },

              "&:hover::before": {
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))",
              },
            }}
          >
            <Typography
              sx={{
                position: "relative",
                zIndex: 2,
                color: "white",
                fontWeight: 800,
                fontSize: { xs: 24, md: 30 },
                letterSpacing: 1.2,
              }}
            >
              {project.title}
            </Typography>
          </Box>
        ))}
      </MotionBox>
    </Box>
  );
};

export default FeaturedWork;