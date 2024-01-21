const { Sequelize } = require('sequelize');

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Autor, Comentario, Review, Video } = sequelize.models;

// Aca vendrian las relaciones
Autor.hasMany(Video);
Video.belongsTo(Autor);

Comentario.hasOne(Video);
Video.belongsTo(Comentario);

Video.hasMany(Comentario);
Comentario.belongsTo(Video);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Comentario);
Comentario.belongsTo(User);

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
