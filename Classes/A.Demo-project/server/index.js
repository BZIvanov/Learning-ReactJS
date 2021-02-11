require('dotenv').config();
const express = require('express');

const app = express();

require('./startup/db')();
require('./startup/express')(app);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`REST API listening on port: ${PORT}`);
});
