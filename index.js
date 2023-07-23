// server

// call express
const express = require('express');
// execute express
const app = express();
// convert to json format
app.use(express.json());
// start the local server
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

// endpoint
app.get('/api/data/:id', (req, res) => {
  const findData = data.find((x) => x.id === parseInt(req.params.id));
  res.send(findData);
});

// create and add more people on data (POST)
app.post('/api/data', (req, res) => {
  console.log(req.body);

  const addData = {
    name: req.body.name || 'Default Name',
    id: data.length + 1,
  };
  data.push(addData);
  res.send(data);
});

// update data (PUT)
app.put('/api/data/:id', (req, res) => {
  const findData = data.find((x) => x.id === parseInt(req.params.id));
  res.send(findData);
  findData.name = req.body.name;
  res.send(findData);
});
