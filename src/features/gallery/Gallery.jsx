import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { typeScale } from "../../styles/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const MotionBox = motion(Box);

const images = [
  {
    src: "/artist-images/Tattoos/7.webp",
    category: "Realism",
    title: "Star Guardian — League of Legends",
  },
  {
    src: "/artist-images/Tattoos/16.webp",
    category: "Realism",
    title: "Attack on Titan — Levi Ackerman",
  },
  {
    src: "/artist-images/Tattoos/34.webp",
    category: "Blackwork",
    title: "Black Dragon Shoulder",
  },
  {
    src: "/artist-images/Tattoos/33.webp",
    category: "Realism",
    title: "Greek Temple Sleeve",
  },
  {
    src: "/artist-images/Tattoos/17.webp",
    category: "Realism",
    title: "Dark Character Portrait",
  },
  {
    src: "/artist-images/Tattoos/18.webp",
    category: "Realism",
    title: "Elden Ring - Malenia",
  },
  {
    src: "/artist-images/Tattoos/29.webp",
    category: "Blackwork",
    title: "Crystal Spider & Web",
  },
  {
    src: "/artist-images/Tattoos/26.webp",
    category: "Realism",
    title: "Warrior",
  },
  {
    src: "/artist-images/Tattoos/31.webp",
    category: "Realism",
    title: "Fantasy Anime Duo",
  },
  {
    src: "/artist-images/Tattoos/32.webp",
    category: "Realism",
    title: "Warrior Leg Sleeve",
  },
  {
    src: "/artist-images/Tattoos/21.webp",
    category: "Fine Line",
    title: "Dagger & Butterfly",
  },
  {
    src: "/artist-images/Tattoos/2.webp",
    category: "Realism",
    title: "Portrait & Rose",
  },
  {
    src: "/artist-images/Tattoos/6.webp",
    category: "Realism",
    title: "Warrior Portrait",
  },
  {
    src: "/artist-images/Tattoos/3.webp",
    category: "Fine Line",
    title: "Snake & Peonies",
  },
  {
    src: "/artist-images/Tattoos/8.webp",
    category: "Blackwork",
    title: "Rose & Mandala Shoulder",
  },
  {
    src: "/artist-images/Tattoos/9.webp",
    category: "Blackwork",
    title: "Manga Panel Ankle Band",
  },
  {
    src: "/artist-images/Tattoos/10.webp",
    category: "Realism",
    title: "Princess Zelda — Legend of Zelda",
  },
  {
    src: "/artist-images/Tattoos/12.webp",
    category: "Realism",
    title: "Lilith — Diablo IV",
  },
  {
    src: "/artist-images/Tattoos/25.webp",
    category: "Realism",
    title: "Veiled Mystical Portrait",
  },
  {
    src: "/artist-images/Tattoos/28.webp",
    category: "Realism",
    title: "Armored Warrior",
  },
  {
    src: "/artist-images/Tattoos/30.webp",
    category: "Realism",
    title: "Anime Character",
  },
  {
    src: "/artist-images/Tattoos/14.webp",
    category: "Blackwork",
    title: "Attack on Titan — Eren Armband",
  },
  {
    src: "/artist-images/Tattoos/23.webp",
    category: "Blackwork",
    title: "Lotus Mandala Hand",
  },
  {
    src: "/artist-images/Tattoos/27.webp",
    category: "Realism",
    title: "Demon Slayer Character",
  },
  {
    src: "/artist-images/Tattoos/4.webp",
    category: "Blackwork",
    title: "Jujutsu Kaisen — Toji Fushiguro",
  },
  {
    src: "/artist-images/Tattoos/5.webp",
    category: "Blackwork",
    title: "Dragon Ball — Super Saiyans",
  },
  {
    src: "/artist-images/Tattoos/11.webp",
    category: "Blackwork",
    title: "Umbreon — Pokémon",
  },
  {
    src: "/artist-images/Tattoos/20.webp",
    category: "Blackwork",
    title: "One Piece — Monkey D. Luffy",
  },
  {
    src: "/artist-images/Tattoos/24.webp",
    category: "Realism",
    title: "Portrait with Cherry Blossoms",
  },
  {
    src: "/artist-images/Tattoos/13.webp",
    category: "Realism",
    title: "Jujutsu Kaisen — Toji Fushiguro",
  },
  {
    src: "/artist-images/Tattoos/15.webp",
    category: "Realism",
    title: "Person & Dog at Sunset",
  },
];

// I render the lightbox with createPortal so it mounts directly on document.body.
// This way it's always on top, outside of any overflow:hidden or z-index stacking context.
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const img = images[index];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

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
        <Box
          component="button"
          aria-label="Close image"
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

        <Box
          component="button"
          aria-label="Previous image"
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
            zIndex: 10,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
        </Box>

        <Box
          component="button"
          aria-label="Next image"
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
            zIndex: 10,
            transition: "all 0.2s",
            "&:hover": { background: "rgba(255,255,255,0.15)" },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 20 }} />
        </Box>

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
    document.body,
  );
};

const Gallery = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [shuffledOrder, setShuffledOrder] = useState(() =>
    images.map((_, i) => i),
  );
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const hasHistoryEntry = useRef(false);

  // I listen for the browser's popstate event (triggered by the back button on mobile).
  // When the lightbox is open and the user presses back, this catches it and closes the lightbox
  // instead of navigating away from the gallery page.
  useEffect(() => {
    const handlePopState = () => {
      hasHistoryEntry.current = false;
      setLightboxIndex(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Fisher-Yates shuffle — I go backwards through the array and swap each item
  // with a randomly chosen item before it. This gives a truly random order,
  // unlike sorting by Math.random() which is biased.
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

  // When the lightbox opens, I push a fake entry into the browser history.
  // This gives the phone's back button "something to go back from", so it closes
  // the lightbox instead of leaving the page entirely.
  const openLightbox = (i) => {
    setLightboxIndex(i);
    window.history.pushState({ lightboxOpen: true }, "");
    hasHistoryEntry.current = true;
  };

  // When closing via the close button, I also clean up the fake history entry.
  // history.back() triggers popstate (handled above), which sets lightboxIndex to null —
  // that's fine, it's already null here, so it's a harmless no-op.
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (hasHistoryEntry.current) {
      hasHistoryEntry.current = false;
      window.history.back();
    }
  }, []);

  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + displayed.length) % displayed.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % displayed.length);

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
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
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
          pointerEvents: "none", // prevents the iOS long-press "Save Image" menu from appearing
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
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2.5,
        }}
      >
        <Typography
          sx={{
            fontSize: typeScale.heading,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
          }}
        >
          {img.title}
        </Typography>
      </Box>
    </MotionBox>
  );

  return (
    <Box
      id="page-gallery"
      sx={{
        minHeight: "100vh",
        pt: { xs: "88px", md: "96px" },
        pb: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, md: 6 },
      }}
    >
      <Box
        id="gallery-header"
        sx={{
          maxWidth: 1400,
          mx: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: { md: 6 },
          pt: { xs: 6, md: 8 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
          >
            <Typography
              sx={{
                fontSize: typeScale.label,
                fontWeight: 700,
                letterSpacing: 4,
                color: "accent.main",
                textTransform: "uppercase",
              }}
            >
              {t("gallery.label")}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.05 }}>
              {t("gallery.title")}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: typeScale.body,
                lineHeight: 1.7,
                maxWidth: 480,
              }}
            >
              {t("gallery.description")}
            </Typography>
          </MotionBox>

          <Box
            component="button"
            onClick={handleShuffle}
            sx={{
              background: alpha(theme.palette.accent.main, 0.07),
              border: `1px solid ${alpha(theme.palette.accent.main, 0.22)}`,
              color: "text.primary",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontSize: typeScale.caption,
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
                borderColor: alpha(theme.palette.accent.main, 0.38),
                background: alpha(theme.palette.accent.main, 0.12),
              },
            }}
          >
            <ShuffleIcon sx={{ fontSize: 16 }} /> {t("gallery.shuffle")}
          </Box>
        </Box>

        {/* Decorative floating frames on the right — desktop only, hidden on mobile */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            height: 240,
            position: "relative",
          }}
        >
          {[
            {
              w: 140,
              h: 170,
              rotate: -9,
              x: -70,
              y: 10,
              dur: 4.8,
              delay: 0,
              border: alpha(theme.palette.accent.main, 0.44),
              src: images[0].src,
              rotateAnim: [-9, -7, -9],
            },
            {
              w: 115,
              h: 145,
              rotate: 3,
              x: 5,
              y: -15,
              dur: 5.5,
              delay: 0.6,
              border: "rgba(255,255,255,0.35)",
              src: images[5].src,
              rotateAnim: [3, 5, 3],
            },
            {
              w: 125,
              h: 155,
              rotate: 13,
              x: 70,
              y: 5,
              dur: 4.2,
              delay: 1.1,
              border: alpha(theme.palette.accent.main, 0.45),
              src: images[10].src,
              rotateAnim: [13, 11, 13],
            },
          ].map((f, i) => (
            <MotionBox
              key={i}
              animate={{
                y: [f.y, f.y - 10, f.y],
                rotate: f.rotateAnim,
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: f.dur,
                repeat: Infinity,
                delay: f.delay,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                width: f.w,
                height: f.h,
                border: `1.5px solid ${f.border}`,
                borderRadius: 2,
                overflow: "hidden",
                transform: `translateX(${f.x}px)`,
                boxShadow:
                  i === 0
                    ? `0 8px 32px ${alpha(theme.palette.accent.main, 0.2)}`
                    : `0 8px 24px rgba(0,0,0,0.35)`,
              }}
            >
              <Box
                component="img"
                src={f.src}
                alt=""
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </MotionBox>
          ))}
        </MotionBox>
      </Box>

      {/* Masonry grid — images are split into columns by index % numColumns.
          Each column is offset vertically (pt) to create the staggered brick-wall effect. */}
      <Box id="gallery-grid" sx={{ maxWidth: 1400, mx: "auto", width: "100%" }}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={shuffledOrder.join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                      renderCard(img, rowI * 3 + ci, rowI, ci, {
                        tall: 620,
                        short: 480,
                      }),
                    )}
                </Box>
              ))}
            </Box>

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
                      renderCard(img, rowI * 2 + ci, rowI, ci, {
                        tall: 360,
                        short: 280,
                      }),
                    )}
                </Box>
              ))}
            </Box>
          </MotionBox>
        </AnimatePresence>
      </Box>

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
