import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubscriptionMetadata = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is a required field.'],
      index: { unique: true },
    },
    image: { data: Buffer, contentType: String },
    link: String,
  },
  {
    timestamps: {
      createdAt: 'createDate',
      updatedAt: 'lastUpdated',
    },
    versionKey: 'version',
  },
);

mongoose.model('subscriptionMetadata', SubscriptionMetadata);
