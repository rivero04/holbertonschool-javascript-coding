#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
 if (error) {
    console.error(error);
    return;
 }

 const moviesdata = JSON.parse(body);
 let count = 0;

 moviesdata.results.forEach(film => {
    film.characters.forEach(characterUrl => {
      if (characterUrl.includes('18')) {
        count++;
      }
    });
 });

 console.log(count);
});
