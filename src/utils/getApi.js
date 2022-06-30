export const getApi = async (
api = "https://rickandmortyapi.com/api/character") => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    let fullResults = data.results?.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
      };
    });
    const finalData = { ...data, fullResults };
    return finalData;
  } catch (error) {
    console.log(error);
    return {
      fullResults: [],
    };
  };
};