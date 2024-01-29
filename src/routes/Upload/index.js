import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import useUpload from '../../hooks/useUpload';
import ImageCarousel from '../../components/ImageCarousel';

const Upload = () => {
  const {
    images,
    handleFileChange,
    handleHashtagChange,
    handleDelete,
    handleDeleteAll,
    uploadFiles, // Presuming you have this function implemented in the hook
  } = useUpload();

  console.log(images);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await uploadFiles();
      // Handle success, possibly clearing the selection
      handleDeleteAll();
    } catch (error) {
      // Handle errors, possibly with a user notification
      console.error('Upload failed', error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant='h4' gutterBottom>
        Upload Your Images
      </Typography>
      <input
        accept='image/*'
        type='file'
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id='raised-button-file'
      />
      <label htmlFor='raised-button-file'>
        <Button variant='contained' component='span'>
          Choose Images
        </Button>
      </label>
      <form onSubmit={handleSubmit}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              style={{ width: '100px' }}
            />
            <TextField
              label='Hashtags'
              variant='outlined'
              value={image.hashtags.join(' ')}
              onChange={(e) => handleHashtagChange(e.target.value, index)}
              margin='normal'
            />
            <Button onClick={() => handleDelete(index)}>Delete</Button>
          </div>
        ))}
        {images.length > 0 && (
          <Button onClick={handleDeleteAll}>Delete All</Button>
        )}
        <Button type='submit'>Upload</Button>
      </form>
      <ImageCarousel
        images={images.map((img) => img.preview)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Upload;
