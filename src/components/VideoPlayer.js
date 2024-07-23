import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000' }}>
      <iframe
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameBorder="0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
