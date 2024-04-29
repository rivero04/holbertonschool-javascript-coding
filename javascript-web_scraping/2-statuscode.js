#!/usr/bin/node

const { func } = require('assert-plus');
const request = require('request');

const url = process.argv[2]

function getstatus(url){
    request.get(url, (error, response) =>{
        if (error){
            console.log(error)
            return;
        }
        console.log("code: " + response.statusCode);
    })
}

getstatus(url);