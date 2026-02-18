import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Instagram, Facebook, Twitter, Pinterest } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        {/* Fix 1: Remove 'item' props and update size syntax */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>  {/* Changed from item xs={12} md={4} */}
            <Typography variant="h6" color="primary" gutterBottom>
              Ink & Steel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Custom tattoo artistry in Jakarta. Creating meaningful, 
              permanent art since 2015.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" size="small">
                <Instagram />
              </IconButton>
              <IconButton color="primary" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="primary" size="small">
                <Twitter />
              </IconButton>
              <IconButton color="primary" size="small">
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>  {/* Changed from item xs={12} md={4} */}
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/about" color="text.secondary" display="block" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="/gallery" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Gallery
            </Link>
            <Link href="/blog" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Blog
            </Link>
            <Link href="/info" color="text.secondary" display="block">
              Info & Contact
            </Link>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>  {/* Changed from item xs={12} md={4} */}
            <Typography variant="h6" color="primary" gutterBottom>
              Studio Hours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tuesday - Saturday: 11am - 8pm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sunday - Monday: Closed
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Jl. Contoh No. 123
              <br />
              Porto, Portugal
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Wagno Reis Tattoo. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;