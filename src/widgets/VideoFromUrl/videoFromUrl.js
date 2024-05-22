import React, { useState, useEffect } from 'react';

const VideoFromUrl = ({ url }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    if (url) {
      setVideoUrl(url);
    }
  }, [url]);

  return (
    <div>
      {videoUrl ? (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video URL provided</p>
      )}
    </div>
  );
};

export default VideoFromUrl;
