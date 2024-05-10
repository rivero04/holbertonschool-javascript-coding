const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.access(databasePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.end('This is the list of our students\nDatabase not found');
      } else {
        countStudents(databasePath)
          .then((data) => {
            res.end(`This is the list of our students\n${data}`);
          })
          .catch((error) => {
            res.end(`This is the list of our students\n${error.message}`);
          });
      }
    });
  }
});

app.listen(1245, '127.0.0.1')

module.exports = app;