import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Bills = () => {
  // eslint-disable-next-line no-unused-vars
  const [allBills, setAllBills] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      const res = await axios.get('http://localhost:4000/api/bills');
      // console.log(res.data);
      if (res.status === 200) {
        setAllBills(res.data.data);
      }
    };
    getBills();
  }, []);
  return (
    <>
      <h1>Bills</h1>
      {allBills.map((bill, index) => {
        console.log(bill, bill.billImage?.data);
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(bill.billImage?.data))
        ); 
        console.log(base64String);
        return (
          <>
            <h1>{index}</h1>
            <img src={`data:image/png;base64,${base64String}`} alt="imag" />
          </>
        );
      })}
    </>
  );
};

export default Bills;
