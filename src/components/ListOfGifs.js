import React from "react";
import { useState, useEffect } from "react";

import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      console.log("efecto ejecutado");
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  ); // ojito eslint-disable-line

  if (loading) return <i>Cargando</i>;

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
