"use strict";
const en_font = require("./alpha/EN");
const range = require("./helper/Range");
const bv = require("bvalid");
const Constant = require("./helper/Constants");
const Validation = require("./helper/Validation");
const Style = require("./util/Style");


function throwError(_type){
  var errorMsg = Constant.errors[_type] || Constant.errors["undefinedError"]
  throw new Error(errorMsg);
}

function showWarning(_type){
  try{
    return process.emitWarning(Constant.warning[_type]);
  }catch(err){
    return;
  }
}

module.exports = function(value,option){
    if(bv.isString(value) == false) {
      return throwError();
    }
    var option = Validation.ValidOption(option);
    if(option == false)
    {
      return throwError("invalidOption");
    }
    if(option.style){
      if(option.style == "upr")
      {
        value = value.toUpperCase();
      } else if(option.style == "lwr")
      {
        value = value.toLowerCase();
      } else if(option.style == "cap")
      {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
    value = Validation.removeEscapes(value);
    var op = "";
    for(var i = 0 ; i < value.length ; i++)
    {
      var _r = range.getRangePos(value[i]);
      op += Style.createFont(value[i],_r,option.font);
    }

    if(option.style)
    {
      op = Style.applyStyle(op,option.style);
    }

    return op;
}



