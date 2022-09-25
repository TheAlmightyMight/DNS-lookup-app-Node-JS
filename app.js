const express = require("express");
const path = require("path");
const dns = require("dns");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "/index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "/style.css"));
});

app.get("/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "/index.js"));
});

app.get("/test", (req, res) => {
  console.log(req.query);
  if (req.query.value === "ip") {
    console.log("ip");
    res.send(req.query);
  } else if (req.query.value === "domain") {
    console.log("domain");
    res.send(req.query);
  } else {
    res.send(req.query);
  }
});

app.get("/ip", (req, res) => {
  console.log(req.query);
  dns.reverse(req.query.ip, function (err, record) {
    if (err) {
      res.end("Could'not resolve ip address");
      return;
    }

    console.log(record);
    res.send(record);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
