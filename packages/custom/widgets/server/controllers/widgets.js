/**
 * Created by timfulmer on 2/17/15.
 */
'use strict';

var create=require('../actions/create'),
  _=require('lodash'),
  mongoose=require('mongoose'),
  Widget=mongoose.model('Widget'),
  Doodad=mongoose.model('Doodad');

exports.createDoodads=function(req,res,next){
  req.doodads=[];
  _.forEach(req.body.doodads,function(doodad){
    new Doodad(doodad).save(function(err,doodad){
      if(err){
        return next(err);
      }
      req.doodads.push(doodad);
    });
  });
  return next();
};

exports.createWidget=function(req,res,next){
  new Widget(req.body.widget).save(function(err,widget){
    if(err){
      return next(err);
    }
    req.widget=widget;
    next();
  });
};

exports.associateWidgetDoodads=function(req,res){
  req.widget.doodads=_.map(req.doodads,function(doodad){
    return doodad._id;
  });
  req.widget.save(function(err,widget){
    res.json(widget);
  });
};

exports.create=function(req,res){
  create.create(
    {widget:req.body.widget,doodads:req.body.doodads}
  ).then(
    function(options){
      res.json(options.widget);
    }
  );
};