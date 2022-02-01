/**
 * @file statestructure.js
 * @class StateStructure
 * @summary Holds the state structure and its checksum status
 */

 /**
  * @typedef StateProperty
  * @memberof StateStructure
  * @prop {String} name - Human readable name of the property
  * @prop {String} id - Unique identifier of the property
  * @prop {Any} value - Value of the property
  * @prop {ValueType} type - Real type of property
  * @prop {Boolean} overridden - If true then the property should be
                                 shown as a different type
  * @prop {ValueType} typeOverride - Psuedo property type
  * @prop {Boolean} display - Show property on UI or not
  * @prop {Number} totalBytes - Total byte size of the property
  * @prop {Boolean} protected - Prevent normal access
  * @prop {Boolean} readonly - Prevent any modifications
  * @prop {Boolean} nullTerm - Null terminate the last byte
  * @prop {Number} min - Minimum value of property
  * @prop {Number} max - Minimum value of property
  * @prop {String} info - Detailed information of the property
  * @prop {String} units - Unit type of the property (F/C/dB/etc)
  * @prop {Number} colspan - Number of columns the property will need
  * @prop {Number} multiplier - Multiplier value interpreted by the computer board
  * @prop {Boolean} valueSet - Flag to check if property value has been set
  * @prop {Group} group - Group the property belongs to
  */

var StateStructure = function() {
  'use strict';
  /**
   * @summary Checksum of current state structure
   * @desc Must be set manually after verification
   * @memberof StateStructure
   * @type {Number}
   */
  this.checksum = 0;

  /**
   * @summary Flag for if checksum is valid or not
   * @desc Must be set manually after verification
   * @memberof StateStructure
   * @type {Boolean}
   */
  this.checksumValid = false;

  /**
   * @summary List of state properties held by this class
   * @memberof StateStructure
   * @type {StateProperty[]}
   */
  this.props = [];

  this.clear = function() {
    this.props = [];
  };

  /**
   * @summary Add a property to the state structure
   * @memberof StateStructure
   * @param {String} name - Human readable name of property
   * @param {types.valueType} valueType - Value type of the property
   * @param {Any} value - Value of the property
   * @param {Object} [options={}] - Options of the property
   * @param {Bool} [options.overridden=false] - Set true to mask type of the value with another one
   * @param {types.valueType} [options.typeOverride=undefined] - The overriding type
   * @param {Boolean} [options.display=true] - Set true to show the item, false to keep hidden
   * @param {Number} [options.numberOfBytes=valueType.bytes] - Override the total number of bytes this property contains
   * @param {Boolean} [options.protected=false] - Set true to require a password to edit the property
   * @param {Boolean} [options.readonly=false] - Set true to prevent any editing by the user
   * @param {Boolean} [options.nullTerm=true] - Set true to null terminate
   * @param {Number} [options.min=undefined] - Set to define minimum value
   * @param {Number} [options.max=undefined] - Set to define maximum value
   * @param {String} [options.info=undefined] - Set to add optional information about property
   * @param {String} [options.units=undefined] - Set to add unit info to property (ms/celsius/etc)
   * @param {Number} [options.colspan=1] - Number of columns the property will take
   * @param {Number} [options.multiplier=1] - The multiplier applied to the value when interpreted by computer board
   * @param {Boolean} [options.valueSet=false] - Set true if the value of the property has been updated
   * @param {Group} [options.group=GROUPS.misc] - Category that the property will fall under
   * @param {Boolean} [options.isModelConfig=false] - Set true if the property is a model config parameter
   * @param {Function} [options.onValueSet=null] - Callback to run when setting the value. Useful for overriding other parameters.
   * @default
   * @returns index of the property
   */
  this.addProp = function(name, valueType, value, options) {
    options = options || {};
    var prop = {
      name: name,
      id: name.toLowerCase().replace(/ /g, "-")
                            .replace(/@/g,"at")
                            .replace(/\./g,"")
                            .replace(/\:/g,"")
                            .replace(/\(/g, "")
                            .replace(/\)/g,"") + "-" + (this.props.length + 1),
      value: value,
      type: valueType,
      overridden:   (options.typeOverride  === undefined) ? false                         : true,
      typeOverride: (options.typeOverride  === undefined) ? undefined                     : options.typeOverride,
      display:      (options.visible       === undefined) ? true                          : options.visible,
      isIrrelevant: (options.isIrrelevant  === undefined) ? false                         : options.isIrrelevant,
      propTubeType: (options.propTubeType  === undefined) ? "common"                      : options.propTubeType,
      totalBytes:   (options.numberOfBytes === undefined) ? valueType.bytes               : options.numberOfBytes,
      protected:    (options.protected     === undefined) ? false                         : options.protected,
      readonly:     (options.readonly      === undefined) ? false                         : options.readonly,
      nullTerm:     (options.nullTerm      === undefined) ? true                          : options.nullTerm,
      min:          (options.min           === undefined) ? undefined                     : options.min,
      max:          (options.max           === undefined) ? undefined                     : options.max,
      info:         (options.info          === undefined) ? undefined                     : options.info,
      units:        (options.units         === undefined) ? undefined                     : options.units,
      colspan:      (options.colspan       === undefined) ? 1                             : options.colspan,
      multiplier:   (options.multiplier    === undefined) ? 1                             : options.multiplier,
      valueSet:     (options.valueSet      === undefined) ? false                         : options.valueSet,
      group:        (options.group         === undefined) ? GROUPS.misc                   : options.group,
      isModelConfig:(options.isModelConfig === undefined) ? false                         : options.isModelConfig,
      onValueSet:   (options.onValueSet    === undefined) ? undefined                     : options.onValueSet,
      modelGroups:  (options.modelGroups   === undefined) ? modelConfigGroups.misc        : options.modelGroups,
      subGroup:     (options.subGroup      === undefined) ? undefined                     : options.subGroup,
    };

    this.props.push(prop);
    return this.props.length - 1;

  };
};
