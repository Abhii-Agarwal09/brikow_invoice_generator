import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const graniteWorkSchema = new Schema(
  {
    graniteFlooringUnit: {
      type: String,
      default: 'SFT',
    },
    graniteFlooringRate: {
      type: Number,
      default: 35,
    },
    graniteFlooringPrevQuan: Number,
    graniteFlooringCurrQuan: Number,
    graniteFlooringCumQuan: Number,
    graniteFlooringPrevPrice: Number,
    graniteFlooringCurrPrice: Number,
    graniteFlooringCumPrice: Number,

    granitePattiUnit: {
      type: String,
      default: 'RFT',
    },
    granitePattiRate: {
      type: Number,
      default: 35,
    },
    granitePattiPrevQuan: Number,
    granitePattiCurrQuan: Number,
    granitePattiCumQuan: Number,
    granitePattiPrevPrice: Number,
    granitePattiCurrPrice: Number,
    granitePattiCumPrice: Number,

    graniteHalfMouldingUnit: {
      type: String,
      default: 'RFT',
    },
    graniteHalfMouldingRate: {
      type: Number,
      default: 35,
    },
    graniteHalfMouldingPrevQuan: Number,
    graniteHalfMouldingCurrQuan: Number,
    graniteHalfMouldingCumQuan: Number,
    graniteHalfMouldingPrevPrice: Number,
    graniteHalfMouldingCurrPrice: Number,
    graniteHalfMouldingCumPrice: Number,

    graniteTotalPrevPrice: Number,
    graniteTotalCurrPrice: Number,
    graniteTotalCumPrice: Number,
    
  },
  { timestamps: true }
);

const GraniteWork = model('granitework', graniteWorkSchema);

export default GraniteWork;
