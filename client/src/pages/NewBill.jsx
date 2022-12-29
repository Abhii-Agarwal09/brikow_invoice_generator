import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBill = () => {
  const navigate = useNavigate();
  const [billData, setBillData] = useState({
    graniteFlooringUnit: 'SFT',
    graniteFlooringPrevQuan: null,
    graniteFlooringCurrQuan: null,
    granitePattiUnit: 'RFT',
    granitePattiPrevQuan: null,
    granitePattiCurrQuan: null,
    graniteHalfMouldingUnit: 'RFT',
    graniteHalfMouldingPrevQuan: null,
    graniteHalfMouldingCurrQuan: null,

    wallTilesUnit: 'SFT',
    wallTilesPrevQuan: null,
    wallTilesCurrQuan: null,
    floorTilesUnit: 'SFT',
    floorTilesPrevQuan: null,
    floorTilesCurrQuan: null,

    tableTopNoOneUnit: 'no-1',
    tableTopNoOnePrevQuan: null,
    tableTopNoOneCurrQuan: null,

    tableTopNoTwoUnit: 'no-2',
    tableTopNoTwoPrevQuan: null,
    tableTopNoTwoCurrQuan: null,

    tableTopNoThreeUnit: 'no-3',
    tableTopNoThreePrevQuan: null,
    tableTopNoThreeCurrQuan: null,

    tableTopNoFourUnit: 'no-4',
    tableTopNoFourPrevQuan: null,
    tableTopNoFourCurrQuan: null,

    verticalTableTopNoOneUnit: 'no-2',
    verticalTableTopNoOnePrevQuan: null,
    verticalTableTopNoOneCurrQuan: null,

    verticalTableTopNoTwoUnit: 'no-3',
    verticalTableTopNoTwoPrevQuan: null,
    verticalTableTopNoTwoCurrQuan: null,

    totalAdvance: null,
  });

  const inputChangeHandler = (e) => {
    setBillData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(billData);

    // Post request
    const res = await axios.post(
      'http://localhost:4000/api/bills/new',
      billData
    );
    console.log(res);
    if (res.data.success === true) {
      console.log('success');
      navigate('/bills');
    }

    setBillData({
      graniteFlooringUnit: 'SFT',
      graniteFlooringPrevQuan: null,
      graniteFlooringCurrQuan: null,
      granitePattiUnit: 'RFT',
      granitePattiPrevQuan: null,
      granitePattiCurrQuan: null,
      graniteHalfMouldingUnit: 'RFT',
      graniteHalfMouldingPrevQuan: null,
      graniteHalfMouldingCurrQuan: null,

      wallTilesUnit: 'SFT',
      wallTilesPrevQuan: null,
      wallTilesCurrQuan: null,
      floorTilesUnit: 'SFT',
      floorTilesPrevQuan: null,
      floorTilesCurrQuan: null,

      tableTopNoOneUnit: 'no-1',
      tableTopNoOnePrevQuan: null,
      tableTopNoOneCurrQuan: null,

      tableTopNoTwoUnit: 'no-2',
      tableTopNoTwoPrevQuan: null,
      tableTopNoTwoCurrQuan: null,

      tableTopNoThreeUnit: 'no-3',
      tableTopNoThreePrevQuan: null,
      tableTopNoThreeCurrQuan: null,

      tableTopNoFourUnit: 'no-4',
      tableTopNoFourPrevQuan: null,
      tableTopNoFourCurrQuan: null,

      verticalTableTopNoOneUnit: 'no-2',
      verticalTableTopNoOnePrevQuan: null,
      verticalTableTopNoOneCurrQuan: null,

      verticalTableTopNoTwoUnit: 'no-3',
      verticalTableTopNoTwoPrevQuan: null,
      verticalTableTopNoTwoCurrQuan: null,

      totalAdvance: null,
    });
  };

  return (
    <>
      <main>
        <form
          action="POST"
          className="flex-col justify-center items-center m-5 p-5"
          onSubmit={formSubmitHandler}
        >
          <h3 className="text-2xl text-center underline">Granite Work</h3>
          <div className="flex-col justify-center items-center">
            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Granite Flooring</p>
              {/* Granite Flooring Unit */}
              <label htmlFor="gfunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.graniteFlooringUnit || ''}
                  onChange={inputChangeHandler}
                  name="graniteFlooringUnit"
                />
              </label>
              <label htmlFor="gfpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.graniteFlooringPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="graniteFlooringPrevQuan"
                />
              </label>
              <label htmlFor="gfcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.graniteFlooringCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="graniteFlooringCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Granite Patti</p>
              <label htmlFor="gpunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.granitePattiUnit || ''}
                  onChange={inputChangeHandler}
                  name="granitePattiUnit"
                />
              </label>
              <label htmlFor="gppq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.granitePattiPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="granitePattiPrevQuan"
                />
              </label>
              <label htmlFor="gpcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.granitePattiCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="granitePattiCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Granite Half Moulding</p>
              <label htmlFor="ghmunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.graniteHalfMouldingUnit || ''}
                  onChange={inputChangeHandler}
                  name="graniteHalfMouldingUnit"
                />
              </label>
              <label htmlFor="ghmpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.graniteHalfMouldingPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="graniteHalfMouldingPrevQuan"
                />
              </label>
              <label htmlFor="ghmcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.graniteHalfMouldingCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="graniteHalfMouldingCurrQuan"
                />
              </label>
            </div>
          </div>
          <h3 className="text-2xl text-center underline my-5">Tiles Work</h3>
          <div className="flex-col justify-center items-center">
            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Wall Tiles</p>
              <label htmlFor="wtunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.wallTilesUnit || ''}
                  onChange={inputChangeHandler}
                  name="wallTilesUnit"
                />
              </label>
              <label htmlFor="wtpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.wallTilesPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="wallTilesPrevQuan"
                />
              </label>
              <label htmlFor="wtcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.wallTilesCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="wallTilesCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Floor Tiles</p>
              <label htmlFor="ftunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.floorTilesUnit || ''}
                  onChange={inputChangeHandler}
                  name="floorTilesUnit"
                />
              </label>
              <label htmlFor="ftpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.floorTilesPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="floorTilesPrevQuan"
                />
              </label>
              <label htmlFor="ftcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.floorTilesCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="floorTilesCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Table Top number 1</p>
              <label htmlFor="ttnounit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.tableTopNoOneUnit || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoOneUnit"
                />
              </label>
              <label htmlFor="ttnopq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoOnePrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoOnePrevQuan"
                />
              </label>
              <label htmlFor="ttnocq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoOneCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoOneCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Table Top number 2</p>
              <label htmlFor="ttntunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.tableTopNoTwoUnit || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoTwoUnit"
                />
              </label>
              <label htmlFor="ttntpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoTwoPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoTwoPrevQuan"
                />
              </label>
              <label htmlFor="ttntcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoTwoCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoTwoCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Table Top number 3</p>
              <label htmlFor="ttnthunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.tableTopNoThreeUnit || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoThreeUnit"
                />
              </label>
              <label htmlFor="ttnthpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoThreePrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoThreePrevQuan"
                />
              </label>
              <label htmlFor="ttnthcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoThreeCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoThreeCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">Table Top number 4</p>
              <label htmlFor="ttnfunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.tableTopNoFourUnit || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoFourUnit"
                />
              </label>
              <label htmlFor="ttnfpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoFourPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoFourPrevQuan"
                />
              </label>
              <label htmlFor="ttnfcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.tableTopNoFourCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="tableTopNoFourCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">
                Vertical Table Top number 1
              </p>
              <label htmlFor="vttnounit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.verticalTableTopNoOneUnit || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoOneUnit"
                />
              </label>
              <label htmlFor="vttnopq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.verticalTableTopNoOnePrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoOnePrevQuan"
                />
              </label>
              <label htmlFor="vttnocq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.verticalTableTopNoOneCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoOneCurrQuan"
                />
              </label>
            </div>

            <div className="my-3 p-5">
              <p className="text-lg my-3 underline">
                Vertical Table Top number 2
              </p>
              <label htmlFor="vttntunit">
                Unit:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="text"
                  value={billData.verticalTableTopNoTwoUnit || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoTwoUnit"
                />
              </label>
              <label htmlFor="vttntpq">
                Previous Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.verticalTableTopNoTwoPrevQuan || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoTwoPrevQuan"
                />
              </label>
              <label htmlFor="vttntcq">
                Current Quantity:{' '}
                <input
                  className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                  type="number"
                  value={billData.verticalTableTopNoTwoCurrQuan || ''}
                  onChange={inputChangeHandler}
                  name="verticalTableTopNoTwoCurrQuan"
                />
              </label>
            </div>
          </div>

          <div className="my-3 p-5">
            <label htmlFor="totalAdv">
              Total Advance:{' '}
              <input
                className="border-2 border-black rounded-lg mx-3 py-1 px-2"
                type="number"
                name="totalAdvance"
                value={billData.totalAdvance || ''}
                onChange={inputChangeHandler}
              />
            </label>
          </div>
          <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out m-5">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default NewBill;
