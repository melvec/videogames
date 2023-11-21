//Genres info

// 📍 MODELO 2 | Genres

// ID. *
// Nombre. *

const { Genre } = require("../db");

const apiKey = process.env.API_KEY;
const apiURL = "https://api.rawg.io/api/genres";
const axios = require("axios");

const fetchGenresApi = async () => {
    try {
      const response = await axios.get(apiURL, {
        params: {
          key: apiKey,
          page_size: 30,
        },
      });
  
      const genresData = response.data.results.map((genre) => ({
        id: genre.id,
        name: genre.name,
      }));
  
      return genresData;
    } catch (error) {
      console.error("Error fetching genre:", error);
    }
  };

  const getAllGenres = async (id, name) => {
    try {
      let genresDB = await Genre.findAll();

      if (genresDB.length === 0) {
            const genresApi = await fetchGenresApi();
              // Use Promise.all to wait for all database insertions to complete
      await Promise.all(genresApi.map(async genre => {
        await createGenresDB(genre.id, genre.name);
      }));

      // Fetch genres from the database after inserting
      genresDB = await Genre.findAll();
           
        }
    return genresDB;
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    
   
  };

  const createGenresDB = async (
    id,
    name,
  ) => {
    return await Genre.create({
      id,
      name,
    });
  };

  module.exports = { getAllGenres , createGenresDB }