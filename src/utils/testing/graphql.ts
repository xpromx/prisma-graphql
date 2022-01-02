import { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import { createSchema } from "../../schema";

export const setupServer = () => {
  const server = new ApolloServer({
    schema: createSchema(),
  });

  return createTestClient(server);
};
