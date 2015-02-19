/**
 * Created by timfulmer on 2/17/15.
 */
'use strict';

var _=require('lodash'),
  bb=require('bluebird'),
  mongoose=require('mongoose'),
  Widget=mongoose.model('Widget'),
  Doodad=mongoose.model('Doodad');

function createDoodad(options){
  function createDoodadPromise(resolve,reject){
    new Doodad(options.doodad).save(function(err,doodad){
      if(err){
        return reject(err);
      }
      options.doodad=doodad;
      resolve(options);
    });
  }
  return new bb(createDoodadPromise);
}

function createWidget(options){
  function createWidgetPromise(resolve,reject){
    new Widget(options.widget).save(function(err,widget){
      if(err){
        return reject(err);
      }
      options.widget=widget;
      resolve(options);
    });
  }
  return new bb(createWidgetPromise);
}

exports.create=function(options){
  var promises=[];
  _.forEach(options.doodads,function(doodad){
    promises.push(createDoodad({doodad:doodad}));
  });
  return bb.all(promises).then(
    function(optionsList){
      options.widget.doodads= _.map(optionsList,
        function(options){
          return options.doodad._id;
        }
      );
      return options;
    }
  ).then(
    createWidget
  );
};