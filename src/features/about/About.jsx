import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        About the artist...
      </Typography>
    </Container>
  );
};

export default About;