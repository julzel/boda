import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useWebSocket = () => {
  const [latestImages, setLatestImages] = useState([]);

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io('http://localhost:4000'); // Adjust URL as needed

    // Event listener for 'imageUploaded' event from server
    socket.on('imageUploaded', (newImage) => {
      setLatestImages(prevImages => [newImage, ...prevImages]);
    });

    // Clean up on unmount
    return () => {
      socket.off('imageUploaded');
      socket.close();
    };
  }, []);

  return latestImages;
};

export default useWebSocket;
