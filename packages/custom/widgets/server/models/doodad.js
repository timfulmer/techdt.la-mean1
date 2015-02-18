/**
 * Created by timfulmer on 2/17/15.
 */
'use strict';

var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema;

var DoodadSchema=new Schema({
  name:{
    type:String,
    required:true
  }
});

mongoose.model('Doodad',DoodadSchema);