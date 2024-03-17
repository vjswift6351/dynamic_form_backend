const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
    field: String
});

module.exports = mongoose.model('fieldtable' , fieldSchema, 'fieldtable');