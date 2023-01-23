import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext); /* El que esta mas cerca */

  /* const [gifs, setGifs] = useState([]); */
  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "asuna";

  useEffect(
    function () {
      setLoading(true);
      /*       console.log("localStorage.length", localStorage.length);
      console.log("keywordToUse", keywordToUse); */

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keywordToUse); //aqui era el problema ! estaba guardando keyword
      });
    },
    [keywordToUse, setGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);
      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, setGifs]
  );

  return { loading, loadingNextPage, gifs, setPage };
}
