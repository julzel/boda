import { Container, Button } from '@mui/material';

const CTA = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        px: 4, 
        pb: 8,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        component="a"
        href="https://forms.gle/tJkTiGFm5XiNVtqu8"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.12)', 
          width: '250px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.18)',
          }
        }}
      >
        Confirmar asistencia
      </Button>
    </Container>
  );
};

export default CTA;
