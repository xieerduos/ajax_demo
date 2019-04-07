const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/user', (req, res) => {
    //   res.json({
    //     id: '1',
    //     name: 'henry'
    //   });
    fs.readFile('./sample.txt', 'utf-8', (error, data) => {
        if (error) {
            throw error;
        } else {
            res.send(data);
        }
    });
});

app.listen(8888, () => {
    console.log('Server is running localhost:8888');
});
