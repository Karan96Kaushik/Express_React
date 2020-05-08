"use strict";
const bv = require("bvalid");
const alpha = require("../alpha");
const Constant = require("../helper/Constants")
/*
*-------------------------------------------*
*  option avilable in fonts                 *
*-------------------------------------------*
*  bold     (convert in bold letter)        *
*  italic   (convert in italic letter)      *
*  upr      (convert in uppercase letter)   *
*  lwr      (convert in lowercase letter)   *
*  cap      (capitalize letter)             *
*-------------------------------------------*
*/


exports.createFont = function(_v,_r,_f){
    if(bv.isNumber(_r) === false){
      return _v
    }
    var _sp;
    if(_f == "normalEn" || _f == "Cursive"){
      _sp = "";
    } else {
      _sp = "\u0020";
    }
    var _ltr = alpha[_f][_r];
    if(bv.isString(_ltr))
    {
      return _ltr + _sp;
    } else
    {
      return _v;
    }
}

exports.applyStyle = function(_v,_s){
    var o = Constant.styles[_s] ? Constant.styles[_s]["o"] : "";
    var c = Constant.styles[_s] ? Constant.styles[_s]["c"] : "";
    _v =  o + _v + c;
    return _v;
}



