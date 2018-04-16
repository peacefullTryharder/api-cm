var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('./api/models/articleModel'),
  Comment = require('./api/models/commentModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api-cm');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var ArticleRoutes = require('./api/routes/articleRoutes');
var CommentRoutes = require('./api/routes/commentRoutes');

ArticleRoutes(app); //register the route
CommentRoutes(app); //register the route




app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
