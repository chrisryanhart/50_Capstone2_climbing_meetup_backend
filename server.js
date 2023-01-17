const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, function () {
    console.log('App on port 3001');
  });

  // import port from config.js

// "use strict";

// const app = require("./app");
// const { PORT } = require("./config");

// app.listen(PORT, function () {
//   console.log(`Started on http://localhost:${PORT}`);
// });