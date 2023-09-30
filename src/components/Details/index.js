import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

import './Details.scss';

const textColor = 'white';

const Title = ({ children }) => (
  <Typography
    variant="h5"
    component="h3"
    gutterBottom
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    {children}
  </Typography>
);

const Details = () => {
  return (
    <Container maxWidth="md" className="details" sx={{ p: 4 }}>
      <Box py={2}>
        <Title>
          <PlaceIcon sx={{ color: textColor }} />
          Lugar:
        </Title>
        <Typography variant="body1" component="p" gutterBottom>
          La Casona del Cafetal <br />
          Cachí, Cartago
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Title>
          <CalendarMonthIcon sx={{ color: textColor }} />
          Fecha:
        </Title>
        <Typography variant="body1" component="p" gutterBottom>
          17 de febrero de 2024
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Title>
          <AccessAlarmsIcon sx={{ color: textColor }} />
          Hora:
        </Title>
        <Typography variant="body1" component="p" gutterBottom>
          2:30 p.m.
        </Typography>
      </Box>
    </Container>
  );
};

export default Details;
