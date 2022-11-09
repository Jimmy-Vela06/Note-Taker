const express = require("express");
const path = require("path");

const apiR = require("./routes/apiRoute");
const htmlR = require("./routes/htmlRoute");

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
//parsing JSON
app.use(express.json());
//string
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiR); //api
app.use("/", htmlR); //html

app.listen(PORT, () => {
  console.log(`APP LISTENING AT http://localhost:${PORT} 🚀 `);
});
