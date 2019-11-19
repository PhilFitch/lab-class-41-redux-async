import { GET_CHARACTERS_LOADING, GET_CHARACTERS, GET_CHARACTERS_DONE } from '../actions/charactersActions';

const initialState = {
  list: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case GET_CHARACTERS_DONE:
      return { ...state, loading: false };
    case GET_CHARACTERS:
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
