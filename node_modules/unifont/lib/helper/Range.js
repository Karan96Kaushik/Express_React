"use strict";

/*
* Ascaii Range per map
* 97-112 small
* 65-90 large
* 48-57 number
*/

/*
* Range per map
* 0-25 large
* 26-51 small
* 52-61 number
*/

exports.getRangePos = function(letter){
  var letter_code = letter.charCodeAt(0);
  if(letter_code === NaN){
    return NaN;
  }
  if(letter_code >= 65 && letter_code <= 90){
    return letter_code - 65;
  } else if(letter_code >= 97 && letter_code <= 122) {
    return letter_code - 97 + 26
  } else if(letter_code >= 48 && letter_code <= 57){
    return letter_code - 48 + 52;
  }
  return null;
}