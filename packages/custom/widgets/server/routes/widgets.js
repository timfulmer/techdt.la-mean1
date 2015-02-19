'use strict';

var widgets=require('../controllers/widgets');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Widgets, app, auth, database) {

  app.post('/api/v1/widgets',
    widgets.createWidget,
    widgets.createDoodads,
    widgets.associateWidgetDoodads);

  app.post('/api/v2/widgets',widgets.create);

  app.get('/widgets/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/widgets/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/widgets/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/widgets/example/render', function(req, res, next) {
    Widgets.render('index', {
      package: 'widgets'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
