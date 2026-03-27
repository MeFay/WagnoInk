import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const AMBER = "#c8923a";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const MotionBox = motion(Box);

// ── Data ─────────────────────────────────────────────────────────────
const images = [
  {
    src: "/artist-images/Tattoos/7.webp",
    category: "Realism",
    title: "Character Sleeve",
  },
  {
    src: "/artist-images/Tattoos/16.webp",
    category: "Realism",
    title: "Portrait",
  },
  {
    src: "/artist-images/Tattoos/34.webp",
    category: "Blackwork",
    title: "Geometric Piece",
  },
  {
    src: "/artist-images/Tattoos/33.webp",
    category: "Fine Line",
    title: "Fine Line Floral",
  },
  {
    src: "/artist-images/Tattoos/17.webp",
    category: "Blackwork",
    title: "Dark Sleeve",
  },
  {
    src: "/artist-images/Tattoos/18.webp",
    category: "Realism",
    title: "Realistic Bear",
  },
  {
    src: "/artist-images/Tattoos/29.webp",
    category: "Fine Line",
    title: "Minimal Line Work",
  },
  {
    src: "/artist-images/Tattoos/26.webp",
    category: "Realism",
    title: "Full Back Piece",
  },
  {
    src: "/artist-images/Tattoos/31.webp",
    category: "Blackwork",
    title: "Tribal Design",
  },
  {
    src: "/artist-images/Tattoos/32.webp",
    category: "Fine Line",
    title: "Script Tattoo",
  },
  {
    src: "/artist-images/Tattoos/21.webp",
    category: "Realism",
    title: "Animal Portrait",
  },
  {
    src: "/artist-images/Tattoos/2.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/6.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/3.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/8.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/9.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/10.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
   {
    src: "/artist-images/Tattoos/12.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/25.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/28.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/30.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/14.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/23.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/27.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
      {
    src: "/artist-images/Tattoos/4.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/5.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/11.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
       {
    src: "/artist-images/Tattoos/20.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/24.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
     {
    src: "/artist-images/Tattoos/13.webp",
    category: "Blackwork",
    title: "Dark Illustration",
  },
];

// ── Lightbox ─────────────────────────────────────────────────────────
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const img = images[index];
  return createPortal(
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
            zIndex: 10,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </Box>

        {/* Prev */}
        <Box
          component="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
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
            zIndex: 10,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
        </Box>

        {/* Next */}
        <Box
          component="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
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
            zIndex: 10,
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
            zIndex: 0,
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
        </MotionBox>
      </MotionBox>
    </AnimatePresence>,
    document.body
  );
};

// ── Gallery ───────────────────────────────────────────────────────────
const Gallery = () => {
  const [shuffledOrder, setShuffledOrder] = useState(() => images.map((_, i) => i));
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleShuffle = () => {
    setShuffledOrder((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
  };

  const displayed = shuffledOrder.map((i) => images[i]);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + displayed.length) % displayed.length);
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % displayed.length);

  const renderCard = (img, globalIndex, rowI, ci, heights) => (
    <MotionBox
      key={img.src}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: globalIndex * 0.05 }}
      onClick={() => openLightbox(globalIndex)}
      sx={{
        height: (rowI + ci) % 2 === 0 ? heights.short : heights.tall,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        cursor: "zoom-in",
        flexShrink: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
        },
        "& img": {
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        },
        "&:hover img": { transform: "scale(1.04)" },
        "&:hover .gallery-overlay": { opacity: 1 },
      }}
    >
      <Box component="img" src={img.src} alt={img.title} loading="lazy" />
      <Box
        className="gallery-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2.5,
        }}
      >
        <Typography sx={{ fontSize: 15, fontWeight: 800, color: "white", lineHeight: 1.2 }}>
          {img.title}
        </Typography>
      </Box>
    </MotionBox>
  );

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
      <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", alignItems: "center", gap: { md: 6 }, pt: { xs: 6, md: 8 }, mb: { xs: 5, md: 7 }, px: { xs: 1, sm: 2 } }}>

        {/* Left: text + shuffle */}
        <Box sx={{ flex: 1 }}>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: AMBER, textTransform: "uppercase", mb: 1 }}>
              Portfolio
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, lineHeight: 1.05 }}>
              The Work
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.7, mt: 1.5, mb: 3, maxWidth: 480 }}>
              Every piece drawn from scratch — no flash, no templates, no compromises. {images.length} works in the portfolio.
            </Typography>
          </MotionBox>

          {/* Shuffle button */}
          <Box
            component="button"
            onClick={handleShuffle}
            sx={{
              background: alpha(AMBER, 0.07),
              border: `1px solid ${alpha(AMBER, 0.22)}`,
              color: "text.primary",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "all 0.2s ease",
              alignSelf: { xs: "flex-start", md: "auto" },
            "&:hover": {
              borderColor: alpha(AMBER, 0.38),
              background: alpha(AMBER, 0.12),
            },
          }}
        >
          <ShuffleIcon sx={{ fontSize: 16 }} /> Shuffle
          </Box>
        </Box>

        {/* Right: floating photo frames */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ flex: 1, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center", height: 240, position: "relative" }}
        >
          {[
            { w: 140, h: 170, rotate: -9,  x: -70, y: 10,  dur: 4.8, delay: 0,   border: alpha(AMBER, 0.44),             src: images[0].src,  rotateAnim: [-9, -7, -9]  },
            { w: 115, h: 145, rotate:  3,  x:   5, y: -15, dur: 5.5, delay: 0.6, border: "rgba(255,255,255,0.35)", src: images[5].src,  rotateAnim: [3, 5, 3]     },
            { w: 125, h: 155, rotate: 13,  x:  70, y: 5,   dur: 4.2, delay: 1.1, border: "rgba(200,146,58,0.45)",  src: images[10].src, rotateAnim: [13, 11, 13]  },
          ].map((f, i) => (
            <MotionBox
              key={i}
              animate={{ y: [f.y, f.y - 10, f.y], rotate: f.rotateAnim, opacity: [0.85, 1, 0.85] }}
              transition={{ duration: f.dur, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                width: f.w,
                height: f.h,
                border: `1.5px solid ${f.border}`,
                borderRadius: 2,
                overflow: "hidden",
                transform: `translateX(${f.x}px)`,
                boxShadow: i === 0
                  ? `0 8px 32px rgba(200,146,58,0.2)`
                  : `0 8px 24px rgba(0,0,0,0.35)`,
              }}
            >
              <Box
                component="img"
                src={f.src}
                alt=""
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </MotionBox>
          ))}
        </MotionBox>
      </Box>

      {/* ── Masonry ── */}
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={shuffledOrder.join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Desktop: 3 staggered columns */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {[0, 1, 2].map((ci) => (
                <Box
                  key={ci}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    pt: ["0px", "72px", "36px"][ci],
                  }}
                >
                  {displayed
                    .filter((_, i) => i % 3 === ci)
                    .map((img, rowI) =>
                      renderCard(img, rowI * 3 + ci, rowI, ci, { tall: 620, short: 480 })
                    )}
                </Box>
              ))}
            </Box>

            {/* Mobile: 2 staggered columns */}
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1.5 }}>
              {[0, 1].map((ci) => (
                <Box
                  key={ci}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    pt: ci === 1 ? "52px" : "0px",
                  }}
                >
                  {displayed
                    .filter((_, i) => i % 2 === ci)
                    .map((img, rowI) =>
                      renderCard(img, rowI * 2 + ci, rowI, ci, { tall: 360, short: 280 })
                    )}
                </Box>
              ))}
            </Box>
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={displayed}
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
