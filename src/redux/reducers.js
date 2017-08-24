import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const INIT = {
  currentQuote: {
    quote: "The man who passes the sentence should swing the sword.",
    character: "Eddard Stark"
  }
};

const quote = (state = INIT.currentQuote, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_QUOTE:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  quote
});

