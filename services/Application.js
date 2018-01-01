// @flow

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const createExpressApp = () => {
  const expressApp = express();

  expressApp.get('*', (req, res) => {
    return handle(req, res);
  });

  return expressApp;
};

exports.createExpressApp = createExpressApp;
exports.app = app;
