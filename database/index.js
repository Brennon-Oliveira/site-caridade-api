const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DATABASE } = require('./../consts');
const DB_URL_BASE = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@site-caridade.jrgob.mongodb.net/${DATABASE}?retryWrites=true&w=majority`

mongoose.connect(DB_URL_BASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;