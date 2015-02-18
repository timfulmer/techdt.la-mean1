'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Widgets = new Module('widgets');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Widgets.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Widgets.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Widgets.menus.add({
    title: 'widgets example page',
    link: 'widgets example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Widgets.aggregateAsset('css', 'widgets.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Widgets.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Widgets.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Widgets.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Widgets;
});
