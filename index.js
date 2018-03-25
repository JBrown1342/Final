var express = require('express'),
    app = express();
var Pool = require('pg').Pool;
var config = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'show_database',
}

pool = new Pool(config);

async function get_artists(){
  var response = await pool.query("SELECT * from artists");
  console.log(response.rows);
  app.get('/', (req, res) => res.send(response.rows));
};

get_artists();

app.listen(3000, () => console.log('Server started on port 3000'));
