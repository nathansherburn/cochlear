var express = require("express");
var app = express();
var scores = require("./routes/scores");

app.get("/", function (req, res) {
	res.send('hello');
});

app.get("/alex", scores.sayHello);

console.log("listening on 3000");
app.listen(3000);

