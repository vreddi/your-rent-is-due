import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'SearchInputType',
  fields: {
    ne: { type: GraphQLString },
    eg: { type: GraphQLString },
    le: { type: GraphQLString },
    lt: { type: GraphQLString },
    ge: { type: GraphQLString },
    gt: { type: GraphQLString },
    contains: { type: GraphQLString },
    beginsWith: { type: GraphQLString },
  },
});
