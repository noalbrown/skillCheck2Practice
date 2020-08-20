require('dotenv').config();
const express = require("express");
const massive = require('massive');
const ctrl = require('./controller')
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db)
  console.log('db connected')
}).catch(err => console.log(err));

app.use(express.json());

app.post('/api/somename', ctrl.create);
app.get('/api/somename', ctrl.getAll);
app.get('/api/somename/:id', ctrl.getOne);
app.put('/api/somename/:id', ctrl.update);
app.delete('/api/somename/:id', ctrl.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});