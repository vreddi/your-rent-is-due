import SubscriptionMetadataType, { SubscriptionMetadataInputType } from 'schema/types/subscriptionMetadata';
import { create as createSubscriptionMetadata } from 'services/subscriptionProvider';

const create = {
  type: SubscriptionMetadataType,
  args: {
    subscriptionMetadata: { type: SubscriptionMetadataInputType },
  },
  resolve(parentValue, { subscriptionMetadata }, req) {
    return createSubscriptionMetadata(subscriptionMetadata, req);
  },
};

export default create;
