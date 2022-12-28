import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const billSchema = new Schema(
  {
    graniteWork: {
      type: Schema.Types.ObjectId,
      ref: 'granitework',
    },
    tilesWork: { type: Schema.Types.ObjectId, ref: 'tileswork' },
    totalPrevAmount: {
      type: Number,
      default: 0,
    },
    totalCurrAmount: {
      type: Number,
      default: 0,
    },
    totalCumAmount: {
      type: Number,
      default: 0,
    },
    totalPrevAdvance: { type: Number, default: 0 },
    totalCurrAdvance: { type: Number, default: 0 },
    totalCumAdvance: {
      type: Number,
      default: 0,
    },
    totalPrevBalance: {
      type: Number,
      default: 0,
    },
    totalCurrBalance: {
      type: Number,
      default: 0,
    },
    totalCumBalance: {
      type: Number,
      default: 0,
    },
    billImage: String,
  },
  { timestamps: true }
);

const Bill = model('bill', billSchema);

export default Bill;
