// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );

const express = require("express");
const path = require("path");

const api = require("");
const html = require("");

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
//parsing JSON
app.use(express.json());
//string
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(""); //api
app.use(""); //html

app.listen(PORT, () => {
  console.log(`APP LISTENING AT http://localhost:${PORT} 🚀 `);
});
