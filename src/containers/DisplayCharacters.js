import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/characters/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/charactersActions';

function DisplayCharacters({ characters, loading, fetchCharacters }) {
  useEffect(() => {
    fetchCharacters();
  }, []);
  
  if(loading) return <h1>Loading...</h1>;

  return (
    <Characters characters={characters[0]} />
  );
}

DisplayCharacters.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCharacters);
