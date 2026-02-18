import React from 'react';
import { Typography, Container } from '@mui/material';

const Info = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Info Page
      </Typography>
      <Typography variant="body1">
        Contact information and studio details...
      </Typography>
    </Container>
  );
};

export default Info;