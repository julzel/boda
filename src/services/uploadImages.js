export const uploadImages = async (selectedFiles, hashtags) => {
  const formData = new FormData();
  formData.append('files', selectedFiles); // `selectedFile` should be the file from your file input

  if (hashtags) {
    formData.append('hashtags', hashtags); // `hashtags` should be the value from your hashtags input
  }

  fetch('http://localhost:4000/api/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
};
