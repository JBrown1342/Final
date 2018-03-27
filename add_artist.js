var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }));

var Pool = require('pg').Pool;

var config = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'show_database',
}

app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

pool = new Pool(config);


app.post('/add_artist', urlencodedParser, function(req, res){
    console.log(req.body);
});

app.listen(3000, () => console.log('Server started on port 3000'));
