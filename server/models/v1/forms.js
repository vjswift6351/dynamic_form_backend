const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    forms: Object
});

module.exports = mongoose.model('formstable' , formSchema, 'formstable');