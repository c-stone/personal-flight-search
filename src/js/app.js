var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res, next) {
	res.status(200)
	.send("working")
	.end();
});

app.get('/ticketsToDo', function(req, res, next) {
	res.status(200)
	.send(getTicketsToDoCounts())
	.end();
});

app.get('/solvedTickets', function(req, res, next) {
	res.status(200)
	.send(repeatSolvedTickets())
	.end();
});

app.get('/createdTickets', function(req, res, next) {
	res.status(200)
	.send(repeatCreatedTickets())
	.end();
});


var server = app.listen(port, function () {
  console.log('Wallboard app listening at http://%s:%s', port, app.settings.env);
});
