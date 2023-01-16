import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/">Inicio</Link>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/mapache">Gifs de mapaches</Link>
        <Link to="/gif/oso">Gifs de osos</Link>

        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
