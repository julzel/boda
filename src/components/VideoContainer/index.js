import { Box, Container } from '@mui/material';

function VideoContainer({ videoUrl }) {
  return (
    <Container maxWidth="md" sx={{ px: 0, py: 4 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // for 16:9 aspect ratio
          overflow: 'hidden',
          opacity: 0.625,
        }}
      >
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={videoUrl}
          muted
          autoPlay
          loop
          playsInline
        />
      </Box>
    </Container>
  );
}

export default VideoContainer;
