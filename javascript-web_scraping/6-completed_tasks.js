#!/usr/bin/node

const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos';

function getCompletedTasks() {
    request(url, { json: true }, (error, response, body) => {
        if (error) {
            console.log(error);
            return;
        }
        const completedTasks = {};
        body.forEach(task => {
            if (task.completed) {
                if (!completedTasks[task.userId]) {
                    completedTasks[task.userId] = 0;
                }
                completedTasks[task.userId]++;
            }
        });
        console.log(completedTasks);
    });
}
getCompletedTasks();
