import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion(Box);

// ── Data ─────────────────────────────────────────────────────────────
const images = [
  {
    src: "/artist-images/Tattoos/3.webp", 
    category: "Realism",
    span: "tall",
    title: "Character Sleeve",
  },
  {
    src: "/artist-images/Tattoos/4.webp", 
    category: "Realism",
    span: "normal",
    title: "Portrait",
  },
  {
    src: "/artist-images/Tattoos/5.webp", 
    category: "Blackwork",
    span: "normal",
    title: "Geometric Piece",
  },
  {
    src: "/artist-images/Tattoos/6.webp", 
    category: "Fine Line",
    span: "tall",
    title: "Fine Line Floral",
  },
  {
    src: "/artist-images/Tattoos/15.webp", 
    category: "Blackwork",
    span: "normal",
    title: "Dark Sleeve",
  },
  {
    src: "/artist-images/Tattoos/8.webp", 
    category: "Realism",
    span: "normal",
    title: "Realistic Bear",
  },
  {
    src: "/artist-images/Tattoos/9.webp", 
    category: "Fine Line",
    span: "normal",
    title: "Minimal Line Work",
  },
  {
    src: "/artist-images/Tattoos/10.webp", 
    category: "Realism",
    span: "tall",
    title: "Full Back Piece",
  },
  {
    src: "/artist-images/Tattoos/11.webp", 
    category: "Blackwork",
    span: "normal",
    title: "Tribal Design",
  },
  {
    src: "/artist-images/Tattoos/12.webp", 
    category: "Fine Line",
    span: "normal",
    title: "Script Tattoo",
  },
  {
    src: "/artist-images/Tattoos/13.webp", 
    category: "Realism",
    span: "normal",
    title: "Animal Portrait",
  },
  {
    src: "/artist-images/Tattoos/14.webp", 
    category: "Blackwork",
    span: "tall",
    title: "Dark Illustration",
  },
];

const CATEGORIES = ["All", "Realism", "Blackwork", "Fine Line"];

// ── Lightbox ─────────────────────────────────────────────────────────
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const img = images[index];
  return (
    <AnimatePresence>
      <MotionBox
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          bgcolor: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Close */}
        <Box
          component="button"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            zIndex: 1,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </Box>

        {/* Prev */}
        <Box
          component="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          sx={{
            position: "absolute",
            left: { xs: 12, md: 32 },
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            zIndex: 1,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
        </Box>

        {/* Next */}
        <Box
          component="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          sx={{
            position: "absolute",
            right: { xs: 12, md: 32 },
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            zIndex: 1,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 20 }} />
        </Box>

        {/* Image */}
        <MotionBox
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxWidth: "90vw",
            maxHeight: "88vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={img.src}
            alt={img.title}
            sx={{
              maxWidth: "100%",
              maxHeight: "80vh",
              borderRadius: 3,
              objectFit: "contain",
              boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 16, fontWeight: 700, color: "white" }}>
              {img.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "text.disabled",
                mt: 0.3,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {img.category}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 12, color: "text.disabled" }}>
            {index + 1} / {images.length}
          </Typography>
        </MotionBox>
      </MotionBox>
    </AnimatePresence>
  );
};

// ── Gallery ───────────────────────────────────────────────────────────
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: "88px", md: "96px" },
        pb: { xs: 10, md: 14 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-end" },
          justifyContent: "space-between",
          gap: 3,
          mb: { xs: 6, md: 8 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "primary.main",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 900,
              lineHeight: 1.05,
            }}
          >
            The Work
          </Typography>
        </Box>

        {/* Category filter */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <Box
                key={cat}
                component="button"
                onClick={() => setActiveCategory(cat)}
                sx={{
                  background: isActive
                    ? "rgba(198,40,40,0.15)"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "1px solid rgba(198,40,40,0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                  color: isActive ? "primary.main" : "text.secondary",
                  borderRadius: 999,
                  px: 2.5,
                  py: 0.9,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: 0.5,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(198,40,40,0.3)",
                    color: "white",
                    background: "rgba(198,40,40,0.08)",
                  },
                }}
              >
                {cat}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ── Masonry grid ── */}
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              columns: { xs: 1, sm: 2, lg: 3 },
              columnGap: { xs: 2, md: 3 },
            }}
          >
            {filtered.map((img, i) => (
              <MotionBox
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => openLightbox(i)}
                sx={{
                  breakInside: "avoid",
                  mb: { xs: 2, md: 3 },
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "zoom-in",
                  display: "block",
                  transform: "translateZ(0)",
                  boxShadow: "inset 0 0 0 1px #0a0a0a",
                  // Tall items are ~2x height via paddingTop trick
                  "& img": {
                    display: "block",
                    width: "100%",
                    height: "auto",
                    transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                  },
                  "&:hover img": { transform: "scale(1.04)" },
                  "&:hover .gallery-overlay": { opacity: 1 },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 3,
                      color: "primary.main",
                      textTransform: "uppercase",
                      mb: 0.5,
                    }}
                  >
                    {img.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "white",
                      lineHeight: 1.2,
                    }}
                  >
                    {img.title}
                  </Typography>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </Box>
  );
};

export default Gallery;
