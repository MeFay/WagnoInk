import React from 'react';
import { Typography, Container } from '@mui/material';

const Blog = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Blog Page
      </Typography>
      <Typography variant="body1">
        Blog posts...
      </Typography>
    </Container>
  );
};

export default Blog;