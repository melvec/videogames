
// sequelize.define("Genre", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },


// 📍 MODELO 2 | Genres

// ID. *
// Nombre. *


const {
    getAllGenres,
   
  } = require("../controllers/genresController");

const getGenresHandler = async(req, res)=>{
    
   try {
    console.log('genres shandler');
    const { id, name } = req.body;
    const genres = await getAllGenres(id, name);
    res.status(200).json(genres);
     
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
}

module.exports = {
    getGenresHandler
}