import React, { useRef, useEffect } from 'react';

const M3U8Player = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = url;
      videoRef.current.play();
    }
  }, [url]);

  return (
    <div className="m3u8-player">
      <video ref={videoRef} controls width="100%" height="100%" />
    </div>
  );
};

export default M3U8Player;
