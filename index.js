var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var Pool = require('pg').Pool;
var config = {
  host: 'localhost',
  user: 'postgres',
  password: 'Berklee123',
  database: 'show_database',
}

app.use(bodyParser.json());
pool = new Pool(config);

async function get_artists(){
  var response = await pool.query("SELECT * from artists");
  console.log(response.rows);
  app.get('/', (req, res) => res.send(response.artist_name));
};

get_artists();

app.listen(3000, () => console.log('Server started on port 3000'));
