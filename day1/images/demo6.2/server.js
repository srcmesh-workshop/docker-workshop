const app = require('express')();
require('dotenv').config();

const SECRET = process.env.SECRET;
app.get('/', (req, res) => {
  console.log('GET /');
  res.json({
    message: `Hello Docker from ${os.hostname()} and my secret is ${SECRET}`,
  });
});

app.get('/health', (req, res) => {
  console.log('GET /health');
  res.sendStatus(200);
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.error(err.message);
  res.sendStatus(500);
});

const server = app.listen(3000, () => {
  console.log('Server is running...');
});
