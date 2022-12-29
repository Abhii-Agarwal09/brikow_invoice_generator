import Bill from '../models/Bill.js';
import GraniteWork from '../models/GraniteWork.js';
import TilesWork from '../models/TilesWork.js';
import html from '../utilities/htmlGenerator.js';
import nodeHtmlToImage from 'node-html-to-image';
import fs from 'fs';

const listAllBills = async (req, res) => {
  const bills = await Bill.find().populate('graniteWork').populate('tilesWork');
  res.json({
    success: true,
    message: 'All bills',
    data: bills,
  });
};
const newBillGenerator = async (req, res) => {
  // console.log(req.body);
  const {
    graniteFlooringUnit,
    graniteFlooringPrevQuan,
    graniteFlooringCurrQuan,
    granitePattiUnit,
    granitePattiPrevQuan,
    granitePattiCurrQuan,
    graniteHalfMouldingUnit,
    graniteHalfMouldingPrevQuan,
    graniteHalfMouldingCurrQuan,

    wallTilesUnit,
    wallTilesPrevQuan,
    wallTilesCurrQuan,
    floorTilesUnit,
    floorTilesPrevQuan,
    floorTilesCurrQuan,

    tableTopNoOneUnit,
    tableTopNoOnePrevQuan,
    tableTopNoOneCurrQuan,

    tableTopNoTwoUnit,
    tableTopNoTwoPrevQuan,
    tableTopNoTwoCurrQuan,

    tableTopNoThreeUnit,
    tableTopNoThreePrevQuan,
    tableTopNoThreeCurrQuan,

    tableTopNoFourUnit,
    tableTopNoFourPrevQuan,
    tableTopNoFourCurrQuan,

    verticalTableTopNoOneUnit,
    verticalTableTopNoOnePrevQuan,
    verticalTableTopNoOneCurrQuan,

    verticalTableTopNoTwoUnit,
    verticalTableTopNoTwoPrevQuan,
    verticalTableTopNoTwoCurrQuan,

    totalAdvance,
  } = req.body;

  // console.log(typeof totalAdvance);

  // Granite work
  const granite = new GraniteWork({
    graniteFlooringUnit,
    graniteFlooringPrevQuan,
    graniteFlooringCurrQuan,

    granitePattiUnit,
    granitePattiPrevQuan,
    granitePattiCurrQuan,

    graniteHalfMouldingUnit,
    graniteHalfMouldingPrevQuan,
    graniteHalfMouldingCurrQuan,
  });

  granite.graniteFlooringCumQuan =
    granite.graniteFlooringPrevQuan + granite.graniteFlooringCurrQuan;

  granite.granitePattiCumQuan =
    granite.granitePattiPrevQuan + granite.granitePattiCurrQuan;

  granite.graniteHalfMouldingCumQuan =
    granite.graniteHalfMouldingPrevQuan + granite.graniteHalfMouldingCurrQuan;

  granite.graniteFlooringPrevPrice =
    granite.graniteFlooringRate * granite.graniteFlooringPrevQuan;

  granite.graniteFlooringCurrPrice =
    granite.graniteFlooringRate * granite.graniteFlooringCurrQuan;

  granite.graniteFlooringCumPrice =
    granite.graniteFlooringPrevPrice + granite.graniteFlooringCurrPrice;

  granite.granitePattiPrevPrice =
    granite.granitePattiRate * granite.granitePattiPrevQuan;

  granite.granitePattiCurrPrice =
    granite.granitePattiRate * granite.granitePattiCurrQuan;

  granite.granitePattiCumPrice =
    granite.granitePattiPrevPrice + granite.granitePattiCurrPrice;

  granite.graniteHalfMouldingPrevPrice =
    granite.graniteHalfMouldingRate * granite.graniteHalfMouldingPrevQuan;

  granite.graniteHalfMouldingCurrPrice =
    granite.graniteHalfMouldingRate * granite.graniteHalfMouldingCurrQuan;

  granite.graniteHalfMouldingCumPrice =
    granite.graniteHalfMouldingPrevPrice + granite.graniteHalfMouldingCurrPrice;

  await granite.save();

  // Tiles work
  const tile = new TilesWork({
    wallTilesUnit,
    wallTilesPrevQuan,
    wallTilesCurrQuan,

    floorTilesUnit,
    floorTilesPrevQuan,
    floorTilesCurrQuan,

    tableTopNoOneUnit,
    tableTopNoOnePrevQuan,
    tableTopNoOneCurrQuan,

    tableTopNoTwoUnit,
    tableTopNoTwoPrevQuan,
    tableTopNoTwoCurrQuan,

    tableTopNoThreeUnit,
    tableTopNoThreePrevQuan,
    tableTopNoThreeCurrQuan,

    tableTopNoFourUnit,
    tableTopNoFourPrevQuan,
    tableTopNoFourCurrQuan,

    verticalTableTopNoOneUnit,
    verticalTableTopNoOnePrevQuan,
    verticalTableTopNoOneCurrQuan,

    verticalTableTopNoTwoUnit,
    verticalTableTopNoTwoPrevQuan,
    verticalTableTopNoTwoCurrQuan,
  });

  tile.wallTilesCumQuan = tile.wallTilesPrevQuan + tile.wallTilesCurrQuan;

  tile.wallTilesPrevPrice = tile.wallTilesRate * tile.wallTilesPrevQuan;

  tile.wallTilesCurrPrice = tile.wallTilesRate * tile.wallTilesCurrQuan;

  tile.wallTilesCumPrice = tile.wallTilesPrevPrice + tile.wallTilesCurrPrice;

  // floor tiles
  tile.floorTilesCumQuan = tile.floorTilesPrevQuan + tile.floorTilesCurrQuan;

  tile.floorTilesPrevPrice = tile.floorTilesRate * tile.floorTilesPrevQuan;

  tile.floorTilesCurrPrice = tile.floorTilesRate * tile.floorTilesCurrQuan;

  tile.floorTilesCumPrice = tile.floorTilesPrevPrice + tile.floorTilesCurrPrice;

  // table tops
  tile.tableTopNoOneCumQuan =
    tile.tableTopNoOnePrevQuan + tile.tableTopNoOneCurrQuan;

  tile.tableTopNoOnePrevPrice =
    tile.tableTopNoOneRate * tile.tableTopNoOnePrevQuan;

  tile.tableTopNoOneCurrPrice =
    tile.tableTopNoOneRate * tile.tableTopNoOneCurrQuan;

  tile.tableTopNoOneCumPrice =
    tile.tableTopNoOnePrevPrice + tile.tableTopNoOneCurrPrice;

  // Table top 2
  tile.tableTopNoTwoCumQuan =
    tile.tableTopNoTwoPrevQuan + tile.tableTopNoTwoCurrQuan;

  tile.tableTopNoTwoPrevPrice =
    tile.tableTopNoTwoRate * tile.tableTopNoTwoPrevQuan;

  tile.tableTopNoTwoCurrPrice =
    tile.tableTopNoTwoRate * tile.tableTopNoTwoCurrQuan;

  tile.tableTopNoTwoCumPrice =
    tile.tableTopNoTwoPrevPrice + tile.tableTopNoTwoCurrPrice;

  // Table top 3
  tile.tableTopNoThreeCumQuan =
    tile.tableTopNoThreePrevQuan + tile.tableTopNoThreeCurrQuan;

  tile.tableTopNoThreePrevPrice =
    tile.tableTopNoThreeRate * tile.tableTopNoThreePrevQuan;

  tile.tableTopNoThreeCurrPrice =
    tile.tableTopNoThreeRate * tile.tableTopNoThreeCurrQuan;

  tile.tableTopNoThreeCumPrice =
    tile.tableTopNoThreePrevPrice + tile.tableTopNoThreeCurrPrice;

  // table top 4
  tile.tableTopNoFourCumQuan =
    tile.tableTopNoFourPrevQuan + tile.tableTopNoFourCurrQuan;

  tile.tableTopNoFourPrevPrice =
    tile.tableTopNoFourRate * tile.tableTopNoFourPrevQuan;

  tile.tableTopNoFourCurrPrice =
    tile.tableTopNoFourRate * tile.tableTopNoFourCurrQuan;

  tile.tableTopNoFourCumPrice =
    tile.tableTopNoFourPrevPrice + tile.tableTopNoFourCurrPrice;

  // Vertical table top 1
  tile.verticalTableTopNoOneCumQuan =
    tile.verticalTableTopNoOnePrevQuan + tile.verticalTableTopNoOneCurrQuan;

  tile.verticalTableTopNoOnePrevPrice =
    tile.verticalTableTopNoOneRate * tile.verticalTableTopNoOnePrevQuan;

  tile.verticalTableTopNoOneCurrPrice =
    tile.verticalTableTopNoOneRate * tile.verticalTableTopNoOneCurrQuan;

  tile.verticalTableTopNoOneCumPrice =
    tile.verticalTableTopNoOnePrevPrice + tile.verticalTableTopNoOneCurrPrice;
  // Vertical table top 2
  tile.verticalTableTopNoTwoCumQuan =
    tile.verticalTableTopNoTwoPrevQuan + tile.verticalTableTopNoTwoCurrQuan;

  tile.verticalTableTopNoTwoPrevPrice =
    tile.verticalTableTopNoTwoRate * tile.verticalTableTopNoTwoPrevQuan;

  tile.verticalTableTopNoTwoCurrPrice =
    tile.verticalTableTopNoTwoRate * tile.verticalTableTopNoTwoCurrQuan;

  tile.verticalTableTopNoTwoCumPrice =
    tile.verticalTableTopNoTwoPrevPrice + tile.verticalTableTopNoTwoCurrPrice;

  await tile.save();
  // Generate Bill
  const bill = new Bill({
    graniteWork: granite._id,
    tilesWork: tile._id,
  });
  bill.totalPrevAmount =
    granite.graniteFlooringPrevPrice +
    granite.granitePattiPrevPrice +
    granite.graniteHalfMouldingPrevPrice +
    tile.wallTilesPrevPrice +
    tile.floorTilesPrevPrice +
    tile.tableTopNoOnePrevPrice +
    tile.tableTopNoTwoPrevPrice +
    tile.tableTopNoThreePrevPrice +
    tile.tableTopNoFourPrevPrice +
    tile.verticalTableTopNoOnePrevPrice +
    tile.verticalTableTopNoTwoPrevPrice;

  bill.totalCurrAmount =
    granite.graniteFlooringCurrPrice +
    granite.granitePattiCurrPrice +
    granite.graniteHalfMouldingCurrPrice +
    tile.wallTilesCurrPrice +
    tile.floorTilesCurrPrice +
    tile.tableTopNoOneCurrPrice +
    tile.tableTopNoTwoCurrPrice +
    tile.tableTopNoThreeCurrPrice +
    tile.tableTopNoFourCurrPrice +
    tile.verticalTableTopNoOneCurrPrice +
    tile.verticalTableTopNoTwoCurrPrice;

  bill.totalCumAmount = bill.totalPrevAmount + bill.totalCurrAmount;

  bill.totalCumAdvance = totalAdvance;
  bill.totalPrevBalance = bill.totalPrevAmount;
  bill.totalCurrBalance = bill.totalCurrAmount;
  bill.totalCumBalance = bill.totalCumAmount - totalAdvance;

  await bill.save();
  // console.log(bill);
  // Generate Bill table
  const billHtml = html(bill, granite, tile);
  // Convert table to image
  const imageBuffer = await nodeHtmlToImage({
    output: `./bills/${bill._id}.png`,
    html: billHtml,
  })
  // console.log(imageBuffer);
  bill.billImage = fs.readFileSync(`./bills/${bill._id}.png`);
  await bill.save();
  // Store image
  // Send response
  res.json({
    success: true,
    mesage: 'Bill created',
    bill,
    granite,
    tile,
    billHtml,
  });
};

export { listAllBills, newBillGenerator };
