import { Box } from "@mui/material";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion(Box);

// Shared full-screen image lightbox.
// images — array of { src, title } (title is used as alt text)
// index  — currently shown image index (null = closed)
// onClose / onPrev / onNext — control callbacks
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
        {/* Close */}
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

        {/* Prev */}
        <Box
          component="button"
          aria-label="Previous image"
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
          aria-label="Next image"
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
    document.body,
  );
};

export default Lightbox;
