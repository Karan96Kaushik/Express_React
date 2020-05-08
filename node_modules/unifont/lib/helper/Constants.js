"use strict";

//bold
var styleBold = {
  o : "\u001B[1m",
  c : "\u001B[22m"
}

//italic
var styleItalic = {
  o : "\u001B[3m",
  c : "\u001B[23m"
}

//underline
var styleUnderline = {
  o : "\u001B[4m",
  c : "\u001B[24m"
}

exports.styles = {
  bold : styleBold,
  italic : styleItalic,
  underline : styleUnderline
}

exports.errors = {
  invalidValue  : "Input should be a type of string",
  invalidOption  : "Invalid option",
  undefinedError : "Unexpected error has occurred",
  styleMustString : "Style should be a type of string",
  invalidStyle  : "Option style is not exist",
  invalidFont : "Option font is not exist",
  fontMustString : "Font should be a type of string",
}

exports.warning = {
  noFont : "noFont is specified. (normalEn is set as default font by program)"
}

exports.validFonts = [
    "normalEn","SolidBlock","BorderBlock",
    "DotBlock","GaintBold","Btalic",
    "GaintItalic","Alphol","Bubble",
    "BubbleFill","Cursive"
];

exports.validStyles = ["bold","italic","upr","lwr","cap","underline"];
exports.validLangs = ["en"];