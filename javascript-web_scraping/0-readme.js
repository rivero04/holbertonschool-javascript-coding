#!/usr/bin/node

const fs = require('fs');

const filepath = process.argv[2];

function Readfile(path){
    fs.readFile(path, 'utf-8', (err, data) =>{
        if (err){
            console.error(err);
        }
        else{
            console.log(data);
        }
    });
}

Readfile(filepath);
