/**
 * @namespace Util
 * @summary General purpose functions 
 */

const Util = (function () {
  'use strict';
  /**
   * @summary Convert a string to a number array
   * @memberof Util
   * @param {String} hexString 
   * @returns {Number[]}
   */
  function getByteArrayFromHexString(hexString) {
    var bytes = [];
    for (var i = 0; i < hexString.length; i += 2) {
      bytes.push(parseInt(hexString[i] + hexString[i + 1], 16));
    }
    return bytes;
  }

  /**
   * @summary Convert a 8-bit number to its hex value displayed in ASCII form
   * @memberof Util
   * @param {Number} h 
   * @returns {String} ASCII character that represents number (0-F)
   */
  function hexToAscii(h) {
    var i = parseInt(h, 16);
    if (i === 0) {
      return "";
    } else return String.fromCharCode(i);
  }

  /**
   * @summary Convert a string to a number
   * @memberof Util
   * @desc Treats each character of the string as a hex value when converting
   * @param {Number} h 
   * @param {Boolean} signed 
   */
  function hexStringToInt(h, signed) {
    var n = parseInt(h, 16);
    if (signed) {
      var max = Math.pow(2, h.length * 4); // each hex digit is 4 bits
      if (n > ((max / 2) - 1)) {
        n = n - max;
      }
    }
    return n;
  }

  /**
   * @summary Check if IP address is valid 
   * @memberof Util
   * {@link www.w3resource.com/javascript/form/ip-address-validation.php}
   * @param {String} ipaddress 
   * @return true if valid, false if invalid
   */
  function isIpValid(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
      return (true);
    }
    return (false);
  }

  function isIp6Valid(ipv6) {
    if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(ipv6)) {
        return true;
    } else {
        return false;
    }
  }
  /**
   * @summary Convert hex to IP address string
   * @memberof Util
   * @param {String} h - Hex in string format
   * @returns {String} IP address in x.x.x.x format
   */
  function hexStringToIP(h) {
    var ip = "";
    for (var i = 0; i < h.length; i += 2) {
      ip += parseInt(h[i] + h[i + 1], 16);
      if (i < h.length - 2) {
        ip += ".";
      }
    }
    return ip;
  }
  
  function hexStringToIP6(h) {
    var ip = "";
    for (var i = 0; i < h.length; i += 4) {
      ip += h.substr(i,4);
      if (i < h.length - 4) {
        ip += ":";
      }
    }
    return ip;
  }


  /**
   * @summary Convert a string representation of IP address to hex
   * @memberof Util
   * @param {String} ip 
   * @returns {String} IP address in HEX form (ascii encoded)
   */
  function ipToHex(ip) {
    var hexIp = "";
    var temp = "";
    var bytes = 4;
    for (var i = 0; i < ip.length && bytes > 0; i += 1) {
      if (ip[i] == "." || i == (ip.length - 1)) {
        if (ip[i] !== ".") {
          temp += ip[i];
        }
        hexIp += numberToByteString(parseInt(temp), 1);
        temp = "";
        bytes--;
      } else {
        temp += ip[i];
      }
    }
    return hexIp;
  }

  function ip6ToHex(ip) {
    var hexIp = "";
    var temp = "";
    var n = 8;
    for (var i = 0; i < ip.length && n > 0; i += 1) {
      if (ip[i] == ":" || i == (ip.length - 1)) {
        if (ip[i] !== ":") {
          temp += ip[i];
        }
        hexIp += temp;
        temp = "";
        n--;
      } else {
        temp += ip[i];
      }
    }
    return hexIp;
  }

  /**
   * @summary Converts a number value to a human-readable IP address
   * @memberof Util
   * @param {Number} i 
   * @returns {String} IP address in x.x.x.x format
   */
  function intToIP(i) {
    console.log("Converting IP from: " + i);
    var p1 = i & 255;
    var p2 = ((i >> 8) & 255);
    var p3 = ((i >> 16) & 255);
    var p4 = ((i >> 24) & 255);
    return p4 + "." + p3 + "." + p2 + "." + p1;
  }

  /**
   * @summary Check how many nibbles a number has
   * @memberof Util
   * @param {Number} i - Value to check
   * @return {Number} Number of nibbles
   */
  function getNumberOfNibbles(i) {
    var n = 0;
    if (i == 0) {
      return 1;
    } else {
      while (i > 0) {
        i = i >> 4;
        n++;
      }
      return n;
    }
  }

  /**
   * @summary Convert a number to a string in HEX form
   * @memberof Util
   * @param {Number} i - Number to convert
   * @param {Number} numberOfBytes - Bytes to fill in the string
   * @param {Boolean} signed - True if number is signed
   * @returns {String} - Number encoded in HEX form
   */
  function numberToByteString(i, numberOfBytes, signed) {
    var nibblesNeeded = numberOfBytes * 2;

    if (i < 0) {
      if(numberOfBytes === 4)
        i = (0xFFFFFFFF) + i + 1;
      else if ( numberOfBytes === 1)
        i = (0xFF) + i +1;
      else if(numberOfBytes === 2)
        i = (0xFFFF) + i + 1; 
    }
      
    var padding = "";
    var hex = Number(i).toString(16).toUpperCase();
    while (hex.length < (numberOfBytes * 2)) {
      hex = "0" + hex;
    }
    
    return hex;
  }

  /**
   * @summary Check if a bit is set
   * @memberof Util
   * @param {Number} value - Value to check
   * @param {Number} bitIndex - Bit position to check
   * @returns {Boolean} - True if set, false if not set
   */
  function checkBit(value, bitValue) {
  //  var mask = 1 << (bitIndex);
    if ((value & bitValue) != 0) return true;
    else return false;
  }

  /**
   * @summary Check if the hex string is word aligned (2 bytes)
   * @memberof Util
   * @param {String} h - Hex string to check for alignment
   * @return {Boolean} - True if aligned, false if not aligned
   */
  function isWordAligned(h) {
    if ((h.length) % (4) === 0) return true;
    else {
      return false;
    }
  }

  /**
   * @typedef PadResult
   * @property {Number} nibs - Number of nibs added
   * @property {String} hex - Hex in string form
   */
  /**
   * @summary Word align the string (character treated as hex)
   * @memberof Util
   * @desc Word is 2 Bytes = 16 bits = 4 hex characters
   * @param {String} h - Hex string to align
   * @returns {PadResult} 
   */
  function addZeroPaddingToAlign(h) {
    // 4 nibbles = 2 bytes
    var remainder = h.length % 4;
    var padsNeeded = 4 - remainder;
    let i = 0;
    for (i = 0; i < padsNeeded; i++) {
      h += "0";
    }

    return {
      nibs: i,
      hex: h
    };
  }

  /**
   * @summary Prints a space between every 8 characters
   * @memberof Util
   * @desc Meant for string represented hex. 4bits * 8 = 32 bits
   * @param {String} s - string to print
   */
  function fmtAndPrint(s) {
    if(!s) 
      return;
      
    let tmppp = s;
    let indy = 0;
    let holder = "";
    for (let ind = 0; ind < tmppp.length; ind++) {
      if (indy >= 8) {
        holder += " ";
        indy = 0;
      }
      indy++;
      holder += tmppp[ind];
    }

    console.log(holder, '\n\n');
  }

  /**
   * @summary Get the value of that matches the enumeration name
   * @memberof Util
   * @param {String} name 
   * @param {Enumeration[]} enumeration 
   * @returns {Number} if valid
   * @returns {Undefined} if invalid
   */
  function getEnumValueFromName(name, enumeration) {
    for (var i = 0; i < enumeration.length; i++) {
      if (name === enumeration[i].name) {
        return enumeration[i].value;
      }
    }
    return undefined;
  }

  /**
   * @summary Convert hex to a floating point number
   * @memberof Util
   * @param {String} h - Hex to convert
   * @param {Boolean} signed - True if the value is signed
   * @returns {Number} Converted number
   */
  function hexStringToFloat(h, signed) {
    if (h === "00000000" || h === "0x00000000") {
      return 0;
    } else {
      var n = hexStringToInt(h, false);
      var f = 0;
      var mantissa = 0;
      var frac = 1;
      var sign = (n & (1 << 31)) ? -1 : 1;
      var exponent = (n & (0xFF << 23));
      var exponent_converted = -127;
      exponent = exponent >> 23;
      for (var i = 0; i < 8; i++) {
        exponent_converted += ((exponent & (1 << i)) ? Math.pow(2, i) : 0);
      }
      mantissa = (n & (0x7FFFFF));
      for (var i = 22; i >= 0; i--) {
        if (mantissa & (1 << i)) {
          frac += Math.pow(2, -1 * (23 - i));
        }
      }
      f = sign * Math.pow(2, exponent_converted) * (frac);
      return f;
    }
  }

  /**
   * @summary Convert a number to its bit encoded form in string format
   * @memberof Util
   * @param {Number} number - Number to convert
   * @param {Number} numberOfBits - Number of bits to create
   * @returns {String} Number in bit form (with padding)
   */
  function numberToBitString(number, numberOfBits) {
    var pad = "";
    var numString = "";
    numString = number.toString(2);
    for (var i = 0; i < numberOfBits; i++) {
      pad += "0";
    }
    return (pad + numString).substring(numString.length);
  }

  /**
   * @summary Convert a float to hex string
   * @memberof Util
   * {@link http://sandbox.mc.edu/~bennet/cs110/flt/dtof.html}
   * @param {Number} f - Float to convert to hex
   * @returns {String} hex string that represents the float value
   */
  function numberToFloatHexString(f) {
    if (f === 0) {
      return "00000000";
    } else {
      var signBit = "0";
      if (f < 0) {
        signBit = "1"; // represents a negative number
      }

      var integral = getIntegralBitsFromNumber(f);
      var frac = getFractionalBitsFromNumber(f);
      var concat = concatenateIntegralWithFractional(integral, frac);
      var finalObj = normalizeConcatenation(concat);
      var exponent = numberToBitString(finalObj.exponent + 127, 8);
      var hex = "";
      hex = signBit + exponent + finalObj.mantissa;
      var numericalValue = parseInt((signBit + exponent + finalObj.mantissa), 2);
      return numberToByteString(numericalValue, 4, false);
    }
  }

  /**
   * @typedef NormalizedConcat
   * @prop {String} normalized - New normalized bit string
   * @prop {Number} exponent - Number of bits the decimal shifted
   * @prop {String} mantissa - Mantissa bit string
   */
  /**
   * @summary Normalize a binary string with a decimal to a binary
   * @memberof Util
   *          string with a single bit before the decimal
   * @param {String} c - bit string (ex: 01101011.00101)
   * @returns {NormalizedConcat}
   */
  function normalizeConcatenation(c) {
    var o = {
      normalized: "",
      exponent: 0,
      mantissa: ""
    };
    // var normalized = "";
    var originalDecimalIndex = c.indexOf('.');
    var addedDecimal = false;
    var leadingOne = false;
    for (var i = 0; i < c.length; i++) {
      if (c[i] != '.') {
        if (c[i] === '1') {
          o.normalized += c[i];
          leadingOne = true;
        } else if (leadingOne == true) {
          o.normalized += c[i];
        }

        if (addedDecimal === false && c[i] === '1') {
          o.normalized += '.';
          addedDecimal = true;
          o.exponent = originalDecimalIndex - (i + 1); // subtract from index of new decimal place
          if (o.exponent < 0) o.exponent++;
        }
      }
    }
    for (var i = o.normalized.indexOf('.') + 1; o.mantissa.length < 23; i++) {
      if (i < o.normalized.length) {
        o.mantissa += o.normalized[i];
      } else {
        o.mantissa += '0';
      }
    }
    return o;
  }

  /**
   * @summary Combine a whole number with a fractional part
   * @memberof Util
   * @param {String} i - Whole number
   * @param {String} f - Fractional number
   * @returns {String} Combined final number
   */
  function concatenateIntegralWithFractional(i, f) {
    var indexOfDecimal = 0;
    var tmp = f.indexOf('.');
    if (tmp > 0) indexOfDecimal = tmp;
    return i + f.substring(tmp);
  }

  /**
   * @summary Get the fractional bits from a number - up to 32 bits
   * @memberof Util
   * @param {Number} n - Number to extract decimal bits from
   * @returns {String} String representation of the decimal bits 
   */
  function getFractionalBitsFromNumber(n) {
    var frac = "0.";
    var remainder = 0;
    remainder = Math.abs(n % 1);
    var runs = 0;
    do {
      remainder = remainder * 2;
      runs++;
      if (Math.floor(remainder) === 1) frac += "1";
      else {
        frac += "0";
      }

      remainder = remainder % 1; // get remainder and move on 
    } while (remainder !== 0 && runs < 32);
    return frac;
  }

  /**
   * @summary Get the whole number bits from a number
   * @memberof Util
   * @param {Number} n - Number to extract whole number from
   * @returns {String} String representation of the whole bits 
   */
  function getIntegralBitsFromNumber(n) {
    n = Math.floor(Math.abs(n));
    return n.toString(2);
  }

  /**
   * @summary Formats an error array for alertify.js
   * @param {Parser.ValueError[]} err - See @file parser.js
   * @returns {String} HTML formatted string for alertify.js
   */
  function formatError (err) {
    let fmt = "<div style=\"overflow-y:auto;max-height:45vh;text-align:left;padding-left:10px\">";
    for (let i = 0; i < err.length; i++) {
      fmt += "<b>" + err[i].name + "</b>" +
        "<pre>" +
        "\n  value:    " + err[i].value +
        "\n  expected: " + err[i].expected +
        "\n\n</pre>";
    }
    fmt += "</div>";

    return fmt;
  }
  return {
    getBytesFromHexString: getByteArrayFromHexString,
    getHexToAscii: hexToAscii,
    getHexToIp: hexStringToIP,
    getHexToIp6: hexStringToIP6,
    getNumberOfNibbles: getNumberOfNibbles,
    getNumberToByteString: numberToByteString,
    getIpToHex: ipToHex,
    getIp6ToHex: ip6ToHex,
    getNumToIp: intToIP,
    getEnumValueFromName: getEnumValueFromName,
    getHexToFloat: hexStringToFloat,
    getNumberToBitString: numberToBitString,
    getNumberToFloatHexString: numberToFloatHexString,
    getFractionalBitsFromNumber: getFractionalBitsFromNumber,
    getIntegralBitsFromNumber: getIntegralBitsFromNumber,
    getHexToInt: hexStringToInt,
    isIpValid: isIpValid,
    isIp6Valid: isIp6Valid,
    isBitSet: checkBit,
    isWordAligned: isWordAligned,
    addPadding: addZeroPaddingToAlign,
    fmtAndPrint: fmtAndPrint,
    normalizeConcatenation: normalizeConcatenation,
    concatenateIntegralWithFractional: concatenateIntegralWithFractional,
    formatError: formatError
  };
}());