import { useState } from 'react';

const Bills = () => {
  const [allBills, setAllBills] = useState([]);

  return (
    <>
      <h1>Bills</h1>
      {allBills.map((bill) => {
        return <h1>Hello</h1>;
      })}
    </>
  );
};

export default Bills;
