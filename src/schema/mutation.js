import { GraphQLObjectType } from 'graphql';

// Auth
import login from './mutations/auth/login';
import signup from './mutations/auth/signup';
import logout from './mutations/auth/logout';

// Tracking Item
import createTrackingItem from './mutations/trackingItem/create';
import editTrackingItem from './mutations/trackingItem/edit';
import deleteTrackingItem from './mutations/trackingItem/delete';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    login,
    signup,
    logout,
    createTrackingItem,
    editTrackingItem,
    deleteTrackingItem,
  }),
});
