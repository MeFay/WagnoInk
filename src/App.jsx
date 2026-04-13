import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Box } from "@mui/material";
import Layout from "./components/Layout";

// I lazy-load each page so the browser only downloads the code it needs when that route is first visited.
// This keeps the initial bundle small and makes the site faster to load.
const Home    = lazy(() => import("./features/home/Home"));
const About   = lazy(() => import("./features/about/About"));
const Blog    = lazy(() => import("./features/blog/Blog"));
const BlogPost = lazy(() => import("./features/blog/BlogPost"));
const Gallery = lazy(() => import("./features/gallery/Gallery"));
const Info    = lazy(() => import("./features/info/Info"));

// While a lazy page is loading, I show a blank box that matches the site background.
// This prevents a white flash before the page appears.
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
    // I update the page title on every navigation so each route has its own title for SEO.
    // If a route isn't in the map, it falls back to the home title.
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
    // reducedMotion="user" tells Framer Motion to read the user's OS accessibility setting.
    // If they have "reduce motion" turned on in their device, all animations are disabled automatically.
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
