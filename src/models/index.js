import Sequelize from 'sequelize';

const sequelize = new Sequelize('node_graphql_api', null, null, {
  dialect: 'postgres',
  define: {
    underscoredAll: true,
    underscored: true,
  },
});

const models = {
  User: sequelize.import('./user'),
  Post: sequelize.import('./post'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
