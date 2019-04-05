import { GraphQLString, GraphQLNonNull } from 'graphql';
import TrackingItemType from 'schema/types/trackingItem';
import { deleteById as deleteTrackingItem } from 'services/tracking';

const deleteItem = {
  type: TrackingItemType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, { id }) {
    return deleteTrackingItem(id);
  },
};

export default deleteItem;
