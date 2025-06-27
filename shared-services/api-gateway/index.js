import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
// import { config } from './config/index.js';
const app = express();
const PORT = 4005;

app.use(cors());

// Forward requests to the user service
app.use('/service-a', createProxyMiddleware({
  target: "http://service-a:4000",
  pathRewrite: { '^/service-a': '' },
  changeOrigin: true,
  onError(err, req, res) {
    console.error('Proxy error:', err.message);
    res.status(500).send('Proxy failed');
  }
}));

app.get('/', (req, res) => {
  res.send('Gateway Service is running');
});

app.listen(PORT, () => {
  console.log(`Gateway service running on ${PORT}`);
});
