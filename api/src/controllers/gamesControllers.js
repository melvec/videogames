//Videogame info

// -  Nombre.
// -  Imagen.
// -  Descripción.
// -  Plataformas.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// -  Botón para crear el nuevo videojuego.

const { Videogame, Genre} = require("../db");


const apiKey = "413179f7b37044a3b53b63db111fda8c";
const apiURL = "https://api.rawg.io/api/games";
const axios = require("axios");


const createVideogameDB = async (
  name,
  image,
  description,
  plattforms,
  release,
  rating,
  genreids
) => {
  console.log('genreIds:');
  console.log(genreids);
 
  try {
    console.log("creating game in controller");
    
    const createdVideogame = await Videogame.create({
      name,
      image,
      description,
      plattforms,
      release,
      rating,
    });
    

    // // Associate the Videogame with Genres
    // if (genreIds && Array.isArray(genreIds) && genreIds.length > 0) {
    //   console.log('entró a genreIds');
    //   const genresToAdd = await Genre.findAll({
    //     where: { id: genreIds }, // Find genres based on provided IDs
    //   });

    //   await createdVideogame.addGenres(genresToAdd);
    //   console.log('Genres added successfully');
    // }
  
    return createdVideogame;
  } catch (error) {
  
    console.error('Error creating videogame:', error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};





const fetchGamesApi = async () => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        key: apiKey,
        page_size: 30,
      },
    });
//console.log(response.data.results);
    const gamesData = response.data.results.map((game) => ({
      id: game.id,
      image: game.background_image,
      name: game.name,
      genres: game.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
    }));


 //const gamesData = response.data.results;
    return gamesData;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
};

const getAllGames = async () => {
  try {
    const gamesDB = await Videogame.findAll({include: {
      model: Genre,
      through: 'videogame_genre', // Use the through string
    },});

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
    
      const result = await fetchGamesApi();
   
      const gameById = result.filter((game) => String(game.id) === id);
 
      return gameById;
    } else {
       
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
