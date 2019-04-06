import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
import ImageType from './image';

const SubscriptionMetadataType = new GraphQLObjectType({
  name: 'SubscriptionMetadataType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique identifier for the subscription service.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the subscription service.',
    },
    image: {
      type: ImageType,
      description: 'Logo or an identifiable image of the subscription service',
    },
    link: {
      type: GraphQLString,
      description: 'A link related to the subscription service. Usually the link where bills can be payed.',
    },
  },
});

export const SubscriptionMetadataInputType = new GraphQLInputObjectType({
  name: 'SubscriptionMetadataInputType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the subscription service',
    },
    image: {
      type: ImageType,
      description: 'Logo or an identifiable image of the subscription service.',
    },
    link: {
      type: GraphQLString,
      description: 'A link related to the subscription service. Usually the link where bills can be payed.',
    },
  },
});

export const SubscriptionMetadataEditInputType = new GraphQLInputObjectType({
  name: 'SubscriptionMetadataEditInputType',
  fields: {
    name: {
      type: GraphQLString,
      description: 'Name of the subscription service',
    },
    image: {
      type: ImageType,
      description: 'Logo or an identifiable image of the subscription service.',
    },
    link: {
      type: GraphQLString,
      description: 'A link related to the subscription service. Usually the link where bills can be payed.',
    },
  },
});

export default SubscriptionMetadataType;
