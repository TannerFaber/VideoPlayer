import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbnail} alt="" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
