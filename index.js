var express = require('express')
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var filebuff = fs.readFileSync('index.html'); 
  var filestring = filebuff.toString();
  response.send(filestring);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
