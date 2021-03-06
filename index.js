var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

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

async function get_artists(){
  var response = await pool.query("SELECT * FROM artists");
  console.log(response.rows);
  app.get('/', (req, res) => res.send(response.rows));
};

get_artists();

app.listen(3000, () => console.log('Server started on port 3000'));
