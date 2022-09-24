const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const filesRoutes = require('./files/files.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({ createParentPath: true }));

app.use('/', filesRoutes);

module.exports = app;
