import { useState } from 'react';

const useUpload = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 3); // Limit to 3 files
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      hashtags: [], // Initialize hashtags as an empty array
    }));
    setImages((prevImages) => [...prevImages, ...newImages]); // Append new images to the existing array
  };

  const handleHashtagChange = (hashtags, index) => {
    // Update hashtags for the image at the specified index
    setImages(
      images.map((img, i) => {
        if (i === index) {
          return { ...img, hashtags: hashtags.split(' ').filter((tag) => tag) }; // Split by space and remove empty strings
        }
        return img;
      })
    );
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDeleteAll = () => {
    images.forEach((image) => URL.revokeObjectURL(image.preview));
    setImages([]);
  };

  const uploadFiles = async () => {
    // FormData is used to build a set of key/value pairs representing form fields and their values,
    // which can then be sent using the fetch API
    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`files`, image.file); // 'files' is the field name the server expects
      formData.append(`hashtags_${index}`, image.hashtags.join(' ')); // Send hashtags associated with each image
    });

    try {
      const response = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData,
        // Headers are not set for multipart/form-data, the browser sets it automatically
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear the images after successful upload
      handleDeleteAll();

      // You can return something from the server response if needed
      return await response.json(); // or response.text() if server sends back a non-JSON response
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle errors here, possibly updating state to show an error message to the user
    }
  };

  return {
    images,
    handleFileChange,
    handleHashtagChange,
    handleDelete,
    handleDeleteAll,
    uploadFiles,
  };
};

export default useUpload;
