
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



const getGenresHandler = async(req, res)=>{
   const {id,name } = req.body;
   try {
    

    
   } catch (error) {
    res.status(400).json({ error: error.message });
   }
}

module.exports = {
    getGenresHandler
}