import { GraphQLObjectType, GraphQLList } from 'graphql';
import { getAllTrackingItems } from 'services/tracking';
import UserType from './user';
import TrackingItemType from './trackingItem';

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
  },
});

export default RootQueryType;
