var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.get('/number', function(request, response) {
  response.send(1);
});

app.get('/name', function(request, response) {
  response.send('Arun');
});

var dbname = 'mongodb://arun:123456@ds053156.mlab.com:53156/shubhlabh';
app.get('/getdb', function(request, response) {
  MongoClient.connect(dbname, function(err, db) {
  if(!err) {
    response.send("We are connected");
  }
});
});



// Connect to the db


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


