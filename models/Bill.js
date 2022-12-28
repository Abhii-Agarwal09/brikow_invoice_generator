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
    totalPrevAdvance: Number,
    totalCurrAdvance: Number,
    totalCumAdvance: Number,
    totalPrevBalance: Number,
    totalCurrBalance: Number,
    totalCumBalance: Number,
  },
  { timestamps: true }
);

const Bill = model('bill', billSchema);

export default Bill;
