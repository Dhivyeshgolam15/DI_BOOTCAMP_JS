import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';
import { Link } from 'react-router-dom';

const Movie = ({ movie, fetchMovie, match }) => {
  useEffect(() => {
    fetchMovie(match.params.id);
  }, [fetchMovie, match.params.id]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.plot}</p>
      <Link to="/" className="btn btn-default text-light">
        Go Back To Search
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapStateToProps, { fetchMovie })(Movie);