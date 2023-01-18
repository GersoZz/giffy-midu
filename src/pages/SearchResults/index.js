import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { loading, gifs } = useGifs({ keyword });

  /*   const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  ); */

  return (
    <>
      {loading ? (
        <i>Cargando</i>
      ) : (
        <>
          {" "}
          <h3 className="App-title">{keyword}</h3> <ListOfGifs gifs={gifs} />{" "}
        </>
      )}
    </>
  );
}
