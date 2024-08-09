const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    file : {
         data: Buffer,
         contentType: String
    } 
},   {versionKey: false});


module.exports = mongoose.model('fileModel', fileSchema);