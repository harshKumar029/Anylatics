const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoDb = require('./db');
mongoDb();

app.use(cors());


// app.use(express.json({ limit: '5mb' }));
app.use(express.json());
app.use('/api', require('./Routers/DisplayData'));

app.get('/', (req, res) => {
  res.send('Hello World! test');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
