module.exports = function () {
    const config = require('config');
    const mongoose = require('mongoose');
    mongoose.Promise = Promise;
    const beautifyUnique = require('mongoose-beautiful-unique-validation');

    mongoose.connect(config.get('dbUrl'));
// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
    mongoose.plugin(beautifyUnique);

    require('../models/index')(mongoose, config.get('root'));


};