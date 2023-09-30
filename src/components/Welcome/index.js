import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';

import './Welcome.scss';

const Welcome = ({ welcomeRef }) => {
  return (
    <div ref={welcomeRef}>
      <Container maxWidth="md" sx={{ px: 4, py: 8 }}>
        <Box className="welcome">
          <Box
            sx={{
              border: '1px solid white',
            }}
            p={1}
          >
            <Box
              sx={{
                border: '1px solid white',
              }}
              px={2}
              py={4}
            >
              <Divider sx={{ my: 2 }} />
              <Typography variant="h2" component="h1" gutterBottom>
                Yerlin Marquez De la O
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                &amp;
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                Julio Zeledón Vargas
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" component="p" gutterBottom>
                Tienen el agrado de invitarles a la celebración de su boda
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Welcome;
