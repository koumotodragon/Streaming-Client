import "./Video.css";
import { NavLink } from "react-router-dom";
export const Video = (props: any) => {
  const { img, description, views, comments } = props;

  return (
    <NavLink to="/videos" >
      <div className="video-container" >
        <div className="rounded-image-container">
          <img src={img} className="rounded-image" />
        </div>
        <div>{description}</div>
        <div className="comments-container">
          <div className="vedio-view">{views}</div>
          <div className="vedio-comment">{comments}</div>
        </div>
      </div>
    </NavLink>
  );
};
