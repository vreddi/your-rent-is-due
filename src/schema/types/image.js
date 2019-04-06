import { GraphQLString, GraphQLObjectType, GraphQLInputObjectType } from 'graphql';

const ImageType = new GraphQLObjectType({
  name: 'ImageType',
  fields: {
    data: { type: GraphQLString },
    contentType: { type: GraphQLString },
  },
});

export const ImageInputType = new GraphQLInputObjectType({
  name: 'ImageInputType',
  fields: {
    data: { type: GraphQLString },
    contentType: { type: GraphQLString },
  },
});

export default ImageType;
