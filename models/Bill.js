import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const billSchema = new Schema(
  {
    graniteWork: {
      type: Schema.Types.ObjectId,
      ref: 'granitework',
    },
    tilesWork: { type: Schema.Types.ObjectId, ref: 'tileswork' },
    totalPrevAmount: Number,
    totalCurrAmount: Number,
    totalCumAmount: Number,
    totalPrevAdvance: { type: Number, default: 0 },
    totalCurrAdvance: { type: Number, default: 0 },
    totalCumAdvance: Number,
    totalPrevBalance: Number,
    totalCurrBalance: Number,
    totalCumBalance: Number,
    billImage: String,
  },
  { timestamps: true }
);

const Bill = model('bill', billSchema);

export default Bill;
