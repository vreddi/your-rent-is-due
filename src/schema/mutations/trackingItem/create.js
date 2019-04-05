import TrackingItemType, { TrackingItemCreateInputType } from 'schema/types/trackingItem';
import { create as createTrackingItem } from 'services/tracking';

const create = {
  type: TrackingItemType,
  args: {
    trackingItem: { type: TrackingItemCreateInputType },
  },
  resolve(parentValue, { trackingItem }, req) {
    const payload = trackingItem;

    // Use the currently logged in user's id for association
    payload.userId = req.user ? req.user.id : null;

    return createTrackingItem(payload);
  },
};

export default create;
