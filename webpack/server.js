const fs = require('fs');
const path = require('path');

const express = require('express');
const webpack = require('webpack');


const app = express();
const config = require('./config.js').getConfigDev()
const compiler = webpack(config);
const ipAddress = require('./ipAddress');

app
  .use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      progress: true,
    },
    quiet: false,
    noInfo: false,
    overlay: {
      warnings: false,
      errors: true
    },
  }))
  .use(require("webpack-hot-middleware")(compiler))
  .use(express.static('./'));


app.get('/:page', function(req, res, next) {
  var page = req.params.page;
  if (!config.entry[page]) return next();
  res.render('template', {
    title: page,
    page: page
  })
});


// 404处理
app.use(function(req, res, next) {
  res.status(404).send('404, page can not find!');
});


var port = 3000;
var server = app.listen(port, function() {
  console.log('------------ server is listening at ' + ipAddress + ':' + server.address().port);
});





/**
 * function
 */
function parseJsonFile(filePath) {
  try {
    var assets = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(assets);
  } catch (e) {
    console.error(e);
    return false;
  }
}
