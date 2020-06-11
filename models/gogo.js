module.exports = function(sequelize, DataTypes) {
    return sequelize.define('gogo', {
      anime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anime_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      episode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'gogo',
      timestamps: true
    });
  };