import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesContainer);