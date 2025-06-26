const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4002;

app.use(cors());

app.get('/api/info', (req, res) => {
  res.json({ message: "Welcome to the user service" });
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});
