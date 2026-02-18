import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './features/home/Home';
import About from './features/about/About';
import Blog from './features/blog/Blog';
import Gallery from './features/gallery/Gallery';
import Info from './features/info/Info';



function App() {
  return (
    <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;