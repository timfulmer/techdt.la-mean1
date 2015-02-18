/**
 * Created by timfulmer on 2/17/15.
 */
'use strict';

var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;

var WidgetSchema=new Schema({
  name:{
    type:String,
    required: true
  },
  doodads:{
    type:[Schema.ObjectId],
    ref:'Doodad'
  }
});

mongoose.model('Widget',WidgetSchema);