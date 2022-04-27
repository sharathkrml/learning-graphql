const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();
// schema defines query
// query session defines all different use cases
// fields => sessions we can actually query
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Helloworld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "hello world",
      },
    }),
  }),
});
app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema: schema,
  })
);
app.listen(5000, () => console.log("server running"));
