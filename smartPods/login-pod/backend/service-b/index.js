import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';

dotenv.config();

const PORT = 4001;
const app = express();
app.use(cors());
connectDB();
// console.log("env", process.env.MONGO_DB_URL);

app.get('/api/info', (req, res) => {
  res.json({ message: "Welcome to the Dashboard!", stats: { users: 42, tasks: 17 } });
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});
