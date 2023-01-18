import React from "react";
import Gif from "../Gif/Gif";

export default function ListOfGifs({ gifs }) {
  // ojito eslint-disable-line
  return (
    <div>
      {gifs.map((singleGif) => (
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          url={singleGif.url}
          id={singleGif.id}
        />
      ))}
    </div>
  );
}
