import React from "react";
/* import GifsContext from "../../context/GifsContext"; */
import Gif from "../../components/Gif/Gif";

import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {
  //const { gifs } = useContext(GifsContext); /* usa el que tiene mas cerca */

  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  console.log(gif);
  return (
    <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
