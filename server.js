import express from 'express';
import cors from 'cors';
import { listAllBills, newBillGenerator } from './controllers/billController';

const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Landing page',
  });
});

app.get('/api/bills', listAllBills);
app.post('/api/bills/new', newBillGenerator);

app.listen(4000, () => console.log('listening on port 4000'));
