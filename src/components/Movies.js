import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => (
        <div key={idx}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time.toString()}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((g, index) => <li key={index}>{g}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
