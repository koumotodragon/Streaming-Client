import React, { useRef } from "react";
import { Video } from "../UI";
import "./TrendingNow.css";

const data = [
  {
    id: "1",
    title: "Big Buck Bunny",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "Vlc Media Player",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. ",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "2",
    title: "The first Blender Open Movie from 2006",
    thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : ",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "3",
    title: "For Bigger Blazes",
    thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : ",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "4",
    title: "For Bigger Escape",
    thumbnailUrl:
      "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough.",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "6",
    title: "For Bigger Blazes",
    thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger :",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "7",
    title: "For Bigger Escape",
    thumbnailUrl:
      "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough.",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "8",
    title: "The first Blender Open Movie from 2006",
    thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: "24,969,123",
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger ",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
];

export const TrendingNow = () => {

  const boxRef = useRef<HTMLDivElement>(null);
  const btnpressprev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;

    }
  }

  const btnpressnext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;

    }
  }


  return (
    <div className="Trending-Container">
      <div className="Trending-Header">
        TRENDING
        <span>&nbsp; NOW</span>
      </div>
      <div className="videos-carousel">
        <div
          className="Trending-Videos"
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
          ref={boxRef}
        >
          {data.map((item, index) => {
            return (
              <Video
                img={item.thumbnailUrl}
                description={item.description}
                views={item.views}
                comments={item.id}
              />
            );
          })}
        </div>
        <div className="video-next" onClick={btnpressnext}>next</div>
        <div className="video-prev" onClick={btnpressprev}>prev</div>
      </div>
    </div>
  );
};
