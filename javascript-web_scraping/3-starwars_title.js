#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = 'https://swapi-api.hbtn.io/api/films/' + movieId + '/';

function getMovieTitle (url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  });
}
getMovieTitle(url);
