import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";

import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import BlogPost from "./features/blog/BlogPost";
import Gallery from "./features/gallery/Gallery";
import Info from "./features/info/Info";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
        <Routes location={location}>
          <Route path="/"           element={<Home />}     />
          <Route path="/about"      element={<About />}    />
          <Route path="/blog"       element={<Blog />}     />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery"    element={<Gallery />}  />
          <Route path="/info"       element={<Info />}     />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
