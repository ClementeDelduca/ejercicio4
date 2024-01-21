const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Review', {
    id_review: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      contenido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_video: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references: {
            model: 'Video',
            key: 'id_video',
          }
      },
      id_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references: {
            model: 'User',
            key: 'id_user',
          }
      }
  });
};