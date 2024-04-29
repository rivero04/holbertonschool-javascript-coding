#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const data = process.argv[3];

function Writefile(path, content) {
    fs.writeFile(path, content, 'utf-8', (err) => {
       if (err) {
         console.error(err);
       }});
   }
   
Writefile(filePath, data);
