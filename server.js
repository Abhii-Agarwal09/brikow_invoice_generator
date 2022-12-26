import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Landing page',
  });
});

app.listen(4000, () => console.log('listening on port 4000'));
