import express from 'express';
import GraphHTTP from 'express-graphql';
import schemaQL from './graphql/schemaQL';

var app = express();

app.use('/graphiql', GraphHTTP({
    schema: schemaQL,
    pretty: true,
    graphiql: true
}));

app.use('/graphql', GraphHTTP({
    schema: schemaQL
}));

app.get('/', function (req, res, next) {
  const reponse = {
    message: 'hello world',
  };
  return res.json(reponse);
});

module.exports = app;
