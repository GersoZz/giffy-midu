import { useRef, useEffect, useCallback } from "react";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  console.log("aa", isNearScreen);

  //const handleNextPage = () => console.log("next page");
  //const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]//why
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  return (
    <>
      {loading ? (
        <i>Cargando</i>
      ) : (
        <>
          {" "}
          <h3 className="App-title">{decodeURI(keyword)}</h3>{" "}
          <ListOfGifs gifs={gifs} /> <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/*       <br />
      <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
}
