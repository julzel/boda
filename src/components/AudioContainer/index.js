import React from 'react';

const AudioContainer = ({ audioRef, audioFile }) => {
  return (
    <audio ref={audioRef} loop>
      <source src={audioFile}></source>
    </audio>
  );
};

export default AudioContainer;
