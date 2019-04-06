import mongoose from 'mongoose';
import { isAdmin, noPermissionMessage } from './permissions';

const SubscriptionMetadata = mongoose.model('subscriptionMetadata');

/**
 * Creates a subscription metadata.
 * @param {Object} props Object containing subscription metadata properties
 * @param {Object} req Request object
 */
const create = (props, req) => {
  if (isAdmin(req)) {
    const subscriptionMetadata = new SubscriptionMetadata(props);
    return subscriptionMetadata.save();
  }
  throw new Error(noPermissionMessage);
};

/**
 * Deletes an existing subscription metadata by id.
 * @param {String} id Unique identifier for the subscription metadata
 * @param {Object} req Request object
 */
const deleteById = (id, req) => {
  if (isAdmin(req)) {
    return SubscriptionMetadata.findByIdAndDelete(id);
  }
  throw new Error(noPermissionMessage);
};

/**
 * Edit the properties of an existing subscription metadata.
 * @param {String} id Unique identifier for the subscription metadata
 * @param {Object} props Object containing subscription metadata properties
 * @param {Object} req Request object
 */
const editById = (id, props, req) => {
  if (isAdmin(req)) {
    return SubscriptionMetadata.findByIdAndUpdate(id, props);
  }
  throw new Error(noPermissionMessage);
};

/**
 * Get all subscription metadata conforming to the filter query
 * if provided.
 * @param {Object<SearchInputType>} filter Filter object that defines the constraints
 * @returns {Promise<SubscriptionMetadata>} List of subscription metadata
 */
const getSubscriptionMetadata = (filter) => {
  if (filter) {
    const { contains } = filter;
    return SubscriptionMetadata.find({ name: new RegExp(contains, 'i') });
  }

  return SubscriptionMetadata.find({});
};

export { create, deleteById, editById, getSubscriptionMetadata };
