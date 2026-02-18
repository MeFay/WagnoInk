import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: { xs: 2, md: 6 }, // horizontal padding
        pt: { xs: 4, md: 8 }, // top padding
        pb: { xs: 4, md: 8 }, // bottom padding
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          mb: 2,
          color: 'text.primary',
        }}
      >
        WAGNO TATTOO
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          maxWidth: 500,
          color: 'text.secondary',
        }}
      >
        Unique tattoos designed for your story. Explore our gallery for inspiration.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/gallery')}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          fontWeight: 700,
          fontSize: 16,
          '&:hover': { bgcolor: 'secondary.dark' },
        }}
      >
        View Gallery
      </Button>
    </Box>
  );
};

export default HeroSection;
