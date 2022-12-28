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
    wallTilesPrevQuan: {
      type: Number,
      default: 0,
    },
    wallTilesCurrQuan: {
      type: Number,
      default: 0,
    },
    wallTilesCumQuan: {
      type: Number,
      default: 0,
    },
    wallTilesPrevPrice: {
      type: Number,
      default: 0,
    },
    wallTilesCurrPrice: {
      type: Number,
      default: 0,
    },
    wallTilesCumPrice: {
      type: Number,
      default: 0,
    },

    floorTilesUnit: {
      type: String,
      default: 'SFT',
    },
    floorTilesRate: {
      type: Number,
      default: 16,
    },
    floorTilesPrevQuan: {
      type: Number,
      default: 0,
    },
    floorTilesCurrQuan: {
      type: Number,
      default: 0,
    },
    floorTilesCumQuan: {
      type: Number,
      default: 0,
    },
    floorTilesPrevPrice: {
      type: Number,
      default: 0,
    },
    floorTilesCurrPrice: {
      type: Number,
      default: 0,
    },
    floorTilesCumPrice: {
      type: Number,
      default: 0,
    },

    tableTopNoOneUnit: {
      type: String,
      default: 'no-1',
    },
    tableTopNoOneRate: {
      type: Number,
      default: 2000,
    },
    tableTopNoOnePrevQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoOneCurrQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoOneCumQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoOnePrevPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoOneCurrPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoOneCumPrice: {
      type: Number,
      default: 0,
    },

    tableTopNoTwoUnit: {
      type: String,
      default: 'no-2',
    },
    tableTopNoTwoRate: {
      type: Number,
      default: 1100.0,
    },
    tableTopNoTwoPrevQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoTwoCurrQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoTwoCumQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoTwoPrevPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoTwoCurrPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoTwoCumPrice: {
      type: Number,
      default: 0,
    },

    tableTopNoThreeUnit: {
      type: String,
      default: 'no-3',
    },
    tableTopNoThreeRate: {
      type: Number,
      default: 1100.0,
    },
    tableTopNoThreePrevQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoThreeCurrQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoThreeCumQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoThreePrevPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoThreeCurrPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoThreeCumPrice: {
      type: Number,
      default: 0,
    },

    tableTopNoFourUnit: {
      type: String,
      default: 'no-4',
    },
    tableTopNoFourRate: {
      type: Number,
      default: 2000.0,
    },
    tableTopNoFourPrevQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoFourCurrQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoFourCumQuan: {
      type: Number,
      default: 0,
    },
    tableTopNoFourPrevPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoFourCurrPrice: {
      type: Number,
      default: 0,
    },
    tableTopNoFourCumPrice: {
      type: Number,
      default: 0,
    },

    verticalTableTopNoOneUnit: {
      type: String,
      default: 'no-2',
    },
    verticalTableTopNoOneRate: {
      type: Number,
      default: 1400.0,
    },
    verticalTableTopNoOnePrevQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoOneCurrQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoOneCumQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoOnePrevPrice: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoOneCurrPrice: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoOneCumPrice: {
      type: Number,
      default: 0,
    },

    verticalTableTopNoTwoUnit: {
      type: String,
      default: 'no-3',
    },
    verticalTableTopNoTwoRate: {
      type: Number,
      default: 2000.0,
    },
    verticalTableTopNoTwoPrevQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoTwoCurrQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoTwoCumQuan: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoTwoPrevPrice: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoTwoCurrPrice: {
      type: Number,
      default: 0,
    },
    verticalTableTopNoTwoCumPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const TilesWork = model('tileswork', tilesWorkSchema);

export default TilesWork;
