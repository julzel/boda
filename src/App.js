import React, { useState, useRef, useEffect } from 'react';

import Hero from './components/Hero';
import MuteButton from './components/MuteButton';
import VideoContainer from './components/VideoContainer';
import VideoFile from './assets/video/carmesi.mp4';
import audioFile from './assets/audio/dandankokoro-piano.mp3';
import Layout from './components/Layout';
import AudioContainer from './components/AudioContainer';
import Welcome from './components/Welcome';
import Details from './components/Details';
import CTA from './components/CTA';

function Boda() {
  const [isMuted, setIsMuted] = useState(true);
  const [wasManuallyMuted, setWasManuallyMuted] = useState(false);
  const [wasOnViewMoreClicked, setWasOnViewMoreClicked] = useState(false);
  const audioRef = useRef();
  const welcomeRef = useRef();

  const playAudio = () => {
    audioRef.current.play();
    setIsMuted(false);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsMuted(true);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      playAudio();
    } else {
      pauseAudio();
    }
    setWasManuallyMuted(!wasManuallyMuted);
  };

  const smoothScrollToContainer = () =>
    welcomeRef.current.scrollIntoView({ behavior: 'smooth' });

  const onViewMore = () => {
    if (!wasManuallyMuted) {
      playAudio();
    }
    if (wasOnViewMoreClicked) {
      setTimeout(smoothScrollToContainer, 500);
    } else {
      setWasOnViewMoreClicked(true);
    }
  };

  useEffect(() => {
    if (wasOnViewMoreClicked) {
      setTimeout(smoothScrollToContainer, 5000);
    }
  }, [wasOnViewMoreClicked]);

  return (
    <Layout disableScroll={!wasOnViewMoreClicked}>
      <Hero onViewMore={onViewMore} />
      <Welcome welcomeRef={welcomeRef} />
      <VideoContainer videoUrl={VideoFile} />
      <Details />
      <CTA />
      <AudioContainer audioRef={audioRef} audioFile={audioFile} />
      <MuteButton handleToggleMute={handleToggleMute} isMuted={isMuted} />
    </Layout>
  );
}

export default Boda;
