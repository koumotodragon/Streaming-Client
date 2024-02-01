import React from "react";
import {
  App,
  Categories,
  Content,
  FeaturedVideos,
  TrendingNow,
} from "../components";
import { Footer, Header } from "../containers";
import "./Home.css";

export const Home = () => {
  return (
    <div className="content">
      <Header />
      <Categories />
      <TrendingNow />
      <FeaturedVideos />
      <Content />
      <Footer/>
    </div>
  );
};
