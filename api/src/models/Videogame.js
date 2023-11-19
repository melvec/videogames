const { DataTypes, UUID } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Videogame", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    plattforms: {
      type: DataTypes.ENUM("xbox", "pc", "playStation"),
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    created: {
      type: DataTypes.BOOLEAN,
      
    }
  });
};
