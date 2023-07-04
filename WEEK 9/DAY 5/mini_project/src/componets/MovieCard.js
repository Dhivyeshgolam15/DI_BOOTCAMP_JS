import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <Link to={`/movie/${movie.id}`}>See Details</Link>
    </div>
  );
};

export default MovieCard;