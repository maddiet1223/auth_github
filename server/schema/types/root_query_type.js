// const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //just to avoid error because every new graphql object type should have atleast one field
    dummyField: { type: GraphQLID },
  },
});

module.exports = RootQueryType;
