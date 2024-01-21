const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Video', {
    id_video: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_autor: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      references: {
          model: 'Autor',
          key: 'id_autor',
        }
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};