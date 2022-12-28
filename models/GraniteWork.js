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
    graniteFlooringPrevQuan: {
      type: Number,
      default: 0,
    },
    graniteFlooringCurrQuan: {
      type: Number,
      default: 0,
    },
    graniteFlooringCumQuan: {
      type: Number,
      default: 0,
    },
    graniteFlooringPrevPrice: {
      type: Number,
      default: 0,
    },
    graniteFlooringCurrPrice: {
      type: Number,
      default: 0,
    },
    graniteFlooringCumPrice: {
      type: Number,
      default: 0,
    },

    granitePattiUnit: {
      type: String,
      default: 'RFT',
    },
    granitePattiRate: {
      type: Number,
      default: 35,
    },
    granitePattiPrevQuan: {
      type: Number,
      default: 0,
    },
    granitePattiCurrQuan: {
      type: Number,
      default: 0,
    },
    granitePattiCumQuan: {
      type: Number,
      default: 0,
    },
    granitePattiPrevPrice: {
      type: Number,
      default: 0,
    },
    granitePattiCurrPrice: {
      type: Number,
      default: 0,
    },
    granitePattiCumPrice: {
      type: Number,
      default: 0,
    },

    graniteHalfMouldingUnit: {
      type: String,
      default: 'RFT',
    },
    graniteHalfMouldingRate: {
      type: Number,
      default: 35,
    },
    graniteHalfMouldingPrevQuan: {
      type: Number,
      default: 0,
    },
    graniteHalfMouldingCurrQuan: {
      type: Number,
      default: 0,
    },
    graniteHalfMouldingCumQuan: {
      type: Number,
      default: 0,
    },
    graniteHalfMouldingPrevPrice: {
      type: Number,
      default: 0,
    },
    graniteHalfMouldingCurrPrice: {
      type: Number,
      default: 0,
    },
    graniteHalfMouldingCumPrice: {
      type: Number,
      default: 0,
    },

    graniteTotalPrevPrice: {
      type: Number,
      default: 0,
    },
    graniteTotalCurrPrice: {
      type: Number,
      default: 0,
    },
    graniteTotalCumPrice: {
      type: Number,
      default: 0,
    },
    
  },
  { timestamps: true }
);

const GraniteWork = model('granitework', graniteWorkSchema);

export default GraniteWork;
