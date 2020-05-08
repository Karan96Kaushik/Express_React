(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("./lib/Bvalid.js")
},{"./lib/Bvalid.js":2}],2:[function(require,module,exports){
"use strict";
const vali = require("./utils/ValidationProcess");


/*
* All function exported as object
*/
module.exports = {
        isString              : vali.isString,
        isArray               : vali.isArray,
        isInt                 : vali.isInt,
        isFloat               : vali.isFloat,
        isNumber              : vali.isNumber,
        isBigInt              : vali.isBigInt,
        isNull                : vali.isNull,
        isUndefined           : vali.isUndefined,
        isBuffer              : vali.isBuffer,
        isRegex               : vali.isRegex,
        isObject              : vali.isObject,
        isBoolean             : vali.isBoolean,
        isFunction            : vali.isFunction,
        isClass               : vali.isClass,
        isDate                : vali.isDate,
        isError               : vali.isError,
        isSymbol              : vali.isSymbol,
        isPromise             : vali.isPromise,
        isBase64              : vali.isBase64,
        isUrl                 : vali.isUrl,
        isPort                : vali.isPort,
        isEmail               : vali.isEmail
}
},{"./utils/ValidationProcess":4}],3:[function(require,module,exports){
"use strict";
exports.base64 = /^([0-9a-zA-Z+\/]{4})*(([0-9a-zA-Z+\/]{2}==)|([0-9a-zA-Z+\/]{3}=))?$/;
exports.validDomainReg = new RegExp(
  "^" +
    //------Protocol----------
    '(?:(?:https?|ftp)://)?' +

    //------User(Opt)-------------
    "(?:\\S+(?::\\S*)?@)?" +

    "(?:" +
        //-----------Domain Name------------
        "(?:"+
            "(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff]\\.)+"+
        ")"+
        //----------------------------------
        //Top-level domain format minimum two character
        "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
    ")" +

    //-----Port(Opt)--------
    "(?::[0-9]{2,5})?" +

    //-----Path--------
    "(?:[/?#]\\S*)?" +

  "$", "i"
);

exports.validIpUrlReg = new RegExp(
    "^" +
      //------Protocol----------
      "(?:(?:(?:https?|ftp):)?\\/\\/)?" +

      //------User(Opt)-------------
      "(?:\\S+(?::\\S*)?@)?" +

        //----Valid IP--------------
        "(?:" +
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        ")" +
        //--------------------------

      //-------Port-------------
      "(?::\\d{2,5})?" +

      //-------Path-------------
      "(?:[/?#]\\S*)?" +

    "$", "i"
);


exports.validEmailReg = new RegExp(
    "^" +
      //------User(Opt)-------------
      "(?:"+
          "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"+
          "\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")"+
          "@"+
      ")"+
      //----Valid IP--------------
      "(?:"+
          "(?:" +
              "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
              "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
              "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
              "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
              "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
              "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
          ")|" +
          //------------------------------

          //----Valid Domain--------------
          "(?:" +
              "(?:"+
                  "(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff]\\.)+"+
              ")"+
              //Top-level domain format minimum two character
              "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
          ")" +
          //--------------------------
      ")"+
    "$", "i"
);

},{}],4:[function(require,module,exports){
"use strict";

const Regex = require('../helper/Regex');

function isValidData(variable){
    if(typeof variable === "undefined")
    {
        return false
    }
    if((typeof variable === "object") && (variable === null))
    {
        return false;
    }
    return true;
}

exports.isString = function(variable){
    if(isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')) return true;
    return false;
}

exports.isArray = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Array') return true;
    return false;
}

exports.isNumber = function(variable){
    if(isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')) return true;
    return false;
}

exports.isInt = function(variable){
    if(isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')){
      if(String(variable) === "Infinity") return false;
      return (variable % 1) === 0;
    }
    return false;
}

exports.isFloat = function(variable){
    if(isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')){
      if(String(variable) === "Infinity") return false;
      return variable === variable && variable % 1 !== 0;
    }
    return false;
}

exports.isBigInt = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'BigInt') return true;
    return false;
}

exports.isNull= function(variable){
    if(variable === null) return true;
    return false;
}

exports.isUndefined= function(variable){
    if(variable === undefined) return true;
    return false;
}

exports.isBuffer = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Buffer') return true;
    return false;
}

exports.isRegex = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'RegExp') return true;
    return false;
}

exports.isObject = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Object') return true;
    return false;
}

exports.isBoolean = function(variable) {
    if(variable === true || variable === false) return true;
    return false;
}

exports.isFunction = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return false}
          return true;
        }catch(err){return false}
    }
    return false;
}

exports.isClass = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return true}
          return false;
        }catch(err){return false}
    }
    return false;
}

exports.isDate = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Date') return true;
    return false;
}

exports.isError = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Error') return true;
    return false;
}

exports.isSymbol = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Symbol') return true;
    return false;
}

exports.isPromise = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Promise') return true;
    return false;
}

exports.isBase64 = function(variable){
    if(isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')){
      return Regex.base64.test(variable);
    }
    return false;
}

exports.isUrl = function(variable){
    if(isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')){
        if(Regex.validDomainReg.test(variable)) return true;
        if(Regex.validIpUrlReg.test(variable)) return true;
    }
    return false;
}

exports.isPort = function(variable){
    if(isValidData(variable) && isNaN(variable) === false){
      variable = Number(variable);
      return (variable >= 1 && variable <= 65535)
    }
    return false;
}

exports.isEmail = function(variable){
    if(isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')){
      return Regex.validEmailReg.test(variable);
    }
    return false;
}

},{"../helper/Regex":3}],5:[function(require,module,exports){
"use strict";
module.exports = require("./lib/UniFont")
},{"./lib/UniFont":6}],6:[function(require,module,exports){
(function (process){
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




}).call(this,require('_process'))
},{"./alpha/EN":7,"./helper/Constants":9,"./helper/Range":10,"./helper/Validation":11,"./util/Style":12,"_process":15,"bvalid":1}],7:[function(require,module,exports){
'use strict';

/*
* English letters
*/

var normalEn      = [
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '0','1','2','3','4','5','6','7','8','9'
                   ];

  var SolidBlock     = [
                    '🅰','🅱','🅲','🅳','🅴','🅵','🅶','🅷','🅸','🅹','🅺','🅻','🅼','🅽','🅾','🅿','🆀','🆁','🆂','🆃','🆄','🆅','🆆','🆇','🆈','🆉',
                    '🅰','🅱','🅲','🅳','🅴','🅵','🅶','🅷','🅸','🅹','🅺','🅻','🅼','🅽','🅾','🅿','🆀','🆁','🆂','🆃','🆄','🆅','🆆','🆇','🆈','🆉',
                    '0','1','2','3','4','5','6','7','8','9'
                   ];

var BorderBlock    = [
                     '🄰','🄱','🄲','🄳','🄴','🄵','🄶','🄷','🄸','🄹','🄺','🄻','🄼','🄽','🄾','🄿','🅀','🅁','🅂','🅃','🅄','🅅','🅆','🅇','🅈','🅉',
                     '🄰','🄱','🄲','🄳','🄴','🄵','🄶','🄷','🄸','🄹','🄺','🄻','🄼','🄽','🄾','🄿','🅀','🅁','🅂','🅃','🅄','🅅','🅆','🅇','🅈','🅉',
                     '0','1','2','3','4','5','6','7','8','9'
                    ];

var DotBlock       = [
                      '🇦','​🇧','​🇨','​🇩','​🇪','​🇫','​🇬​','🇭','​🇮','​🇯','🇰','​🇱','​🇲','​🇳','​🇴','​🇵','​🇶​','🇷​','🇸​','🇹','​🇺','​🇻','​🇼​','🇽​','🇾','​🇿',
                      '🇦','​🇧','​🇨','​🇩','​🇪','​🇫','​🇬​','🇭','​🇮','​🇯','🇰','​🇱','​🇲','​🇳','​🇴','​🇵','​🇶​','🇷​','🇸​','🇹','​🇺','​🇻','​🇼​','🇽​','🇾','​🇿',
                      '0','1','2','3','4','5','6','7','8','9'
                    ];

var GaintBold         = [
                      '𝗔','𝗕','𝗖','𝗗','𝗘','𝗙','𝗚','𝗛','𝗜','𝗝','𝗞','𝗟','𝗠','𝗡','𝗢','𝗣','𝗤','𝗥','𝗦','𝗧','𝗨','𝗩','𝗪','𝗫','𝗬','𝗭',
                      '𝗮','𝗯','𝗰','𝗱','𝗲','𝗳','𝗴','𝗵','𝗶','𝗷','𝗸','𝗹','𝗺','𝗻','𝗼','𝗽','𝗾','𝗿','𝘀','𝘁','𝘂','𝘃','𝘄','𝘅','𝘆','𝘇',
                      '𝟬','𝟭','𝟮','𝟯','𝟰','𝟱','𝟲','𝟳','𝟴','𝟵'
                    ];

var Btalic       = [
                      '𝘼','𝘽','𝘾','𝘿','𝙀','𝙁','𝙂','𝙃','𝙄','𝙅','𝙆','𝙇','𝙈','𝙉','𝙊','𝙋','𝙌','𝙍','𝙎','𝙏','𝙐','𝙑','𝙒','𝙓','𝙔','𝙕',
                      '𝙖','𝙗','𝙘','𝙙','𝙚','𝙛','𝙜','𝙝','𝙞','𝙟','𝙠','𝙡','𝙢','𝙣','𝙤','𝙥','𝙦','𝙧','𝙨','𝙩','𝙪','𝙫','𝙬','𝙭','𝙮','𝙯',
                      '𝟬','𝟭','𝟮','𝟯','𝟰','𝟱','𝟲','𝟳','𝟴','𝟵'
                    ];

var GaintItalic       = [
                      '𝘈','𝘉','𝘊','𝘋','𝘌','𝘍','𝘎','𝘏','𝘐','𝘑','𝘒','𝘓','𝘔','𝘕','𝘖','𝘗','𝘘','𝘙','𝘚','𝘛','𝘜','𝘝','𝘞','𝘟','𝘠','𝘡',
                      '𝘢','𝘣','𝘤','𝘥','𝘦','𝘧','𝘨','𝘩','𝘪','𝘫','𝘬','𝘭','𝘮','𝘯','𝘰','𝘱','𝘲','𝘳','𝘴','𝘵','𝘶','𝘷','𝘸','𝘹','𝘺','𝘻',
                      '0','1','2','3','4','5','6','7','8','9'
                    ];

var Alphol        = [
                      '𝔸','𝔹','ℂ','𝔻','𝔼','𝔽','𝔾','ℍ','𝕀','𝕁','𝕂','𝕃','𝕄','ℕ','𝕆','ℙ','ℚ','ℝ','𝕊','𝕋','𝕌','𝕍','𝕎','𝕏','𝕐','ℤ',
                      '𝕒','𝕓','𝕔','𝕕','𝕖','𝕗','𝕘','𝕙','𝕚','𝕛','𝕜','𝕝','𝕞','𝕟','𝕠','𝕡','𝕢','𝕣','𝕤','𝕥','𝕦','𝕧','𝕨','𝕩','𝕪','𝕫',
                      '𝟘','𝟙','𝟚','𝟛','𝟜','𝟝','𝟞','𝟟','𝟠','𝟡'
                    ];

var Bubble        = [
                      'Ⓐ','Ⓑ','Ⓒ','Ⓓ','Ⓔ','Ⓕ','Ⓖ','Ⓗ','Ⓘ','Ⓙ','Ⓚ','Ⓛ','Ⓜ','Ⓝ','Ⓞ','Ⓟ','Ⓠ','Ⓡ','Ⓢ','Ⓣ','Ⓤ','Ⓥ','Ⓦ','Ⓧ','Ⓨ','Ⓩ',
                      'ⓐ','ⓑ','ⓒ','ⓓ','ⓔ','ⓕ','ⓖ','ⓗ','ⓘ','ⓙ','ⓚ','ⓛ','ⓜ','ⓝ','ⓞ','ⓟ','ⓠ','ⓡ','ⓢ','ⓣ','ⓤ','ⓥ','ⓦ','ⓧ','ⓨ','ⓩ',
                      '⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨'
                    ];

var BubbleFill    = [
                      '🅐','🅑','🅒','🅓','🅔','🅕','🅖','🅗','🅘','🅙','🅚','🅛','🅜','🅝','🅞','🅟','🅠','🅡','🅢','🅣','🅤','🅥','🅦','🅧','🅨','🅩',
                      '🅐','🅑','🅒','🅓','🅔','🅕','🅖','🅗','🅘','🅙','🅚','🅛','🅜','🅝','🅞','🅟','🅠','🅡','🅢','🅣','🅤','🅥','🅦','🅧','🅨','🅩',
                      '⓿','➊','➋','➌','➍','➎','➏','➐','➑','➒'
                    ];

var Cursive       = [
                      '𝒜\u0020','𝐵\u0020','𝒞\u0020','𝒟\u0020','𝐸\u0020','𝐹\u0020','𝒢\u0020','𝐻\u0020','𝐼\u0020','𝒥\u0020','𝒦\u0020','𝐿',
                      '𝑀\u0020','𝒩\u0020','𝒪\u0020','𝒫\u0020','𝒬\u0020','𝑅\u0020','𝒮\u0020','𝒯\u0020','𝒰\u0020','𝒱\u0020','𝒲\u0020',
                      '𝒳\u0020','𝒴\u0020','𝒵\u0020',
                      '𝒶','𝒷','𝒸','𝒹','𝑒','𝒻','𝑔','𝒽','𝒾','𝒿','𝓀','𝓁','𝓂','𝓃','𝑜','𝓅','𝓆','𝓇','𝓈','𝓉','𝓊','𝓋','𝓌','𝓍','𝓎','𝓏',
                      '0','1','2','3','4','5','6','7','8','9'
                    ];


module.exports = {
  normalEn : normalEn,
  SolidBlock : SolidBlock,
  BorderBlock : BorderBlock,
  DotBlock : DotBlock,
  GaintBold : GaintBold,
  Btalic : Btalic,
  GaintItalic : GaintItalic,
  Alphol : Alphol,
  Bubble : Bubble,
  BubbleFill : BubbleFill,
  Cursive : Cursive
}




},{}],8:[function(require,module,exports){
const EN = require("./EN");

module.exports = {
  normalEn : EN.normalEn,
  SolidBlock : EN.SolidBlock,
  BorderBlock : EN.BorderBlock,
  DotBlock : EN.DotBlock,
  GaintBold : EN.GaintBold,
  Btalic : EN.Btalic,
  GaintItalic : EN.GaintItalic,
  Alphol : EN.Alphol,
  Bubble : EN.Bubble,
  BubbleFill : EN.BubbleFill,
  Cursive : EN.Cursive
}
},{"./EN":7}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
(function (process){
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
}).call(this,require('_process'))
},{"../helper/Constants":9,"_process":15,"bvalid":1}],12:[function(require,module,exports){
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




},{"../alpha":8,"../helper/Constants":9,"bvalid":1}],13:[function(require,module,exports){
var fonts = {'1': {'Inverted Squares': '1', 'Luni Bubbles': '①', 'Wide': '１', 'Tiny': '1', 'Flip': '⇂', 'Squares': '1⃞', 'Mirror': '', 'Sub Script': '₁', 'Super Script': '¹', 'Bent': '𝟙', 'Neon': '1', 'Future Alien': '1', 'Strike Throug': '1̶', 'Tilde Strike Through': '1̴', 'Slash Through': '1̷', 'Underline': '1̲', 'Double Underline': '1̳', 'Creepify': '1̸̛̼̙̦̩̭̻͓̦̼̒̒̆̕͝ͅ', 'Squiggle 1': '1', 'Squiggle 2': '1', 'Squiggle 3': '1', 'Squiggle 4': '1', 'Squiggle 5': '1', 'Squiggle 6': '1', 'Bold': '𝟏', 'Round Squares': '1⃣', 'Old English': '1', 'Medieval': '1', 'Cursive': '1', 'Scriptify': '𝟣', 'Double Struck': '𝟙', 'Italic': '1', 'Italic Bold': '1', 'Mono Space': '𝟷', 'Upper Angles': '1', 'Greek': '1', 'Symbols': '1', 'Currency': '1', 'Asian Style': '1', 'Asian Style 2': '1', 'Thick Block Framed': '【1】', 'Diametric Angle Frame': '『1』', 'Wavy Joiner': '≋1≋', 'Dotty Joiner': '░1░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 1 ♥', 'Vaporwave 1': '１', 'Vaporwave 2': '１', 'Vaporwave 3': '【\ufeff１】', 'Little Sparkles': '˜”*°•.˜”*°• 1 •°*”˜.•°*”˜', 'Weird Box': '[̲̅1]', 'Firework': '1҉', 'Stinky': '1̾', 'Bearts Between': '1', 'Arrow Below': '1͎', 'Cross Above Below': '1͓̽', 'Wingdings': '📂︎', 'FullCrazy': '♥♕  １  ♤🐲', 'Crazy Random': '••¤(`×[¤ １ ¤]×´)¤••', 'Cute Random': '🐞 ⋆ 🐏  🎀  𝟣  🎀  🐏 ⋆ 🐞'}, '2': {'Inverted Squares': '2', 'Luni Bubbles': '②', 'Wide': '２', 'Tiny': '2', 'Flip': 'ᄅ', 'Squares': '2⃞', 'Mirror': '', 'Sub Script': '₂', 'Super Script': '²', 'Bent': 'ϩ', 'Neon': '2', 'Future Alien': '2', 'Strike Throug': '2̶', 'Tilde Strike Through': '2̴', 'Slash Through': '2̷', 'Underline': '2̲', 'Double Underline': '2̳', 'Creepify': '2̴̡̢̢̟̝̣̽͑̒͆͘', 'Squiggle 1': '2', 'Squiggle 2': '2', 'Squiggle 3': '2', 'Squiggle 4': '2', 'Squiggle 5': '2', 'Squiggle 6': '2', 'Bold': '𝟐', 'Round Squares': '2⃣', 'Old English': '2', 'Medieval': '2', 'Cursive': '2', 'Scriptify': '𝟤', 'Double Struck': '𝟚', 'Italic': '2', 'Italic Bold': '2', 'Mono Space': '𝟸', 'Upper Angles': '2', 'Greek': '2', 'Symbols': '2', 'Currency': '2', 'Asian Style': '2', 'Asian Style 2': '2', 'Thick Block Framed': '【2】', 'Diametric Angle Frame': '『2』', 'Wavy Joiner': '≋2≋', 'Dotty Joiner': '░2░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 2 ♥', 'Vaporwave 1': '２', 'Vaporwave 2': '２', 'Vaporwave 3': '【\ufeff２】', 'Little Sparkles': '˜”*°•.˜”*°• 2 •°*”˜.•°*”˜', 'Weird Box': '[̲̅2]', 'Firework': '2҉', 'Stinky': '2̾', 'Bearts Between': '2', 'Arrow Below': '2͎', 'Cross Above Below': '2͓̽', 'Wingdings': '📄︎', 'FullCrazy': '👽💣  ２  🐙☢', 'Crazy Random': '♘💲  ２  ♢💙', 'Cute Random': '｡  🎀  𝟤  🎀  ｡'}, '3': {'Inverted Squares': '3', 'Luni Bubbles': '③', 'Wide': '３', 'Tiny': '3', 'Flip': 'Ɛ', 'Squares': '3⃞', 'Mirror': '', 'Sub Script': '₃', 'Super Script': '³', 'Bent': 'Ӡ', 'Neon': '3', 'Future Alien': '3', 'Strike Throug': '3̶', 'Tilde Strike Through': '3̴', 'Slash Through': '3̷', 'Underline': '3̲', 'Double Underline': '3̳', 'Creepify': '3̴̨̠͎̥̩͕̩̭̏̈́̾̑͘', 'Squiggle 1': '3', 'Squiggle 2': '3', 'Squiggle 3': '3', 'Squiggle 4': '3', 'Squiggle 5': '3', 'Squiggle 6': '3', 'Bold': '𝟑', 'Round Squares': '3⃣', 'Old English': '3', 'Medieval': '3', 'Cursive': '3', 'Scriptify': '𝟥', 'Double Struck': '𝟛', 'Italic': '3', 'Italic Bold': '3', 'Mono Space': '𝟹', 'Upper Angles': '3', 'Greek': '3', 'Symbols': '3', 'Currency': '3', 'Asian Style': '3', 'Asian Style 2': '3', 'Thick Block Framed': '【3】', 'Diametric Angle Frame': '『3』', 'Wavy Joiner': '≋3≋', 'Dotty Joiner': '░3░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 3 ♥', 'Vaporwave 1': '３', 'Vaporwave 2': '３', 'Vaporwave 3': '【\ufeff３】', 'Little Sparkles': '˜”*°•.˜”*°• 3 •°*”˜.•°*”˜', 'Weird Box': '[̲̅3]', 'Firework': '3҉', 'Stinky': '3̾', 'Bearts Between': '3', 'Arrow Below': '3͎', 'Cross Above Below': '3͓̽', 'Wingdings': '🗏︎', 'FullCrazy': '⛵🍓  ❸  ✌♬', 'Crazy Random': '👣👤  ３  ♟😎', 'Cute Random': '✴★  🎀  𝟥  🎀  ★✴'}, '4': {'Inverted Squares': '4', 'Luni Bubbles': '④', 'Wide': '４', 'Tiny': '4', 'Flip': 'ㄣ', 'Squares': '4⃞', 'Mirror': '', 'Sub Script': '₄', 'Super Script': '⁴', 'Bent': '५', 'Neon': '4', 'Future Alien': '4', 'Strike Throug': '4̶', 'Tilde Strike Through': '4̴', 'Slash Through': '4̷', 'Underline': '4̲', 'Double Underline': '4̳', 'Creepify': '4̸̬͙̥́̕', 'Squiggle 1': '4', 'Squiggle 2': '4', 'Squiggle 3': '4', 'Squiggle 4': '4', 'Squiggle 5': '4', 'Squiggle 6': '4', 'Bold': '𝟒', 'Round Squares': '4⃣', 'Old English': '4', 'Medieval': '4', 'Cursive': '4', 'Scriptify': '𝟦', 'Double Struck': '𝟜', 'Italic': '4', 'Italic Bold': '4', 'Mono Space': '𝟺', 'Upper Angles': '4', 'Greek': '4', 'Symbols': '4', 'Currency': '4', 'Asian Style': '4', 'Asian Style 2': '4', 'Thick Block Framed': '【4】', 'Diametric Angle Frame': '『4』', 'Wavy Joiner': '≋4≋', 'Dotty Joiner': '░4░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 4 ♥', 'Vaporwave 1': '４', 'Vaporwave 2': '４', 'Vaporwave 3': '【\ufeff４】', 'Little Sparkles': '˜”*°•.˜”*°• 4 •°*”˜.•°*”˜', 'Weird Box': '[̲̅4]', 'Firework': '4҉', 'Stinky': '4̾', 'Bearts Between': '4', 'Arrow Below': '4͎', 'Cross Above Below': '4͓̽', 'Wingdings': '🗐︎', 'FullCrazy': '♪♡  ➃  🔥💔', 'Crazy Random': '๑۞๑,¸¸,ø¤º°`°๑۩ ４ ๑۩ ,¸¸,ø¤º°`°๑۞๑', 'Cute Random': '🐠  🎀  𝟦  🎀  🐠'}, '5': {'Inverted Squares': '5', 'Luni Bubbles': '⑤', 'Wide': '５', 'Tiny': '5', 'Flip': 'ގ', 'Squares': '5⃞', 'Mirror': '', 'Sub Script': '₅', 'Super Script': '⁵', 'Bent': 'Ƽ', 'Neon': '5', 'Future Alien': '5', 'Strike Throug': '5̶', 'Tilde Strike Through': '5̴', 'Slash Through': '5̷', 'Underline': '5̲', 'Double Underline': '5̳', 'Creepify': '5̴̲̻͔͋̉͝', 'Squiggle 1': '5', 'Squiggle 2': '5', 'Squiggle 3': '5', 'Squiggle 4': '5', 'Squiggle 5': '5', 'Squiggle 6': '5', 'Bold': '𝟓', 'Round Squares': '5⃣', 'Old English': '5', 'Medieval': '5', 'Cursive': '5', 'Scriptify': '𝟧', 'Double Struck': '𝟝', 'Italic': '5', 'Italic Bold': '5', 'Mono Space': '𝟻', 'Upper Angles': '5', 'Greek': '5', 'Symbols': '5', 'Currency': '5', 'Asian Style': '5', 'Asian Style 2': '5', 'Thick Block Framed': '【5】', 'Diametric Angle Frame': '『5』', 'Wavy Joiner': '≋5≋', 'Dotty Joiner': '░5░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 5 ♥', 'Vaporwave 1': '５', 'Vaporwave 2': '５', 'Vaporwave 3': '【\ufeff５】', 'Little Sparkles': '˜”*°•.˜”*°• 5 •°*”˜.•°*”˜', 'Weird Box': '[̲̅5]', 'Firework': '5҉', 'Stinky': '5̾', 'Bearts Between': '5', 'Arrow Below': '5͎', 'Cross Above Below': '5͓̽', 'Wingdings': '🗄︎', 'FullCrazy': '🎉☆  ➄  ♪👹', 'Crazy Random': '★🎅  ➄  🍓👹', 'Cute Random': '×º°”˜`”°º×   🎀  𝟧  🎀   ×º°”`˜”°º×'}, '6': {'Inverted Squares': '6', 'Luni Bubbles': '⑥', 'Wide': '６', 'Tiny': '6', 'Flip': '9', 'Squares': '6⃞', 'Mirror': '', 'Sub Script': '₆', 'Super Script': '⁶', 'Bent': 'Ϭ', 'Neon': '6', 'Future Alien': '6', 'Strike Throug': '6̶', 'Tilde Strike Through': '6̴', 'Slash Through': '6̷', 'Underline': '6̲', 'Double Underline': '6̳', 'Creepify': '6̴̧̬̗͇̠͂̇̃', 'Squiggle 1': '6', 'Squiggle 2': '6', 'Squiggle 3': '6', 'Squiggle 4': '6', 'Squiggle 5': '6', 'Squiggle 6': '6', 'Bold': '𝟔', 'Round Squares': '6⃣', 'Old English': '6', 'Medieval': '6', 'Cursive': '6', 'Scriptify': '𝟨', 'Double Struck': '𝟞', 'Italic': '6', 'Italic Bold': '6', 'Mono Space': '𝟼', 'Upper Angles': '6', 'Greek': '6', 'Symbols': '6', 'Currency': '6', 'Asian Style': '6', 'Asian Style 2': '6', 'Thick Block Framed': '【6】', 'Diametric Angle Frame': '『6』', 'Wavy Joiner': '≋6≋', 'Dotty Joiner': '░6░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 6 ♥', 'Vaporwave 1': '６', 'Vaporwave 2': '６', 'Vaporwave 3': '【\ufeff６】', 'Little Sparkles': '˜”*°•.˜”*°• 6 •°*”˜.•°*”˜', 'Weird Box': '[̲̅6]', 'Firework': '6҉', 'Stinky': '6̾', 'Bearts Between': '6', 'Arrow Below': '6͎', 'Cross Above Below': '6͓̽', 'Wingdings': '⌛︎', 'FullCrazy': '🐝🐠  ６  ♗♬', 'Crazy Random': '🍫🍩  ６  ✊👽', 'Cute Random': '°  🎀  𝟨  🎀  °'}, '7': {'Inverted Squares': '7', 'Luni Bubbles': '⑦', 'Wide': '７', 'Tiny': '7', 'Flip': 'ㄥ', 'Squares': '7⃞', 'Mirror': '', 'Sub Script': '₇', 'Super Script': '⁷', 'Bent': '7', 'Neon': '7', 'Future Alien': '7', 'Strike Throug': '7̶', 'Tilde Strike Through': '7̴', 'Slash Through': '7̷', 'Underline': '7̲', 'Double Underline': '7̳', 'Creepify': '7̸͕͑̀͊͆͗', 'Squiggle 1': '7', 'Squiggle 2': '7', 'Squiggle 3': '7', 'Squiggle 4': '7', 'Squiggle 5': '7', 'Squiggle 6': '7', 'Bold': '𝟕', 'Round Squares': '7⃣', 'Old English': '7', 'Medieval': '7', 'Cursive': '7', 'Scriptify': '𝟩', 'Double Struck': '𝟟', 'Italic': '7', 'Italic Bold': '7', 'Mono Space': '𝟽', 'Upper Angles': '7', 'Greek': '7', 'Symbols': '7', 'Currency': '7', 'Asian Style': '7', 'Asian Style 2': '7', 'Thick Block Framed': '【7】', 'Diametric Angle Frame': '『7』', 'Wavy Joiner': '≋7≋', 'Dotty Joiner': '░7░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 7 ♥', 'Vaporwave 1': '７', 'Vaporwave 2': '７', 'Vaporwave 3': '【\ufeff７】', 'Little Sparkles': '˜”*°•.˜”*°• 7 •°*”˜.•°*”˜', 'Weird Box': '[̲̅7]', 'Firework': '7҉', 'Stinky': '7̾', 'Bearts Between': '7', 'Arrow Below': '7͎', 'Cross Above Below': '7͓̽', 'Wingdings': '🖮︎', 'FullCrazy': '🐧ඏ  ➆  💛☹', 'Crazy Random': '`•.¸¸.•´´¯`••._.• ７ •._.••`¯´´•.¸¸.•`', 'Cute Random': '•°¯`••   🎀  𝟩  🎀   ••`¯°•'}, '8': {'Inverted Squares': '8', 'Luni Bubbles': '⑧', 'Wide': '８', 'Tiny': '8', 'Flip': '8', 'Squares': '8⃞', 'Mirror': '8', 'Sub Script': '₈', 'Super Script': '⁸', 'Bent': '𝟠', 'Neon': '8', 'Future Alien': '8', 'Strike Throug': '8̶', 'Tilde Strike Through': '8̴', 'Slash Through': '8̷', 'Underline': '8̲', 'Double Underline': '8̳', 'Creepify': '8̶̛̳̇̆̉', 'Squiggle 1': '8', 'Squiggle 2': '8', 'Squiggle 3': '8', 'Squiggle 4': '8', 'Squiggle 5': '8', 'Squiggle 6': '8', 'Bold': '𝟖', 'Round Squares': '8⃣', 'Old English': '8', 'Medieval': '8', 'Cursive': '8', 'Scriptify': '𝟪', 'Double Struck': '𝟠', 'Italic': '8', 'Italic Bold': '8', 'Mono Space': '𝟾', 'Upper Angles': '8', 'Greek': '8', 'Symbols': '8', 'Currency': '8', 'Asian Style': '8', 'Asian Style 2': '8', 'Thick Block Framed': '【8】', 'Diametric Angle Frame': '『8』', 'Wavy Joiner': '≋8≋', 'Dotty Joiner': '░8░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 8 ♥', 'Vaporwave 1': '８', 'Vaporwave 2': '８', 'Vaporwave 3': '【\ufeff８】', 'Little Sparkles': '˜”*°•.˜”*°• 8 •°*”˜.•°*”˜', 'Weird Box': '[̲̅8]', 'Firework': '8҉', 'Stinky': '8̾', 'Bearts Between': '8', 'Arrow Below': '8͎', 'Cross Above Below': '8͓̽', 'Wingdings': '🖰︎', 'FullCrazy': '🐙♬  ８  ✊🐟', 'Crazy Random': 'ඏ♗  ❽  ☮💙', 'Cute Random': '•?((¯°·._.•   🎀  𝟪  🎀   •._.·°¯((?•'}, '9': {'Inverted Squares': '9', 'Luni Bubbles': '⑨', 'Wide': '９', 'Tiny': '9', 'Flip': '6', 'Squares': '9⃞', 'Mirror': '9', 'Sub Script': '₉', 'Super Script': '⁹', 'Bent': '९', 'Neon': '9', 'Future Alien': '9', 'Strike Throug': '9̶', 'Tilde Strike Through': '9̴', 'Slash Through': '9̷', 'Underline': '9̲', 'Double Underline': '9̳', 'Creepify': '9̶̻̹̫̝̜̥̳̄͆̀̇̆', 'Squiggle 1': '9', 'Squiggle 2': '9', 'Squiggle 3': '9', 'Squiggle 4': '9', 'Squiggle 5': '9', 'Squiggle 6': '9', 'Bold': '𝟗', 'Round Squares': '9⃣', 'Old English': '9', 'Medieval': '9', 'Cursive': '9', 'Scriptify': '𝟫', 'Double Struck': '𝟡', 'Italic': '9', 'Italic Bold': '9', 'Mono Space': '𝟿', 'Upper Angles': '9', 'Greek': '9', 'Symbols': '9', 'Currency': '9', 'Asian Style': '9', 'Asian Style 2': '9', 'Thick Block Framed': '【9】', 'Diametric Angle Frame': '『9』', 'Wavy Joiner': '≋9≋', 'Dotty Joiner': '░9░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 9 ♥', 'Vaporwave 1': '９', 'Vaporwave 2': '９', 'Vaporwave 3': '【\ufeff９】', 'Little Sparkles': '˜”*°•.˜”*°• 9 •°*”˜.•°*”˜', 'Weird Box': '[̲̅9]', 'Firework': '9҉', 'Stinky': '9̾', 'Bearts Between': '9', 'Arrow Below': '9͎', 'Cross Above Below': '9͓̽', 'Wingdings': '🖲︎', 'FullCrazy': '☯♗  ➈  🍮🐤', 'Crazy Random': '✋😳  ❾  ඏ💚', 'Cute Random': '🍰 ⋆ 🍒  🎀  𝟫  🎀  🍒 ⋆ 🍰'}, '0': {'Inverted Squares': '0', 'Luni Bubbles': '⓪', 'Wide': '０', 'Tiny': '0', 'Flip': '0', 'Squares': '0⃞', 'Mirror': '0', 'Sub Script': '₀', 'Super Script': '⁰', 'Bent': '⊘', 'Neon': '0', 'Future Alien': '0', 'Strike Throug': '0̶', 'Tilde Strike Through': '0̴', 'Slash Through': '0̷', 'Underline': '0̲', 'Double Underline': '0̳', 'Creepify': '0̷̮̺̝̭̻̊', 'Squiggle 1': '0', 'Squiggle 2': '0', 'Squiggle 3': '0', 'Squiggle 4': '0', 'Squiggle 5': '0', 'Squiggle 6': '0', 'Bold': '𝟎', 'Round Squares': '0⃣', 'Old English': '0', 'Medieval': '0', 'Cursive': '0', 'Scriptify': '𝟢', 'Double Struck': '𝟘', 'Italic': '0', 'Italic Bold': '0', 'Mono Space': '𝟶', 'Upper Angles': '0', 'Greek': '0', 'Symbols': '0', 'Currency': '0', 'Asian Style': '0', 'Asian Style 2': '0', 'Thick Block Framed': '【0】', 'Diametric Angle Frame': '『0』', 'Wavy Joiner': '≋0≋', 'Dotty Joiner': '░0░', 'Kirby Hug': '(っ◔◡◔)っ ♥ 0 ♥', 'Vaporwave 1': '０', 'Vaporwave 2': '０', 'Vaporwave 3': '【\ufeff０】', 'Little Sparkles': '˜”*°•.˜”*°• 0 •°*”˜.•°*”˜', 'Weird Box': '[̲̅0]', 'Firework': '0҉', 'Stinky': '0̾', 'Bearts Between': '0', 'Arrow Below': '0͎', 'Cross Above Below': '0͓̽', 'Wingdings': '📁︎', 'FullCrazy': '🐲😡  ʘ  ☢👮', 'Crazy Random': ' .o0×X×0o. ０ .o0×X×0o.', 'Cute Random': '🍉 ⋆ 🍪  🎀  🌞  🎀  🍪 ⋆ 🍉'}, '/': {'Inverted Squares': '/', 'Luni Bubbles': '/⃝', 'Wide': '／', 'Tiny': '/', 'Flip': '/', 'Squares': '/⃞', 'Mirror': '/', 'Sub Script': '/', 'Super Script': '/', 'Bent': '/', 'Neon': '/', 'Future Alien': '/', 'Strike Throug': '/̶', 'Tilde Strike Through': '/̴', 'Slash Through': '/̷', 'Underline': '/̲', 'Double Underline': '/̳', 'Creepify': '/̴̨͓̪̦̗͕͍̑̇̌̄͘ͅ', 'Squiggle 1': '/', 'Squiggle 2': '/', 'Squiggle 3': '/', 'Squiggle 4': '/', 'Squiggle 5': '/', 'Squiggle 6': '/', 'Bold': '/', 'Round Squares': '/⃣', 'Old English': '/', 'Medieval': '/', 'Cursive': '/', 'Scriptify': '/', 'Double Struck': '/', 'Italic': '/', 'Italic Bold': '/', 'Mono Space': '/', 'Upper Angles': '/', 'Greek': '/', 'Symbols': '/', 'Currency': '/', 'Asian Style': '/', 'Asian Style 2': '/', 'Thick Block Framed': '【/】', 'Diametric Angle Frame': '『/』', 'Wavy Joiner': '≋/≋', 'Dotty Joiner': '░/░', 'Kirby Hug': '(っ◔◡◔)っ ♥ / ♥', 'Vaporwave 1': '／', 'Vaporwave 2': '／', 'Vaporwave 3': '【\ufeff／】', 'Little Sparkles': '˜”*°•.˜”*°• / •°*”˜.•°*”˜', 'Weird Box': '[̲̅/]', 'Firework': '/҉', 'Stinky': '/̾', 'Bearts Between': '/', 'Arrow Below': '/͎', 'Cross Above Below': '/͓̽', 'Wingdings': '📭︎', 'FullCrazy': '✎😾  /  ♕🍧', 'Crazy Random': '🐲🐸  /  🐠🐙', 'Cute Random': "§.•´¨'°÷•..×   🎀  /  🎀   ×..•÷°'¨´•.§"}, '*': {'Inverted Squares': '*', 'Luni Bubbles': '*⃝', 'Wide': '＊', 'Tiny': '*', 'Flip': '*', 'Squares': '*⃞', 'Mirror': '*', 'Sub Script': '*', 'Super Script': '*', 'Bent': '*', 'Neon': '*', 'Future Alien': '*', 'Strike Throug': '*̶', 'Tilde Strike Through': '*̴', 'Slash Through': '*̷', 'Underline': '*̲', 'Double Underline': '*̳', 'Creepify': '*̶̧̳̫̘̝̰͓̀', 'Squiggle 1': '*', 'Squiggle 2': '*', 'Squiggle 3': '*', 'Squiggle 4': '*', 'Squiggle 5': '*', 'Squiggle 6': '*', 'Bold': '*', 'Round Squares': '*⃣', 'Old English': '*', 'Medieval': '*', 'Cursive': '*', 'Scriptify': '*', 'Double Struck': '*', 'Italic': '*', 'Italic Bold': '*', 'Mono Space': '*', 'Upper Angles': '*', 'Greek': '*', 'Symbols': '*', 'Currency': '*', 'Asian Style': '*', 'Asian Style 2': '*', 'Thick Block Framed': '【*】', 'Diametric Angle Frame': '『*』', 'Wavy Joiner': '≋*≋', 'Dotty Joiner': '░*░', 'Kirby Hug': '(っ◔◡◔)っ ♥ * ♥', 'Vaporwave 1': '＊', 'Vaporwave 2': '＊', 'Vaporwave 3': '【\ufeff＊】', 'Little Sparkles': '˜”*°•.˜”*°• * •°*”˜.•°*”˜', 'Weird Box': '[̲̅*]', 'Firework': '*҉', 'Stinky': '*̾', 'Bearts Between': '*', 'Arrow Below': '*͎', 'Cross Above Below': '*͓̽', 'Wingdings': '🖂︎', 'FullCrazy': '🎁🐣  ✿  👌👮', 'Crazy Random': '¸,ø¤º°`°º¤ø,¸¸,ø¤º° ❀ °º¤ø,¸¸,ø¤º°`°º¤ø,¸', 'Cute Random': '—(••÷  🎀  *  🎀  ÷••(—'}, '-': {'Inverted Squares': '-', 'Luni Bubbles': '-⃝', 'Wide': '－', 'Tiny': '-', 'Flip': '-', 'Squares': '-⃞', 'Mirror': '-', 'Sub Script': '₋', 'Super Script': '⁻', 'Bent': '-', 'Neon': '-', 'Future Alien': '-', 'Strike Throug': '-̶', 'Tilde Strike Through': '-̴', 'Slash Through': '-̷', 'Underline': '-̲', 'Double Underline': '-̳', 'Creepify': '-̵̖̝̫̝̥͆́̿', 'Squiggle 1': '-', 'Squiggle 2': '-', 'Squiggle 3': '-', 'Squiggle 4': '-', 'Squiggle 5': '-', 'Squiggle 6': '-', 'Bold': '-', 'Round Squares': '-⃣', 'Old English': '-', 'Medieval': '-', 'Cursive': '-', 'Scriptify': '-', 'Double Struck': '-', 'Italic': '-', 'Italic Bold': '-', 'Mono Space': '-', 'Upper Angles': '-', 'Greek': '-', 'Symbols': '-', 'Currency': '-', 'Asian Style': '-', 'Asian Style 2': '-', 'Thick Block Framed': '【-】', 'Diametric Angle Frame': '『-』', 'Wavy Joiner': '≋-≋', 'Dotty Joiner': '░-░', 'Kirby Hug': '(っ◔◡◔)っ ♥ - ♥', 'Vaporwave 1': '－', 'Vaporwave 2': '－', 'Vaporwave 3': '【\ufeff－】', 'Little Sparkles': '˜”*°•.˜”*°• - •°*”˜.•°*”˜', 'Weird Box': '[̲̅-]', 'Firework': '-҉', 'Stinky': '-̾', 'Bearts Between': '-', 'Arrow Below': '-͎', 'Cross Above Below': '-͓̽', 'Wingdings': '📫︎', 'FullCrazy': '♪😳  -  🐍👌', 'Crazy Random': '¸„.-•~¹°”ˆ˜¨ - ¨˜ˆ”°¹~•-.„¸', 'Cute Random': '🌠  🎀  -  🎀  🌠'}, '+': {'Inverted Squares': '+', 'Luni Bubbles': '+⃝', 'Wide': '＋', 'Tiny': '+', 'Flip': '+', 'Squares': '+⃞', 'Mirror': '+', 'Sub Script': '₊', 'Super Script': '⁺', 'Bent': '+', 'Neon': '+', 'Future Alien': '+', 'Strike Throug': '+̶', 'Tilde Strike Through': '+̴', 'Slash Through': '+̷', 'Underline': '+̲', 'Double Underline': '+̳', 'Creepify': '+̵͕̳͋̅̏̏̅̓̉', 'Squiggle 1': '+', 'Squiggle 2': '+', 'Squiggle 3': '+', 'Squiggle 4': '+', 'Squiggle 5': '+', 'Squiggle 6': '+', 'Bold': '+', 'Round Squares': '+⃣', 'Old English': '+', 'Medieval': '+', 'Cursive': '+', 'Scriptify': '+', 'Double Struck': '+', 'Italic': '+', 'Italic Bold': '+', 'Mono Space': '+', 'Upper Angles': '+', 'Greek': '+', 'Symbols': '+', 'Currency': '+', 'Asian Style': '+', 'Asian Style 2': '+', 'Thick Block Framed': '【+】', 'Diametric Angle Frame': '『+』', 'Wavy Joiner': '≋+≋', 'Dotty Joiner': '░+░', 'Kirby Hug': '(っ◔◡◔)っ ♥ + ♥', 'Vaporwave 1': '＋', 'Vaporwave 2': '＋', 'Vaporwave 3': '【\ufeff＋】', 'Little Sparkles': '˜”*°•.˜”*°• + •°*”˜.•°*”˜', 'Weird Box': '[̲̅+]', 'Firework': '+҉', 'Stinky': '+̾', 'Bearts Between': '+', 'Arrow Below': '+͎', 'Cross Above Below': '+͓̽', 'Wingdings': '🖃︎', 'FullCrazy': '🍔♛  +  ♨♥', 'Crazy Random': '🍩😳  +  💎🌷', 'Cute Random': '🍩 ⋆ 🍫  🎀  +  🎀  🍫 ⋆ 🍩'}, '.': {'Inverted Squares': '.', 'Luni Bubbles': '.⃝', 'Wide': '．', 'Tiny': '.', 'Flip': '˙', 'Squares': '.⃞', 'Mirror': '.', 'Sub Script': '.', 'Super Script': '.', 'Bent': '.', 'Neon': '.', 'Future Alien': '.', 'Strike Throug': '.̶', 'Tilde Strike Through': '.̴', 'Slash Through': '.̷', 'Underline': '.̲', 'Double Underline': '.̳', 'Creepify': '.̸̳̺̮̽̈͊̇̾͛̈̕', 'Squiggle 1': '.', 'Squiggle 2': '.', 'Squiggle 3': '.', 'Squiggle 4': '.', 'Squiggle 5': '.', 'Squiggle 6': '.', 'Bold': '.', 'Round Squares': '.⃣', 'Old English': '.', 'Medieval': '.', 'Cursive': '.', 'Scriptify': '.', 'Double Struck': '.', 'Italic': '.', 'Italic Bold': '.', 'Mono Space': '.', 'Upper Angles': '.', 'Greek': '.', 'Symbols': '.', 'Currency': '.', 'Asian Style': '.', 'Asian Style 2': '.', 'Thick Block Framed': '【.】', 'Diametric Angle Frame': '『.』', 'Wavy Joiner': '≋.≋', 'Dotty Joiner': '░.░', 'Kirby Hug': '(っ◔◡◔)っ ♥ . ♥', 'Vaporwave 1': '．', 'Vaporwave 2': '．', 'Vaporwave 3': '【\ufeff．】', 'Little Sparkles': '˜”*°•.˜”*°• . •°*”˜.•°*”˜', 'Weird Box': '[̲̅.]', 'Firework': '.҉', 'Stinky': '.̾', 'Bearts Between': '.', 'Arrow Below': '.͎', 'Cross Above Below': '.͓̽', 'Wingdings': '📬︎', 'FullCrazy': '💗🐼  .  ♞🐚', 'Crazy Random': '♥☯  .  👤👽', 'Cute Random': '🌠★  🎀  .  🎀  ★🌠'}, '[': {'Inverted Squares': '[', 'Luni Bubbles': '[⃝', 'Wide': '[', 'Tiny': '[', 'Flip': ']', 'Squares': '[⃞', 'Mirror': ']', 'Sub Script': '[', 'Super Script': '[', 'Bent': '[', 'Neon': '[', 'Future Alien': '[', 'Strike Throug': '[̶', 'Tilde Strike Through': '[̴', 'Slash Through': '[̷', 'Underline': '[̲', 'Double Underline': '[̳', 'Creepify': '[̵͈͙̪̘̟̫̲̣̈́̒͜', 'Squiggle 1': '[', 'Squiggle 2': '[', 'Squiggle 3': '[', 'Squiggle 4': '[', 'Squiggle 5': '[', 'Squiggle 6': '[', 'Bold': '[', 'Round Squares': '[⃣', 'Old English': '[', 'Medieval': '[', 'Cursive': '[', 'Scriptify': '[', 'Double Struck': '[', 'Italic': '[', 'Italic Bold': '[', 'Mono Space': '[', 'Upper Angles': '[', 'Greek': '[', 'Symbols': '[', 'Currency': '[', 'Asian Style': '[', 'Asian Style 2': '[', 'Thick Block Framed': '【[】', 'Diametric Angle Frame': '『[』', 'Wavy Joiner': '≋[≋', 'Dotty Joiner': '░[░', 'Kirby Hug': '(っ◔◡◔)っ ♥ [ ♥', 'Vaporwave 1': '[', 'Vaporwave 2': '[', 'Vaporwave 3': '【\ufeff[】', 'Little Sparkles': '˜”*°•.˜”*°• [ •°*”˜.•°*”˜', 'Weird Box': '[̲̅[]', 'Firework': '[҉', 'Stinky': '[̾', 'Bearts Between': '[', 'Arrow Below': '[͎', 'Cross Above Below': '[͓̽', 'Wingdings': '☯︎', 'FullCrazy': '☢🍟  〖  🐚🐝', 'Crazy Random': '↫↫↫↫↫ ［ ↬↬↬↬↬', 'Cute Random': '`✴  🎀  [  🎀  ✴`'}, ']': {'Inverted Squares': ']', 'Luni Bubbles': ']⃝', 'Wide': ']', 'Tiny': ']', 'Flip': '[', 'Squares': ']⃞', 'Mirror': '[', 'Sub Script': ']', 'Super Script': ']', 'Bent': ']', 'Neon': ']', 'Future Alien': ']', 'Strike Throug': ']̶', 'Tilde Strike Through': ']̴', 'Slash Through': ']̷', 'Underline': ']̲', 'Double Underline': ']̳', 'Creepify': ']̷̻̠̿͋̓̄̑͑̃̚', 'Squiggle 1': ']', 'Squiggle 2': ']', 'Squiggle 3': ']', 'Squiggle 4': ']', 'Squiggle 5': ']', 'Squiggle 6': ']', 'Bold': ']', 'Round Squares': ']⃣', 'Old English': ']', 'Medieval': ']', 'Cursive': ']', 'Scriptify': ']', 'Double Struck': ']', 'Italic': ']', 'Italic Bold': ']', 'Mono Space': ']', 'Upper Angles': ']', 'Greek': ']', 'Symbols': ']', 'Currency': ']', 'Asian Style': ']', 'Asian Style 2': ']', 'Thick Block Framed': '【]】', 'Diametric Angle Frame': '『]』', 'Wavy Joiner': '≋]≋', 'Dotty Joiner': '░]░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ] ♥', 'Vaporwave 1': ']', 'Vaporwave 2': ']', 'Vaporwave 3': '【\ufeff]】', 'Little Sparkles': '˜”*°•.˜”*°• ] •°*”˜.•°*”˜', 'Weird Box': '[̲̅]]', 'Firework': ']҉', 'Stinky': ']̾', 'Bearts Between': ']', 'Arrow Below': ']͎', 'Cross Above Below': ']͓̽', 'Wingdings': '☸︎', 'FullCrazy': '💙☢  〙  ☝🎃', 'Crazy Random': '🐺💝  ］  😳🍬', 'Cute Random': '••¤(`×  🎀  ]  🎀  ×`(¤••'}, '{': {'Inverted Squares': '{', 'Luni Bubbles': '{⃝', 'Wide': '{', 'Tiny': '{', 'Flip': '}', 'Squares': '{⃞', 'Mirror': '}', 'Sub Script': '{', 'Super Script': '{', 'Bent': '{', 'Neon': '{', 'Future Alien': '{', 'Strike Throug': '{̶', 'Tilde Strike Through': '{̴', 'Slash Through': '{̷', 'Underline': '{̲', 'Double Underline': '{̳', 'Creepify': '{̴̡͉̳̃̂̋͗̅͒̆̒', 'Squiggle 1': '{', 'Squiggle 2': '{', 'Squiggle 3': '{', 'Squiggle 4': '{', 'Squiggle 5': '{', 'Squiggle 6': '{', 'Bold': '{', 'Round Squares': '{⃣', 'Old English': '{', 'Medieval': '{', 'Cursive': '{', 'Scriptify': '{', 'Double Struck': '{', 'Italic': '{', 'Italic Bold': '{', 'Mono Space': '{', 'Upper Angles': '{', 'Greek': '{', 'Symbols': '{', 'Currency': '{', 'Asian Style': '{', 'Asian Style 2': '{', 'Thick Block Framed': '【{】', 'Diametric Angle Frame': '『{』', 'Wavy Joiner': '≋{≋', 'Dotty Joiner': '░{░', 'Kirby Hug': '(っ◔◡◔)っ ♥ { ♥', 'Vaporwave 1': '{', 'Vaporwave 2': '{', 'Vaporwave 3': '【\ufeff{】', 'Little Sparkles': '˜”*°•.˜”*°• { •°*”˜.•°*”˜', 'Weird Box': '[̲̅{]', 'Firework': '{҉', 'Stinky': '{̾', 'Bearts Between': '{', 'Arrow Below': '{͎', 'Cross Above Below': '{͓̽', 'Wingdings': '❀︎', 'FullCrazy': '☝🐲  {  ♥💘', 'Crazy Random': '(-_-) { (-_-)', 'Cute Random': '▀▄▀▄▀▄   🎀  {  🎀   ▄▀▄▀▄▀'}, '}': {'Inverted Squares': '}', 'Luni Bubbles': '}⃝', 'Wide': '}', 'Tiny': '}', 'Flip': '{', 'Squares': '}⃞', 'Mirror': '{', 'Sub Script': '}', 'Super Script': '}', 'Bent': '}', 'Neon': '}', 'Future Alien': '}', 'Strike Throug': '}̶', 'Tilde Strike Through': '}̴', 'Slash Through': '}̷', 'Underline': '}̲', 'Double Underline': '}̳', 'Creepify': '}̷̢̨̡̘͓͈̱́̆̋͒͘', 'Squiggle 1': '}', 'Squiggle 2': '}', 'Squiggle 3': '}', 'Squiggle 4': '}', 'Squiggle 5': '}', 'Squiggle 6': '}', 'Bold': '}', 'Round Squares': '}⃣', 'Old English': '}', 'Medieval': '}', 'Cursive': '}', 'Scriptify': '}', 'Double Struck': '}', 'Italic': '}', 'Italic Bold': '}', 'Mono Space': '}', 'Upper Angles': '}', 'Greek': '}', 'Symbols': '}', 'Currency': '}', 'Asian Style': '}', 'Asian Style 2': '}', 'Thick Block Framed': '【}】', 'Diametric Angle Frame': '『}』', 'Wavy Joiner': '≋}≋', 'Dotty Joiner': '░}░', 'Kirby Hug': '(っ◔◡◔)っ ♥ } ♥', 'Vaporwave 1': '}', 'Vaporwave 2': '}', 'Vaporwave 3': '【\ufeff}】', 'Little Sparkles': '˜”*°•.˜”*°• } •°*”˜.•°*”˜', 'Weird Box': '[̲̅}]', 'Firework': '}҉', 'Stinky': '}̾', 'Bearts Between': '}', 'Arrow Below': '}͎', 'Cross Above Below': '}͓̽', 'Wingdings': '❝︎', 'FullCrazy': '🐝👊  }  ♔👽', 'Crazy Random': '░▒▓█ } █▓▒░', 'Cute Random': '🌌:  🎀  }  🎀  :🌌'}, '~': {'Inverted Squares': '~', 'Luni Bubbles': '~⃝', 'Wide': '~', 'Tiny': '~', 'Flip': '~', 'Squares': '~⃞', 'Mirror': '~', 'Sub Script': '~', 'Super Script': '~', 'Bent': '~', 'Neon': '~', 'Future Alien': '~', 'Strike Throug': '~̶', 'Tilde Strike Through': '~̴', 'Slash Through': '~̷', 'Underline': '~̲', 'Double Underline': '~̳', 'Creepify': '~̸̖͂̒͊̊̾̆̆', 'Squiggle 1': '~', 'Squiggle 2': '~', 'Squiggle 3': '~', 'Squiggle 4': '~', 'Squiggle 5': '~', 'Squiggle 6': '~', 'Bold': '~', 'Round Squares': '~⃣', 'Old English': '~', 'Medieval': '~', 'Cursive': '~', 'Scriptify': '~', 'Double Struck': '~', 'Italic': '~', 'Italic Bold': '~', 'Mono Space': '~', 'Upper Angles': '~', 'Greek': '~', 'Symbols': '~', 'Currency': '~', 'Asian Style': '~', 'Asian Style 2': '~', 'Thick Block Framed': '【~】', 'Diametric Angle Frame': '『~』', 'Wavy Joiner': '≋~≋', 'Dotty Joiner': '░~░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ~ ♥', 'Vaporwave 1': '~', 'Vaporwave 2': '~', 'Vaporwave 3': '【\ufeff~】', 'Little Sparkles': '˜”*°•.˜”*°• ~ •°*”˜.•°*”˜', 'Weird Box': '[̲̅~]', 'Firework': '~҉', 'Stinky': '~̾', 'Bearts Between': '~', 'Arrow Below': '~͎', 'Cross Above Below': '~͓̽', 'Wingdings': '❞︎', 'FullCrazy': '🐒🍧  ~  🐸♢', 'Crazy Random': '🐊👍  ~  ☜☠', 'Cute Random': '•°¯`••   🎀  ~  🎀   ••`¯°•'}, '!': {'Inverted Squares': '!', 'Luni Bubbles': '!⃝', 'Wide': '！', 'Tiny': '!', 'Flip': '¡', 'Squares': '!⃞', 'Mirror': '!', 'Sub Script': '!', 'Super Script': '!', 'Bent': '!', 'Neon': '!', 'Future Alien': '!', 'Strike Throug': '!̶', 'Tilde Strike Through': '!̴', 'Slash Through': '!̷', 'Underline': '!̲', 'Double Underline': '!̳', 'Creepify': '!̴̛̰̲͎̃͜͝ͅ', 'Squiggle 1': '!', 'Squiggle 2': '!', 'Squiggle 3': '!', 'Squiggle 4': '!', 'Squiggle 5': '!', 'Squiggle 6': '!', 'Bold': '!', 'Round Squares': '!⃣', 'Old English': '!', 'Medieval': '!', 'Cursive': '!', 'Scriptify': '!', 'Double Struck': '!', 'Italic': '!', 'Italic Bold': '!', 'Mono Space': '!', 'Upper Angles': '!', 'Greek': '!', 'Symbols': '!', 'Currency': '!', 'Asian Style': '!', 'Asian Style 2': '!', 'Thick Block Framed': '【!】', 'Diametric Angle Frame': '『!』', 'Wavy Joiner': '≋!≋', 'Dotty Joiner': '░!░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ! ♥', 'Vaporwave 1': '！', 'Vaporwave 2': '！', 'Vaporwave 3': '【\ufeff！】', 'Little Sparkles': '˜”*°•.˜”*°• ! •°*”˜.•°*”˜', 'Weird Box': '[̲̅!]', 'Firework': '!҉', 'Stinky': '!̾', 'Bearts Between': '!', 'Arrow Below': '!͎', 'Cross Above Below': '!͓̽', 'Wingdings': '✏︎', 'FullCrazy': '🐒😂  !  🎄♙', 'Crazy Random': '🍩☢  !  😺😈', 'Cute Random': '.  🎀  ❣  🎀  .'}, '@': {'Inverted Squares': '@', 'Luni Bubbles': '@⃝', 'Wide': '＠', 'Tiny': '@', 'Flip': '@', 'Squares': '@⃞', 'Mirror': '@', 'Sub Script': '@', 'Super Script': '@', 'Bent': '@', 'Neon': '@', 'Future Alien': '@', 'Strike Throug': '@̶', 'Tilde Strike Through': '@̴', 'Slash Through': '@̷', 'Underline': '@̲', 'Double Underline': '@̳', 'Creepify': '@̷̧̼͂', 'Squiggle 1': '@', 'Squiggle 2': '@', 'Squiggle 3': '@', 'Squiggle 4': '@', 'Squiggle 5': '@', 'Squiggle 6': '@', 'Bold': '@', 'Round Squares': '@⃣', 'Old English': '@', 'Medieval': '@', 'Cursive': '@', 'Scriptify': '@', 'Double Struck': '@', 'Italic': '@', 'Italic Bold': '@', 'Mono Space': '@', 'Upper Angles': '@', 'Greek': '@', 'Symbols': '@', 'Currency': '@', 'Asian Style': '@', 'Asian Style 2': '@', 'Thick Block Framed': '【@】', 'Diametric Angle Frame': '『@』', 'Wavy Joiner': '≋@≋', 'Dotty Joiner': '░@░', 'Kirby Hug': '(っ◔◡◔)っ ♥ @ ♥', 'Vaporwave 1': '＠', 'Vaporwave 2': '＠', 'Vaporwave 3': '【\ufeff＠】', 'Little Sparkles': '˜”*°•.˜”*°• @ •°*”˜.•°*”˜', 'Weird Box': '[̲̅@]', 'Firework': '@҉', 'Stinky': '@̾', 'Bearts Between': '@', 'Arrow Below': '@͎', 'Cross Above Below': '@͓̽', 'Wingdings': '@', 'FullCrazy': '☜♜  @  🐟🍮', 'Crazy Random': '♘💛  @  ⛵🏆', 'Cute Random': '•°¯`••   🎀  @  🎀   ••`¯°•'}, '#': {'Inverted Squares': '#', 'Luni Bubbles': '#⃝', 'Wide': '＃', 'Tiny': '#', 'Flip': '#', 'Squares': '#⃞', 'Mirror': '#', 'Sub Script': '#', 'Super Script': '#', 'Bent': '#', 'Neon': '#', 'Future Alien': '#', 'Strike Throug': '#̶', 'Tilde Strike Through': '#̴', 'Slash Through': '#̷', 'Underline': '#̲', 'Double Underline': '#̳', 'Creepify': '#̸̡̹̪̯͇̺̋', 'Squiggle 1': '#', 'Squiggle 2': '#', 'Squiggle 3': '#', 'Squiggle 4': '#', 'Squiggle 5': '#', 'Squiggle 6': '#', 'Bold': '#', 'Round Squares': '#⃣', 'Old English': '#', 'Medieval': '#', 'Cursive': '#', 'Scriptify': '#', 'Double Struck': '#', 'Italic': '#', 'Italic Bold': '#', 'Mono Space': '#', 'Upper Angles': '#', 'Greek': '#', 'Symbols': '#', 'Currency': '#', 'Asian Style': '#', 'Asian Style 2': '#', 'Thick Block Framed': '【#】', 'Diametric Angle Frame': '『#』', 'Wavy Joiner': '≋#≋', 'Dotty Joiner': '░#░', 'Kirby Hug': '(っ◔◡◔)っ ♥ # ♥', 'Vaporwave 1': '＃', 'Vaporwave 2': '＃', 'Vaporwave 3': '【\ufeff＃】', 'Little Sparkles': '˜”*°•.˜”*°• # •°*”˜.•°*”˜', 'Weird Box': '[̲̅#]', 'Firework': '#҉', 'Stinky': '#̾', 'Bearts Between': '#', 'Arrow Below': '#͎', 'Cross Above Below': '#͓̽', 'Wingdings': '✁︎', 'FullCrazy': '🍧🐍  #  😂♣', 'Crazy Random': 'ඏ👤  #  🍭♕', 'Cute Random': '✷  🎀  #  🎀  ✷'}, '$': {'Inverted Squares': '$', 'Luni Bubbles': '$⃝', 'Wide': '＄', 'Tiny': '$', 'Flip': '$', 'Squares': '$⃞', 'Mirror': '$', 'Sub Script': '$', 'Super Script': '$', 'Bent': '$', 'Neon': '$', 'Future Alien': '$', 'Strike Throug': '$̶', 'Tilde Strike Through': '$̴', 'Slash Through': '$̷', 'Underline': '$̲', 'Double Underline': '$̳', 'Creepify': '$̷̡̩̟͔͓̅͠', 'Squiggle 1': '$', 'Squiggle 2': '$', 'Squiggle 3': '$', 'Squiggle 4': '$', 'Squiggle 5': '$', 'Squiggle 6': '$', 'Bold': '$', 'Round Squares': '$⃣', 'Old English': '$', 'Medieval': '$', 'Cursive': '$', 'Scriptify': '$', 'Double Struck': '$', 'Italic': '$', 'Italic Bold': '$', 'Mono Space': '$', 'Upper Angles': '$', 'Greek': '$', 'Symbols': '$', 'Currency': '$', 'Asian Style': '$', 'Asian Style 2': '$', 'Thick Block Framed': '【$】', 'Diametric Angle Frame': '『$』', 'Wavy Joiner': '≋$≋', 'Dotty Joiner': '░$░', 'Kirby Hug': '(っ◔◡◔)っ ♥ $ ♥', 'Vaporwave 1': '＄', 'Vaporwave 2': '＄', 'Vaporwave 3': '【\ufeff＄】', 'Little Sparkles': '˜”*°•.˜”*°• $ •°*”˜.•°*”˜', 'Weird Box': '[̲̅$]', 'Firework': '$҉', 'Stinky': '$̾', 'Bearts Between': '$', 'Arrow Below': '$͎', 'Cross Above Below': '$͓̽', 'Wingdings': '👓︎', 'FullCrazy': '💛♢  $  ♙🐲', 'Crazy Random': '☝🏆  $  🌷♛', 'Cute Random': '`•.¸¸.•´´¯`••._.•   🎀  $  🎀   •._.••`¯´´•.¸¸.•`'}, '%': {'Inverted Squares': '%', 'Luni Bubbles': '%⃝', 'Wide': '％', 'Tiny': '%', 'Flip': '%', 'Squares': '%⃞', 'Mirror': '%', 'Sub Script': '%', 'Super Script': '%', 'Bent': '%', 'Neon': '%', 'Future Alien': '%', 'Strike Throug': '%̶', 'Tilde Strike Through': '%̴', 'Slash Through': '%̷', 'Underline': '%̲', 'Double Underline': '%̳', 'Creepify': '%̷̩̥̺̪͔̺̭̰̱̏͊̀̂̉̔͊̿̏̿', 'Squiggle 1': '%', 'Squiggle 2': '%', 'Squiggle 3': '%', 'Squiggle 4': '%', 'Squiggle 5': '%', 'Squiggle 6': '%', 'Bold': '%', 'Round Squares': '%⃣', 'Old English': '%', 'Medieval': '%', 'Cursive': '%', 'Scriptify': '%', 'Double Struck': '%', 'Italic': '%', 'Italic Bold': '%', 'Mono Space': '%', 'Upper Angles': '%', 'Greek': '%', 'Symbols': '%', 'Currency': '%', 'Asian Style': '%', 'Asian Style 2': '%', 'Thick Block Framed': '【%】', 'Diametric Angle Frame': '『%』', 'Wavy Joiner': '≋%≋', 'Dotty Joiner': '░%░', 'Kirby Hug': '(っ◔◡◔)っ ♥ % ♥', 'Vaporwave 1': '％', 'Vaporwave 2': '％', 'Vaporwave 3': '【\ufeff％】', 'Little Sparkles': '˜”*°•.˜”*°• % •°*”˜.•°*”˜', 'Weird Box': '[̲̅%]', 'Firework': '%҉', 'Stinky': '%̾', 'Bearts Between': '%', 'Arrow Below': '%͎', 'Cross Above Below': '%͓̽', 'Wingdings': '🕭︎', 'FullCrazy': '🍧💀  ℆  😎☆', 'Crazy Random': '🍩♣  ℅  👹🐊', 'Cute Random': '🐔 ⋆ 🐞  🎀  %  🎀  🐞 ⋆ 🐔'}, '^': {'Inverted Squares': '^', 'Luni Bubbles': '^⃝', 'Wide': '^', 'Tiny': '^', 'Flip': ' ̮', 'Squares': '^⃞', 'Mirror': '^', 'Sub Script': '^', 'Super Script': '^', 'Bent': '^', 'Neon': '^', 'Future Alien': '^', 'Strike Throug': '^̶', 'Tilde Strike Through': '^̴', 'Slash Through': '^̷', 'Underline': '^̲', 'Double Underline': '^̳', 'Creepify': '^̷̧͖̂̂̏͝', 'Squiggle 1': '^', 'Squiggle 2': '^', 'Squiggle 3': '^', 'Squiggle 4': '^', 'Squiggle 5': '^', 'Squiggle 6': '^', 'Bold': '^', 'Round Squares': '^⃣', 'Old English': '^', 'Medieval': '^', 'Cursive': '^', 'Scriptify': '^', 'Double Struck': '^', 'Italic': '^', 'Italic Bold': '^', 'Mono Space': '^', 'Upper Angles': '^', 'Greek': '^', 'Symbols': '^', 'Currency': '^', 'Asian Style': '^', 'Asian Style 2': '^', 'Thick Block Framed': '【^】', 'Diametric Angle Frame': '『^』', 'Wavy Joiner': '≋^≋', 'Dotty Joiner': '░^░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ^ ♥', 'Vaporwave 1': '^', 'Vaporwave 2': '^', 'Vaporwave 3': '【\ufeff^】', 'Little Sparkles': '˜”*°•.˜”*°• ^ •°*”˜.•°*”˜', 'Weird Box': '[̲̅^]', 'Firework': '^҉', 'Stinky': '^̾', 'Bearts Between': '^', 'Arrow Below': '^͎', 'Cross Above Below': '^͓̽', 'Wingdings': '♈︎', 'FullCrazy': '☯💜  ^  🐠♛', 'Crazy Random': '💙🎀  ^  ♝♠', 'Cute Random': '･ﾟ  🎀  ^  🎀  ﾟ･'}, '&': {'Inverted Squares': '&', 'Luni Bubbles': '&⃝', 'Wide': '＆', 'Tiny': '&', 'Flip': '⅋', 'Squares': '&⃞', 'Mirror': '', 'Sub Script': '&', 'Super Script': '&', 'Bent': '&', 'Neon': '&', 'Future Alien': '&', 'Strike Throug': '&̶', 'Tilde Strike Through': '&̴', 'Slash Through': '&̷', 'Underline': '&̲', 'Double Underline': '&̳', 'Creepify': '&̵̻̹͖͇̬͓̄͛̂̈̂̾̎͗͌͝ͅ', 'Squiggle 1': '&', 'Squiggle 2': '&', 'Squiggle 3': '&', 'Squiggle 4': '&', 'Squiggle 5': '&', 'Squiggle 6': '&', 'Bold': '&', 'Round Squares': '&⃣', 'Old English': '&', 'Medieval': '&', 'Cursive': '&', 'Scriptify': '&', 'Double Struck': '&', 'Italic': '&', 'Italic Bold': '&', 'Mono Space': '&', 'Upper Angles': '&', 'Greek': '&', 'Symbols': '&', 'Currency': '&', 'Asian Style': '&', 'Asian Style 2': '&', 'Thick Block Framed': '【&】', 'Diametric Angle Frame': '『&』', 'Wavy Joiner': '≋&≋', 'Dotty Joiner': '░&░', 'Kirby Hug': '(っ◔◡◔)っ ♥ & ♥', 'Vaporwave 1': '＆', 'Vaporwave 2': '＆', 'Vaporwave 3': '【\ufeff＆】', 'Little Sparkles': '˜”*°•.˜”*°• & •°*”˜.•°*”˜', 'Weird Box': '[̲̅&]', 'Firework': '&҉', 'Stinky': '&̾', 'Bearts Between': '&', 'Arrow Below': '&͎', 'Cross Above Below': '&͓̽', 'Wingdings': '🕮︎', 'FullCrazy': '😲♦  ⅋  💎👽', 'Crazy Random': '💚🐲  ⅋  💝👽', 'Cute Random': '🕊 ⋆ 🐚  🎀  &  🎀  🐚 ⋆ 🕊'}, '(': {'Inverted Squares': '(', 'Luni Bubbles': '(⃝', 'Wide': '（', 'Tiny': '(', 'Flip': ')', 'Squares': '(⃞', 'Mirror': ')', 'Sub Script': '₍', 'Super Script': '⁽', 'Bent': '(', 'Neon': '(', 'Future Alien': '(', 'Strike Throug': '(̶', 'Tilde Strike Through': '(̴', 'Slash Through': '(̷', 'Underline': '(̲', 'Double Underline': '(̳', 'Creepify': '(̸͇̌̂̅̍̽̚', 'Squiggle 1': '(', 'Squiggle 2': '(', 'Squiggle 3': '(', 'Squiggle 4': '(', 'Squiggle 5': '(', 'Squiggle 6': '(', 'Bold': '(', 'Round Squares': '(⃣', 'Old English': '(', 'Medieval': '(', 'Cursive': '(', 'Scriptify': '(', 'Double Struck': '(', 'Italic': '(', 'Italic Bold': '(', 'Mono Space': '(', 'Upper Angles': '(', 'Greek': '(', 'Symbols': '(', 'Currency': '(', 'Asian Style': '(', 'Asian Style 2': '(', 'Thick Block Framed': '【(】', 'Diametric Angle Frame': '『(』', 'Wavy Joiner': '≋(≋', 'Dotty Joiner': '░(░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ( ♥', 'Vaporwave 1': '（', 'Vaporwave 2': '（', 'Vaporwave 3': '【\ufeff（】', 'Little Sparkles': '˜”*°•.˜”*°• ( •°*”˜.•°*”˜', 'Weird Box': '[̲̅(]', 'Firework': '(҉', 'Stinky': '(̾', 'Bearts Between': '(', 'Arrow Below': '(͎', 'Cross Above Below': '(͓̽', 'Wingdings': '🕿︎', 'FullCrazy': '🐠✊  (  👌😎', 'Crazy Random': '••.•´¯`•.•• ( ••.•´¯`•.••', 'Cute Random': '｡｡  🎀  (  🎀  ｡｡'}, ')': {'Inverted Squares': ')', 'Luni Bubbles': ')⃝', 'Wide': '）', 'Tiny': ')', 'Flip': '(', 'Squares': ')⃞', 'Mirror': '(', 'Sub Script': '₎', 'Super Script': '⁾', 'Bent': ')', 'Neon': ')', 'Future Alien': ')', 'Strike Throug': ')̶', 'Tilde Strike Through': ')̴', 'Slash Through': ')̷', 'Underline': ')̲', 'Double Underline': ')̳', 'Creepify': ')̴̧̠͇̳̰̗̯͉̥͙͂̒', 'Squiggle 1': ')', 'Squiggle 2': ')', 'Squiggle 3': ')', 'Squiggle 4': ')', 'Squiggle 5': ')', 'Squiggle 6': ')', 'Bold': ')', 'Round Squares': ')⃣', 'Old English': ')', 'Medieval': ')', 'Cursive': ')', 'Scriptify': ')', 'Double Struck': ')', 'Italic': ')', 'Italic Bold': ')', 'Mono Space': ')', 'Upper Angles': ')', 'Greek': ')', 'Symbols': ')', 'Currency': ')', 'Asian Style': ')', 'Asian Style 2': ')', 'Thick Block Framed': '【)】', 'Diametric Angle Frame': '『)』', 'Wavy Joiner': '≋)≋', 'Dotty Joiner': '░)░', 'Kirby Hug': '(っ◔◡◔)っ ♥ ) ♥', 'Vaporwave 1': '）', 'Vaporwave 2': '）', 'Vaporwave 3': '【\ufeff）】', 'Little Sparkles': '˜”*°•.˜”*°• ) •°*”˜.•°*”˜', 'Weird Box': '[̲̅)]', 'Firework': ')҉', 'Stinky': ')̾', 'Bearts Between': ')', 'Arrow Below': ')͎', 'Cross Above Below': ')͓̽', 'Wingdings': '✆︎', 'FullCrazy': '🍔👽  )  🐚☆', 'Crazy Random': '♧💗  )  👌💘', 'Cute Random': '🕊 ⋆ 🐌  🎀  )  🎀  🐌 ⋆ 🕊'}, '=': {'Inverted Squares': '=', 'Luni Bubbles': '=⃝', 'Wide': '＝', 'Tiny': '=', 'Flip': '=', 'Squares': '=⃞', 'Mirror': '=', 'Sub Script': '₌', 'Super Script': '⁼', 'Bent': '=', 'Neon': '=', 'Future Alien': '=', 'Strike Throug': '=̶', 'Tilde Strike Through': '=̴', 'Slash Through': '=̷', 'Underline': '=̲', 'Double Underline': '=̳', 'Creepify': '=̶̺̫̯̉̋', 'Squiggle 1': '=', 'Squiggle 2': '=', 'Squiggle 3': '=', 'Squiggle 4': '=', 'Squiggle 5': '=', 'Squiggle 6': '=', 'Bold': '=', 'Round Squares': '=⃣', 'Old English': '=', 'Medieval': '=', 'Cursive': '=', 'Scriptify': '=', 'Double Struck': '=', 'Italic': '=', 'Italic Bold': '=', 'Mono Space': '=', 'Upper Angles': '=', 'Greek': '=', 'Symbols': '=', 'Currency': '=', 'Asian Style': '=', 'Asian Style 2': '=', 'Thick Block Framed': '【=】', 'Diametric Angle Frame': '『=』', 'Wavy Joiner': '≋=≋', 'Dotty Joiner': '░=░', 'Kirby Hug': '(っ◔◡◔)っ ♥ = ♥', 'Vaporwave 1': '＝', 'Vaporwave 2': '＝', 'Vaporwave 3': '【\ufeff＝】', 'Little Sparkles': '˜”*°•.˜”*°• = •°*”˜.•°*”˜', 'Weird Box': '[̲̅=]', 'Firework': '=҉', 'Stinky': '=̾', 'Bearts Between': '=', 'Arrow Below': '=͎', 'Cross Above Below': '=͓̽', 'Wingdings': '🖬︎', 'FullCrazy': '🍫😝  =  🐠🐊', 'Crazy Random': '••.•´¯`•.•• = ••.•´¯`•.••', 'Cute Random': '🍉  🎀  =  🎀  🍉'}, '_': {'Inverted Squares': '_', 'Luni Bubbles': '_⃝', 'Wide': '_', 'Tiny': '_', 'Flip': '¯', 'Squares': '_⃞', 'Mirror': '_', 'Sub Script': '_', 'Super Script': '_', 'Bent': '_', 'Neon': '_', 'Future Alien': '_', 'Strike Throug': '_̶', 'Tilde Strike Through': '_̴', 'Slash Through': '_̷', 'Underline': '_̲', 'Double Underline': '_̳', 'Creepify': '_̶̗̟͗̈́̚͘', 'Squiggle 1': '_', 'Squiggle 2': '_', 'Squiggle 3': '_', 'Squiggle 4': '_', 'Squiggle 5': '_', 'Squiggle 6': '_', 'Bold': '_', 'Round Squares': '_⃣', 'Old English': '_', 'Medieval': '_', 'Cursive': '_', 'Scriptify': '_', 'Double Struck': '_', 'Italic': '_', 'Italic Bold': '_', 'Mono Space': '_', 'Upper Angles': '_', 'Greek': '_', 'Symbols': '_', 'Currency': '_', 'Asian Style': '_', 'Asian Style 2': '_', 'Thick Block Framed': '【_】', 'Diametric Angle Frame': '『_』', 'Wavy Joiner': '≋_≋', 'Dotty Joiner': '░_░', 'Kirby Hug': '(っ◔◡◔)っ ♥ _ ♥', 'Vaporwave 1': '_', 'Vaporwave 2': '_', 'Vaporwave 3': '【\ufeff_】', 'Little Sparkles': '˜”*°•.˜”*°• _ •°*”˜.•°*”˜', 'Weird Box': '[̲̅_]', 'Firework': '_҉', 'Stinky': '_̾', 'Bearts Between': '_', 'Arrow Below': '_͎', 'Cross Above Below': '_͓̽', 'Wingdings': '♉︎', 'FullCrazy': '😎🍬  _  ♪🐒', 'Crazy Random': '😡😈  _  😾♚', 'Cute Random': '🐏  🎀  _  🎀  🐏'}, 'a': {'Inverted Squares': '🅰', 'Luni Bubbles': 'ⓐ', 'Wide': 'ａ', 'Tiny': 'ᴀ', 'Flip': 'ɐ', 'Squares': 'a⃞', 'Mirror': 'ɒ', 'Sub Script': 'ₐ', 'Super Script': 'ᵃ', 'Bent': 'ą', 'Neon': 'ᗩ', 'Future Alien': 'ᗩ', 'Strike Throug': 'a̶', 'Tilde Strike Through': 'a̴', 'Slash Through': 'a̷', 'Underline': 'a̲', 'Double Underline': 'a̳', 'Creepify': 'a̸̤̥̪͕̤̲̜͋ͅ', 'Squiggle 1': 'ค', 'Squiggle 2': 'α', 'Squiggle 3': 'ǟ', 'Squiggle 4': 'Ꮧ', 'Squiggle 5': 'ą', 'Squiggle 6': 'ค', 'Bold': '𝐚', 'Round Squares': 'a⃣', 'Old English': '𝔞', 'Medieval': '𝖆', 'Cursive': '𝓪', 'Scriptify': '𝒶', 'Double Struck': '𝕒', 'Italic': '𝘢', 'Italic Bold': '𝙖', 'Mono Space': '𝚊', 'Upper Angles': 'Λ', 'Greek': 'α', 'Symbols': 'å', 'Currency': '₳', 'Asian Style': '卂', 'Asian Style 2': 'ﾑ', 'Thick Block Framed': '【a】', 'Diametric Angle Frame': '『a』', 'Wavy Joiner': '≋a≋', 'Dotty Joiner': '░a░', 'Kirby Hug': '(っ◔◡◔)っ ♥ a ♥', 'Vaporwave 1': 'ａ', 'Vaporwave 2': 'ａ', 'Vaporwave 3': '【\ufeffａ】', 'Little Sparkles': '˜”*°•.˜”*°• a •°*”˜.•°*”˜', 'Weird Box': '[̲̅a]', 'Firework': 'a҉', 'Stinky': 'a̾', 'Bearts Between': 'a', 'Arrow Below': 'a͎', 'Cross Above Below': 'a͓̽', 'Wingdings': '♋︎', 'FullCrazy': '☺😝  Δ  ♡♤', 'Crazy Random': '`•.¸¸.•´´¯`••._.• 𝓐 •._.••`¯´´•.¸¸.•`', 'Cute Random': '🎂  🎀  𝒶  🎀  🎂'}, 'b': {'Inverted Squares': '🅱', 'Luni Bubbles': 'ⓑ', 'Wide': 'ｂ', 'Tiny': 'ʙ', 'Flip': 'q', 'Squares': 'b⃞', 'Mirror': 'd', 'Sub Script': 'b', 'Super Script': 'ᵇ', 'Bent': 'ҍ', 'Neon': 'ᗷ', 'Future Alien': 'ᗷ', 'Strike Throug': 'b̶', 'Tilde Strike Through': 'b̴', 'Slash Through': 'b̷', 'Underline': 'b̲', 'Double Underline': 'b̳', 'Creepify': 'b̷̡̢̻̯̭͉̭͇̋', 'Squiggle 1': '๒', 'Squiggle 2': 'Ⴆ', 'Squiggle 3': 'ɮ', 'Squiggle 4': 'Ᏸ', 'Squiggle 5': 'ც', 'Squiggle 6': '๖', 'Bold': '𝐛', 'Round Squares': 'b⃣', 'Old English': '𝔟', 'Medieval': '𝖇', 'Cursive': '𝓫', 'Scriptify': '𝒷', 'Double Struck': '𝕓', 'Italic': '𝘣', 'Italic Bold': '𝙗', 'Mono Space': '𝚋', 'Upper Angles': 'B', 'Greek': 'в', 'Symbols': 'ß', 'Currency': '฿', 'Asian Style': '乃', 'Asian Style 2': '乃', 'Thick Block Framed': '【b】', 'Diametric Angle Frame': '『b』', 'Wavy Joiner': '≋b≋', 'Dotty Joiner': '░b░', 'Kirby Hug': '(っ◔◡◔)っ ♥ b ♥', 'Vaporwave 1': 'ｂ', 'Vaporwave 2': 'ｂ', 'Vaporwave 3': '【\ufeffｂ】', 'Little Sparkles': '˜”*°•.˜”*°• b •°*”˜.•°*”˜', 'Weird Box': '[̲̅b]', 'Firework': 'b҉', 'Stinky': 'b̾', 'Bearts Between': 'b', 'Arrow Below': 'b͎', 'Cross Above Below': 'b͓̽', 'Wingdings': '♌︎', 'FullCrazy': '♨😲  ⓑ  🎅🍟', 'Crazy Random': '😳🎉  Ⓑ  😂☺', 'Cute Random': '★  🎀  𝒷  🎀  ★'}, 'c': {'Inverted Squares': '🅲', 'Luni Bubbles': 'ⓒ', 'Wide': 'ｃ', 'Tiny': 'ᴄ', 'Flip': 'ɔ', 'Squares': 'c⃞', 'Mirror': 'ɔ', 'Sub Script': 'c', 'Super Script': 'ᶜ', 'Bent': 'ç', 'Neon': 'ᑕ', 'Future Alien': 'ᑢ', 'Strike Throug': 'c̶', 'Tilde Strike Through': 'c̴', 'Slash Through': 'c̷', 'Underline': 'c̲', 'Double Underline': 'c̳', 'Creepify': 'c̶̫͕͇̯͇̲̼̦͓̉̋͗̋̾̆̐̇͂̒', 'Squiggle 1': 'ς', 'Squiggle 2': 'ƈ', 'Squiggle 3': 'ƈ', 'Squiggle 4': 'ፈ', 'Squiggle 5': 'ƈ', 'Squiggle 6': '¢', 'Bold': '𝐜', 'Round Squares': 'c⃣', 'Old English': '𝔠', 'Medieval': '𝖈', 'Cursive': '𝓬', 'Scriptify': '𝒸', 'Double Struck': '𝕔', 'Italic': '𝘤', 'Italic Bold': '𝙘', 'Mono Space': '𝚌', 'Upper Angles': 'ᄃ', 'Greek': '¢', 'Symbols': '¢', 'Currency': '₵', 'Asian Style': '匚', 'Asian Style 2': 'ᄃ', 'Thick Block Framed': '【c】', 'Diametric Angle Frame': '『c』', 'Wavy Joiner': '≋c≋', 'Dotty Joiner': '░c░', 'Kirby Hug': '(っ◔◡◔)っ ♥ c ♥', 'Vaporwave 1': 'ｃ', 'Vaporwave 2': 'ｃ', 'Vaporwave 3': '【\ufeffｃ】', 'Little Sparkles': '˜”*°•.˜”*°• c •°*”˜.•°*”˜', 'Weird Box': '[̲̅c]', 'Firework': 'c҉', 'Stinky': 'c̾', 'Bearts Between': 'c', 'Arrow Below': 'c͎', 'Cross Above Below': 'c͓̽', 'Wingdings': '♍︎', 'FullCrazy': '🍮🐠  ς  ♚👍', 'Crazy Random': '👌🍬  𝕔  🎅♝', 'Cute Random': '°  🎀  𝒸  🎀  °'}, 'e': {'Inverted Squares': '🅴', 'Luni Bubbles': 'ⓔ', 'Wide': 'ｅ', 'Tiny': 'ᴇ', 'Flip': 'ǝ', 'Squares': 'e⃞', 'Mirror': 'ɘ', 'Sub Script': 'ₑ', 'Super Script': 'ᵉ', 'Bent': 'ҽ', 'Neon': 'E', 'Future Alien': 'ᘿ', 'Strike Throug': 'e̶', 'Tilde Strike Through': 'e̴', 'Slash Through': 'e̷', 'Underline': 'e̲', 'Double Underline': 'e̳', 'Creepify': 'e̶̢͎͇̳̼̒̋', 'Squiggle 1': 'є', 'Squiggle 2': 'ҽ', 'Squiggle 3': 'ɛ', 'Squiggle 4': 'Ꮛ', 'Squiggle 5': 'ɛ', 'Squiggle 6': 'ē', 'Bold': '𝐞', 'Round Squares': 'e⃣', 'Old English': '𝔢', 'Medieval': '𝖊', 'Cursive': '𝓮', 'Scriptify': '𝑒', 'Double Struck': '𝕖', 'Italic': '𝘦', 'Italic Bold': '𝙚', 'Mono Space': '𝚎', 'Upper Angles': 'Σ', 'Greek': 'є', 'Symbols': 'ê', 'Currency': 'Ɇ', 'Asian Style': '乇', 'Asian Style 2': '乇', 'Thick Block Framed': '【e】', 'Diametric Angle Frame': '『e』', 'Wavy Joiner': '≋e≋', 'Dotty Joiner': '░e░', 'Kirby Hug': '(っ◔◡◔)っ ♥ e ♥', 'Vaporwave 1': 'ｅ', 'Vaporwave 2': 'ｅ', 'Vaporwave 3': '【\ufeffｅ】', 'Little Sparkles': '˜”*°•.˜”*°• e •°*”˜.•°*”˜', 'Weird Box': '[̲̅e]', 'Firework': 'e҉', 'Stinky': 'e̾', 'Bearts Between': 'e', 'Arrow Below': 'e͎', 'Cross Above Below': 'e͓̽', 'Wingdings': '♏︎', 'FullCrazy': '☮😈  ε  👍✊', 'Crazy Random': '💲♧  ᗴ  😲😡', 'Cute Random': '🍓 ⋆ 🍌  🎀  𝑒  🎀  🍌 ⋆ 🍓'}, 'f': {'Inverted Squares': '🅵', 'Luni Bubbles': 'ⓕ', 'Wide': 'ｆ', 'Tiny': 'ꜰ', 'Flip': 'ɟ', 'Squares': 'f⃞', 'Mirror': 'Ꮈ', 'Sub Script': 'f', 'Super Script': 'ᶠ', 'Bent': 'ƒ', 'Neon': 'ᖴ', 'Future Alien': 'ᖴ', 'Strike Throug': 'f̶', 'Tilde Strike Through': 'f̴', 'Slash Through': 'f̷', 'Underline': 'f̲', 'Double Underline': 'f̳', 'Creepify': 'f̸̢͕̄͆͐̈́͠', 'Squiggle 1': 'Ŧ', 'Squiggle 2': 'ϝ', 'Squiggle 3': 'ʄ', 'Squiggle 4': 'Ꭶ', 'Squiggle 5': 'ʄ', 'Squiggle 6': 'f', 'Bold': '𝐟', 'Round Squares': 'f⃣', 'Old English': '𝔣', 'Medieval': '𝖋', 'Cursive': '𝓯', 'Scriptify': '𝒻', 'Double Struck': '𝕗', 'Italic': '𝘧', 'Italic Bold': '𝙛', 'Mono Space': '𝚏', 'Upper Angles': 'F', 'Greek': 'ƒ', 'Symbols': '£', 'Currency': '₣', 'Asian Style': '千', 'Asian Style 2': 'ｷ', 'Thick Block Framed': '【f】', 'Diametric Angle Frame': '『f』', 'Wavy Joiner': '≋f≋', 'Dotty Joiner': '░f░', 'Kirby Hug': '(っ◔◡◔)っ ♥ f ♥', 'Vaporwave 1': 'ｆ', 'Vaporwave 2': 'ｆ', 'Vaporwave 3': '【\ufeffｆ】', 'Little Sparkles': '˜”*°•.˜”*°• f •°*”˜.•°*”˜', 'Weird Box': '[̲̅f]', 'Firework': 'f҉', 'Stinky': 'f̾', 'Bearts Between': 'f', 'Arrow Below': 'f͎', 'Cross Above Below': 'f͓̽', 'Wingdings': '♐︎', 'FullCrazy': '🐸🐯  𝒻  ♦💛', 'Crazy Random': '⛵🍪  𝒻  👻♥', 'Cute Random': '•._.••´¯``•.¸¸.•`   🎀  𝒻  🎀   `•.¸¸.•``¯´••._.•'}, 'g': {'Inverted Squares': '🅶', 'Luni Bubbles': 'ⓖ', 'Wide': 'ｇ', 'Tiny': 'ɢ', 'Flip': 'ɓ', 'Squares': 'g⃞', 'Mirror': 'ǫ', 'Sub Script': 'g', 'Super Script': 'ᵍ', 'Bent': 'ց', 'Neon': 'G', 'Future Alien': 'ᘜ', 'Strike Throug': 'g̶', 'Tilde Strike Through': 'g̴', 'Slash Through': 'g̷', 'Underline': 'g̲', 'Double Underline': 'g̳', 'Creepify': 'g̶̡̨̥̫̪̼͙̤̭̞̑̊͑̏̓͆̕', 'Squiggle 1': 'ﻮ', 'Squiggle 2': 'ɠ', 'Squiggle 3': 'ɢ', 'Squiggle 4': 'Ꮆ', 'Squiggle 5': 'ɠ', 'Squiggle 6': 'ງ', 'Bold': '𝐠', 'Round Squares': 'g⃣', 'Old English': '𝔤', 'Medieval': '𝖌', 'Cursive': '𝓰', 'Scriptify': '𝑔', 'Double Struck': '𝕘', 'Italic': '𝘨', 'Italic Bold': '𝙜', 'Mono Space': '𝚐', 'Upper Angles': 'G', 'Greek': 'g', 'Symbols': 'g', 'Currency': '₲', 'Asian Style': 'Ꮆ', 'Asian Style 2': 'ム', 'Thick Block Framed': '【g】', 'Diametric Angle Frame': '『g』', 'Wavy Joiner': '≋g≋', 'Dotty Joiner': '░g░', 'Kirby Hug': '(っ◔◡◔)っ ♥ g ♥', 'Vaporwave 1': 'ｇ', 'Vaporwave 2': 'ｇ', 'Vaporwave 3': '【\ufeffｇ】', 'Little Sparkles': '˜”*°•.˜”*°• g •°*”˜.•°*”˜', 'Weird Box': '[̲̅g]', 'Firework': 'g҉', 'Stinky': 'g̾', 'Bearts Between': 'g', 'Arrow Below': 'g͎', 'Cross Above Below': 'g͓̽', 'Wingdings': '♑︎', 'FullCrazy': '✋💲  𝔾  🐲💝', 'Crazy Random': '☢🍮  ⓖ  😡🐉', 'Cute Random': '🐁 ⋆ 🐐  🎀  𝑔  🎀  🐐 ⋆ 🐁'}, 'h': {'Inverted Squares': '🅷', 'Luni Bubbles': 'ⓗ', 'Wide': 'ｈ', 'Tiny': 'ʜ', 'Flip': 'ɥ', 'Squares': 'h⃞', 'Mirror': 'ʜ', 'Sub Script': 'ₕ', 'Super Script': 'ʰ', 'Bent': 'հ', 'Neon': 'ᕼ', 'Future Alien': 'ᕼ', 'Strike Throug': 'h̶', 'Tilde Strike Through': 'h̴', 'Slash Through': 'h̷', 'Underline': 'h̲', 'Double Underline': 'h̳', 'Creepify': 'h̴̡̞̺͎̀̿͊', 'Squiggle 1': 'ђ', 'Squiggle 2': 'ԋ', 'Squiggle 3': 'ɦ', 'Squiggle 4': 'Ꮒ', 'Squiggle 5': 'ɧ', 'Squiggle 6': 'h', 'Bold': '𝐡', 'Round Squares': 'h⃣', 'Old English': '𝔥', 'Medieval': '𝖍', 'Cursive': '𝓱', 'Scriptify': '𝒽', 'Double Struck': '𝕙', 'Italic': '𝘩', 'Italic Bold': '𝙝', 'Mono Space': '𝚑', 'Upper Angles': 'Ή', 'Greek': 'н', 'Symbols': 'h', 'Currency': 'Ⱨ', 'Asian Style': '卄', 'Asian Style 2': 'ん', 'Thick Block Framed': '【h】', 'Diametric Angle Frame': '『h』', 'Wavy Joiner': '≋h≋', 'Dotty Joiner': '░h░', 'Kirby Hug': '(っ◔◡◔)っ ♥ h ♥', 'Vaporwave 1': 'ｈ', 'Vaporwave 2': 'ｈ', 'Vaporwave 3': '【\ufeffｈ】', 'Little Sparkles': '˜”*°•.˜”*°• h •°*”˜.•°*”˜', 'Weird Box': '[̲̅h]', 'Firework': 'h҉', 'Stinky': 'h̾', 'Bearts Between': 'h', 'Arrow Below': 'h͎', 'Cross Above Below': 'h͓̽', 'Wingdings': '♒︎', 'FullCrazy': '🐺🎈  卄  ♤🐊', 'Crazy Random': '♣👤  ᕼ  🍓☮', 'Cute Random': '..  🎀  𝒽  🎀  ..'}, 'i': {'Inverted Squares': '🅸', 'Luni Bubbles': 'ⓘ', 'Wide': 'ｉ', 'Tiny': 'ɪ', 'Flip': 'ı', 'Squares': 'i⃞', 'Mirror': 'i', 'Sub Script': 'ᵢ', 'Super Script': 'ⁱ', 'Bent': 'ì', 'Neon': 'I', 'Future Alien': 'ᓰ', 'Strike Throug': 'i̶', 'Tilde Strike Through': 'i̴', 'Slash Through': 'i̷', 'Underline': 'i̲', 'Double Underline': 'i̳', 'Creepify': 'ȉ̵̠͎̺̏͊̃', 'Squiggle 1': 'เ', 'Squiggle 2': 'ι', 'Squiggle 3': 'ɨ', 'Squiggle 4': 'Ꭵ', 'Squiggle 5': 'ı', 'Squiggle 6': 'i', 'Bold': '𝐢', 'Round Squares': 'i⃣', 'Old English': '𝔦', 'Medieval': '𝖎', 'Cursive': '𝓲', 'Scriptify': '𝒾', 'Double Struck': '𝕚', 'Italic': '𝘪', 'Italic Bold': '𝙞', 'Mono Space': '𝚒', 'Upper Angles': 'I', 'Greek': 'ι', 'Symbols': 'ï', 'Currency': 'ł', 'Asian Style': '丨', 'Asian Style 2': 'ﾉ', 'Thick Block Framed': '【i】', 'Diametric Angle Frame': '『i』', 'Wavy Joiner': '≋i≋', 'Dotty Joiner': '░i░', 'Kirby Hug': '(っ◔◡◔)っ ♥ i ♥', 'Vaporwave 1': 'ｉ', 'Vaporwave 2': 'ｉ', 'Vaporwave 3': '【\ufeffｉ】', 'Little Sparkles': '˜”*°•.˜”*°• i •°*”˜.•°*”˜', 'Weird Box': '[̲̅i]', 'Firework': 'i҉', 'Stinky': 'i̾', 'Bearts Between': 'i', 'Arrow Below': 'i͎', 'Cross Above Below': 'i͓̽', 'Wingdings': '♓︎', 'FullCrazy': '🐙🐯  ⓘ  🔥☢', 'Crazy Random': '💋♖  𝒾  ☢💥', 'Cute Random': '🐓 ⋆ 🐬  🎀  𝒾  🎀  🐬 ⋆ 🐓'}, 'j': {'Inverted Squares': '🅹', 'Luni Bubbles': 'ⓙ', 'Wide': 'ｊ', 'Tiny': 'ᴊ', 'Flip': 'ɾ', 'Squares': 'j⃞', 'Mirror': 'ꞁ', 'Sub Script': 'ⱼ', 'Super Script': 'ʲ', 'Bent': 'ʝ', 'Neon': 'ᒍ', 'Future Alien': 'ᒚ', 'Strike Throug': 'j̶', 'Tilde Strike Through': 'j̴', 'Slash Through': 'j̷', 'Underline': 'j̲', 'Double Underline': 'j̳', 'Creepify': 'j̸̧̧̣̺̼̣͙͖͕̉̎̎͛̋͘͘ͅ', 'Squiggle 1': 'ן', 'Squiggle 2': 'ʝ', 'Squiggle 3': 'ʝ', 'Squiggle 4': 'Ꮰ', 'Squiggle 5': 'ʝ', 'Squiggle 6': 'ว', 'Bold': '𝐣', 'Round Squares': 'j⃣', 'Old English': '𝔧', 'Medieval': '𝖏', 'Cursive': '𝓳', 'Scriptify': '𝒿', 'Double Struck': '𝕛', 'Italic': '𝘫', 'Italic Bold': '𝙟', 'Mono Space': '𝚓', 'Upper Angles': 'J', 'Greek': 'נ', 'Symbols': 'j', 'Currency': 'J', 'Asian Style': 'ﾌ', 'Asian Style 2': 'ﾌ', 'Thick Block Framed': '【j】', 'Diametric Angle Frame': '『j』', 'Wavy Joiner': '≋j≋', 'Dotty Joiner': '░j░', 'Kirby Hug': '(っ◔◡◔)っ ♥ j ♥', 'Vaporwave 1': 'ｊ', 'Vaporwave 2': 'ｊ', 'Vaporwave 3': '【\ufeffｊ】', 'Little Sparkles': '˜”*°•.˜”*°• j •°*”˜.•°*”˜', 'Weird Box': '[̲̅j]', 'Firework': 'j҉', 'Stinky': 'j̾', 'Bearts Between': 'j', 'Arrow Below': 'j͎', 'Cross Above Below': 'j͓̽', 'Wingdings': '🙰', 'FullCrazy': '🌷🍮  𝓳  🐳👍', 'Crazy Random': '🐸💣  Ｊ  ☟♘', 'Cute Random': '°°°·.°·..·°¯°·._.·   🎀  𝒿  🎀   ·._.·°¯°·..·°.·°°°'}, 'k': {'Inverted Squares': '🅺', 'Luni Bubbles': 'ⓚ', 'Wide': 'ｋ', 'Tiny': 'ᴋ', 'Flip': 'ʞ', 'Squares': 'k⃞', 'Mirror': 'ʞ', 'Sub Script': 'ₖ', 'Super Script': 'ᵏ', 'Bent': 'ҟ', 'Neon': 'K', 'Future Alien': 'ᖽᐸ', 'Strike Throug': 'k̶', 'Tilde Strike Through': 'k̴', 'Slash Through': 'k̷', 'Underline': 'k̲', 'Double Underline': 'k̳', 'Creepify': 'k̸̮̙̮͇̹̟͖̺̲̏̆̒́̑͗̈́̌̎', 'Squiggle 1': 'к', 'Squiggle 2': 'ƙ', 'Squiggle 3': 'ӄ', 'Squiggle 4': 'Ꮶ', 'Squiggle 5': 'ƙ', 'Squiggle 6': 'k', 'Bold': '𝐤', 'Round Squares': 'k⃣', 'Old English': '𝔨', 'Medieval': '𝖐', 'Cursive': '𝓴', 'Scriptify': '𝓀', 'Double Struck': '𝕜', 'Italic': '𝘬', 'Italic Bold': '𝙠', 'Mono Space': '𝚔', 'Upper Angles': 'K', 'Greek': 'к', 'Symbols': 'k', 'Currency': '₭', 'Asian Style': 'Ҝ', 'Asian Style 2': 'ズ', 'Thick Block Framed': '【k】', 'Diametric Angle Frame': '『k』', 'Wavy Joiner': '≋k≋', 'Dotty Joiner': '░k░', 'Kirby Hug': '(っ◔◡◔)っ ♥ k ♥', 'Vaporwave 1': 'ｋ', 'Vaporwave 2': 'ｋ', 'Vaporwave 3': '【\ufeffｋ】', 'Little Sparkles': '˜”*°•.˜”*°• k •°*”˜.•°*”˜', 'Weird Box': '[̲̅k]', 'Firework': 'k҉', 'Stinky': 'k̾', 'Bearts Between': 'k', 'Arrow Below': 'k͎', 'Cross Above Below': 'k͓̽', 'Wingdings': '🙵', 'FullCrazy': '🎄♔  ｋ  👽🐜', 'Crazy Random': '✊🐲  к  🎉🐒', 'Cute Random': '🍧  🎀  𝓀  🎀  🍧'}, 'l': {'Inverted Squares': '🅻', 'Luni Bubbles': 'ⓛ', 'Wide': 'ｌ', 'Tiny': 'ʟ', 'Flip': 'l', 'Squares': 'l⃞', 'Mirror': '|', 'Sub Script': 'ₗ', 'Super Script': 'ˡ', 'Bent': 'Ӏ', 'Neon': 'ᒪ', 'Future Alien': 'ᒪ', 'Strike Throug': 'l̶', 'Tilde Strike Through': 'l̴', 'Slash Through': 'l̷', 'Underline': 'l̲', 'Double Underline': 'l̳', 'Creepify': 'ĺ̸͍̜̭̼̽̽̊̄͛̽', 'Squiggle 1': 'ɭ', 'Squiggle 2': 'ʅ', 'Squiggle 3': 'ʟ', 'Squiggle 4': 'Ꮭ', 'Squiggle 5': 'Ɩ', 'Squiggle 6': 'l', 'Bold': '𝐥', 'Round Squares': 'l⃣', 'Old English': '𝔩', 'Medieval': '𝖑', 'Cursive': '𝓵', 'Scriptify': '𝓁', 'Double Struck': '𝕝', 'Italic': '𝘭', 'Italic Bold': '𝙡', 'Mono Space': '𝚕', 'Upper Angles': 'ᄂ', 'Greek': 'ℓ', 'Symbols': 'l', 'Currency': 'Ⱡ', 'Asian Style': 'ㄥ', 'Asian Style 2': 'ﾚ', 'Thick Block Framed': '【l】', 'Diametric Angle Frame': '『l』', 'Wavy Joiner': '≋l≋', 'Dotty Joiner': '░l░', 'Kirby Hug': '(っ◔◡◔)っ ♥ l ♥', 'Vaporwave 1': 'ｌ', 'Vaporwave 2': 'ｌ', 'Vaporwave 3': '【\ufeffｌ】', 'Little Sparkles': '˜”*°•.˜”*°• l •°*”˜.•°*”˜', 'Weird Box': '[̲̅l]', 'Firework': 'l҉', 'Stinky': 'l̾', 'Bearts Between': 'l', 'Arrow Below': 'l͎', 'Cross Above Below': 'l͓̽', 'Wingdings': '●︎', 'FullCrazy': '♕🐤  Ĺ  🐚🌷', 'Crazy Random': '░▒▓█►─═  𝓁 ═─◄█▓▒░', 'Cute Random': '✳  🎀  𝓁  🎀  ✳'}, 'm': {'Inverted Squares': '🅼', 'Luni Bubbles': 'ⓜ', 'Wide': 'ｍ', 'Tiny': 'ᴍ', 'Flip': 'ɯ', 'Squares': 'm⃞', 'Mirror': 'm', 'Sub Script': 'ₘ', 'Super Script': 'ᵐ', 'Bent': 'ʍ', 'Neon': 'ᗰ', 'Future Alien': 'ᘻ', 'Strike Throug': 'm̶', 'Tilde Strike Through': 'm̴', 'Slash Through': 'm̷', 'Underline': 'm̲', 'Double Underline': 'm̳', 'Creepify': 'm̶̰̪͍͙̳̝̯̩̻̍͜', 'Squiggle 1': '๓', 'Squiggle 2': 'ɱ', 'Squiggle 3': 'ʍ', 'Squiggle 4': 'Ꮇ', 'Squiggle 5': 'ɱ', 'Squiggle 6': '๓', 'Bold': '𝐦', 'Round Squares': 'm⃣', 'Old English': '𝔪', 'Medieval': '𝖒', 'Cursive': '𝓶', 'Scriptify': '𝓂', 'Double Struck': '𝕞', 'Italic': '𝘮', 'Italic Bold': '𝙢', 'Mono Space': '𝚖', 'Upper Angles': 'M', 'Greek': 'м', 'Symbols': 'm', 'Currency': '₥', 'Asian Style': '爪', 'Asian Style 2': 'ﾶ', 'Thick Block Framed': '【m】', 'Diametric Angle Frame': '『m』', 'Wavy Joiner': '≋m≋', 'Dotty Joiner': '░m░', 'Kirby Hug': '(っ◔◡◔)っ ♥ m ♥', 'Vaporwave 1': 'ｍ', 'Vaporwave 2': 'ｍ', 'Vaporwave 3': '【\ufeffｍ】', 'Little Sparkles': '˜”*°•.˜”*°• m •°*”˜.•°*”˜', 'Weird Box': '[̲̅m]', 'Firework': 'm҉', 'Stinky': 'm̾', 'Bearts Between': 'm', 'Arrow Below': 'm͎', 'Cross Above Below': 'm͓̽', 'Wingdings': '❍︎', 'FullCrazy': 'ൠ🐠  Ⓜ  ♘⛵', 'Crazy Random': '•?((¯°·._.• 𝓶 •._.·°¯))؟•', 'Cute Random': '･ﾟ  🎀  𝓂  🎀  ﾟ･'}, 'n': {'Inverted Squares': '🅽', 'Luni Bubbles': 'ⓝ', 'Wide': 'ｎ', 'Tiny': 'ɴ', 'Flip': 'u', 'Squares': 'n⃞', 'Mirror': 'ᴎ', 'Sub Script': 'ₙ', 'Super Script': 'ⁿ', 'Bent': 'ղ', 'Neon': 'ᑎ', 'Future Alien': 'ᘉ', 'Strike Throug': 'n̶', 'Tilde Strike Through': 'n̴', 'Slash Through': 'n̷', 'Underline': 'n̲', 'Double Underline': 'n̳', 'Creepify': 'n̸͔̱̝͖̠͛ͅ', 'Squiggle 1': 'ภ', 'Squiggle 2': 'ɳ', 'Squiggle 3': 'ռ', 'Squiggle 4': 'Ꮑ', 'Squiggle 5': 'ŋ', 'Squiggle 6': 'ຖ', 'Bold': '𝐧', 'Round Squares': 'n⃣', 'Old English': '𝔫', 'Medieval': '𝖓', 'Cursive': '𝓷', 'Scriptify': '𝓃', 'Double Struck': '𝕟', 'Italic': '𝘯', 'Italic Bold': '𝙣', 'Mono Space': '𝚗', 'Upper Angles': 'П', 'Greek': 'η', 'Symbols': 'ñ', 'Currency': '₦', 'Asian Style': '几', 'Asian Style 2': '刀', 'Thick Block Framed': '【n】', 'Diametric Angle Frame': '『n』', 'Wavy Joiner': '≋n≋', 'Dotty Joiner': '░n░', 'Kirby Hug': '(っ◔◡◔)っ ♥ n ♥', 'Vaporwave 1': 'ｎ', 'Vaporwave 2': 'ｎ', 'Vaporwave 3': '【\ufeffｎ】', 'Little Sparkles': '˜”*°•.˜”*°• n •°*”˜.•°*”˜', 'Weird Box': '[̲̅n]', 'Firework': 'n҉', 'Stinky': 'n̾', 'Bearts Between': 'n', 'Arrow Below': 'n͎', 'Cross Above Below': 'n͓̽', 'Wingdings': '■︎', 'FullCrazy': '🐍♘  η  🐊🎉', 'Crazy Random': '¸,ø¤º°`°º¤ø,¸ 𝐍 ¸,ø¤º°`°º¤ø,¸', 'Cute Random': '•´¯`•.   🎀  𝓃  🎀   .•`¯´•'}, 'o': {'Inverted Squares': '🅾', 'Luni Bubbles': 'ⓞ', 'Wide': 'ｏ', 'Tiny': 'ᴏ', 'Flip': 'o', 'Squares': 'o⃞', 'Mirror': 'o', 'Sub Script': 'ₒ', 'Super Script': 'ᵒ', 'Bent': 'օ', 'Neon': 'O', 'Future Alien': 'ᓍ', 'Strike Throug': 'o̶', 'Tilde Strike Through': 'o̴', 'Slash Through': 'o̷', 'Underline': 'o̲', 'Double Underline': 'o̳', 'Creepify': 'o̶̞̯͌̔̔͒', 'Squiggle 1': '๏', 'Squiggle 2': 'σ', 'Squiggle 3': 'օ', 'Squiggle 4': 'Ꭷ', 'Squiggle 5': 'ơ', 'Squiggle 6': '໐', 'Bold': '𝐨', 'Round Squares': 'o⃣', 'Old English': '𝔬', 'Medieval': '𝖔', 'Cursive': '𝓸', 'Scriptify': '𝑜', 'Double Struck': '𝕠', 'Italic': '𝘰', 'Italic Bold': '𝙤', 'Mono Space': '𝚘', 'Upper Angles': 'Ө', 'Greek': 'σ', 'Symbols': 'ð', 'Currency': 'Ø', 'Asian Style': 'ㄖ', 'Asian Style 2': 'の', 'Thick Block Framed': '【o】', 'Diametric Angle Frame': '『o』', 'Wavy Joiner': '≋o≋', 'Dotty Joiner': '░o░', 'Kirby Hug': '(っ◔◡◔)っ ♥ o ♥', 'Vaporwave 1': 'ｏ', 'Vaporwave 2': 'ｏ', 'Vaporwave 3': '【\ufeffｏ】', 'Little Sparkles': '˜”*°•.˜”*°• o •°*”˜.•°*”˜', 'Weird Box': '[̲̅o]', 'Firework': 'o҉', 'Stinky': 'o̾', 'Bearts Between': 'o', 'Arrow Below': 'o͎', 'Cross Above Below': 'o͓̽', 'Wingdings': '□︎', 'FullCrazy': '☯😺  ⓞ  💥♨', 'Crazy Random': '♔☠  ๏  🐳♥', 'Cute Random': '🐓  🎀  🏵  🎀  🐓'}, 'p': {'Inverted Squares': '🅿', 'Luni Bubbles': 'ⓟ', 'Wide': 'ｐ', 'Tiny': 'ᴘ', 'Flip': 'd', 'Squares': 'p⃞', 'Mirror': 'q', 'Sub Script': 'ₚ', 'Super Script': 'ᵖ', 'Bent': 'ք', 'Neon': 'ᑭ', 'Future Alien': 'ᕵ', 'Strike Throug': 'p̶', 'Tilde Strike Through': 'p̴', 'Slash Through': 'p̷', 'Underline': 'p̲', 'Double Underline': 'p̳', 'Creepify': 'p̶̘͇̎', 'Squiggle 1': 'ק', 'Squiggle 2': 'ρ', 'Squiggle 3': 'ք', 'Squiggle 4': 'Ꭾ', 'Squiggle 5': '℘', 'Squiggle 6': 'p', 'Bold': '𝐩', 'Round Squares': 'p⃣', 'Old English': '𝔭', 'Medieval': '𝖕', 'Cursive': '𝓹', 'Scriptify': '𝓅', 'Double Struck': '𝕡', 'Italic': '𝘱', 'Italic Bold': '𝙥', 'Mono Space': '𝚙', 'Upper Angles': 'P', 'Greek': 'ρ', 'Symbols': 'þ', 'Currency': '₱', 'Asian Style': '卩', 'Asian Style 2': 'ｱ', 'Thick Block Framed': '【p】', 'Diametric Angle Frame': '『p』', 'Wavy Joiner': '≋p≋', 'Dotty Joiner': '░p░', 'Kirby Hug': '(っ◔◡◔)っ ♥ p ♥', 'Vaporwave 1': 'ｐ', 'Vaporwave 2': 'ｐ', 'Vaporwave 3': '【\ufeffｐ】', 'Little Sparkles': '˜”*°•.˜”*°• p •°*”˜.•°*”˜', 'Weird Box': '[̲̅p]', 'Firework': 'p҉', 'Stinky': 'p̾', 'Bearts Between': 'p', 'Arrow Below': 'p͎', 'Cross Above Below': 'p͓̽', 'Wingdings': '◻︎', 'FullCrazy': '💲💔  ᵖ  🐊👑', 'Crazy Random': '🐧☺  𝓹  🍪👊', 'Cute Random': '✶  🎀  𝓅  🎀  ✶'}, 'q': {'Inverted Squares': '🆀', 'Luni Bubbles': 'ⓠ', 'Wide': 'ｑ', 'Tiny': 'Q', 'Flip': 'b', 'Squares': 'q⃞', 'Mirror': 'p', 'Sub Script': 'q', 'Super Script': 'q', 'Bent': 'զ', 'Neon': 'ᑫ', 'Future Alien': 'ᕴ', 'Strike Throug': 'q̶', 'Tilde Strike Through': 'q̴', 'Slash Through': 'q̷', 'Underline': 'q̲', 'Double Underline': 'q̳', 'Creepify': 'q̴̧̳͕̳̞͉͉͉̞̰̊͗͘', 'Squiggle 1': 'ợ', 'Squiggle 2': 'ϙ', 'Squiggle 3': 'զ', 'Squiggle 4': 'Ꭴ', 'Squiggle 5': 'զ', 'Squiggle 6': '๑', 'Bold': '𝐪', 'Round Squares': 'q⃣', 'Old English': '𝔮', 'Medieval': '𝖖', 'Cursive': '𝓺', 'Scriptify': '𝓆', 'Double Struck': '𝕢', 'Italic': '𝘲', 'Italic Bold': '𝙦', 'Mono Space': '𝚚', 'Upper Angles': 'Q', 'Greek': 'q', 'Symbols': 'q', 'Currency': 'Q', 'Asian Style': 'Ɋ', 'Asian Style 2': 'ゐ', 'Thick Block Framed': '【q】', 'Diametric Angle Frame': '『q』', 'Wavy Joiner': '≋q≋', 'Dotty Joiner': '░q░', 'Kirby Hug': '(っ◔◡◔)っ ♥ q ♥', 'Vaporwave 1': 'ｑ', 'Vaporwave 2': 'ｑ', 'Vaporwave 3': '【\ufeffｑ】', 'Little Sparkles': '˜”*°•.˜”*°• q •°*”˜.•°*”˜', 'Weird Box': '[̲̅q]', 'Firework': 'q҉', 'Stinky': 'q̾', 'Bearts Between': 'q', 'Arrow Below': 'q͎', 'Cross Above Below': 'q͓̽', 'Wingdings': '❑︎', 'FullCrazy': '♬♝  Ǫ  ☺🎅', 'Crazy Random': '💢✌  q  😲👌', 'Cute Random': '･ﾟ✧  🎀  𝓆  🎀  ✧ﾟ･'}, 'r': {'Inverted Squares': '🆁', 'Luni Bubbles': 'ⓡ', 'Wide': 'ｒ', 'Tiny': 'ʀ', 'Flip': 'ɹ', 'Squares': 'r⃞', 'Mirror': 'ɿ', 'Sub Script': 'ᵣ', 'Super Script': 'ʳ', 'Bent': 'ɾ', 'Neon': 'ᖇ', 'Future Alien': 'ᖇ', 'Strike Throug': 'r̶', 'Tilde Strike Through': 'r̴', 'Slash Through': 'r̷', 'Underline': 'r̲', 'Double Underline': 'r̳', 'Creepify': 'ŗ̴̝̫̪̱͙̞̣͂̃̋', 'Squiggle 1': 'г', 'Squiggle 2': 'ɾ', 'Squiggle 3': 'ʀ', 'Squiggle 4': 'Ꮢ', 'Squiggle 5': 'ཞ', 'Squiggle 6': 'r', 'Bold': '𝐫', 'Round Squares': 'r⃣', 'Old English': '𝔯', 'Medieval': '𝖗', 'Cursive': '𝓻', 'Scriptify': '𝓇', 'Double Struck': '𝕣', 'Italic': '𝘳', 'Italic Bold': '𝙧', 'Mono Space': '𝚛', 'Upper Angles': 'Я', 'Greek': 'я', 'Symbols': 'r', 'Currency': 'Ɽ', 'Asian Style': '尺', 'Asian Style 2': '尺', 'Thick Block Framed': '【r】', 'Diametric Angle Frame': '『r』', 'Wavy Joiner': '≋r≋', 'Dotty Joiner': '░r░', 'Kirby Hug': '(っ◔◡◔)っ ♥ r ♥', 'Vaporwave 1': 'ｒ', 'Vaporwave 2': 'ｒ', 'Vaporwave 3': '【\ufeffｒ】', 'Little Sparkles': '˜”*°•.˜”*°• r •°*”˜.•°*”˜', 'Weird Box': '[̲̅r]', 'Firework': 'r҉', 'Stinky': 'r̾', 'Bearts Between': 'r', 'Arrow Below': 'r͎', 'Cross Above Below': 'r͓̽', 'Wingdings': '❒︎', 'FullCrazy': '🎉🍩  ｒ  😾💥', 'Crazy Random': '¤¸¸.•´¯`•¸¸.•..>> ⓡ <<..•.¸¸•´¯`•.¸¸¤', 'Cute Random': '*✷  🎀  𝓇  🎀  ✷*'}, 's': {'Inverted Squares': '🆂', 'Luni Bubbles': 'ⓢ', 'Wide': 'ｓ', 'Tiny': 'ꜱ', 'Flip': 's', 'Squares': 's⃞', 'Mirror': 'ꙅ', 'Sub Script': 'ₛ', 'Super Script': 'ˢ', 'Bent': 'ʂ', 'Neon': 'ᔕ', 'Future Alien': 'S', 'Strike Throug': 's̶', 'Tilde Strike Through': 's̴', 'Slash Through': 's̷', 'Underline': 's̲', 'Double Underline': 's̳', 'Creepify': 's̷̢͕̗̬͓̯͌ͅ', 'Squiggle 1': 'ร', 'Squiggle 2': 'ʂ', 'Squiggle 3': 'ֆ', 'Squiggle 4': 'Ꮥ', 'Squiggle 5': 'ʂ', 'Squiggle 6': 'Ş', 'Bold': '𝐬', 'Round Squares': 's⃣', 'Old English': '𝔰', 'Medieval': '𝖘', 'Cursive': '𝓼', 'Scriptify': '𝓈', 'Double Struck': '𝕤', 'Italic': '𝘴', 'Italic Bold': '𝙨', 'Mono Space': '𝚜', 'Upper Angles': 'Ƨ', 'Greek': 'ѕ', 'Symbols': '§', 'Currency': '₴', 'Asian Style': '丂', 'Asian Style 2': '丂', 'Thick Block Framed': '【s】', 'Diametric Angle Frame': '『s』', 'Wavy Joiner': '≋s≋', 'Dotty Joiner': '░s░', 'Kirby Hug': '(っ◔◡◔)っ ♥ s ♥', 'Vaporwave 1': 'ｓ', 'Vaporwave 2': 'ｓ', 'Vaporwave 3': '【\ufeffｓ】', 'Little Sparkles': '˜”*°•.˜”*°• s •°*”˜.•°*”˜', 'Weird Box': '[̲̅s]', 'Firework': 's҉', 'Stinky': 's̾', 'Bearts Between': 's', 'Arrow Below': 's͎', 'Cross Above Below': 's͓̽', 'Wingdings': '⬧︎', 'FullCrazy': '💛🐒  𝓈  🍫✌', 'Crazy Random': 'ஜ۩۞۩ஜ 𝐬 ஜ۩۞۩ஜ', 'Cute Random': '*´¯`*.¸¸.*´¯`*   🎀  𝓈  🎀   *`¯´*.¸¸.*`¯´*'}, 't': {'Inverted Squares': '🆃', 'Luni Bubbles': 'ⓣ', 'Wide': 'ｔ', 'Tiny': 'ᴛ', 'Flip': 'ʇ', 'Squares': 't⃞', 'Mirror': 'ƚ', 'Sub Script': 'ₜ', 'Super Script': 'ᵗ', 'Bent': 'է', 'Neon': 'T', 'Future Alien': 'ᖶ', 'Strike Throug': 't̶', 'Tilde Strike Through': 't̴', 'Slash Through': 't̷', 'Underline': 't̲', 'Double Underline': 't̳', 'Creepify': 't̷̨͇͌̓̀͑͐̈́', 'Squiggle 1': 'Շ', 'Squiggle 2': 'ƚ', 'Squiggle 3': 'ȶ', 'Squiggle 4': 'Ꮦ', 'Squiggle 5': 'ɬ', 'Squiggle 6': 't', 'Bold': '𝐭', 'Round Squares': 't⃣', 'Old English': '𝔱', 'Medieval': '𝖙', 'Cursive': '𝓽', 'Scriptify': '𝓉', 'Double Struck': '𝕥', 'Italic': '𝘵', 'Italic Bold': '𝙩', 'Mono Space': '𝚝', 'Upper Angles': 'Ƭ', 'Greek': 'т', 'Symbols': '†', 'Currency': '₮', 'Asian Style': 'ㄒ', 'Asian Style 2': 'ｲ', 'Thick Block Framed': '【t】', 'Diametric Angle Frame': '『t』', 'Wavy Joiner': '≋t≋', 'Dotty Joiner': '░t░', 'Kirby Hug': '(っ◔◡◔)っ ♥ t ♥', 'Vaporwave 1': 'ｔ', 'Vaporwave 2': 'ｔ', 'Vaporwave 3': '【\ufeffｔ】', 'Little Sparkles': '˜”*°•.˜”*°• t •°*”˜.•°*”˜', 'Weird Box': '[̲̅t]', 'Firework': 't҉', 'Stinky': 't̾', 'Bearts Between': 't', 'Arrow Below': 't͎', 'Cross Above Below': 't͓̽', 'Wingdings': '⧫︎', 'FullCrazy': '✌🎄  т  😲👍', 'Crazy Random': '♚♚  Ť  🎃♧', 'Cute Random': '🐳 ⋆ 🐑  🎀  𝓉  🎀  🐑 ⋆ 🐳'}, 'u': {'Inverted Squares': '🆄', 'Luni Bubbles': 'ⓤ', 'Wide': 'ｕ', 'Tiny': 'ᴜ', 'Flip': 'n', 'Squares': 'u⃞', 'Mirror': 'u', 'Sub Script': 'ᵤ', 'Super Script': 'ᵘ', 'Bent': 'մ', 'Neon': 'ᑌ', 'Future Alien': 'ᑘ', 'Strike Throug': 'u̶', 'Tilde Strike Through': 'u̴', 'Slash Through': 'u̷', 'Underline': 'u̲', 'Double Underline': 'u̳', 'Creepify': 'ù̷̹̺̮͙̤̦̪̍̆́̒̆͠͝͠͠', 'Squiggle 1': 'ย', 'Squiggle 2': 'υ', 'Squiggle 3': 'ʊ', 'Squiggle 4': 'Ꮼ', 'Squiggle 5': 'ų', 'Squiggle 6': 'น', 'Bold': '𝐮', 'Round Squares': 'u⃣', 'Old English': '𝔲', 'Medieval': '𝖚', 'Cursive': '𝓾', 'Scriptify': '𝓊', 'Double Struck': '𝕦', 'Italic': '𝘶', 'Italic Bold': '𝙪', 'Mono Space': '𝚞', 'Upper Angles': 'Ц', 'Greek': 'υ', 'Symbols': 'µ', 'Currency': 'Ʉ', 'Asian Style': 'ㄩ', 'Asian Style 2': 'ひ', 'Thick Block Framed': '【u】', 'Diametric Angle Frame': '『u』', 'Wavy Joiner': '≋u≋', 'Dotty Joiner': '░u░', 'Kirby Hug': '(っ◔◡◔)っ ♥ u ♥', 'Vaporwave 1': 'ｕ', 'Vaporwave 2': 'ｕ', 'Vaporwave 3': '【\ufeffｕ】', 'Little Sparkles': '˜”*°•.˜”*°• u •°*”˜.•°*”˜', 'Weird Box': '[̲̅u]', 'Firework': 'u҉', 'Stinky': 'u̾', 'Bearts Between': 'u', 'Arrow Below': 'u͎', 'Cross Above Below': 'u͓̽', 'Wingdings': '◆︎', 'FullCrazy': '💋👻  𝓾  🎯🍮', 'Crazy Random': '👍🐼  𝐮  💘💞', 'Cute Random': "§.•´¨'°÷•..×   🎀  𝓊  🎀   ×..•÷°'¨´•.§"}, 'v': {'Inverted Squares': '🆅', 'Luni Bubbles': 'ⓥ', 'Wide': 'ｖ', 'Tiny': 'ᴠ', 'Flip': 'ʌ', 'Squares': 'v⃞', 'Mirror': 'v', 'Sub Script': 'ᵥ', 'Super Script': 'ᵛ', 'Bent': 'ѵ', 'Neon': 'ᐯ', 'Future Alien': 'ᐺ', 'Strike Throug': 'v̶', 'Tilde Strike Through': 'v̴', 'Slash Through': 'v̷', 'Underline': 'v̲', 'Double Underline': 'v̳', 'Creepify': 'v̶̨̡̤̟̩͊͠', 'Squiggle 1': 'ש', 'Squiggle 2': 'ʋ', 'Squiggle 3': 'ʋ', 'Squiggle 4': 'Ꮙ', 'Squiggle 5': '۷', 'Squiggle 6': 'ง', 'Bold': '𝐯', 'Round Squares': 'v⃣', 'Old English': '𝔳', 'Medieval': '𝖛', 'Cursive': '𝓿', 'Scriptify': '𝓋', 'Double Struck': '𝕧', 'Italic': '𝘷', 'Italic Bold': '𝙫', 'Mono Space': '𝚟', 'Upper Angles': 'V', 'Greek': 'ν', 'Symbols': 'v', 'Currency': 'V', 'Asian Style': 'ᐯ', 'Asian Style 2': '√', 'Thick Block Framed': '【v】', 'Diametric Angle Frame': '『v』', 'Wavy Joiner': '≋v≋', 'Dotty Joiner': '░v░', 'Kirby Hug': '(っ◔◡◔)っ ♥ v ♥', 'Vaporwave 1': 'ｖ', 'Vaporwave 2': 'ｖ', 'Vaporwave 3': '【\ufeffｖ】', 'Little Sparkles': '˜”*°•.˜”*°• v •°*”˜.•°*”˜', 'Weird Box': '[̲̅v]', 'Firework': 'v҉', 'Stinky': 'v̾', 'Bearts Between': 'v', 'Arrow Below': 'v͎', 'Cross Above Below': 'v͓̽', 'Wingdings': '❖︎', 'FullCrazy': '♛👌  𝓋  🎅🐲', 'Crazy Random': '🐠🎯  𝓥  ♧🐲', 'Cute Random': '🍰  🎀  𝓋  🎀  🍰'}, 'w': {'Inverted Squares': '🆆', 'Luni Bubbles': 'ⓦ', 'Wide': 'ｗ', 'Tiny': 'ᴡ', 'Flip': 'ʍ', 'Squares': 'w⃞', 'Mirror': 'w', 'Sub Script': 'w', 'Super Script': 'ʷ', 'Bent': 'ա', 'Neon': 'ᗯ', 'Future Alien': 'ᘺ', 'Strike Throug': 'w̶', 'Tilde Strike Through': 'w̴', 'Slash Through': 'w̷', 'Underline': 'w̲', 'Double Underline': 'w̳', 'Creepify': 'w̶̛͚̰͇͙͈͚̥̞̞͂̄͛̅', 'Squiggle 1': 'ฬ', 'Squiggle 2': 'ɯ', 'Squiggle 3': 'ա', 'Squiggle 4': 'Ꮗ', 'Squiggle 5': 'ῳ', 'Squiggle 6': 'ຟ', 'Bold': '𝐰', 'Round Squares': 'w⃣', 'Old English': '𝔴', 'Medieval': '𝖜', 'Cursive': '𝔀', 'Scriptify': '𝓌', 'Double Struck': '𝕨', 'Italic': '𝘸', 'Italic Bold': '𝙬', 'Mono Space': '𝚠', 'Upper Angles': 'Щ', 'Greek': 'ω', 'Symbols': 'w', 'Currency': '₩', 'Asian Style': '山', 'Asian Style 2': 'W', 'Thick Block Framed': '【w】', 'Diametric Angle Frame': '『w』', 'Wavy Joiner': '≋w≋', 'Dotty Joiner': '░w░', 'Kirby Hug': '(っ◔◡◔)っ ♥ w ♥', 'Vaporwave 1': 'ｗ', 'Vaporwave 2': 'ｗ', 'Vaporwave 3': '【\ufeffｗ】', 'Little Sparkles': '˜”*°•.˜”*°• w •°*”˜.•°*”˜', 'Weird Box': '[̲̅w]', 'Firework': 'w҉', 'Stinky': 'w̾', 'Bearts Between': 'w', 'Arrow Below': 'w͎', 'Cross Above Below': 'w͓̽', 'Wingdings': '⬥︎', 'FullCrazy': '🐨👑  ʷ  ♤🐠', 'Crazy Random': '«-(¯`v´¯)-« ω »-(¯`v´¯)-»', 'Cute Random': '🍭  🎀  𝓌  🎀  🍭'}, 'x': {'Inverted Squares': '🆇', 'Luni Bubbles': 'ⓧ', 'Wide': 'ｘ', 'Tiny': 'x', 'Flip': 'x', 'Squares': 'x⃞', 'Mirror': 'x', 'Sub Script': 'ₓ', 'Super Script': 'ˣ', 'Bent': '×', 'Neon': '᙭', 'Future Alien': '᙭', 'Strike Throug': 'x̶', 'Tilde Strike Through': 'x̴', 'Slash Through': 'x̷', 'Underline': 'x̲', 'Double Underline': 'x̳', 'Creepify': 'x̵̭͎͎̙̀̃̇͛̌̊̾̾̚', 'Squiggle 1': 'א', 'Squiggle 2': 'x', 'Squiggle 3': 'Ӽ', 'Squiggle 4': 'ጀ', 'Squiggle 5': 'ҳ', 'Squiggle 6': 'x', 'Bold': '𝐱', 'Round Squares': 'x⃣', 'Old English': '𝔵', 'Medieval': '𝖝', 'Cursive': '𝔁', 'Scriptify': '𝓍', 'Double Struck': '𝕩', 'Italic': '𝘹', 'Italic Bold': '𝙭', 'Mono Space': '𝚡', 'Upper Angles': 'X', 'Greek': 'χ', 'Symbols': 'x', 'Currency': 'Ӿ', 'Asian Style': '乂', 'Asian Style 2': 'ﾒ', 'Thick Block Framed': '【x】', 'Diametric Angle Frame': '『x』', 'Wavy Joiner': '≋x≋', 'Dotty Joiner': '░x░', 'Kirby Hug': '(っ◔◡◔)っ ♥ x ♥', 'Vaporwave 1': 'ｘ', 'Vaporwave 2': 'ｘ', 'Vaporwave 3': '【\ufeffｘ】', 'Little Sparkles': '˜”*°•.˜”*°• x •°*”˜.•°*”˜', 'Weird Box': '[̲̅x]', 'Firework': 'x҉', 'Stinky': 'x̾', 'Bearts Between': 'x', 'Arrow Below': 'x͎', 'Cross Above Below': 'x͓̽', 'Wingdings': '⌧︎', 'FullCrazy': '💗😝  𝔵  🐉♝', 'Crazy Random': '💀🐤  ｘ  ✊🍩', 'Cute Random': '🍩  🎀  𝓍  🎀  🍩'}, 'y': {'Inverted Squares': '🆈', 'Luni Bubbles': 'ⓨ', 'Wide': 'ｙ', 'Tiny': 'ʏ', 'Flip': 'ʎ', 'Squares': 'y⃞', 'Mirror': 'ʏ', 'Sub Script': 'y', 'Super Script': 'ʸ', 'Bent': 'վ', 'Neon': 'Y', 'Future Alien': 'ᖻ', 'Strike Throug': 'y̶', 'Tilde Strike Through': 'y̴', 'Slash Through': 'y̷', 'Underline': 'y̲', 'Double Underline': 'y̳', 'Creepify': 'y̷̟̖̰͖̪͍͊͒̾͗͌̈́̀', 'Squiggle 1': 'ץ', 'Squiggle 2': 'ყ', 'Squiggle 3': 'ʏ', 'Squiggle 4': 'Ꭹ', 'Squiggle 5': 'ყ', 'Squiggle 6': 'ฯ', 'Bold': '𝐲', 'Round Squares': 'y⃣', 'Old English': '𝔶', 'Medieval': '𝖞', 'Cursive': '𝔂', 'Scriptify': '𝓎', 'Double Struck': '𝕪', 'Italic': '𝘺', 'Italic Bold': '𝙮', 'Mono Space': '𝚢', 'Upper Angles': 'Y', 'Greek': 'у', 'Symbols': '¥', 'Currency': 'Ɏ', 'Asian Style': 'ㄚ', 'Asian Style 2': 'ﾘ', 'Thick Block Framed': '【y】', 'Diametric Angle Frame': '『y』', 'Wavy Joiner': '≋y≋', 'Dotty Joiner': '░y░', 'Kirby Hug': '(っ◔◡◔)っ ♥ y ♥', 'Vaporwave 1': 'ｙ', 'Vaporwave 2': 'ｙ', 'Vaporwave 3': '【\ufeffｙ】', 'Little Sparkles': '˜”*°•.˜”*°• y •°*”˜.•°*”˜', 'Weird Box': '[̲̅y]', 'Firework': 'y҉', 'Stinky': 'y̾', 'Bearts Between': 'y', 'Arrow Below': 'y͎', 'Cross Above Below': 'y͓̽', 'Wingdings': '⍓︎', 'FullCrazy': '🐺😂  𝔂  💘🐟', 'Crazy Random': '🍮🍩  𝓎  ☯♞', 'Cute Random': '★  🎀  𝓎  🎀  ★'}, 'z': {'Inverted Squares': '🆉', 'Luni Bubbles': 'ⓩ', 'Wide': 'ｚ', 'Tiny': 'ᴢ', 'Flip': 'z', 'Squares': 'z⃞', 'Mirror': 'ƹ', 'Sub Script': 'z', 'Super Script': 'ᶻ', 'Bent': 'Հ', 'Neon': 'ᘔ', 'Future Alien': 'ᗱ', 'Strike Throug': 'z̶', 'Tilde Strike Through': 'z̴', 'Slash Through': 'z̷', 'Underline': 'z̲', 'Double Underline': 'z̳', 'Creepify': 'z̵̢͐̊͐͛͛̆͒̍̚̚', 'Squiggle 1': 'չ', 'Squiggle 2': 'ȥ', 'Squiggle 3': 'ʐ', 'Squiggle 4': 'ፚ', 'Squiggle 5': 'ʑ', 'Squiggle 6': 'ຊ', 'Bold': '𝐳', 'Round Squares': 'z⃣', 'Old English': '𝔷', 'Medieval': '𝖟', 'Cursive': '𝔃', 'Scriptify': '𝓏', 'Double Struck': '𝕫', 'Italic': '𝘻', 'Italic Bold': '𝙯', 'Mono Space': '𝚣', 'Upper Angles': 'Z', 'Greek': 'z', 'Symbols': 'z', 'Currency': 'Ⱬ', 'Asian Style': '乙', 'Asian Style 2': '乙', 'Thick Block Framed': '【z】', 'Diametric Angle Frame': '『z』', 'Wavy Joiner': '≋z≋', 'Dotty Joiner': '░z░', 'Kirby Hug': '(っ◔◡◔)っ ♥ z ♥', 'Vaporwave 1': 'ｚ', 'Vaporwave 2': 'ｚ', 'Vaporwave 3': '【\ufeffｚ】', 'Little Sparkles': '˜”*°•.˜”*°• z •°*”˜.•°*”˜', 'Weird Box': '[̲̅z]', 'Firework': 'z҉', 'Stinky': 'z̾', 'Bearts Between': 'z', 'Arrow Below': 'z͎', 'Cross Above Below': 'z͓̽', 'Wingdings': '⌘︎', 'FullCrazy': '☜♨  ｚ  ✊🎯', 'Crazy Random': '🐳♨  z  🐚🐜', 'Cute Random': '๑۞๑,¸¸,ø¤º°`°๑۩   🎀  𝓏  🎀   ۩๑°`°º¤ø,¸¸,๑۞๑'}, 'A': {'Inverted Squares': '🅰', 'Luni Bubbles': 'Ⓐ', 'Wide': 'Ａ', 'Tiny': 'ᴀ', 'Flip': '∀', 'Squares': 'A⃞', 'Mirror': 'A', 'Sub Script': 'ₐ', 'Super Script': 'ᴬ', 'Bent': 'Ⱥ', 'Neon': 'ᗩ', 'Future Alien': 'ᗩ', 'Strike Throug': 'A̶', 'Tilde Strike Through': 'A̴', 'Slash Through': 'A̷', 'Underline': 'A̲', 'Double Underline': 'A̳', 'Creepify': 'Â̷̺̬̝̒͂̈́̊͌̀̂͠', 'Squiggle 1': 'ค', 'Squiggle 2': 'A', 'Squiggle 3': 'ǟ', 'Squiggle 4': 'Ꮧ', 'Squiggle 5': 'ą', 'Squiggle 6': 'ค', 'Bold': '𝐀', 'Round Squares': 'A⃣', 'Old English': '𝔄', 'Medieval': '𝕬', 'Cursive': '𝓐', 'Scriptify': '𝒜', 'Double Struck': '𝔸', 'Italic': '𝘈', 'Italic Bold': '𝘼', 'Mono Space': '𝙰', 'Upper Angles': 'Λ', 'Greek': 'α', 'Symbols': 'Ä', 'Currency': '₳', 'Asian Style': '卂', 'Asian Style 2': 'ﾑ', 'Thick Block Framed': '【A】', 'Diametric Angle Frame': '『A』', 'Wavy Joiner': '≋A≋', 'Dotty Joiner': '░A░', 'Kirby Hug': '(っ◔◡◔)っ ♥ A ♥', 'Vaporwave 1': 'Ａ', 'Vaporwave 2': 'Λ', 'Vaporwave 3': '【\ufeffＡ】', 'Little Sparkles': '˜”*°•.˜”*°• A •°*”˜.•°*”˜', 'Weird Box': '[̲̅A]', 'Firework': 'A҉', 'Stinky': 'A̾', 'Bearts Between': 'A', 'Arrow Below': 'A͎', 'Cross Above Below': 'A͓̽', 'Wingdings': '✌︎', 'FullCrazy': '🐲♬  ᗩ  ★🎄', 'Crazy Random': '⛵🍧  ค  😡♘', 'Cute Random': '🐤 ⋆ 🐭  🎀  𝒜  🎀  🐭 ⋆ 🐤'}, 'B': {'Inverted Squares': '🅱', 'Luni Bubbles': 'Ⓑ', 'Wide': 'Ｂ', 'Tiny': 'ʙ', 'Flip': 'ᙠ', 'Squares': 'B⃞', 'Mirror': 'ᙠ', 'Sub Script': 'B', 'Super Script': 'ᴮ', 'Bent': 'β', 'Neon': 'ᗷ', 'Future Alien': 'ᗷ', 'Strike Throug': 'B̶', 'Tilde Strike Through': 'B̴', 'Slash Through': 'B̷', 'Underline': 'B̲', 'Double Underline': 'B̳', 'Creepify': 'B̸̞̜͚̃̀́̃̉̓͛̕̕ͅͅ', 'Squiggle 1': '๒', 'Squiggle 2': 'B', 'Squiggle 3': 'ɮ', 'Squiggle 4': 'Ᏸ', 'Squiggle 5': 'ც', 'Squiggle 6': '๖', 'Bold': '𝐁', 'Round Squares': 'B⃣', 'Old English': '𝔅', 'Medieval': '𝕭', 'Cursive': '𝓑', 'Scriptify': '𝐵', 'Double Struck': '𝔹', 'Italic': '𝘉', 'Italic Bold': '𝘽', 'Mono Space': '𝙱', 'Upper Angles': 'B', 'Greek': 'в', 'Symbols': 'ß', 'Currency': '฿', 'Asian Style': '乃', 'Asian Style 2': '乃', 'Thick Block Framed': '【B】', 'Diametric Angle Frame': '『B』', 'Wavy Joiner': '≋B≋', 'Dotty Joiner': '░B░', 'Kirby Hug': '(っ◔◡◔)っ ♥ B ♥', 'Vaporwave 1': 'Ｂ', 'Vaporwave 2': 'Ｂ', 'Vaporwave 3': '【\ufeffＢ】', 'Little Sparkles': '˜”*°•.˜”*°• B •°*”˜.•°*”˜', 'Weird Box': '[̲̅B]', 'Firework': 'B҉', 'Stinky': 'B̾', 'Bearts Between': 'B', 'Arrow Below': 'B͎', 'Cross Above Below': 'B͓̽', 'Wingdings': '👌︎', 'FullCrazy': '🐺♥  ｂ  💞👤', 'Crazy Random': '【｡_｡】 𝒷 【｡_｡】', 'Cute Random': '`•.,¸¸,.•´¯   🎀  𝐵  🎀   ¯´•.,¸¸,.•`'}, 'C': {'Inverted Squares': '🅲', 'Luni Bubbles': 'Ⓒ', 'Wide': 'Ｃ', 'Tiny': 'ᴄ', 'Flip': 'Ɔ', 'Squares': 'C⃞', 'Mirror': 'Ɔ', 'Sub Script': 'C', 'Super Script': 'ᶜ', 'Bent': '↻', 'Neon': 'ᑕ', 'Future Alien': 'ᑢ', 'Strike Throug': 'C̶', 'Tilde Strike Through': 'C̴', 'Slash Through': 'C̷', 'Underline': 'C̲', 'Double Underline': 'C̳', 'Creepify': 'C̸̡̓̌̑͒', 'Squiggle 1': 'ς', 'Squiggle 2': 'C', 'Squiggle 3': 'ƈ', 'Squiggle 4': 'ፈ', 'Squiggle 5': 'ƈ', 'Squiggle 6': '¢', 'Bold': '𝐂', 'Round Squares': 'C⃣', 'Old English': 'ℭ', 'Medieval': '𝕮', 'Cursive': '𝓒', 'Scriptify': '𝒞', 'Double Struck': 'ℂ', 'Italic': '𝘊', 'Italic Bold': '𝘾', 'Mono Space': '𝙲', 'Upper Angles': 'ᄃ', 'Greek': '¢', 'Symbols': 'Ç', 'Currency': '₵', 'Asian Style': '匚', 'Asian Style 2': 'ᄃ', 'Thick Block Framed': '【C】', 'Diametric Angle Frame': '『C』', 'Wavy Joiner': '≋C≋', 'Dotty Joiner': '░C░', 'Kirby Hug': '(っ◔◡◔)っ ♥ C ♥', 'Vaporwave 1': 'Ｃ', 'Vaporwave 2': 'Ｃ', 'Vaporwave 3': '【\ufeffＣ】', 'Little Sparkles': '˜”*°•.˜”*°• C •°*”˜.•°*”˜', 'Weird Box': '[̲̅C]', 'Firework': 'C҉', 'Stinky': 'C̾', 'Bearts Between': 'C', 'Arrow Below': 'C͎', 'Cross Above Below': 'C͓̽', 'Wingdings': '👍︎', 'FullCrazy': '👌🎁  𝐂  💢ൠ', 'Crazy Random': '👍💋  Ⓒ  👌💔', 'Cute Random': '¤¸¸.•´¯`•¸¸.•..>>   🎀  𝒞  🎀   >>..•.¸¸•`¯´•.¸¸¤'}, 'D': {'Inverted Squares': '🅳', 'Luni Bubbles': 'Ⓓ', 'Wide': 'Ｄ', 'Tiny': 'ᴅ', 'Flip': 'ᗡ', 'Squares': 'D⃞', 'Mirror': 'ᗡ', 'Sub Script': 'D', 'Super Script': 'ᴰ', 'Bent': 'Ꭰ', 'Neon': 'ᗪ', 'Future Alien': 'ᕲ', 'Strike Throug': 'D̶', 'Tilde Strike Through': 'D̴', 'Slash Through': 'D̷', 'Underline': 'D̲', 'Double Underline': 'D̳', 'Creepify': 'D̶̢̢͙͔̘̦͙̋̃͂̓̈̃̋̋̕͝', 'Squiggle 1': '๔', 'Squiggle 2': 'D', 'Squiggle 3': 'ɖ', 'Squiggle 4': 'Ꮄ', 'Squiggle 5': 'ɖ', 'Squiggle 6': '໓', 'Bold': '𝐃', 'Round Squares': 'D⃣', 'Old English': '𝔇', 'Medieval': '𝕯', 'Cursive': '𝓓', 'Scriptify': '𝒟', 'Double Struck': '𝔻', 'Italic': '𝘋', 'Italic Bold': '𝘿', 'Mono Space': '𝙳', 'Upper Angles': 'D', 'Greek': '∂', 'Symbols': 'Ð', 'Currency': 'Đ', 'Asian Style': 'ᗪ', 'Asian Style 2': 'り', 'Thick Block Framed': '【D】', 'Diametric Angle Frame': '『D』', 'Wavy Joiner': '≋D≋', 'Dotty Joiner': '░D░', 'Kirby Hug': '(っ◔◡◔)っ ♥ D ♥', 'Vaporwave 1': 'Ｄ', 'Vaporwave 2': 'Ｄ', 'Vaporwave 3': '【\ufeffＤ】', 'Little Sparkles': '˜”*°•.˜”*°• D •°*”˜.•°*”˜', 'Weird Box': '[̲̅D]', 'Firework': 'D҉', 'Stinky': 'D̾', 'Bearts Between': 'D', 'Arrow Below': 'D͎', 'Cross Above Below': 'D͓̽', 'Wingdings': '👎︎', 'FullCrazy': '⛵😾  ᵈ  💥👍', 'Crazy Random': '♣🎃  đ  🍬♣', 'Cute Random': '★·.·´¯`·.·★   🎀  𝒟  🎀   ★·.·`¯´·.·★'}, 'E': {'Inverted Squares': '🅴', 'Luni Bubbles': 'Ⓔ', 'Wide': 'Ｅ', 'Tiny': 'ᴇ', 'Flip': 'Ǝ', 'Squares': 'E⃞', 'Mirror': 'Ǝ', 'Sub Script': 'ₑ', 'Super Script': 'ᴱ', 'Bent': 'Ɛ', 'Neon': 'E', 'Future Alien': 'ᘿ', 'Strike Throug': 'E̶', 'Tilde Strike Through': 'E̴', 'Slash Through': 'E̷', 'Underline': 'E̲', 'Double Underline': 'E̳', 'Creepify': 'E̶̜̣̟̼̱͓̼̹͔̰̽͊͗', 'Squiggle 1': 'є', 'Squiggle 2': 'E', 'Squiggle 3': 'ɛ', 'Squiggle 4': 'Ꮛ', 'Squiggle 5': 'ɛ', 'Squiggle 6': 'ē', 'Bold': '𝐄', 'Round Squares': 'E⃣', 'Old English': '𝔈', 'Medieval': '𝕰', 'Cursive': '𝓔', 'Scriptify': '𝐸', 'Double Struck': '𝔼', 'Italic': '𝘌', 'Italic Bold': '𝙀', 'Mono Space': '𝙴', 'Upper Angles': 'Σ', 'Greek': 'є', 'Symbols': 'È', 'Currency': 'Ɇ', 'Asian Style': '乇', 'Asian Style 2': '乇', 'Thick Block Framed': '【E】', 'Diametric Angle Frame': '『E』', 'Wavy Joiner': '≋E≋', 'Dotty Joiner': '░E░', 'Kirby Hug': '(っ◔◡◔)っ ♥ E ♥', 'Vaporwave 1': 'Ｅ', 'Vaporwave 2': 'Σ', 'Vaporwave 3': '【\ufeffＥ】', 'Little Sparkles': '˜”*°•.˜”*°• E •°*”˜.•°*”˜', 'Weird Box': '[̲̅E]', 'Firework': 'E҉', 'Stinky': 'E̾', 'Bearts Between': 'E', 'Arrow Below': 'E͎', 'Cross Above Below': 'E͓̽', 'Wingdings': '☜︎', 'FullCrazy': '✌♙  𝔼  🐼💎', 'Crazy Random': '♙🎁  𝕖  💥😺', 'Cute Random': '★·.·´¯`·.·★   🎀  𝐸  🎀   ★·.·`¯´·.·★'}, 'F': {'Inverted Squares': '🅵', 'Luni Bubbles': 'Ⓕ', 'Wide': 'Ｆ', 'Tiny': 'ꜰ', 'Flip': 'Ⅎ', 'Squares': 'F⃞', 'Mirror': 'ꟻ', 'Sub Script': 'F', 'Super Script': 'ᶠ', 'Bent': 'Ƒ', 'Neon': 'ᖴ', 'Future Alien': 'ᖴ', 'Strike Throug': 'F̶', 'Tilde Strike Through': 'F̴', 'Slash Through': 'F̷', 'Underline': 'F̲', 'Double Underline': 'F̳', 'Creepify': 'F̶̡̒̅̇͝͠', 'Squiggle 1': 'Ŧ', 'Squiggle 2': 'F', 'Squiggle 3': 'ʄ', 'Squiggle 4': 'Ꭶ', 'Squiggle 5': 'ʄ', 'Squiggle 6': 'f', 'Bold': '𝐅', 'Round Squares': 'F⃣', 'Old English': '𝔉', 'Medieval': '𝕱', 'Cursive': '𝓕', 'Scriptify': '𝐹', 'Double Struck': '𝔽', 'Italic': '𝘍', 'Italic Bold': '𝙁', 'Mono Space': '𝙵', 'Upper Angles': 'F', 'Greek': 'ƒ', 'Symbols': '£', 'Currency': '₣', 'Asian Style': '千', 'Asian Style 2': 'ｷ', 'Thick Block Framed': '【F】', 'Diametric Angle Frame': '『F』', 'Wavy Joiner': '≋F≋', 'Dotty Joiner': '░F░', 'Kirby Hug': '(っ◔◡◔)っ ♥ F ♥', 'Vaporwave 1': 'Ｆ', 'Vaporwave 2': 'Ｆ', 'Vaporwave 3': '【\ufeffＦ】', 'Little Sparkles': '˜”*°•.˜”*°• F •°*”˜.•°*”˜', 'Weird Box': '[̲̅F]', 'Firework': 'F҉', 'Stinky': 'F̾', 'Bearts Between': 'F', 'Arrow Below': 'F͎', 'Cross Above Below': 'F͓̽', 'Wingdings': '☞︎', 'FullCrazy': '💞🐚  Ｆ  ♞👤', 'Crazy Random': '-·=»‡«=·- 𝒻 -·=»‡«=·-', 'Cute Random': '🍡 ⋆ 🍪  🎀  𝐹  🎀  🍪 ⋆ 🍡'}, 'G': {'Inverted Squares': '🅶', 'Luni Bubbles': 'Ⓖ', 'Wide': 'Ｇ', 'Tiny': 'ɢ', 'Flip': '⅁', 'Squares': 'G⃞', 'Mirror': 'Ꭾ', 'Sub Script': 'G', 'Super Script': 'ᴳ', 'Bent': 'Ɠ', 'Neon': 'G', 'Future Alien': 'ᘜ', 'Strike Throug': 'G̶', 'Tilde Strike Through': 'G̴', 'Slash Through': 'G̷', 'Underline': 'G̲', 'Double Underline': 'G̳', 'Creepify': 'G̴̛͍͇̞͓̰͕̩͙̤̈͆̅̚͝', 'Squiggle 1': 'ﻮ', 'Squiggle 2': 'G', 'Squiggle 3': 'ɢ', 'Squiggle 4': 'Ꮆ', 'Squiggle 5': 'ɠ', 'Squiggle 6': 'ງ', 'Bold': '𝐆', 'Round Squares': 'G⃣', 'Old English': '𝔊', 'Medieval': '𝕲', 'Cursive': '𝓖', 'Scriptify': '𝒢', 'Double Struck': '𝔾', 'Italic': '𝘎', 'Italic Bold': '𝙂', 'Mono Space': '𝙶', 'Upper Angles': 'G', 'Greek': 'g', 'Symbols': 'G', 'Currency': '₲', 'Asian Style': 'Ꮆ', 'Asian Style 2': 'ム', 'Thick Block Framed': '【G】', 'Diametric Angle Frame': '『G』', 'Wavy Joiner': '≋G≋', 'Dotty Joiner': '░G░', 'Kirby Hug': '(っ◔◡◔)っ ♥ G ♥', 'Vaporwave 1': 'Ｇ', 'Vaporwave 2': 'Ｇ', 'Vaporwave 3': '【\ufeffＧ】', 'Little Sparkles': '˜”*°•.˜”*°• G •°*”˜.•°*”˜', 'Weird Box': '[̲̅G]', 'Firework': 'G҉', 'Stinky': 'G̾', 'Bearts Between': 'G', 'Arrow Below': 'G͎', 'Cross Above Below': 'G͓̽', 'Wingdings': '☝︎', 'FullCrazy': '☹♢  ⓖ  ♔♔', 'Crazy Random': '—(••÷[ 𝐠 ]÷••)—', 'Cute Random': '🍑 ⋆ 🍰  🎀  𝒢  🎀  🍰 ⋆ 🍑'}, 'H': {'Inverted Squares': '🅷', 'Luni Bubbles': 'Ⓗ', 'Wide': 'Ｈ', 'Tiny': 'ʜ', 'Flip': 'H', 'Squares': 'H⃞', 'Mirror': 'H', 'Sub Script': 'ₕ', 'Super Script': 'ᴴ', 'Bent': 'Ƕ', 'Neon': 'ᕼ', 'Future Alien': 'ᕼ', 'Strike Throug': 'H̶', 'Tilde Strike Through': 'H̴', 'Slash Through': 'H̷', 'Underline': 'H̲', 'Double Underline': 'H̳', 'Creepify': 'H̵̡̖̺̮̰̱̠͎̟͐̈͑͊͊̽́͜', 'Squiggle 1': 'ђ', 'Squiggle 2': 'H', 'Squiggle 3': 'ɦ', 'Squiggle 4': 'Ꮒ', 'Squiggle 5': 'ɧ', 'Squiggle 6': 'h', 'Bold': '𝐇', 'Round Squares': 'H⃣', 'Old English': 'ℌ', 'Medieval': '𝕳', 'Cursive': '𝓗', 'Scriptify': '𝐻', 'Double Struck': 'ℍ', 'Italic': '𝘏', 'Italic Bold': '𝙃', 'Mono Space': '𝙷', 'Upper Angles': 'Ή', 'Greek': 'н', 'Symbols': 'H', 'Currency': 'Ⱨ', 'Asian Style': '卄', 'Asian Style 2': 'ん', 'Thick Block Framed': '【H】', 'Diametric Angle Frame': '『H』', 'Wavy Joiner': '≋H≋', 'Dotty Joiner': '░H░', 'Kirby Hug': '(っ◔◡◔)っ ♥ H ♥', 'Vaporwave 1': 'Ｈ', 'Vaporwave 2': 'Ｈ', 'Vaporwave 3': '【\ufeffＨ】', 'Little Sparkles': '˜”*°•.˜”*°• H •°*”˜.•°*”˜', 'Weird Box': '[̲̅H]', 'Firework': 'H҉', 'Stinky': 'H̾', 'Bearts Between': 'H', 'Arrow Below': 'H͎', 'Cross Above Below': 'H͓̽', 'Wingdings': '☟︎', 'FullCrazy': '🐟♡  Ĥ  🎯👺', 'Crazy Random': '😎👣  Ｈ  ♬☠', 'Cute Random': '🎂 ⋆ 🍩  🎀  𝐻  🎀  🍩 ⋆ 🎂'}, 'I': {'Inverted Squares': '🅸', 'Luni Bubbles': 'Ⓘ', 'Wide': 'Ｉ', 'Tiny': 'ɪ', 'Flip': 'I', 'Squares': 'I⃞', 'Mirror': 'I', 'Sub Script': 'ᵢ', 'Super Script': 'ᴵ', 'Bent': 'į', 'Neon': 'I', 'Future Alien': 'ᓰ', 'Strike Throug': 'I̶', 'Tilde Strike Through': 'I̴', 'Slash Through': 'I̷', 'Underline': 'I̲', 'Double Underline': 'I̳', 'Creepify': 'Ì̴̡̤̖́͋͊̃̊̋', 'Squiggle 1': 'เ', 'Squiggle 2': 'I', 'Squiggle 3': 'ɨ', 'Squiggle 4': 'Ꭵ', 'Squiggle 5': 'ı', 'Squiggle 6': 'i', 'Bold': '𝐈', 'Round Squares': 'I⃣', 'Old English': 'ℑ', 'Medieval': '𝕴', 'Cursive': '𝓘', 'Scriptify': '𝐼', 'Double Struck': '𝕀', 'Italic': '𝘐', 'Italic Bold': '𝙄', 'Mono Space': '𝙸', 'Upper Angles': 'I', 'Greek': 'ι', 'Symbols': 'Ì', 'Currency': 'ł', 'Asian Style': '丨', 'Asian Style 2': 'ﾉ', 'Thick Block Framed': '【I】', 'Diametric Angle Frame': '『I』', 'Wavy Joiner': '≋I≋', 'Dotty Joiner': '░I░', 'Kirby Hug': '(っ◔◡◔)っ ♥ I ♥', 'Vaporwave 1': 'Ｉ', 'Vaporwave 2': 'Ｉ', 'Vaporwave 3': '【\ufeffＩ】', 'Little Sparkles': '˜”*°•.˜”*°• I •°*”˜.•°*”˜', 'Weird Box': '[̲̅I]', 'Firework': 'I҉', 'Stinky': 'I̾', 'Bearts Between': 'I', 'Arrow Below': 'I͎', 'Cross Above Below': 'I͓̽', 'Wingdings': '✋︎', 'FullCrazy': '🐳✊  Į  ☺👑', 'Crazy Random': '👹💚  Ꭵ  🐲♚', 'Cute Random': '⋆✩  🎀  𝐼  🎀  ✩⋆'}, 'J': {'Inverted Squares': '🅹', 'Luni Bubbles': 'Ⓙ', 'Wide': 'Ｊ', 'Tiny': 'ᴊ', 'Flip': 'ſ', 'Squares': 'J⃞', 'Mirror': 'Ⴑ', 'Sub Script': 'ⱼ', 'Super Script': 'ᴶ', 'Bent': 'ل', 'Neon': 'ᒍ', 'Future Alien': 'ᒚ', 'Strike Throug': 'J̶', 'Tilde Strike Through': 'J̴', 'Slash Through': 'J̷', 'Underline': 'J̲', 'Double Underline': 'J̳', 'Creepify': 'J̸̳͍̘̰̲͚͈̞͕͒̈ͅ', 'Squiggle 1': 'ן', 'Squiggle 2': 'J', 'Squiggle 3': 'ʝ', 'Squiggle 4': 'Ꮰ', 'Squiggle 5': 'ʝ', 'Squiggle 6': 'ว', 'Bold': '𝐉', 'Round Squares': 'J⃣', 'Old English': '𝔍', 'Medieval': '𝕵', 'Cursive': '𝓙', 'Scriptify': '𝒥', 'Double Struck': '𝕁', 'Italic': '𝘑', 'Italic Bold': '𝙅', 'Mono Space': '𝙹', 'Upper Angles': 'J', 'Greek': 'נ', 'Symbols': 'J', 'Currency': 'J', 'Asian Style': 'ﾌ', 'Asian Style 2': 'ﾌ', 'Thick Block Framed': '【J】', 'Diametric Angle Frame': '『J』', 'Wavy Joiner': '≋J≋', 'Dotty Joiner': '░J░', 'Kirby Hug': '(っ◔◡◔)っ ♥ J ♥', 'Vaporwave 1': 'Ｊ', 'Vaporwave 2': 'Ｊ', 'Vaporwave 3': '【\ufeffＪ】', 'Little Sparkles': '˜”*°•.˜”*°• J •°*”˜.•°*”˜', 'Weird Box': '[̲̅J]', 'Firework': 'J҉', 'Stinky': 'J̾', 'Bearts Between': 'J', 'Arrow Below': 'J͎', 'Cross Above Below': 'J͓̽', 'Wingdings': '☺︎', 'FullCrazy': '😲✌  𝕁  🐤☠', 'Crazy Random': '♕☠  ј  ✊💥', 'Cute Random': '🍡 ⋆ 🍰  🎀  𝒥  🎀  🍰 ⋆ 🍡'}, 'K': {'Inverted Squares': '🅺', 'Luni Bubbles': 'Ⓚ', 'Wide': 'Ｋ', 'Tiny': 'ᴋ', 'Flip': '⋊', 'Squares': 'K⃞', 'Mirror': '⋊', 'Sub Script': 'ₖ', 'Super Script': 'ᴷ', 'Bent': 'Ҡ', 'Neon': 'K', 'Future Alien': 'ᖽᐸ', 'Strike Throug': 'K̶', 'Tilde Strike Through': 'K̴', 'Slash Through': 'K̷', 'Underline': 'K̲', 'Double Underline': 'K̳', 'Creepify': 'K̶̢̝̩̬̮̦͉̤̼̒', 'Squiggle 1': 'к', 'Squiggle 2': 'K', 'Squiggle 3': 'ӄ', 'Squiggle 4': 'Ꮶ', 'Squiggle 5': 'ƙ', 'Squiggle 6': 'k', 'Bold': '𝐊', 'Round Squares': 'K⃣', 'Old English': '𝔎', 'Medieval': '𝕶', 'Cursive': '𝓚', 'Scriptify': '𝒦', 'Double Struck': '𝕂', 'Italic': '𝘒', 'Italic Bold': '𝙆', 'Mono Space': '𝙺', 'Upper Angles': 'K', 'Greek': 'к', 'Symbols': 'K', 'Currency': '₭', 'Asian Style': 'Ҝ', 'Asian Style 2': 'ズ', 'Thick Block Framed': '【K】', 'Diametric Angle Frame': '『K』', 'Wavy Joiner': '≋K≋', 'Dotty Joiner': '░K░', 'Kirby Hug': '(っ◔◡◔)っ ♥ K ♥', 'Vaporwave 1': 'Ｋ', 'Vaporwave 2': 'Ｋ', 'Vaporwave 3': '【\ufeffＫ】', 'Little Sparkles': '˜”*°•.˜”*°• K •°*”˜.•°*”˜', 'Weird Box': '[̲̅K]', 'Firework': 'K҉', 'Stinky': 'K̾', 'Bearts Between': 'K', 'Arrow Below': 'K͎', 'Cross Above Below': 'K͓̽', 'Wingdings': '😐︎', 'FullCrazy': '🐤♨  ⓚ  ♣💝', 'Crazy Random': '⛵♦  Ќ  ✌👤', 'Cute Random': '🐣  🎀  𝒦  🎀  🐣'}, 'L': {'Inverted Squares': '🅻', 'Luni Bubbles': 'Ⓛ', 'Wide': 'Ｌ', 'Tiny': 'ʟ', 'Flip': '˥', 'Squares': 'L⃞', 'Mirror': '⅃', 'Sub Script': 'ₗ', 'Super Script': 'ᴸ', 'Bent': 'Ꝉ', 'Neon': 'ᒪ', 'Future Alien': 'ᒪ', 'Strike Throug': 'L̶', 'Tilde Strike Through': 'L̴', 'Slash Through': 'L̷', 'Underline': 'L̲', 'Double Underline': 'L̳', 'Creepify': 'L̵̬̤̜̠̭̳͒͐̈̆', 'Squiggle 1': 'ɭ', 'Squiggle 2': 'L', 'Squiggle 3': 'ʟ', 'Squiggle 4': 'Ꮭ', 'Squiggle 5': 'Ɩ', 'Squiggle 6': 'l', 'Bold': '𝐋', 'Round Squares': 'L⃣', 'Old English': '𝔏', 'Medieval': '𝕷', 'Cursive': '𝓛', 'Scriptify': '𝐿', 'Double Struck': '𝕃', 'Italic': '𝘓', 'Italic Bold': '𝙇', 'Mono Space': '𝙻', 'Upper Angles': 'ᄂ', 'Greek': 'ℓ', 'Symbols': 'L', 'Currency': 'Ⱡ', 'Asian Style': 'ㄥ', 'Asian Style 2': 'ﾚ', 'Thick Block Framed': '【L】', 'Diametric Angle Frame': '『L』', 'Wavy Joiner': '≋L≋', 'Dotty Joiner': '░L░', 'Kirby Hug': '(っ◔◡◔)っ ♥ L ♥', 'Vaporwave 1': 'Ｌ', 'Vaporwave 2': 'Ｌ', 'Vaporwave 3': '【\ufeffＬ】', 'Little Sparkles': '˜”*°•.˜”*°• L •°*”˜.•°*”˜', 'Weird Box': '[̲̅L]', 'Firework': 'L҉', 'Stinky': 'L̾', 'Bearts Between': 'L', 'Arrow Below': 'L͎', 'Cross Above Below': 'L͓̽', 'Wingdings': '☹︎', 'FullCrazy': '🐍🐤  ℓ  🍮🐙', 'Crazy Random': '🐼💲  𝕝  ♙🐼', 'Cute Random': '🌌🌠  🎀  𝐿  🎀  🌠🌌'}, 'M': {'Inverted Squares': '🅼', 'Luni Bubbles': 'Ⓜ', 'Wide': 'Ｍ', 'Tiny': 'ᴍ', 'Flip': 'W', 'Squares': 'M⃞', 'Mirror': 'M', 'Sub Script': 'ₘ', 'Super Script': 'ᴹ', 'Bent': 'Ɱ', 'Neon': 'ᗰ', 'Future Alien': 'ᘻ', 'Strike Throug': 'M̶', 'Tilde Strike Through': 'M̴', 'Slash Through': 'M̷', 'Underline': 'M̲', 'Double Underline': 'M̳', 'Creepify': 'Ṃ̷̹̪̠̜̱͍̓̈́̈́̀͛̓̓͛͜ͅ', 'Squiggle 1': '๓', 'Squiggle 2': 'M', 'Squiggle 3': 'ʍ', 'Squiggle 4': 'Ꮇ', 'Squiggle 5': 'ɱ', 'Squiggle 6': '๓', 'Bold': '𝐌', 'Round Squares': 'M⃣', 'Old English': '𝔐', 'Medieval': '𝕸', 'Cursive': '𝓜', 'Scriptify': '𝑀', 'Double Struck': '𝕄', 'Italic': '𝘔', 'Italic Bold': '𝙈', 'Mono Space': '𝙼', 'Upper Angles': 'M', 'Greek': 'м', 'Symbols': 'M', 'Currency': '₥', 'Asian Style': '爪', 'Asian Style 2': 'ﾶ', 'Thick Block Framed': '【M】', 'Diametric Angle Frame': '『M』', 'Wavy Joiner': '≋M≋', 'Dotty Joiner': '░M░', 'Kirby Hug': '(っ◔◡◔)っ ♥ M ♥', 'Vaporwave 1': 'Ｍ', 'Vaporwave 2': 'Ｍ', 'Vaporwave 3': '【\ufeffＭ】', 'Little Sparkles': '˜”*°•.˜”*°• M •°*”˜.•°*”˜', 'Weird Box': '[̲̅M]', 'Firework': 'M҉', 'Stinky': 'M̾', 'Bearts Between': 'M', 'Arrow Below': 'M͎', 'Cross Above Below': 'M͓̽', 'Wingdings': '💣︎', 'FullCrazy': '💚♟  爪  🎄♙', 'Crazy Random': '(¯´•._.• ｍ •._.•´¯)', 'Cute Random': '🐙  🎀  𝑀  🎀  🐙'}, 'N': {'Inverted Squares': '🅽', 'Luni Bubbles': 'Ⓝ', 'Wide': 'Ｎ', 'Tiny': 'ɴ', 'Flip': 'N', 'Squares': 'N⃞', 'Mirror': 'Ͷ', 'Sub Script': 'ₙ', 'Super Script': 'ᴺ', 'Bent': 'ហ', 'Neon': 'ᑎ', 'Future Alien': 'ᘉ', 'Strike Throug': 'N̶', 'Tilde Strike Through': 'N̴', 'Slash Through': 'N̷', 'Underline': 'N̲', 'Double Underline': 'N̳', 'Creepify': 'N̸̳̝̱͈̥̟͊̔͂̑͝', 'Squiggle 1': 'ภ', 'Squiggle 2': 'N', 'Squiggle 3': 'ռ', 'Squiggle 4': 'Ꮑ', 'Squiggle 5': 'ŋ', 'Squiggle 6': 'ຖ', 'Bold': '𝐍', 'Round Squares': 'N⃣', 'Old English': '𝔑', 'Medieval': '𝕹', 'Cursive': '𝓝', 'Scriptify': '𝒩', 'Double Struck': 'ℕ', 'Italic': '𝘕', 'Italic Bold': '𝙉', 'Mono Space': '𝙽', 'Upper Angles': 'П', 'Greek': 'η', 'Symbols': 'ñ', 'Currency': '₦', 'Asian Style': '几', 'Asian Style 2': '刀', 'Thick Block Framed': '【N】', 'Diametric Angle Frame': '『N』', 'Wavy Joiner': '≋N≋', 'Dotty Joiner': '░N░', 'Kirby Hug': '(っ◔◡◔)っ ♥ N ♥', 'Vaporwave 1': 'Ｎ', 'Vaporwave 2': 'Ｎ', 'Vaporwave 3': '【\ufeffＮ】', 'Little Sparkles': '˜”*°•.˜”*°• N •°*”˜.•°*”˜', 'Weird Box': '[̲̅N]', 'Firework': 'N҉', 'Stinky': 'N̾', 'Bearts Between': 'N', 'Arrow Below': 'N͎', 'Cross Above Below': 'N͓̽', 'Wingdings': '☠︎', 'FullCrazy': '🔥🍭  𝓝  👤✊', 'Crazy Random': '🐝👽  𝓃  💞♛', 'Cute Random': '🍒  🎀  𝒩  🎀  🍒'}, 'O': {'Inverted Squares': '🅾', 'Luni Bubbles': 'Ⓞ', 'Wide': 'Ｏ', 'Tiny': 'ᴏ', 'Flip': 'O', 'Squares': 'O⃞', 'Mirror': 'O', 'Sub Script': 'ₒ', 'Super Script': 'ᴼ', 'Bent': 'ට', 'Neon': 'O', 'Future Alien': 'ᓍ', 'Strike Throug': 'O̶', 'Tilde Strike Through': 'O̴', 'Slash Through': 'O̷', 'Underline': 'O̲', 'Double Underline': 'O̳', 'Creepify': 'O̷̤̍̌̄̕', 'Squiggle 1': '๏', 'Squiggle 2': 'O', 'Squiggle 3': 'օ', 'Squiggle 4': 'Ꭷ', 'Squiggle 5': 'ơ', 'Squiggle 6': '໐', 'Bold': '𝐎', 'Round Squares': 'O⃣', 'Old English': '𝔒', 'Medieval': '𝕺', 'Cursive': '𝓞', 'Scriptify': '𝒪', 'Double Struck': '𝕆', 'Italic': '𝘖', 'Italic Bold': '𝙊', 'Mono Space': '𝙾', 'Upper Angles': 'Ө', 'Greek': 'σ', 'Symbols': 'Ö', 'Currency': 'Ø', 'Asian Style': 'ㄖ', 'Asian Style 2': 'の', 'Thick Block Framed': '【O】', 'Diametric Angle Frame': '『O』', 'Wavy Joiner': '≋O≋', 'Dotty Joiner': '░O░', 'Kirby Hug': '(っ◔◡◔)っ ♥ O ♥', 'Vaporwave 1': 'Ｏ', 'Vaporwave 2': '♢', 'Vaporwave 3': '【\ufeffＯ】', 'Little Sparkles': '˜”*°•.˜”*°• O •°*”˜.•°*”˜', 'Weird Box': '[̲̅O]', 'Firework': 'O҉', 'Stinky': 'O̾', 'Bearts Between': 'O', 'Arrow Below': 'O͎', 'Cross Above Below': 'O͓̽', 'Wingdings': '⚐︎', 'FullCrazy': '♘✌  Ⓞ  🏆🐠', 'Crazy Random': '•]••´º´•» σ «•´º´••[•', 'Cute Random': '.•°¤*(¯`★´¯)*¤°   🎀  ♡  🎀   °¤*)¯´★`¯(*¤°•.'}, 'P': {'Inverted Squares': '🅿', 'Luni Bubbles': 'Ⓟ', 'Wide': 'Ｐ', 'Tiny': 'ᴘ', 'Flip': 'Ԁ', 'Squares': 'P⃞', 'Mirror': 'ꟼ', 'Sub Script': 'ₚ', 'Super Script': 'ᴾ', 'Bent': 'φ', 'Neon': 'ᑭ', 'Future Alien': 'ᕵ', 'Strike Throug': 'P̶', 'Tilde Strike Through': 'P̴', 'Slash Through': 'P̷', 'Underline': 'P̲', 'Double Underline': 'P̳', 'Creepify': 'P̵̲̣̱͎̲̀̔̾͜', 'Squiggle 1': 'ק', 'Squiggle 2': 'P', 'Squiggle 3': 'ք', 'Squiggle 4': 'Ꭾ', 'Squiggle 5': '℘', 'Squiggle 6': 'p', 'Bold': '𝐏', 'Round Squares': 'P⃣', 'Old English': '𝔓', 'Medieval': '𝕻', 'Cursive': '𝓟', 'Scriptify': '𝒫', 'Double Struck': 'ℙ', 'Italic': '𝘗', 'Italic Bold': '𝙋', 'Mono Space': '𝙿', 'Upper Angles': 'P', 'Greek': 'ρ', 'Symbols': 'þ', 'Currency': '₱', 'Asian Style': '卩', 'Asian Style 2': 'ｱ', 'Thick Block Framed': '【P】', 'Diametric Angle Frame': '『P』', 'Wavy Joiner': '≋P≋', 'Dotty Joiner': '░P░', 'Kirby Hug': '(っ◔◡◔)っ ♥ P ♥', 'Vaporwave 1': 'Ｐ', 'Vaporwave 2': 'Ｐ', 'Vaporwave 3': '【\ufeffＰ】', 'Little Sparkles': '˜”*°•.˜”*°• P •°*”˜.•°*”˜', 'Weird Box': '[̲̅P]', 'Firework': 'P҉', 'Stinky': 'P̾', 'Bearts Between': 'P', 'Arrow Below': 'P͎', 'Cross Above Below': 'P͓̽', 'Wingdings': '🏱︎', 'FullCrazy': '♦♚  ｐ  🍫🐤', 'Crazy Random': '`•.,¸¸,.•´¯ 𝓅 ¯`•.,¸¸,.•´', 'Cute Random': '🐤  🎀  𝒫  🎀  🐤'}, 'Q': {'Inverted Squares': '🆀', 'Luni Bubbles': 'Ⓠ', 'Wide': 'Ｑ', 'Tiny': 'Q', 'Flip': 'Ό', 'Squares': 'Q⃞', 'Mirror': 'Ọ', 'Sub Script': 'Q', 'Super Script': 'Q', 'Bent': 'Ҩ', 'Neon': 'ᑫ', 'Future Alien': 'ᕴ', 'Strike Throug': 'Q̶', 'Tilde Strike Through': 'Q̴', 'Slash Through': 'Q̷', 'Underline': 'Q̲', 'Double Underline': 'Q̳', 'Creepify': 'Q̵̯̭̲̼̯̺͕̤̒̈́͊̚', 'Squiggle 1': 'ợ', 'Squiggle 2': 'Q', 'Squiggle 3': 'զ', 'Squiggle 4': 'Ꭴ', 'Squiggle 5': 'զ', 'Squiggle 6': '๑', 'Bold': '𝐐', 'Round Squares': 'Q⃣', 'Old English': '𝔔', 'Medieval': '𝕼', 'Cursive': '𝓠', 'Scriptify': '𝒬', 'Double Struck': 'ℚ', 'Italic': '𝘘', 'Italic Bold': '𝙌', 'Mono Space': '𝚀', 'Upper Angles': 'Q', 'Greek': 'q', 'Symbols': 'Q', 'Currency': 'Q', 'Asian Style': 'Ɋ', 'Asian Style 2': 'ゐ', 'Thick Block Framed': '【Q】', 'Diametric Angle Frame': '『Q』', 'Wavy Joiner': '≋Q≋', 'Dotty Joiner': '░Q░', 'Kirby Hug': '(っ◔◡◔)っ ♥ Q ♥', 'Vaporwave 1': 'Ｑ', 'Vaporwave 2': 'Ｑ', 'Vaporwave 3': '【\ufeffＱ】', 'Little Sparkles': '˜”*°•.˜”*°• Q •°*”˜.•°*”˜', 'Weird Box': '[̲̅Q]', 'Firework': 'Q҉', 'Stinky': 'Q̾', 'Bearts Between': 'Q', 'Arrow Below': 'Q͎', 'Cross Above Below': 'Q͓̽', 'Wingdings': '✈︎', 'FullCrazy': '👹♙  ｑ  🐊😂', 'Crazy Random': '🍭♥  𝓺  ♟♢', 'Cute Random': ':★  🎀  𝒬  🎀  ★:'}, 'R': {'Inverted Squares': '🆁', 'Luni Bubbles': 'Ⓡ', 'Wide': 'Ｒ', 'Tiny': 'ʀ', 'Flip': 'ᴚ', 'Squares': 'R⃞', 'Mirror': 'Я', 'Sub Script': 'ᵣ', 'Super Script': 'ᴿ', 'Bent': 'འ', 'Neon': 'ᖇ', 'Future Alien': 'ᖇ', 'Strike Throug': 'R̶', 'Tilde Strike Through': 'R̴', 'Slash Through': 'R̷', 'Underline': 'R̲', 'Double Underline': 'R̳', 'Creepify': 'R̶̡̪̥̟̘͇͍͕͙͂̓́̑̿̽̿ͅ', 'Squiggle 1': 'г', 'Squiggle 2': 'R', 'Squiggle 3': 'ʀ', 'Squiggle 4': 'Ꮢ', 'Squiggle 5': 'ཞ', 'Squiggle 6': 'r', 'Bold': '𝐑', 'Round Squares': 'R⃣', 'Old English': 'ℜ', 'Medieval': '𝕽', 'Cursive': '𝓡', 'Scriptify': '𝑅', 'Double Struck': 'ℝ', 'Italic': '𝘙', 'Italic Bold': '𝙍', 'Mono Space': '𝚁', 'Upper Angles': 'Я', 'Greek': 'я', 'Symbols': 'R', 'Currency': 'Ɽ', 'Asian Style': '尺', 'Asian Style 2': '尺', 'Thick Block Framed': '【R】', 'Diametric Angle Frame': '『R』', 'Wavy Joiner': '≋R≋', 'Dotty Joiner': '░R░', 'Kirby Hug': '(っ◔◡◔)っ ♥ R ♥', 'Vaporwave 1': 'Ｒ', 'Vaporwave 2': 'Ｒ', 'Vaporwave 3': '【\ufeffＲ】', 'Little Sparkles': '˜”*°•.˜”*°• R •°*”˜.•°*”˜', 'Weird Box': '[̲̅R]', 'Firework': 'R҉', 'Stinky': 'R̾', 'Bearts Between': 'R', 'Arrow Below': 'R͎', 'Cross Above Below': 'R͓̽', 'Wingdings': '☼︎', 'FullCrazy': '🍮🎃  я  ☯🎃', 'Crazy Random': '🎈ൠ  Ｒ  🐜💚', 'Cute Random': '★⚛  🎀  𝑅  🎀  ⚛★'}, 'S': {'Inverted Squares': '🆂', 'Luni Bubbles': 'Ⓢ', 'Wide': 'Ｓ', 'Tiny': 'ꜱ', 'Flip': 'S', 'Squares': 'S⃞', 'Mirror': 'Ꙅ', 'Sub Script': 'ₛ', 'Super Script': 'ˢ', 'Bent': 'Ϛ', 'Neon': 'ᔕ', 'Future Alien': 'S', 'Strike Throug': 'S̶', 'Tilde Strike Through': 'S̴', 'Slash Through': 'S̷', 'Underline': 'S̲', 'Double Underline': 'S̳', 'Creepify': 'Ś̸̬̄̐̓̒̂͑̓', 'Squiggle 1': 'ร', 'Squiggle 2': 'S', 'Squiggle 3': 'ֆ', 'Squiggle 4': 'Ꮥ', 'Squiggle 5': 'ʂ', 'Squiggle 6': 'Ş', 'Bold': '𝐒', 'Round Squares': 'S⃣', 'Old English': '𝔖', 'Medieval': '𝕾', 'Cursive': '𝓢', 'Scriptify': '𝒮', 'Double Struck': '𝕊', 'Italic': '𝘚', 'Italic Bold': '𝙎', 'Mono Space': '𝚂', 'Upper Angles': 'Ƨ', 'Greek': 'ѕ', 'Symbols': '§', 'Currency': '₴', 'Asian Style': '丂', 'Asian Style 2': '丂', 'Thick Block Framed': '【S】', 'Diametric Angle Frame': '『S』', 'Wavy Joiner': '≋S≋', 'Dotty Joiner': '░S░', 'Kirby Hug': '(っ◔◡◔)っ ♥ S ♥', 'Vaporwave 1': 'Ｓ', 'Vaporwave 2': 'Ｓ', 'Vaporwave 3': '【\ufeffＳ】', 'Little Sparkles': '˜”*°•.˜”*°• S •°*”˜.•°*”˜', 'Weird Box': '[̲̅S]', 'Firework': 'S҉', 'Stinky': 'S̾', 'Bearts Between': 'S', 'Arrow Below': 'S͎', 'Cross Above Below': 'S͓̽', 'Wingdings': '💧︎', 'FullCrazy': '💥☹  ѕ  🐳👻', 'Crazy Random': '🎯🎈  𝔰  ☯🍟', 'Cute Random': '🐎  🎀  𝒮  🎀  🐎'}, 'T': {'Inverted Squares': '🆃', 'Luni Bubbles': 'Ⓣ', 'Wide': 'Ｔ', 'Tiny': 'ᴛ', 'Flip': '⊥', 'Squares': 'T⃞', 'Mirror': 'T', 'Sub Script': 'ₜ', 'Super Script': 'ᵀ', 'Bent': 'Ͳ', 'Neon': 'T', 'Future Alien': 'ᖶ', 'Strike Throug': 'T̶', 'Tilde Strike Through': 'T̴', 'Slash Through': 'T̷', 'Underline': 'T̲', 'Double Underline': 'T̳', 'Creepify': 'Ț̸̨̥̝̻̑̉͊̕', 'Squiggle 1': 'Շ', 'Squiggle 2': 'T', 'Squiggle 3': 'ȶ', 'Squiggle 4': 'Ꮦ', 'Squiggle 5': 'ɬ', 'Squiggle 6': 't', 'Bold': '𝐓', 'Round Squares': 'T⃣', 'Old English': '𝔗', 'Medieval': '𝕿', 'Cursive': '𝓣', 'Scriptify': '𝒯', 'Double Struck': '𝕋', 'Italic': '𝘛', 'Italic Bold': '𝙏', 'Mono Space': '𝚃', 'Upper Angles': 'Ƭ', 'Greek': 'т', 'Symbols': '†', 'Currency': '₮', 'Asian Style': 'ㄒ', 'Asian Style 2': 'ｲ', 'Thick Block Framed': '【T】', 'Diametric Angle Frame': '『T』', 'Wavy Joiner': '≋T≋', 'Dotty Joiner': '░T░', 'Kirby Hug': '(っ◔◡◔)っ ♥ T ♥', 'Vaporwave 1': 'Ｔ', 'Vaporwave 2': 'Ｔ', 'Vaporwave 3': '【\ufeffＴ】', 'Little Sparkles': '˜”*°•.˜”*°• T •°*”˜.•°*”˜', 'Weird Box': '[̲̅T]', 'Firework': 'T҉', 'Stinky': 'T̾', 'Bearts Between': 'T', 'Arrow Below': 'T͎', 'Cross Above Below': 'T͓̽', 'Wingdings': '❄︎', 'FullCrazy': '🍫🐻  𝐭  💣💋', 'Crazy Random': '👍🐯  ⓣ  👮☟', 'Cute Random': '¸„.-•~¹°”ˆ˜¨   🎀  𝒯  🎀   ¨˜ˆ”°¹~•-.„¸'}, 'U': {'Inverted Squares': '🆄', 'Luni Bubbles': 'Ⓤ', 'Wide': 'Ｕ', 'Tiny': 'ᴜ', 'Flip': '∩', 'Squares': 'U⃞', 'Mirror': 'U', 'Sub Script': 'ᵤ', 'Super Script': 'ᵁ', 'Bent': 'Ա', 'Neon': 'ᑌ', 'Future Alien': 'ᑘ', 'Strike Throug': 'U̶', 'Tilde Strike Through': 'U̴', 'Slash Through': 'U̷', 'Underline': 'U̲', 'Double Underline': 'U̳', 'Creepify': 'U̵̹̰̣̗̦̠̳͂̋̅̒͋̆̋̉͂͝', 'Squiggle 1': 'ย', 'Squiggle 2': 'U', 'Squiggle 3': 'ʊ', 'Squiggle 4': 'Ꮼ', 'Squiggle 5': 'ų', 'Squiggle 6': 'น', 'Bold': '𝐔', 'Round Squares': 'U⃣', 'Old English': '𝔘', 'Medieval': '𝖀', 'Cursive': '𝓤', 'Scriptify': '𝒰', 'Double Struck': '𝕌', 'Italic': '𝘜', 'Italic Bold': '𝙐', 'Mono Space': '𝚄', 'Upper Angles': 'Ц', 'Greek': 'υ', 'Symbols': 'Ú', 'Currency': 'Ʉ', 'Asian Style': 'ㄩ', 'Asian Style 2': 'ひ', 'Thick Block Framed': '【U】', 'Diametric Angle Frame': '『U』', 'Wavy Joiner': '≋U≋', 'Dotty Joiner': '░U░', 'Kirby Hug': '(っ◔◡◔)っ ♥ U ♥', 'Vaporwave 1': 'Ｕ', 'Vaporwave 2': 'Ｕ', 'Vaporwave 3': '【\ufeffＵ】', 'Little Sparkles': '˜”*°•.˜”*°• U •°*”˜.•°*”˜', 'Weird Box': '[̲̅U]', 'Firework': 'U҉', 'Stinky': 'U̾', 'Bearts Between': 'U', 'Arrow Below': 'U͎', 'Cross Above Below': 'U͓̽', 'Wingdings': '🕆︎', 'FullCrazy': '🐚♘  𝓊  ♛😎', 'Crazy Random': '🐉💢  υ  ♠🎯', 'Cute Random': '★✶  🎀  𝒰  🎀  ✶★'}, 'V': {'Inverted Squares': '🆅', 'Luni Bubbles': 'Ⓥ', 'Wide': 'Ｖ', 'Tiny': 'ᴠ', 'Flip': 'Λ', 'Squares': 'V⃞', 'Mirror': 'V', 'Sub Script': 'ᵥ', 'Super Script': 'ⱽ', 'Bent': 'Ỽ', 'Neon': 'ᐯ', 'Future Alien': 'ᐺ', 'Strike Throug': 'V̶', 'Tilde Strike Through': 'V̴', 'Slash Through': 'V̷', 'Underline': 'V̲', 'Double Underline': 'V̳', 'Creepify': 'V̶̰̺̰̬̒̄͒̂̿͗͐̆̎̾', 'Squiggle 1': 'ש', 'Squiggle 2': 'V', 'Squiggle 3': 'ʋ', 'Squiggle 4': 'Ꮙ', 'Squiggle 5': '۷', 'Squiggle 6': 'ง', 'Bold': '𝐕', 'Round Squares': 'V⃣', 'Old English': '𝔙', 'Medieval': '𝖁', 'Cursive': '𝓥', 'Scriptify': '𝒱', 'Double Struck': '𝕍', 'Italic': '𝘝', 'Italic Bold': '𝙑', 'Mono Space': '𝚅', 'Upper Angles': 'V', 'Greek': 'ν', 'Symbols': 'V', 'Currency': 'V', 'Asian Style': 'ᐯ', 'Asian Style 2': '√', 'Thick Block Framed': '【V】', 'Diametric Angle Frame': '『V』', 'Wavy Joiner': '≋V≋', 'Dotty Joiner': '░V░', 'Kirby Hug': '(っ◔◡◔)っ ♥ V ♥', 'Vaporwave 1': 'Ｖ', 'Vaporwave 2': 'Ｖ', 'Vaporwave 3': '【\ufeffＶ】', 'Little Sparkles': '˜”*°•.˜”*°• V •°*”˜.•°*”˜', 'Weird Box': '[̲̅V]', 'Firework': 'V҉', 'Stinky': 'V̾', 'Bearts Between': 'V', 'Arrow Below': 'V͎', 'Cross Above Below': 'V͓̽', 'Wingdings': '✞︎', 'FullCrazy': '♗🐯  𝕧  👍🎅', 'Crazy Random': '👤♡  𝓋  🎉🐍', 'Cute Random': '🍪 ⋆ 🍉  🎀  𝒱  🎀  🍉 ⋆ 🍪'}, 'W': {'Inverted Squares': '🆆', 'Luni Bubbles': 'Ⓦ', 'Wide': 'Ｗ', 'Tiny': 'ᴡ', 'Flip': 'M', 'Squares': 'W⃞', 'Mirror': 'W', 'Sub Script': 'W', 'Super Script': 'ᵂ', 'Bent': 'చ', 'Neon': 'ᗯ', 'Future Alien': 'ᘺ', 'Strike Throug': 'W̶', 'Tilde Strike Through': 'W̴', 'Slash Through': 'W̷', 'Underline': 'W̲', 'Double Underline': 'W̳', 'Creepify': 'Ŵ̷̛̘̣̅̆', 'Squiggle 1': 'ฬ', 'Squiggle 2': 'W', 'Squiggle 3': 'ա', 'Squiggle 4': 'Ꮗ', 'Squiggle 5': 'ῳ', 'Squiggle 6': 'ຟ', 'Bold': '𝐖', 'Round Squares': 'W⃣', 'Old English': '𝔚', 'Medieval': '𝖂', 'Cursive': '𝓦', 'Scriptify': '𝒲', 'Double Struck': '𝕎', 'Italic': '𝘞', 'Italic Bold': '𝙒', 'Mono Space': '𝚆', 'Upper Angles': 'Щ', 'Greek': 'ω', 'Symbols': 'W', 'Currency': '₩', 'Asian Style': '山', 'Asian Style 2': 'W', 'Thick Block Framed': '【W】', 'Diametric Angle Frame': '『W』', 'Wavy Joiner': '≋W≋', 'Dotty Joiner': '░W░', 'Kirby Hug': '(っ◔◡◔)っ ♥ W ♥', 'Vaporwave 1': 'Ｗ', 'Vaporwave 2': 'Ｗ', 'Vaporwave 3': '【\ufeffＷ】', 'Little Sparkles': '˜”*°•.˜”*°• W •°*”˜.•°*”˜', 'Weird Box': '[̲̅W]', 'Firework': 'W҉', 'Stinky': 'W̾', 'Bearts Between': 'W', 'Arrow Below': 'W͎', 'Cross Above Below': 'W͓̽', 'Wingdings': '🕈︎', 'FullCrazy': '💀👊  ώ  🐙🏆', 'Crazy Random': '💘🍫  𝐖  🐨🍟', 'Cute Random': '･ﾟ✶  🎀  𝒲  🎀  ✶ﾟ･'}, 'X': {'Inverted Squares': '🆇', 'Luni Bubbles': 'Ⓧ', 'Wide': 'Ｘ', 'Tiny': 'x', 'Flip': 'X', 'Squares': 'X⃞', 'Mirror': 'X', 'Sub Script': 'ₓ', 'Super Script': 'ˣ', 'Bent': 'ჯ', 'Neon': '᙭', 'Future Alien': '᙭', 'Strike Throug': 'X̶', 'Tilde Strike Through': 'X̴', 'Slash Through': 'X̷', 'Underline': 'X̲', 'Double Underline': 'X̳', 'Creepify': 'X̵̱́͛̊̂', 'Squiggle 1': 'א', 'Squiggle 2': 'X', 'Squiggle 3': 'Ӽ', 'Squiggle 4': 'ጀ', 'Squiggle 5': 'ҳ', 'Squiggle 6': 'x', 'Bold': '𝐗', 'Round Squares': 'X⃣', 'Old English': '𝔛', 'Medieval': '𝖃', 'Cursive': '𝓧', 'Scriptify': '𝒳', 'Double Struck': '𝕏', 'Italic': '𝘟', 'Italic Bold': '𝙓', 'Mono Space': '𝚇', 'Upper Angles': 'X', 'Greek': 'χ', 'Symbols': '×', 'Currency': 'Ӿ', 'Asian Style': '乂', 'Asian Style 2': 'ﾒ', 'Thick Block Framed': '【X】', 'Diametric Angle Frame': '『X』', 'Wavy Joiner': '≋X≋', 'Dotty Joiner': '░X░', 'Kirby Hug': '(っ◔◡◔)っ ♥ X ♥', 'Vaporwave 1': 'Ｘ', 'Vaporwave 2': 'Ｘ', 'Vaporwave 3': '【\ufeffＸ】', 'Little Sparkles': '˜”*°•.˜”*°• X •°*”˜.•°*”˜', 'Weird Box': '[̲̅X]', 'Firework': 'X҉', 'Stinky': 'X̾', 'Bearts Between': 'X', 'Arrow Below': 'X͎', 'Cross Above Below': 'X͓̽', 'Wingdings': '✠︎', 'FullCrazy': '♗💚  𝓧  🐜🎈', 'Crazy Random': '¸„.-•~¹°”ˆ˜¨ 𝐱 ¨˜ˆ”°¹~•-.„¸', 'Cute Random': '°°  🎀  𝒳  🎀  °°'}, 'Y': {'Inverted Squares': '🆈', 'Luni Bubbles': 'Ⓨ', 'Wide': 'Ｙ', 'Tiny': 'ʏ', 'Flip': '⅄', 'Squares': 'Y⃞', 'Mirror': 'Y', 'Sub Script': 'Y', 'Super Script': 'ʸ', 'Bent': 'Ӌ', 'Neon': 'Y', 'Future Alien': 'ᖻ', 'Strike Throug': 'Y̶', 'Tilde Strike Through': 'Y̴', 'Slash Through': 'Y̷', 'Underline': 'Y̲', 'Double Underline': 'Y̳', 'Creepify': 'Y̶̢̦̲̠̦͊̀̓̄̾͠', 'Squiggle 1': 'ץ', 'Squiggle 2': 'Y', 'Squiggle 3': 'ʏ', 'Squiggle 4': 'Ꭹ', 'Squiggle 5': 'ყ', 'Squiggle 6': 'ฯ', 'Bold': '𝐘', 'Round Squares': 'Y⃣', 'Old English': '𝔜', 'Medieval': '𝖄', 'Cursive': '𝓨', 'Scriptify': '𝒴', 'Double Struck': '𝕐', 'Italic': '𝘠', 'Italic Bold': '𝙔', 'Mono Space': '𝚈', 'Upper Angles': 'Y', 'Greek': 'у', 'Symbols': '¥', 'Currency': 'Ɏ', 'Asian Style': 'ㄚ', 'Asian Style 2': 'ﾘ', 'Thick Block Framed': '【Y】', 'Diametric Angle Frame': '『Y』', 'Wavy Joiner': '≋Y≋', 'Dotty Joiner': '░Y░', 'Kirby Hug': '(っ◔◡◔)っ ♥ Y ♥', 'Vaporwave 1': 'Ｙ', 'Vaporwave 2': 'Ｙ', 'Vaporwave 3': '【\ufeffＹ】', 'Little Sparkles': '˜”*°•.˜”*°• Y •°*”˜.•°*”˜', 'Weird Box': '[̲̅Y]', 'Firework': 'Y҉', 'Stinky': 'Y̾', 'Bearts Between': 'Y', 'Arrow Below': 'Y͎', 'Cross Above Below': 'Y͓̽', 'Wingdings': '✡︎', 'FullCrazy': '✋🍬  𝔂  ♕🐼', 'Crazy Random': '•°¯`•• ¥ ••´¯°•', 'Cute Random': '🐞 ⋆ 🐯  🎀  𝒴  🎀  🐯 ⋆ 🐞'}, 'Z': {'Inverted Squares': '🆉', 'Luni Bubbles': 'Ⓩ', 'Wide': 'Ｚ', 'Tiny': 'ᴢ', 'Flip': 'Z', 'Squares': 'Z⃞', 'Mirror': 'Ƹ', 'Sub Script': 'Z', 'Super Script': 'ᶻ', 'Bent': 'ɀ', 'Neon': 'ᘔ', 'Future Alien': 'ᗱ', 'Strike Throug': 'Z̶', 'Tilde Strike Through': 'Z̴', 'Slash Through': 'Z̷', 'Underline': 'Z̲', 'Double Underline': 'Z̳', 'Creepify': 'Z̵̡̖̪͕̩̹͉̲̓̿̓̊͝͠', 'Squiggle 1': 'չ', 'Squiggle 2': 'Z', 'Squiggle 3': 'ʐ', 'Squiggle 4': 'ፚ', 'Squiggle 5': 'ʑ', 'Squiggle 6': 'ຊ', 'Bold': '𝐙', 'Round Squares': 'Z⃣', 'Old English': 'ℨ', 'Medieval': '𝖅', 'Cursive': '𝓩', 'Scriptify': '𝒵', 'Double Struck': 'ℤ', 'Italic': '𝘡', 'Italic Bold': '𝙕', 'Mono Space': '𝚉', 'Upper Angles': 'Z', 'Greek': 'z', 'Symbols': 'Z', 'Currency': 'Ⱬ', 'Asian Style': '乙', 'Asian Style 2': '乙', 'Thick Block Framed': '【Z】', 'Diametric Angle Frame': '『Z』', 'Wavy Joiner': '≋Z≋', 'Dotty Joiner': '░Z░', 'Kirby Hug': '(っ◔◡◔)っ ♥ Z ♥', 'Vaporwave 1': 'Ｚ', 'Vaporwave 2': 'Ｚ', 'Vaporwave 3': '【\ufeffＺ】', 'Little Sparkles': '˜”*°•.˜”*°• Z •°*”˜.•°*”˜', 'Weird Box': '[̲̅Z]', 'Firework': 'Z҉', 'Stinky': 'Z̾', 'Bearts Between': 'Z', 'Arrow Below': 'Z͎', 'Cross Above Below': 'Z͓̽', 'Wingdings': '☪︎', 'FullCrazy': '♤☜  z  ♖🐉', 'Crazy Random': '☞♛  ž  ♔♖', 'Cute Random': '•._.••´¯``•.¸¸.•`   🎀  𝒵  🎀   `•.¸¸.•``¯´••._.•'}}

module.exports = fonts;
},{}],14:[function(require,module,exports){
var fonts = require('./font_object')
const font = require("unifont");
var option = {
    font: "Bubble",
    style: ""
}
var text = font("Its a example", option);

//console.log(text)
},{"./font_object":13,"unifont":5}],15:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[14]);
