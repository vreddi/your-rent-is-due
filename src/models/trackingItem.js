import mongoose from 'mongoose';

const { Schema } = mongoose;

const TrackingItemSchema = new Schema(
  {
    title: { type: String, required: [true, 'title is a required field.'] },
    amount: Number,
    link: String,
    autoPaySet: Boolean,
    image: { data: Buffer, contentType: String },
    subscriptionTemplateId: String,
    recurringDate: Date,
    userId: { type: String, required: [true, 'userId is a required field.'] },
    frequency: Number,
    type: Number,
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
