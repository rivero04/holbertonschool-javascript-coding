#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

function getContent (url, filepath) {
  request(url, { encoding: 'utf8' }, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      fs.writeFileSync(filepath, body, 'utf-8');
    }
  });
}
getContent(url, filePath);
