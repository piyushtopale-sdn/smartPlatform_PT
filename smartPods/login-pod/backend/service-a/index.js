import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Service-a running');
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secret_key');
  res.send({ token });
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hash });
  await user.save();
  res.send({ message: 'User registered' });
});

// app.listen(4000, () => console.log('Service A running on port 4000'));
app.listen(4000, '0.0.0.0', () => console.log('Service A running on port 4000'));

