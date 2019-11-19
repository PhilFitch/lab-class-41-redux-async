import { getCharacters } from '../services/lastAirbenderApi';
import { createAction } from 'promise-middleware-redux';

// export const GET_CHARACTERS_LOADING = 'GET_CHARACTERS_LOADING';
// export const GET_CHARACTERS = 'GET_CHARACTERS';
// export const GET_CHARACTERS_DONE = 'GET_CHARACTERS_DONE';
export const fetchCharacters = () => dispatch => {
  dispatch({
    type: GET_CHARACTERS_LOADING
  });

  return getCharacters()
    .then(characters => {
      dispatch({
        type: GET_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: GET_CHARACTERS_DONE
      });
    });
};

export const [
  getCharactersPromise,
  GET_CHARACTERS_LOADING,
  GET_CHARACTERS,
  GET_CHARACTERS_DONE
] = createAction('GET_CHARACTERS', getCharacters);
