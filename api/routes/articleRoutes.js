'use strict';
module.exports = function(app) {
  var articles = require('../controllers/articleController');

  // articles Routes
  app.route('/articles')
    .get(articles.list_all_articles)
    .post(articles.create_an_article);


  app.route('/articles/:articleId')
    .get(articles.read_an_article)
    .put(articles.update_an_article)
    .delete(articles.delete_an_article);
};
