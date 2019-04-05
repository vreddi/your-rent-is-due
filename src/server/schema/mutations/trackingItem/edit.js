import { GraphQLString, GraphQLNonNull } from 'graphql';
import TrackingItemType, { TrackingItemEditInputType } from 'schema/types/trackingItem';
import { editById as editTrackingItem } from 'services/tracking';

const edit = {
  type: TrackingItemType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    trackingItem: { type: TrackingItemEditInputType },
  },
  resolve(parentValue, { id, trackingItem }) {
    return editTrackingItem(id, trackingItem);
  },
};

export default edit;
