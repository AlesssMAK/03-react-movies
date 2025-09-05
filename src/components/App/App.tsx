// import css from "./App.module.css"

import fetchMovies from '../services/movieServices';

function App() {
  console.log(fetchMovies('marvel'));
  return <div>Hay!</div>;
}

export default App;
