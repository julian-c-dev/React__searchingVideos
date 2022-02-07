import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <div className="ui relaxed list segment">
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
