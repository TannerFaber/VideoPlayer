import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment" style={{ height: `100px` }}>
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
  const src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={src} frameBorder="0" title="video"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p className="content"> {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
