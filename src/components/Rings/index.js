import React from 'react';
import { Box } from '@mui/material';

import './Rings.scss';

const Rings = () => {
  return (
    <Box className="ring-container" pt={2}>
      <div class="ring ring1"></div>
      <div class="ring ring2"></div>
    </Box>
  );
};

export default Rings;
