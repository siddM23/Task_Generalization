import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight={700} align="center">
            YouTube Comments Summarizer
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" mb={3}>
            Instantly summarize your video’s comment section and chat with your audience’s collective voice.
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <TextField label="YouTube Video URL" variant="outlined" sx={{ width: '60%' }} />
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Summarize
            </Button>
          </Box>
        </Paper>
        <Box mb={4}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight={600} mb={1}>Summary</Typography>
            <Typography color="text.secondary">(Summary of comments will appear here.)</Typography>
          </Paper>
        </Box>
        <Box>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight={600} mb={1}>Audience Chat</Typography>
            <Typography color="text.secondary">(Chat interface will appear here.)</Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default App;
