import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import bookRouter from './routes/bookRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}!`);
});

app.use("/api/book", bookRouter);

