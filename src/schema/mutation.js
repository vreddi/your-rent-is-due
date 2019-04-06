import { GraphQLObjectType } from 'graphql';

// Auth
import login from './mutations/auth/login';
import signup from './mutations/auth/signup';
import logout from './mutations/auth/logout';

// Tracking Item
import createTrackingItem from './mutations/trackingItem/create';
import editTrackingItem from './mutations/trackingItem/edit';
import deleteTrackingItem from './mutations/trackingItem/delete';

// Subscription Metadata
import createSubscriptionMetadata from './mutations/subscriptionMetadata/create';
import deleteSubscriptionMetadata from './mutations/subscriptionMetadata/delete';
import editSubscriptionMetadata from './mutations/subscriptionMetadata/edit';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    login,
    signup,
    logout,
    createTrackingItem,
    editTrackingItem,
    deleteTrackingItem,
    createSubscriptionMetadata,
    deleteSubscriptionMetadata,
    editSubscriptionMetadata,
  }),
});
