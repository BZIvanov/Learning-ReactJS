const express = require('express');
const corsHeaders = require('../middlewares/cors');
const globalError = require('../middlewares/error');
const feedRoutes = require('../routes');

module.exports = (app) => {
  app.use(express.json());
  app.use(corsHeaders);

  app.use('/feed', feedRoutes);

  app.use(globalError);
};
