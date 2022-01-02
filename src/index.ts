import "dotenv-flow/config";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./schema";
import express from "express";

const app = express();

const apolloServer = new ApolloServer({
  schema: createSchema(),
});

apolloServer.applyMiddleware({
  app,
  cors: false,
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`
    ---------------------------------------------------------
    🚀 Server ready at: http://localhost:4000
    ---------------------------------------------------------
    `);
});
