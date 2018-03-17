import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

import models from './models';

const types = fileLoader(path.join(__dirname, './types'));
const typeDefs = mergeTypes(types);

const resolverArray = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolverArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const graphqlEndpoint = '/graphql';

const app = express();

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
      user: {
        id: 1,
      },
    },
  }),
);
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || PORT, () => {
    // Eslint-disable-next-line
    console.log(chalk.green(`App is listening on port ${process.env.PORT || PORT}`));
  });
});
