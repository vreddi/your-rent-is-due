
import mongoose from 'mongoose';

const TrackingItem = mongoose.model('trackingItem');

/**
 * Creates a new tracking item.
 * @param  {Object} props    [Properties of a tracking item]
 * @returns {Promise<TrackingItem>}   [New tracking item]
 */
const create = (props) => {
  if (!props.userId) {
    return new Error('A user needs to be logged-in to create a tracking item.');
  }

  const trackingItem = new TrackingItem(props);
  return trackingItem.save();
};

/**
 * Patches an existing tracking item based on the provided id.
 * @param {String} id Id of the tracking item
 * @param {Object} props Partial object body containing properties to patch
 */
const editById = (id, props) => TrackingItem.findByIdAndUpdate(id, props);

/**
 * Deletes an existing tracking item based on the provided id.
 * @param {String} id  [Id of the tracking item]
 */
const deleteById = (id) => TrackingItem.findByIdAndDelete(id);

/**
 * Get all the tracking items associated with user.
 * @param {String} userId [Id of the user]
 * @returns {Promise<TrackingItem[]>} [List of tracking items]
 */
const getAllTrackingItems = (userId) => TrackingItem.find({ userId });

export { create, deleteById, editById, getAllTrackingItems };
