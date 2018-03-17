const apiController = require('express').Router();
const endpoints = require('../constants/endpoints');
const routes = require('../routes/routes');

apiController.route(endpoints.ui)
    .get(routes.getUIRoute);

module.exports = apiController;