const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const databasePath = 'database.csv';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.access(databasePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.send('This is the list of our students\nDatabase not found');
    } else {
      countStudents(databasePath)
        .then((data) => {
          res.send(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.send(`This is the list of our students\n${error.message}`);
        });
    }
  });
});

app.listen(1245);

module.exports = app;
