'use strict';
const bv = require("bvalid");
const Constant = require("../helper/Constants");

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

exports.ValidOption = function(_option){
  var _f = false;
  if(
      bv.isObject(_option) ||
      bv.isNull(_option) ||
      bv.isUndefined(_option) ||
      bv.isString(_option)
    ) {

      if(bv.isObject(_option)){
        //style validation
        if(_option.style !== undefined){
          if(bv.isString(_option.style))
          {
            var _opt = _option.style.trim();
            if(Constant.validStyles.indexOf(_opt)>=0)
            {
              _option.style = _opt;
            } else {
              if(_opt.length != 0)
              {
                return throwError("invalidStyle");
              }
              _option.style = undefined;
            }
          } else {
            return throwError("styleMustString");
          }
        }

        //font validation
        if(_option.font !== undefined){
          if(bv.isString(_option.font))
          {
            var _font = _option.font.trim();
            if(Constant.validFonts.indexOf(_font)>=0)
            {
              _option.font = _font;
            } else {
              if(_font.length != 0)
              {
                return throwError("invalidFont");
              }
              showWarning("noFont");
              _option.font = "normalEn";
            }
          } else {
            return throwError("fontMustString");
          }
        } else {
          showWarning("noFont");
          _option.font = "normalEn";
        }
        return _option;
      } else {
        if(bv.isString(_option))
        {
          var _font = _option.trim();
          if(Constant.validFonts.indexOf(_font)>=0)
          {
            _option = {};
            _option.font = _font;
          } else {
            if(_font.length != 0)
            {
              return throwError("invalidFont");
            }
            showWarning("noFont");
            _option.font = "normalEn";
          }
          return _option;
        }
      }
      return {
        font : "normalEn"
      }
    }
    return false
}

exports.removeEscapes = function(_v){
  _v = _v.replace(/\u001B\[[0-9]{1,3}m/g,"");
  return _v;
}