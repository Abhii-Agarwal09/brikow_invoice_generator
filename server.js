import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import {
  listAllBills,
  newBillGenerator,
} from './controllers/billController.js';
import connectDB from './config/db.js';

const app = express();
connectDB();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Set-Cookie',
  ],
  exposedHeaders: ['Set-Cookie'],
  credentials: true,
};
// Middlewares
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Landing page',
  });
});

app.get('/api/bills', listAllBills);
app.post('/api/bills/new', newBillGenerator);

app.listen(4000, () => console.log('listening on port 4000'));
