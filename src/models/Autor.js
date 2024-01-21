const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Autor', {
    id_autor: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};