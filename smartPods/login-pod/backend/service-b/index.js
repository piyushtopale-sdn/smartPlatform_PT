import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 4001;

app.use(cors());

app.get('/api/info', (req, res) => {
  res.json({ message: "Welcome to the Dashboard!", stats: { users: 42, tasks: 17 } });
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});
