import { GraphQLNonNull, GraphQLString } from 'graphql';
import SubscriptionMetadataType from 'schema/types/subscriptionMetadata';
import { deleteById as deleteSubscriptionMetadataById } from 'services/subscriptionProvider';

const deleteSubscriptionMetadata = {
  type: SubscriptionMetadataType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, { id }, req) {
    return deleteSubscriptionMetadataById(id, req);
  },
};

export default deleteSubscriptionMetadata;
