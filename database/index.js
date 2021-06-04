const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD } = require('./../consts');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@sitecaridade.jrgob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

module.exports = mongoose;