import express from 'express'
import rateLimitingMiddleware from './rateLimitingMiddleware.js';
const app = express();

app.use(rateLimitingMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, world! You are within the request limit.');
});

app.get('/dashboard', (req, res) => {
  res.send('Welcome to your dashboard!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});