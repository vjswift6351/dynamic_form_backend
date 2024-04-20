const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    isadmin:String
});

module.exports = mongoose.model('usertable' , userSchema, 'usertable');