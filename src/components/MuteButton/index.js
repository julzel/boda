import React from 'react';
import { Box, Fab } from '@mui/material';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const MuteButton = ({ handleToggleMute, isMuted }) => {
  return (
    <Box
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
        }}
      >
        <Fab
          size="small"
          color="tertiary"
          aria-label="add"
          onClick={handleToggleMute}
          sx={{ transform: 'scale(0.7)' }}
        >
          {isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
        </Fab>
      </Box>
  );
}
 
export default MuteButton;