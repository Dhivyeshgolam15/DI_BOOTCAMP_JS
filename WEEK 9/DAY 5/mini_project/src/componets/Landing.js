import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movieActions';
import SearchForm from './SearchForm.';
import MoviesContainer from './MoviesContainer';

const Landing = ({ searchMovie }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <MoviesContainer />
    </div>
  );
};

export default connect(null, { searchMovie })(Landing);