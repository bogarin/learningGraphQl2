import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
//const typeDefs = importSchema(`${__dirname}/schema.graphql`);
const typeDefs = importSchema(`${__dirname}/schemas/schema.graphql`);
console.log(typeDefs);
console.log(__dirname);
const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };
