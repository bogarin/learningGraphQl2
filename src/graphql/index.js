import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
const typeDefs = importSchema('schema.graphql')
console.log(typeDefs);
const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };
