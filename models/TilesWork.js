import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const tilesWorkSchema = new Schema(
  {
    wallTilesUnit: {
      type: String,
      default: 'SFT',
    },
    wallTilesRate: {
      type: Number,
      default: 18,
    },
    wallTilesPrevQuan: Number,
    wallTilesCurrQuan: Number,
    wallTilesCumQuan: Number,
    wallTilesPrevPrice: Number,
    wallTilesCurrPrice: Number,
    wallTilesCumPrice: Number,

    floorTilesUnit: {
      type: String,
      default: 'SFT',
    },
    floorTilesRate: {
      type: Number,
      default: 16,
    },
    floorTilesPrevQuan: Number,
    floorTilesCurrQuan: Number,
    floorTilesCumQuan: Number,
    floorTilesPrevPrice: Number,
    floorTilesCurrPrice: Number,
    floorTilesCumPrice: Number,

    tableTopNoOneUnit: {
      type: String,
      default: 'no-1',
    },
    tableTopNoOneRate: {
      type: Number,
      default: 2000.0,
    },
    tableTopNoOnePrevQuan: Number,
    tableTopNoOneCurrQuan: Number,
    tableTopNoOneCumQuan: Number,
    tableTopNoOnePrevPrice: Number,
    tableTopNoOneCurrPrice: Number,
    tableTopNoOneCumPrice: Number,

    tableTopNoTwoUnit: {
      type: String,
      default: 'no-2',
    },
    tableTopNoTwoRate: {
      type: Number,
      default: 1100.0,
    },
    tableTopNoTwoPrevQuan: Number,
    tableTopNoTwoCurrQuan: Number,
    tableTopNoTwoCumQuan: Number,
    tableTopNoTwoPrevPrice: Number,
    tableTopNoTwoCurrPrice: Number,
    tableTopNoTwoCumPrice: Number,

    tableTopNoThreeUnit: {
      type: String,
      default: 'no-3',
    },
    tableTopNoThreeRate: {
      type: Number,
      default: 1100.0,
    },
    tableTopNoThreePrevQuan: Number,
    tableTopNoThreeCurrQuan: Number,
    tableTopNoThreeCumQuan: Number,
    tableTopNoThreePrevPrice: Number,
    tableTopNoThreeCurrPrice: Number,
    tableTopNoThreeCumPrice: Number,

    tableTopNoFourUnit: {
      type: String,
      default: 'no-4',
    },
    tableTopNoFourRate: {
      type: Number,
      default: 2000.0,
    },
    tableTopNoFourPrevQuan: Number,
    tableTopNoFourCurrQuan: Number,
    tableTopNoFourCumQuan: Number,
    tableTopNoFourPrevPrice: Number,
    tableTopNoFourCurrPrice: Number,
    tableTopNoFourCumPrice: Number,

    verticalTableTopNoOneUnit: {
      type: String,
      default: 'no-2',
    },
    verticalTableTopNoOneRate: {
      type: Number,
      default: 1400.00,
    },
    verticalTableTopNoOnePrevQuan: Number,
    verticalTableTopNoOneCurrQuan: Number,
    verticalTableTopNoOneCumQuan: Number,
    verticalTableTopNoOnePrevPrice: Number,
    verticalTableTopNoOneCurrPrice: Number,
    verticalTableTopNoOneCumPrice: Number,

    verticalTableTopNoTwoUnit: {
      type: String,
      default: 'no-3',
    },
    verticalTableTopNoTwoRate: {
      type: Number,
      default: 2000.00,
    },
    verticalTableTopNoTwoPrevQuan: Number,
    verticalTableTopNoTwoCurrQuan: Number,
    verticalTableTopNoTwoCumQuan: Number,
    verticalTableTopNoTwoPrevPrice: Number,
    verticalTableTopNoTwoCurrPrice: Number,
    verticalTableTopNoTwoCumPrice: Number,
  },
  { timestamps: true }
);

const TilesWork = model('tileswork', tilesWorkSchema);

export default TilesWork;