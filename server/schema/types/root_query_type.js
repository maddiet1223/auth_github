// const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require("./user_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //just to avoid error because every new graphql object type should have atleast one field
    //dummyField: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
  },
});

module.exports = RootQueryType;
