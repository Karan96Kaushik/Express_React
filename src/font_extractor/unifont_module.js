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
},{"./alpha/EN":7,"./helper/Constants":9,"./helper/Range":10,"./helper/Validation":11,"./util/Style":12,"_process":14,"bvalid":1}],7:[function(require,module,exports){
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
},{"../helper/Constants":9,"_process":14,"bvalid":1}],12:[function(require,module,exports){
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
//var fonts = require('./font_object')
const font = require("unifont");
//var text = font("Its a example", option);

//console.log(text)
},{"unifont":5}],14:[function(require,module,exports){
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

},{}]},{},[13]);
