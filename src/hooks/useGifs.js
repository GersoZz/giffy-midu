import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";

import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);

  const { gifs, setGifs } = useContext(GifsContext); /* El que esta mas cerca */

  /* const [gifs, setGifs] = useState([]); */

  useEffect(
    function () {
      setLoading(true);

      // recuperamos la keyword del localStorage
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "asuna";

      console.log("localStorage.length", localStorage.length);
      console.log("keywordToUse", keywordToUse);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keywordToUse); //aqui era el problema ! estaba guardando keyword
      });
    },
    [keyword, setGifs]
  );

  return { loading, gifs };
}
