// const request = require('request');

const express = require('express');

const compression = require('compression');
const uiPaths = require('./config/paths');

const port = process.env.PORT || 4000;
const app = express();

app.use(compression());

// if (process.env.NODE_ENV === 'development') {
//   app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
//   });
// }

app.use('/', express.static(uiPaths.storybook));

app.listen(port, () => console.log(`App is now running on ${port}`));
