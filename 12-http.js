//HTTP module Hypertext tranfer protocol

const http = require('HTTP');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the Home page');
  } 
  if (req.url === '/about') {
    res.end('Here is about')
  }
  res.end(`
  <h1> oops !! </h1>
  <p>  We cant seem to find the page you are looking for </p>
  <a href="/">back home`)
});

server.listen(5000);