import "./App.css";
import Home from "./pages/Home/index";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";

import { Link, Route } from "wouter";

import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "midudev",
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">Inicio</Link>

          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
