const router = require("express").Router();
const path = require("path");
const fs = require("fs");

const uuid = require("../helpers/uuid");

let data = require("../db/db.json");

router.get("/notes", (req, res) => res.json(data));

router.post("/notes", (req, res) => {
  req.body.id = uuid();
  data.push(req.body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(data),
    (err) => (err ? console.log(err) : console.log("Your note has been saved!"))
  );
  res.json(req.body);
});

// route delete

module.exports = router;
