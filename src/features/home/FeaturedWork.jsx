import { Box, Typography } from "@mui/material";

const featuredProjects = [
  {
    title: "Dragon Sleeve",
    image: "../public/artist-images/1.png",
    link: "https://www.instagram.com/p/DOVu30vDBoR/?img_index=1",
  },
  {
    title: "Geometric Backpiece",
    image: "../public/artist-images/2.png",
    link: "https://www.instagram.com/p/C_TIlKOpS77/",
  },
];

const FeaturedWork = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        px: { xs: 2, md: 6 },   // horizontal padding
        py: { xs: 4, md: 8 },   // vertical padding
        maxWidth: "1920px",      // optional max width
        mx: "auto",              // center container
      }}
    >
      {featuredProjects.map((project) => (
        <Box
          key={project.title}
          component="a"
          href={project.link}
          target="_blank"
          sx={{
            flex: 1,
            minHeight: { xs: 300, md: 450 }, // smaller height for mobile & desktop
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            position: "relative",
            "&:hover": { opacity: 0.8, transition: "0.3s" },
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              color: "white",
              fontWeight: 700,
              fontSize: 24,
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            {project.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FeaturedWork;
