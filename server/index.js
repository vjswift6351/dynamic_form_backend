const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api/v1/index');
require('./config/db');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1', api);


app.listen(port, function(){
    console.log('Server running on localhost: ' + port);
});

export default app;
