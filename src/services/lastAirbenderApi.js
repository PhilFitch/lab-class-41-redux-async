export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => {
      return res.json();
    })

    .then((characters) => characters.map(character => {

      return { ...character, name: character.name, photoUrl: character.photoUrl };
    }));
};
