import React from 'react';
import { Typography, Container } from '@mui/material';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Gallery Page
      </Typography>
      <Typography variant="body1">
        Photo gallery...
      </Typography>
    </Container>
  );
};

export default Gallery;