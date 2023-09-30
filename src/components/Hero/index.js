import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined';

import SmallHeroImage from '../../assets/images/gigi-julio-small.png';
import LargeHeroImage from '../../assets/images/gigi-julio-large.png';
import PulsatingElement from '../PulsatingElement';

import './Hero.scss';

const textColor = 'white';

const Hero = ({ onViewMore }) => {
  // destructuring the props to get the function
  return (
    <Box position="relative" className="hero">
      <Box
        sx={{ display: { xl: 'none', xs: 'block' } }}
        className="hero-image"
        style={{ backgroundImage: `url(${SmallHeroImage})` }}
      />
      <Box
        sx={{ display: { xl: 'block', xs: 'none' } }}
        className="hero-image"
        style={{ backgroundImage: `url(${LargeHeroImage})` }}
      />
      <div className="hero-overlay" />
      <Box
        p={2}
        sx={{
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
      >
        <Typography
          sx={{ color: textColor, textShadow: '2px 2px 4px rgba(20, 20, 20, 0.7)' }}
          variant="h2"
          component="h1"
          textAlign="center"
          mb={2}
        >
          Gigi &amp; Julio
        </Typography>
        <Typography
          sx={{ color: textColor, textShadow: '2px 2px 4px rgba(20, 20, 20, 0.7)' }}
          variant="h1"
          component="h2"
          textAlign="center"
        >
          La boda
        </Typography>
        <Box
          sx={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
          }}
        >
          <PulsatingElement>
            <IconButton size="large" aria-label="Ver más" onClick={onViewMore}>
              <JoinFullOutlinedIcon sx={{ color: textColor }} />
            </IconButton>
          </PulsatingElement>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
