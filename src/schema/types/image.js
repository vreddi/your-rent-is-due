import { GraphQLString, GraphQLObjectType } from 'graphql';

const ImageType = new GraphQLObjectType({
  name: 'ImageType',
  fields: {
    data: { type: GraphQLString },
    contentType: { type: GraphQLString },
  },
});

export default ImageType;
