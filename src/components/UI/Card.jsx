import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const MotionBox = motion(Box);

const Card = ({ title, excerpt, date, readTime, category, image, link, index = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
    component={Link}
    to={link}
    sx={{
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      overflow: "hidden",
      background: "rgba(26,26,26,0.6)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.05)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",

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
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(135deg, rgba(198,40,40,0.2), rgba(142,0,0,0.2))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.6s ease",
        }}
      />
      <Chip
        label={category}
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
        gap: 2,
        flexGrow: 1,
      }}
    >
      {/* Meta */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
          {date}
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
          <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
            {readTime}
          </Typography>
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
        {title}
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
        {excerpt}
      </Typography>

      {/* Read more */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "primary.main",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 0.5,
          pt: 1,
        }}
      >
        READ ARTICLE
        <ArrowForwardIcon
          className="arrow"
          sx={{ fontSize: 18, transition: "transform 0.3s ease" }}
        />
      </Box>
    </Box>
  </MotionBox>
);

export default Card;