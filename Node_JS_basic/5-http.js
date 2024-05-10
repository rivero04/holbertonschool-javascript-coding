const http = require("http");
const countStudents = require("./3-read_file_async");

const databasePath = "database.csv";

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    countStudents(databasePath)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

app.listen(1245);

module.exports = app;