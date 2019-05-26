import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLEnumType,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import ImageType, { ImageInputType } from './image';
import { TypeEnumType, TypeCreateInputEnumType, TypeEditInputEnumType } from './trackingItemType';
import { FrequencyEnumType, FrequencyCreateInputEnumType, FrequencyEditInputEnumType } from './trackingItemFrequency';

const TrackingItemType = new GraphQLObjectType({
  name: 'TrackingItemType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique identifier for the tracking item.',
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the user associated with the tracking item.',
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the tracking item.',
    },
    link: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    autoPaySet: { type: GraphQLBoolean },
    type: { type: new GraphQLEnumType(TypeEnumType) },
    frequency: { type: new GraphQLEnumType(FrequencyEnumType) },
    recurringDate: { type: GraphQLDate },
    image: {
      type: ImageType,
      description: 'Branding image of the service or subscription.',
    },
    subscriptionTemplateId: { type: GraphQLID },
  },
});

export const TrackingItemCreateInputType = new GraphQLInputObjectType({
  name: 'TrackingItemCreateInputType',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    link: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    autoPaySet: { type: GraphQLBoolean },
    type: { type: new GraphQLEnumType(TypeCreateInputEnumType) },
    frequency: { type: new GraphQLEnumType(FrequencyCreateInputEnumType) },
    recurringDate: { type: GraphQLDate },
    image: { type: ImageInputType },
    subscriptionTemplateId: { type: GraphQLID },
  },
});

export const TrackingItemEditInputType = new GraphQLInputObjectType({
  name: 'TrackingItemEditInputType',
  fields: {
    title: { type: GraphQLString },
    link: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    autoPaySet: { type: GraphQLBoolean },
    type: { type: new GraphQLEnumType(TypeEditInputEnumType) },
    frequency: { type: new GraphQLEnumType(FrequencyEditInputEnumType) },
    recurringDate: { type: GraphQLDate },
    image: { type: ImageInputType },
  },
});

export default TrackingItemType;
