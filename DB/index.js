module.exports = function (config) {
    const mongoose = require('mongoose');
    mongoose.Promise = Promise;
    const beautifyUnique = require('mongoose-beautiful-unique-validation');

    mongoose.connect(config.get('dbUrl'));
// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
    mongoose.plugin(beautifyUnique);

    if(process.env.DIRNAME){
        require('../models/index')(mongoose, process.env.DIRNAME);
    }else{
        console.error('Please connect ENV');
    }


};