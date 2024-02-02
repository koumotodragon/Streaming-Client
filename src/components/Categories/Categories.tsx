import React from "react";
import "./Categories.css";
import { Pill } from "../UI";

export const Categories = () => {
  const categories = [
    "News",
    "Ratchet",
    "Drake",
    "Street Fight",
    "Homeless",
    "Jay Z",
    "Kardashian",
    "Kodak Black",
    "GirlFight",
    "Comedy SKit",
    "Road Rage",
    "Megan Thee Stallion",
    "Lil Baby",
    "XXXTentacion",
  ];

  return ( 
    <div
      className="Categories-Container"
      style={{
        overflowX: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      {categories.map((item) => {
        return <Pill item={item} />;
      })}
    </div>
  );
};
