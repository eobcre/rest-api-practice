// server

// call express
const express = require('express');
// execute express
const app = express();
// for local server
app.listen(3000, console.log('server is on'));

app.get('/', (req, res) => {
  res.send('test');
});

// data in server (json format)
const data = [
  {
    name: 'David',
    id: 1,
  },
  {
    name: 'Linda',
    id: 2,
  },
  {
    name: 'Chris',
    id: 3,
  },
  {
    name: 'Ryan',
    id: 4,
  },
  {
    name: 'Kelly',
    id: 5,
  },
];

// getting data logic (GET) and addressability
app.get('/api/data', (req, res) => {
  res.send(data);
});
