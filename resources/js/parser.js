/**
 * @file parser.js
 * @namespace Parser
 * @summary Contains parsing functions for unit state
 */
const Parser = {
  /**
   * @summary Parse a unit hex string and fill a structure up with the parsed values
   * @param {String} b - Unit state in hex
   * @param {*} unitstate - Unit state structure to fill parsed values
   */
  parseState: function (b, unitstate) {
    'use strict';
    var nibbleIndex = 0;
    var parseOffset = 0;
    var subHex = "";
    var remainder = 0;
    var nibblesToRead = 0;
    let tempNum = "";
    for (var i = 0; i < unitstate.props.length; i++) {
      if (unitstate.props[i].type.aligned) {
        remainder = parseOffset % (ValueTypes.WORD.bytes * 2);
        if (remainder !== 0) {
          parseOffset += ((ValueTypes.WORD.bytes * 2) - remainder);
        }
      }

      nibbleIndex = parseOffset; // place nibbleIndex at the most updated parseOffset
      if (nibbleIndex < b.length - 1) {
        // grab all bytes that relate to unitstate.props[i]
        nibblesToRead = (unitstate.props[i].type === ValueTypes.raw ? b.length - parseOffset : unitstate.props[i].totalBytes * 2);
        while ((nibbleIndex - parseOffset) < nibblesToRead) {
          subHex += b[nibbleIndex];
          nibbleIndex++;
        }
        tempNum += subHex;
        console.log(unitstate.props[i].name + " "+ subHex + "     Index start at:" + parseOffset);
       // done grabbing bytes

        parseOffset = nibbleIndex;
        if (unitstate.props[i].type.isEnum || (unitstate.props[i].overridden && unitstate.props[i].typeOverride.isEnum)) {
          unitstate.props[i].value = Util.getHexToInt(subHex);
          unitstate.props[i].valueSet = true;
        } else if (unitstate.props[i].type.isMultiset) {
          unitstate.props[i].value = Util.getHexToInt(subHex, false);
          unitstate.props[i].valueSet = true;
        } else {
          var propTypeName = unitstate.props[i].typeOverride ? unitstate.props[i].typeOverride.name : unitstate.props[i].type.name;
          switch (propTypeName) {
            case ValueTypes.float.name:
              {
                unitstate.props[i].value = Util.getHexToFloat(subHex, false);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.int.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex, true);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.WORD.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex, false);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.BOOL.name:
              {
                unitstate.props[i].value = parseInt(subHex, 16) == 0 ? false : true;
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.DWORD.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex, false);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.short.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex, true);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.BYTE.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex, true);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.char.name:
              {
                unitstate.props[i].value = Util.getHexToInt(subHex);
                if(unitstate.props[i].value ===0)   // print white space instead of null. ascii
                    unitstate.props[i].value = 32;  // because null is not a printable character

                unitstate.props[i].value= String.fromCharCode(unitstate.props[i].value);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.chararray.name:
              {
                if (subHex.indexOf(undefined) >= 0) break;
                unitstate.props[i].value = "";
                var tempString = "";
                for (var nib = 0; nib < subHex.length - 1; nib += 2) {
                  tempString += Util.getHexToAscii(subHex[nib] + subHex[nib + 1]);
                }
                if (unitstate.props[i].nullTerm === true) {
                  unitstate.props[i].value = tempString.replace(/\0/g, "");
                } else {
                  unitstate.props[i].value = tempString.replace(/\0/g, "");
                }
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.IPADDR.name:
            case ValueTypes.IPADDR4.name:
              {
                unitstate.props[i].value = Util.getHexToIp(subHex);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.IPADDR128.name:
              {
                unitstate.props[i].value = Util.getHexToIp6(subHex);
                unitstate.props[i].valueSet = true;
                break;
              }
            case ValueTypes.raw.name:
              {
                unitstate.props[i].value = subHex;
                unitstate.props[i].valueSet = true;
                break;
              }
            default:
              console.log("WARNING: UNHANDLED TYPE IN PARSING T2!");
              break;
          }
        }

        subHex = ""; // clear temporary holder
      } else {
        break;
      }

      if (unitstate.props[i].valueSet && unitstate.props[i].onValueSet !== undefined) {
          unitstate.props[i].onValueSet(unitstate.props[i].value);
      }
    }

    var teststatearray = Util.getBytesFromHexString(b);
    var size = Unsigned32(teststatearray, 0);
    var checksum = Unsigned32(teststatearray, 4);
    var calculatedChecksum = Checksum.Crc16_Ccitt(teststatearray, 8, size  - 2 * 4);
    unitstate.checksumValid = (checksum == calculatedChecksum);
    return unitstate;
  },

  /**
   * @typedef ValueError
   * @property {String} name - Name/description of error
   * @property {Number} value - Current value of bad property
   * @property {String} expected - Expected value
   */
  newError: function (name, value, expected) {
    return {
      name: name,
      value: value,
      expected: expected
    };
  },
  /**
   * @typedef HexifyResult
   * @property {ValueError[]} err - Error message list
   * @property {String} hex - Hex in string form
   */
  /**
   *
   * @param {*} unitstate
   * @returns {HexifyResult}
   */
  getHex: function (unitstate) {
    'use strict';
    let errorList = [];
    let h = "";
    let type;
    let propertyBytes = 0;
    let bytes = 0;
    let padding = 0;
    let alignment = false;
    for (let i = 0; i < unitstate.props.length; i++) {

      padding = 0;
      type = (unitstate.props[i].overridden) ? unitstate.props[i].typeOverride : unitstate.props[i].type;
      alignment = type.aligned;
      if (unitstate.props[i].name ==="Input Switching") // swtiching from word to bool type, but alignment is different
        alignment = true;
      let el = document.getElementById(unitstate.props[i].id);
      let value = null;
      let valueFromUi = false;

      if (unitstate.props[i].display && el !== null) {
        valueFromUi = true;
        value = el.getValue();
      } else {
        valueFromUi = false;
        value = unitstate.props[i].value;
      }

      if(typeof value === "number") value = value.toString();

      propertyBytes = unitstate.props[i].totalBytes;

      if (value === null) {
        console.log("WARN: Null error");
      }

      if (alignment) {
        if (Util.isWordAligned(h) === false) {
          let result = Util.addPadding(h);
          h = result.hex;
          padding = result.nibs / 2;  //< 2 nibbles = 1 byte
        }
      }

      if (type.isEnum) {
        if (valueFromUi) {
          var enumValue = Util.getEnumValueFromName(value, type.enum);
          h += Util.getNumberToByteString(enumValue, unitstate.props[i].totalBytes);
        } else {
          h += Util.getNumberToByteString(unitstate.props[i].value, unitstate.props[i].totalBytes);
        }
      } else if (type.isMultiset) {
        // Multiset means it has multiple settable values (OR-ing bits in a number)
        var v = 0;
        var checkState;
        for (var optIndex = 0; optIndex < type.opts.length; optIndex++) {
          if (valueFromUi) {
            checkState = document.getElementById(unitstate.props[i].id + '-' + optIndex).checked;
          } else {
            v = unitstate.props[i].value;
            break;
          }

          if (checkState === true || checkState === "on") {
            v |= type.opts[optIndex].value;
          }
        }
        h += Util.getNumberToByteString(v, unitstate.props[i].totalBytes);
      } else {
        switch (type) {
          case ValueTypes.IPADDR4:
          case ValueTypes.IPADDR:
            {
              if (value == 0) {
                h += Util.getIpToHex("0.0.0.0");
              } else if (Util.isIpValid(value)) {
                h += Util.getIpToHex(value);
              } else {
                errorList.push(this.newError(
                  unitstate.props[i].name + " is invalid",
                  value.toString(),
                  "x.x.x.x"));
              }
              break;
            }
          case ValueTypes.IPADDR128:
            {
              // h += ipToHex(unitstate.props[i].value);
              if (value == 0) {
                h += "00000000000000000000000000000000";
              } else if (Util.isIp6Valid(value)) {
                h += value.replace(/\:/g,"");

              } else {
                errorList.push(this.newError(
                  unitstate.props[i].name + " is invalid",
                  value.toString(),
                  "x.x.x.x"));
              }
              break;
            }
          case ValueTypes.BOOL:
            {
              if (valueFromUi) {
                value = document.getElementById(unitstate.props[i].id).checked;
              } else {
                value = unitstate.props[i].value;
              }
              if (value === true || value === "on") {
                h += Util.getNumberToByteString(1, unitstate.props[i].totalBytes);
              } else {
                h += Util.getNumberToByteString(0, unitstate.props[i].totalBytes);
              }
              break;
            }
          case ValueTypes.float:
            {
              var temp = "";
              if (unitstate.props[i].multiplier !== 1) {
                console.log("Check multiplier!");
              }

              if (valueFromUi) {
                value = value * unitstate.props[i].multiplier;
              }

              temp = Util.getNumberToFloatHexString(value);
              h += Util.getNumberToFloatHexString(value);
              break;
            }
          case ValueTypes.WORD:
          case ValueTypes.DWORD:
          case ValueTypes.double:
          case ValueTypes.short:
          case ValueTypes.DWORD:
          case ValueTypes.BYTE:
          case ValueTypes.int:
            {
              if (valueFromUi) {
                value = value * unitstate.props[i].multiplier;
              }
              value = Math.round(value);
              var min = unitstate.props[i].min;
              var max = unitstate.props[i].max;
              if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
                h += Util.getNumberToByteString(unitstate.props[i].value, type.bytes);
                errorList.push(this.newError(
                  unitstate.props[i].name + " is out of range",
                  value.toString(),
                  min + "-" + max));
              } else {
                h += Util.getNumberToByteString(value, type.bytes);
              }

              break;
            }
          case ValueTypes.char:
            {
              if (value.length === 0 || value.charCodeAt(0)===32) {
                h += Util.getNumberToByteString(0, unitstate.props[i].totalBytes);
              } else {
                h += Util.getNumberToByteString(value.charCodeAt(0), unitstate.props[i].totalBytes);
              }
              break;
            }
          case ValueTypes.chararray:
            {
              var asciiHex = "";
              for (var c = 0; c < unitstate.props[i].totalBytes; c++) {
                if (c < value.length) {
                  asciiHex += Util.getNumberToByteString(value.charCodeAt(c), ValueTypes.char.bytes);
                } else {
                  asciiHex += "00";
                }
              }
              h += asciiHex;
              break;
            }
          case ValueTypes.raw:
            {
              for (var c = 0; c < unitstate.props[i].value.length; c++) {
                h += unitstate.props[i].value[c];
              }
              break;
            }
          default:
            {
              console.log("WARNING -- " + type.name + " is unhandled");
              break;
            }
        }
      }

      console.log(unitstate.props[i].name + ": " + h.length);
      bytes += unitstate.props[i].totalBytes + padding;

      var nanIndex = h.indexOf("NAN");
      if (nanIndex > 0) {
        console.log("WARN: NaN detected @", nanIndex);
      }
    }
    let result = {
      err: errorList,
      hex: h,
      size: h.length /2
    };

    return result;
  }
};
