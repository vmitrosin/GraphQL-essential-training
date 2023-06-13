import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('You are running on localhost');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true 
}))

app.listen(3000, () => console.log('Example app listening on localhost:3000/graphql') );