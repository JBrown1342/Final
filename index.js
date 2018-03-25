var   express = require('express'),
      app = express();
const { Pool, Client } = require('pg');

const pool = new Pool();
const client = new Client
var connect = "postgres://USERNAME:PASSWORD@localhost/show_database";

client.connect();
pool.connect((err, client, done) => {
  if (err) throw err
  client.query('SELECT * FROM artists', [1], (err, res) => {
    console.log(true);
    done();

    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
});

app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => console.log('Server started on port 3000'));
