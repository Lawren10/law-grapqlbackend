// const { ApolloServer, gql } = require('apollo-server-lambda')

// const typeDefs = gql`
//   type Query {
//     hello: String
//     allAuthors: [Author!]
//     author(id: Int!): Author
//     authorByName(name: String!): Author
//   }
//   type Author {
//     id: ID!
//     name: String!
//     married: Boolean!
//   }
// `

// const authors = [
//   { id: 1, name: 'Terry Pratchett', married: false },
//   { id: 2, name: 'Stephen King', married: true },
//   { id: 3, name: 'JK Rowling', married: false },
// ]

// const resolvers = {
//   Query: {
//     hello: () => 'Hello, world!',
//     allAuthors: () => authors,
//     author: () => {},
//     authorByName: (root, args) => {
//       console.log('hihhihi', args.name)
//       return authors.find((author) => author.name === args.name) || 'NOTFOUND'
//     },
//   },
// }

"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server-lambda");
var schema_1 = __importDefault(require("./schema"));
var resolvers_1 = __importDefault(require("./resolvers"));
// cors();
var server = new apollo_server_1.ApolloServer({
  typeDefs: schema_1.default,
  resolvers: resolvers_1.default,
});

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

const handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});

module.exports = { handler };
