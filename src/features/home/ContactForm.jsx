import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const text = encodeURIComponent(`Hello! My name is ${name}. ${message}`);
    window.open(`https://wa.me/559892259817?text=${text}`, '_blank');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 600,
        mx: 'auto',
        my: 6,
        px: 2,
      }}
    >
      <TextField
        label="Your Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Your Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" color="secondary" onClick={sendMessage}>
        Send via WhatsApp
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href={`mailto:tattoo@example.com?subject=Message from ${name}&body=${message}`}
      >
        Send via Email
      </Button>
    </Box>
  );
};

export default ContactForm;
