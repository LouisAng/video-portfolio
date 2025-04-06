import { useState, useEffect, RefObject } from 'react';

interface UseVideoPlayerReturn {
  isPlaying: boolean;
  progress: number;
  isMuted: boolean;
  volume: number;
  togglePlay: (setStateFn?: React.Dispatch<React.SetStateAction<boolean>>) => void;
  toggleMute: () => void;
  handleTimeUpdate: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useVideoPlayer(videoRef: RefObject<HTMLVideoElement | null>): UseVideoPlayerReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  
  const togglePlay = (setStateFn?: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      if (setStateFn) setStateFn(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      if (setStateFn) setStateFn(false);
    }
  };
  
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };
  
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const progressPercent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progressPercent);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
    
    if (value === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    videoElement.addEventListener('ended', handleEnded);
    
    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [videoRef]);
  
  return {
    isPlaying,
    progress,
    isMuted,
    volume,
    togglePlay,
    toggleMute,
    handleTimeUpdate,
    handleVolumeChange
  };
} 