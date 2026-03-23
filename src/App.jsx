import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import BlogPost from "./features/blog/BlogPost";
import Gallery from "./features/gallery/Gallery";
import Info from "./features/info/Info";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
