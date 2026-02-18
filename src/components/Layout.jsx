import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // garante que o footer fique no fundo
        bgcolor: 'background.default',
      }}
    >
      <Navbar />

      {/* Conteúdo principal */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
