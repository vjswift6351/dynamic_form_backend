const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGOSTRING;

mongoose.Promise = global.Promise;
mongoose.connect(db ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const dbcheck = mongoose.connection
dbcheck.on('error', (error) => console.log(error))
dbcheck.on('open', () => console.log('connected to database'))

module.exports = mongoose;