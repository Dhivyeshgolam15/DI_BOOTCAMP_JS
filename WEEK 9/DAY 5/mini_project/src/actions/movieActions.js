import axios from 'axios';

export const searchMovie = (text) => async (dispatch) => {
  try {
    dispatch({ type: 'LOADING' });

    const response = await axios.get(
        //http/www.omdbapi.com/?apikey=[yourkey]&

    );

    dispatch({ type: 'FETCH_MOVIES', payload: response.data.Search });
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'LOADING' });

    const response = await axios.get(
        //http/www.omdbapi.com/?apikey=[yourkey]&
        );

    dispatch({ type: 'FETCH_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};