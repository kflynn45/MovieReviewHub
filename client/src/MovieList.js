import React from 'react';

function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map(movie => (
        <img src={movie.posterUrl} alt={movie.title} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
