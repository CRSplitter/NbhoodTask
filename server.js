var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.json([
    {
      "timestamp": 150892000,
      "headline": "New version of the product announced.",
      "link": "http://example.url/new_version",
      "authorName": "Paul Abbot",
      "authorImageUrl": "http://example.url/authors/abbot.jpg"
    },
    {
      "timestamp": 150892600,
      "headline": "Even newer version of the product announced.",
      "link": "http://example.url/newer_version",
      "authorName": "Lisa Halliday",
      "authorImageUrl": "http://example.url/authors/halliday.jpg"
    }
  ])
})
app.listen(3000,'localhost')