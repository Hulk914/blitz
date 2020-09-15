'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var distDir = path.join(__dirname, '..', 'blitzResumeUI', 'dist', 'blitzResumeUI');
app.use(express.static(distDir));

app.get('/rest/hello', (req, res) => {
  res.send('hello from api response')
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'blitzResumeUI', 'dist', 'blitzResumeUI','index.html'))
});


app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);