import React, { useState } from 'react';
import { Button, TextField, Typography, Input, FormControl, InputLabel } from '@mui/material';

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [hashtags, setHashtags] = useState('');

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 3) {
      alert('Solo puedes subir hasta 3 fotos por vez.');
      return;
    }
    setSelectedFiles(files);
  };

  const handleHashtagChange = (event) => {
    setHashtags(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle the file upload process
  };

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Images
      </Typography>
      <form onSubmit={handleSubmit}>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="imageUpload">Select images:</InputLabel>
          <Input
            id="imageUpload"
            type="file"
            inputProps={{ multiple: true }}
            onChange={handleFileChange}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            id="hashtags"
            label="Hashtags"
            variant="outlined"
            value={hashtags}
            onChange={handleHashtagChange}
          />
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default Upload;
