"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./schema"));
var resolvers_1 = __importDefault(require("./resolvers"));
var server = new apollo_server_1.ApolloServer({
  typeDefs: schema_1.default,
  resolvers: resolvers_1.default,
});

let serverPort = process.env.PORT || 4000;
let serverHost = "0.0.0.0";

server.listen(serverPort, serverHost, function () {
  console.log(`\uD83D\uDE80  Server ready at ${serverPort}`);
});

// server.listen().then(function (_a) {
//   _a.url = process.env.PORT;
//   var url = _a.url;
//   console.log("\uD83D\uDE80  Server ready at " + url);
// });
