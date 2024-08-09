var express = require('express');
var cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const fileRoute = require('./routes/api');

var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/public', express.static(process.cwd() + '/public'));

app.use('/api', fileRoute );

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
          console.log("DB connected successfully")
        })
        .catch ((error) => {
          console.log(`${error} DB failed to connect`)
        });


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
