var mongo = require("mongodb");

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server ('localhost', 27017, {auto_reconnect: true});
var db = new Db('test', server, {w:1});

db.open(function (err, db) {
	if (!err) {
		console.log('there was no error opening the database');
		db.collection('scores', {strict:true}, function(err, collection) {
			if (err) {
				console.log('there was no collection, we\'ll create one');
				db.collection('scores', function(err, collection) {
					collection.insert({name:'nathan'}, {safe:true}, function(err, result){});
				});
			}
		});
	}
});

exports.sayHello = function() {
	console.log('hellomonkey');
}