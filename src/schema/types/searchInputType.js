import { GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'SearchInputType',
  fields: {
    id: { type: GraphQLID },
    ne: { type: GraphQLString },
    eq: { type: GraphQLString },
    le: { type: GraphQLString },
    lt: { type: GraphQLString },
    ge: { type: GraphQLString },
    gt: { type: GraphQLString },
    contains: { type: GraphQLString },
    beginsWith: { type: GraphQLString },
  },
});
