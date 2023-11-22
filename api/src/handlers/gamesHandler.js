const {
  createVideogameDB,
  getGameById,
  getAllGames,
  getGameByName,
} = require("../controllers/gamesControllers");

const getGamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      console.log('get games by name');
      const gameByName = await getGameByName(name);
      res.status(200).json(gameByName);
    } else {
      const response = await getAllGames();


      console.log('all games');
      console.log(response);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDetailHandler = async (req, res) => {
  const { idVideogame } = req.params;
let source = ""
  try {
    const numericId = parseInt(idVideogame, 10); // Radix 10 for base 10 (decimal)

    if (isNaN(numericId)) {
      console.log("idVideogame is not a number");
       source = "bdd";
    } else {
      console.log("idVideogame is a number:", numericId);
       source = "api";
    }

    const response = await getGameById(idVideogame, source);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createGameHandler = async (req, res) => {
  console.log( req.body);
  const { name, image, description, plattforms, release, rating, created, genreids } =
    req.body;
  
    
  try {
    console.log("creating game in handler");
    const response = await createVideogameDB(
      name,
      image,
      description,
      plattforms,
      release,
      rating,
      created,
      genreids
    );
    
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGamesHandler,
  getDetailHandler,
  createGameHandler,
};
