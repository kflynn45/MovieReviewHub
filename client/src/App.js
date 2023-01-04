import './App.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList'

function App() {
  return (
    <div class="main-header">
      <h1>Movie Review Hub</h1>
        <SearchBar />
        {/* <MovieList 
          posterUrl=""
          title="Good Movie"
          id="4"
        /> */}
    </div>
  );
}

export default App;
