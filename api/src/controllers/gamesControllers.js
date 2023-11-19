//Videogame info

// -  Nombre.
// -  Imagen.
// -  Descripción.
// -  Plataformas.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// -  Botón para crear el nuevo videojuego.

const { Videogame } = require("../db");

const apiKey = "413179f7b37044a3b53b63db111fda8c";
const apiURL = "https://api.rawg.io/api/games";
const axios = require("axios");

const createVideogameDB = async (
  name,
  image,
  description,
  plattforms,
  release,
  rating
) => {
  return await Videogame.create({
    name,
    image,
    description,
    plattforms,
    release,
    rating,
  });
};

const fetchGamesApi = async () => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        key: apiKey,
        page_size: 30,
      },
    });

    const gamesData = response.data.results.map((game) => ({
      id: game.id,
      background_image: game.background_image,
      name: game.name,
    }));

    return gamesData;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
};

const getAllGames = async () => {
  try {
    const gamesDB = await Videogame.findAll();

    const gamesData = await fetchGamesApi();
    return [...gamesDB, ...gamesData];
  } catch (error) {
    console.error("Error fetching games:", error);
  }
};

const getGameById = async (id, source) => {
  try {
    console.log(source);
    if (source === "api") {
      console.log("entro a api");
      const result = await fetchGamesApi();
      console.log(result.length);
      const gameById = result.filter((id) => result.id === id);
      console.log(gameById.length);
      return gameById;
    } else {
        console.log('searching by dbb');
      const gameFromBDD = await Videogame.findByPk(id);
      if (gameFromBDD === null) {
        console.log("Not found!");
      } else {
        return gameFromBDD;
      }
    }
  } catch (error) {
    console.error("Error fetching game details:", error);
  }
  return game;
};

const getGameByName = async (name) => {
  try {
    const gamesDataApi = await fetchGamesApi();
    const gamesDataApiFiltered = gamesDataApi.filter(
      (game) => game.name === name
    );
    const gameDBfiltered = await Videogame.findAll({ where: { name: name } });
    return [...gamesDataApiFiltered, ...gameDBfiltered];
  } catch (error) {
    console.error("Error fetching game details:", error);
  }
};

module.exports = { createVideogameDB, getGameById, getAllGames, getGameByName };
