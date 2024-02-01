import React from "react";
import { App } from "../components";
import { Header }  from "../containers";
import "./Home.css";

export const Home = () => {
  return (
    <div className="content">
      <Header/>
      I am a Home Page, I have app Component below me!
      <App />
    </div>
  );
};
