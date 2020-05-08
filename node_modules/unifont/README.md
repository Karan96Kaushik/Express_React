
# UniFont
[![NPM](https://nodei.co/npm/unifont.png)](https://www.npmjs.org/package/unifont)

[![npm version](https://img.shields.io/npm/v/unifont.svg?style=flat-square)](https://www.npmjs.org/package/unifont)
[![Build Status](https://travis-ci.org/nepsho/unifont.svg?branch=master)](https://travis-ci.org/nepsho/unifont)
[![npm license](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=informational)](https://github.com/nepsho/unifont/blob/master/LICENSE)
[![npm repository](https://img.shields.io/static/v1.svg?label=Repository&message=GitHub&color=yellow)](https://github.com/nepsho/unifont)
[![npm author](https://img.shields.io/static/v1.svg?label=Author&message=bcrazydreamer&color=success)](https://www.npmjs.com/~bcrazydreamer)

>**unifont:** NodeJs fonts api that support multiple fonts styles in NodeJs
## Features
- Multiple CMD fonts.
- Can also use these fonts for other purpose also.

## Support
>All node versions

## Installing
[![NPM](https://nodei.co/npm/unifont.png?mini=true)](https://www.npmjs.org/package/unifont)

**Using npm:**
```bash
$ npm install unifont
```

**Using bower:**

```bash
$ bower install unifont
```

**Using yarn:**

```bash
$ yarn add unifont
```

## UniFont
```
 font([text],[option]);
```
> Where as
>  **[text]** should be *string*.
> **[option]** can be *Object* and *String* only or ever *null* or *undefined*.

**Sample CMD Output (Cursive font)**
![capStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/cursive_sample_example.png)

## Option
Option can be null/undefined in case null/undefined it will not change any thing. It can be string but when its a sting then it must be a font name.
In case of string it will consider that as font and create **option.font** (Where option will be object)

## option.font
option.font = normalEn | BorderBlock | DotBlock | GaintBold | Btalic | GaintItalic | Alphol | Bubble | BubbleFill | Cursive
You can use any one one font named above.

## Available Fonts (option.font)
> **normalEn:** Simple alphabets. 
![normalEnExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/normalEn_example.png)
>
> **SolidBlock:**
>![SolidBlockExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/SolidBlock_example.png)
>  
> **BorderBlock:**
>![BorderBlockExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/BorderBlock_example.png)
> 
> **DotBlock:**
>![DotBlockExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/DotBlock_example.png)
> 
> **GaintBold:**
>![GaintBoldExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/GaintBold_example.png)
> 
> **Btalic:**
>![BtalicExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/Btalic_example.png)
> 
> **GaintItalic:**
>![GaintItalicExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/GaintItalic_example.png)
> 
>**Alphol:**
>![AlpholExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/Alphol_example.png)
> 
>**Bubble:**
>![BubbleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/Bubble_example.png)
> 
> **BubbleFill:**
>![BubbleFillExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/BubbleFill_example.png)
> 
> **Cursive:**
>![CursiveExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/Cursive_example.png)


## Available Style (option.style)
>**Bold:**
>![BoldStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/bold_style_examle.png )
>  
>**Italic:**
>![ItalicStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/italic_style_eample.png )
>
>**Underline:**
>![UnderlineStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/underline_example.png)
>
>**upr:**
>(Its used to convert letters in lowercase with font)
>![uprStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/upr_style_example.png)
>
>**lwr:**
>(Its used to convert letters in uppercase with font)
>![lwrStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/lwr_style_example.png)
>
>**cap**
>(Its used to capitalize first letter with font)
>![capStyleExample](https://raw.githubusercontent.com/nepsho/nepsho.github.io/master/lib/img/unifont/cap_style_example.png)
>

## Examples

```js
>>const font = require("unifont");
```
```js
>> var option = {
... 	font : "Bubble",
... 	style : ""
... }
>>var text = font("Its a example",option);
>>console.log(text)
>>🅘🅣🅢  🅐  🅔🅧🅐🅜🅟🅛🅔
```
## licence
MIT [licence](https://opensource.org/licenses/MIT)

## Author
@BCrazyDreamer
