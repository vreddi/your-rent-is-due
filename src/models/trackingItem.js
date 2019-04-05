import mongoose from 'mongoose';

const { Schema } = mongoose;

const TrackingItemSchema = new Schema(
  {
    title: { type: String, required: [true, 'title is a required field.'] },
    amount: Number,
    link: String,
    autoPaySet: Boolean,
    userId: { type: String, required: [true, 'userId is a required field.'] },
    frequency: [
      'DAILY',
      'WEEKLY',
      'BIWEEKLY',
      'MONTHLY',
      'ANNUALLY',
    ],
    type: [
      'BILL',
      'RENT',
      'PARKING',
      'SUBSCRIPTION',
    ],
  },
  {
    timestamps: {
      createdAt: 'createDate',
      updatedAt: 'lastUpdated',
    },
    versionKey: 'version',
  },
);

mongoose.model('trackingItem', TrackingItemSchema);
