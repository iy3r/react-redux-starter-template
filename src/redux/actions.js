import axios from 'axios';

export const ACTIONS = {
  FETCH_QUOTE: 'FETCH_QUOTE',
};

export const fetchQuote = () => {
  const url = `https://got-quotes.herokuapp.com/quotes`;
  const request = axios.get(url);
  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: ACTIONS.FETCH_QUOTE,
        payload: data,
      });
    });
  };
};