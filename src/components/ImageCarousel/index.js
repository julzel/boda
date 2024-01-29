import React, { useState, useEffect } from 'react';
import { Dialog, IconButton, DialogContent } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageCarousel = ({ images, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Effect to close the carousel if all images are deleted
  useEffect(() => {
    if (images.length === 0) {
      handleClose();
    }
  }, [images]);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (images.length > 1) {
      // Check if there's more than one image
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 1) {
      // Check if there's more than one image
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length
      );
    }
  };

  const handleDelete = (index) => {
    onDelete(index);
    // After deletion, if there are no images left, close the carousel.
    if (images.length <= 1) {
      handleClose();
    } else {
      // Move to the next image if the current one is deleted
      handleNext();
    }
  };

  return (
    <>
      <div>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Preview ${index}`}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>
      {images.length > 0 && (
        <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
          <DialogContent>
            {images.length > 1 && (
              <IconButton onClick={handlePrev}>
                <NavigateBeforeIcon />
              </IconButton>
            )}
            <img
              src={images[currentImage]}
              alt={`${currentImage}`}
              style={{
                maxHeight: '80vh',
                maxWidth: '100%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            {images.length > 1 && (
              <IconButton onClick={handleNext}>
                <NavigateNextIcon />
              </IconButton>
            )}
            <IconButton
              onClick={() => handleDelete(currentImage)}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              <DeleteIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ImageCarousel;
