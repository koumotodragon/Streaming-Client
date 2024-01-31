import React from "react";
import App from "../components/App/App";
import "./Home.css";

export const Home = () => {
  return (
    <div className="content">
      I am a Home Page, I have app Component below me!
      <App />
    </div>
  );
};
