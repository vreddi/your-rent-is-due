import { GraphQLNonNull, GraphQLString } from 'graphql';
import SubscriptionMetadataType, { SubscriptionMetadataEditInputType } from 'schema/types/subscriptionMetadata';
import { editById as editSubscriptionMetadataById } from 'services/subscriptionProvider';

const editSubscriptionMetadata = {
  type: SubscriptionMetadataType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    subscription: { type: SubscriptionMetadataEditInputType },
  },
  resolve(parentValue, { id, subscription }, req) {
    return editSubscriptionMetadataById(id, subscription, req);
  },
};

export default editSubscriptionMetadata;
