import { GraphQLObjectType, GraphQLList } from 'graphql';
import { getAllTrackingItems } from 'services/tracking';
import {
  getSubscriptionMetadata,
  getById as getSubscriptionById
} from 'services/subscriptionProvider';
import UserType from './user';
import TrackingItemType from './trackingItem';
import SubscriptionMetadataType from './subscriptionMetadata';
import SearchInputType from './searchInputType';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    trackingItems: {
      type: new GraphQLList(TrackingItemType),
      resolve(parentValue, args, req) {
        return getAllTrackingItems(req.user.id);
      },
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionMetadataType),
      args: {
        filter: { type: SearchInputType },
      },
      resolve(parentValue, { filter }) {
        if (filter.id) {
          return getSubscriptionById(filter.id).then(result => [result]);
        }

        return getSubscriptionMetadata(filter);
      },
    },
  },
});

export default RootQueryType;
