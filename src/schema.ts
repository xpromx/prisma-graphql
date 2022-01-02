import { buildSchemaSync } from "type-graphql";
import resolvers from "./resolvers";

export const createSchema = () => {
  return buildSchemaSync({
    resolvers,
    emitSchemaFile: "./schema.gql",
    validate: false,
  });
};
