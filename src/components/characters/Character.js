import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <figure >
      <img src={character.photoUrl} alt={character.name} />
      <figcaption>{character.name}</figcaption>
    </figure>
  );
};

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
