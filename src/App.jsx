import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Box } from "@mui/material";
import Layout from "./components/Layout";

// Route-level code splitting — each page loads only when first visited
const Home    = lazy(() => import("./features/home/Home"));
const About   = lazy(() => import("./features/about/About"));
const Blog    = lazy(() => import("./features/blog/Blog"));
const BlogPost = lazy(() => import("./features/blog/BlogPost"));
const Gallery = lazy(() => import("./features/gallery/Gallery"));
const Info    = lazy(() => import("./features/info/Info"));

// Invisible fallback — matches site background so there's no flash
const PageLoader = () => (
  <Box sx={{ minHeight: "100vh", bgcolor: "#0a0a0a" }} />
);

const PAGE_TITLES = {
  "/":        "Wagno Ink | Tatuador em Porto, Portugal",
  "/about":   "Sobre Wagno | Tatuador & Artista em Porto",
  "/gallery": "Galeria de Tatuagens | Wagno Ink — Porto",
  "/info":    "Informações & Localização | Wagno Ink",
  "/blog":    "Blog | Wagno Ink",
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Update page title for SEO — falls back to the default set in index.html
    const title = PAGE_TITLES[pathname] ?? PAGE_TITLES["/"];
    document.title = title;
  }, [pathname]);
  return null;
};

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ minHeight: "100%" }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/"           element={<Home />}     />
            <Route path="/about"      element={<About />}    />
            <Route path="/blog"       element={<Blog />}     />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gallery"    element={<Gallery />}  />
            <Route path="/info"       element={<Info />}     />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    // reducedMotion="user" reads prefers-reduced-motion and disables
    // all Framer Motion animations automatically for users who need it
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
