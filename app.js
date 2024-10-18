var express =require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var pug = require('pug');
const { title } = require('process');

var port = 3000;
 
var app = express();



app.use(function(req, res, next){
  console.log('Time:', Date.now());
  next();
});

// app.set('view engine', 'pug');


app.get('/', function(req, res){
  res.render('index' , {
    title: 'Hello DEP',
    showTitle:true
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('server started on port 3000' +port);

module.exports = app;