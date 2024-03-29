"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server-lambda");
var typeDefs = apollo_server_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n    type Price {\n        currency: Currency!,\n        amount: Float!\n    }\n\n    type Attribute {\n        displayValue: String,\n        value: String,\n        id: String!\n    }\n\n    type AttributeSet {\n        id: String!,\n        name: String,\n        type: String,\n        items: [Attribute]\n    }\n\n    type Product {\n        id: String!,\n        name: String!,\n        inStock: Boolean,\n        gallery: [String],\n        description: String!,\n        category: String!,\n        attributes: [AttributeSet]\n        prices: [Price!]!,\n        brand: String!\n    }\n\n    type Category {\n        name: String,\n        products: [Product]!\n    }\n\n    type Currency {\n        label: String!,\n        symbol: String!\n    }\n\n    input CategoryInput {\n        title: String!\n    }\n\n    type Query {\n        categories: [Category],\n        category(input: CategoryInput): Category,\n        product(id: String!): Product,\n        currencies: [Currency]\n    }\n",
      ],
      [
        "\n    type Price {\n        currency: Currency!,\n        amount: Float!\n    }\n\n    type Attribute {\n        displayValue: String,\n        value: String,\n        id: String!\n    }\n\n    type AttributeSet {\n        id: String!,\n        name: String,\n        type: String,\n        items: [Attribute]\n    }\n\n    type Product {\n        id: String!,\n        name: String!,\n        inStock: Boolean,\n        gallery: [String],\n        description: String!,\n        category: String!,\n        attributes: [AttributeSet]\n        prices: [Price!]!,\n        brand: String!\n    }\n\n    type Category {\n        name: String,\n        products: [Product]!\n    }\n\n    type Currency {\n        label: String!,\n        symbol: String!\n    }\n\n    input CategoryInput {\n        title: String!\n    }\n\n    type Query {\n        categories: [Category],\n        category(input: CategoryInput): Category,\n        product(id: String!): Product,\n        currencies: [Currency]\n    }\n",
      ]
    ))
);
exports.default = typeDefs;
var templateObject_1;
