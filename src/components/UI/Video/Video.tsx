import React from "react";
import "./Video.css";

export const Video = (props: any) => {
  const { img, description, views, comments } = props;

  return (
    <div className="video-container">
      <div className="rounded-image-container">
        <img src={img} className="rounded-image" />
      </div>
      <div>{description}</div>
      <div className="comments-container">
        <div className="vedio-view">{views}</div>
        <div className="vedio-comment">{comments}</div>
      </div>
    </div>
  );
};
