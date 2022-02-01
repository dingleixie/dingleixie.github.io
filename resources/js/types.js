/**
 * @desc Contains the value types used in T2/O2's state structure
 */

/**
 * @typedef Enumeration
 * @prop {Name} name - Name of enum value
 * @prop {Number} value - Value of enum
 */

/**
 * @type {Enumeration[]}
 */
const E_PWRUNITS = [
  { name: "dBm",     value: 0 },
  { name: "dBW",     value: 1 },
  { name: "Watts",   value: 2 },
  // { name: "Default", value: 3 },
];

/**
 * @type {Enumeration[]}
 */
const E_TUBETYPE = [
  { name: "TWT",        value: 0 },
  { name: "SSPA",       value: 1 },
  { name: "TWT - 2KW",  value: 2 },
  { name: "KPA",        value: 3 },
];

/**
 * @type {Enumeration[]}
 */
const E_TUBE_SUB_TYPE = [
  { name: "Standard",    value: 0 },
  { name: "TWT Tsunami", value: 1 },
];

/**
 * @type {Enumeration[]}
 */
const E_RF_BAND_ID = [
  { name: "Ku",    value: 0 },
  { name: "X",     value: 1 },
  { name: "C",     value: 2 },
  { name: "Ka",    value: 3 },
  { name: "K",     value: 4 },
  { name: "V",     value: 5 },
  { name: "Q",     value: 6 },
  { name: "S",     value: 7 },
  { name: "DBS",   value: 8 },
  { name: "None",  value: 255 }
];

/**
 * @type {Enumeration[]}
 */
const E_RF_BAND_NUMBER = [
  { name: "1",     value: 0 },
  { name: "2",     value: 1 },
  { name: "3",     value: 2 },
  { name: "4",     value: 3 }
];

/**
 * @type {Enumeration[]}
 */
const E_CURRENT_SUBBAND = [
  { name: "0",     value: 0 },
  { name: "1",     value: 1 },
  { name: "2",     value: 2 },
  { name: "3",     value: 3 },
  { name: "4",     value: 4 }
];

/**
 * @type {Enumeration[]}
 */
const E_INSTALLED_BAND = [
  { name: "1",     value: 1 },
  { name: "2",     value: 2 },
  { name: "3",     value: 3 },
  { name: "4",     value: 4 }
];

/**
 * @type {Enumeration[]}
 */
const E_REDUNDANCY = [
  { name: "Standalone",          value: 0 },
  { name: "1:1",                 value: 1 },
  { name: "1:1 + Output",        value: 2 },
  { name: "1:2",                 value: 3 },
  { name: "Magic T",             value: 4 },
  { name: "VPC",                 value: 5 },
  { name: "Dual Thread",         value: 6 },
  { name: "Hybrid Switcharound", value: 7 },
  { name: "2x Hybrid Combiners", value: 8 },
];

/**
 * @type {Enumeration[]}
 */
const E_BEACON_RANGE = [
  { name: "0V to 10V",           value: 0 },
  { name: "-5V to 5V",           value: 1 },
  { name: "-10V to 0V",          value: 2 },
];

/**
 * @type {Enumeration[]}
 */
const E_PARAMETER = [
  { name: "RF Out",              value: 0 },
  { name: "TWT Temperature",     value: 1 },
  { name: "Helix Current",       value: 2 },
  { name: "Helix Voltage",       value: 3 },
  { name: "Heater Voltage",      value: 4 },
  { name: "Attenuation",         value: 5 },
  { name: "UPC Beacon",          value: 6 },
  { name: "Cathode Current",     value: 7 },
  { name: "Anode Voltage",       value: 8 },
  { name: "Supply Temperature",  value: 9 },
  { name: "Air Temperature In",  value: 10 },
  { name: "Air Temperature Out", value: 11 },
  { name: "Heater Current",      value: 12 },
  // { name: "Future 14",    value: 7 },
  // { name: "Future 15",    value: 7 },
  // { name: "Future 16",    value: 7 },
];

/**
 * @type {Enumeration[]}
 */
const E_CUSTOMIZATION = [
  { name: "None",         value: 0 },
  { name: "K2 EMULATION", value: 1 },
  { name: "L BAND",        value: 2 },
  // { name: "TOTAL", value: 3 },
];

/**
 * @type {Enumeration[]}
 */
const E_AMP_COMMAND = [
  { name: "ONLINE",   value: 0 },
  { name: "BACKUP A", value: 1 },
  { name: "BACKUP B", value: 2 },
  { name: "BACKUP C", value: 3 },
  { name: "WG1 A",    value: 4 },
  { name: "WG1 B",    value: 5 },
  { name: "WG2 A",    value: 6 },
  { name: "WG2 B",    value: 7 },
  // { name: "TOTAL", value: 3 },
];

/**
 * @type {Enumeration[]}
 */
const E_AMP_ENUM = [
  { name: "Amp A", value: 0 },
  { name: "Amp B", value: 1 },
  { name: "Amp C", value: 2 },
  { name: "Amp D", value: 3 },
  { name: "Amp E", value: 4 },
];


/**
 * @type {Enumeration[]}
 */
const E_HVBOOT = [
  { name: "Restore", value: 0 },
  { name: "On",      value: 1 },
  { name: "Off",     value: 2 },
];

/**
 * @type {Enumeration[]}
 */
const E_KPA_MODE = [
  { name: "Manual",   value: 0 },
  { name: "Sleep",    value: 1 },
  { name: "Autobeam", value: 2 },
];

/**
 * @type {Enumeration[]}
 */
const E_EVENT = [
  { name: "Disabled",   value: 0 }, // AKA "DEFAULT" IN T2.hpp
  { name: "Fault",      value: 1 },
  { name: "Alarm",      value: 2 },
  // { name: "Local",      value: 3 },
  // { name: "Remote",     value: 4 },
  // { name: "Comment",    value: 5 },
];

/**
 * @type {Enumeration[]}
 */
const E_LANG = [
  { name: "English", value: 0 },
  { name: "Chinese", value: 1 },
];

/**
 * @type {Enumeration[]}
 */
const E_SW_PRIORITY = [
  { name: "No priority", value: 0 },
  { name: "Amp A",       value: 1 },
  { name: "Amp B",       value: 2 },
];

/**
 * @type {Enumeration[]}
 */
const E_ANALOG_CHANNEL = [
  { name: "Temperature",      value: 0 },
  { name: "Heater Volts",     value: 1 },
  { name: "Helix Volts",      value: 2 },
  { name: "Helix Current",    value: 3 },
  { name: "Forward Power",    value: 4 },
  { name: "Reverse Power",    value: 5 },
  { name: "Forward Power 2",  value: 6 },
  { name: "UPC Volts",        value: 7 },
  { name: "Cathode Current",  value: 8 },
  { name: "Battery Volts",    value: 9 },
  { name: "Air Temp In",      value: 10 },
  { name: "Air Temp Out",     value: 11 },
  { name: "Combined Reverse", value: 12 },
  { name: "Combined Forward", value: 13 },
  { name: "Blower Hz",        value: 14 },
  { name: "TWT Temperature",  value: 15 }
];

/**
 * @type {Enumeration[]}
 */
const E_HV_DIVIDER = [
  { name: "1000", value: 1000 },
  { name: "2000", value: 2000 },
  { name: "3000", value: 3000 },
];

/**
 * @type {Enumeration[]}
 */
const E_PARITY = [
  { name: "NONE",  value: 0 },
  { name: "ODD",   value: 1 },
  { name: "EVEN",  value: 2 },
  { name: "MULTI", value: 3 }
];
/**
 * @type {Enumeration[]}
 */
const E_BAUD_RATES = [
  { name: "9600",   value: 9600   },
  { name: "19200",  value: 19200  },
  { name: "38400",  value: 38400  },
  { name: "57600",  value: 57600  },
  { name: "115200", value: 115200 },
];
/**
 * @type {Enumeration[]}
 */
const E_STOP_BITS = [
  { name: "0",  value: 0 },
  { name: "1",  value: 1 },
  { name: "2",  value: 2 },
];

/**
 * @type {Enumeration[]}
 */
const E_DATA_BITS = [
  { name: "7",  value: 7 },
  { name: "8",  value: 8 },
];

/**
 * @type {Enumeration[]}
 */
const E_OUTPUT_SWITCHES = [
  { name: "0",  value: 0 },
  { name: "1",  value: 1 },
  { name: "2",  value: 2 }
];

/**
 * @type {Enumeration[]}
 */
const M_OVEDRIVE_FLAGS = [
  { name: "Supported",  value: 1 },
  { name: "Mandated",   value: 2 },
  { name: "Enabled",    value: 4 }
];

/**
 * @type {Enumeration[]}
 */
const M_SAMPLE_RF = [
  { name: "Default",          value: 1 },
  { name: "Combined Antenna", value: 2 },
  { name: "Combined Load",    value: 4 }
];

/**
 * @type {Enumeration[]}
 */
const M_HEATER_CONTROL = [
  { name: "Control",          value: 1  },
  { name: "Disabled",         value: 2  },
  { name: "Soft FTD",         value: 4  },
  { name: "Future Bit",       value: 8  },
  { name: "Read Heater Fault",value: 16 },
  { name: "Block Standby",    value: 32 }
];

/**
 * @type {Enumeration[]}
 */
const M_USER_ALARM_ENABLES = [
  { name: "User Alarm 1",          value: 1 },
  { name: "User Alarm 2",          value: 2 }
];

/**
 * @type {Enumeration[]}
 */
const M_FAULT_ENABLE = [
  { name: "Wg Arc",                     value: 1},
  { name: "UpConverter",                value: 2},
  { name: "Cover ILok",                 value: 4},
  { name: "Cable ILok",                 value: 8},
  { name: "Ext ILok",                   value: 16},
  { name: "Low Line",                   value: 32},
  { name: "Over Temp",                  value: 64},
  { name: "TWT Temp",                   value: 128},
  { name: "HV Under",                   value: 256},
  { name: "HV Over",                    value: 512},
  { name: "Helix Arc",                  value: 1024},
  { name: "Helix Arc Latch",            value: 2048},
  { name: "Input Over Drive Latch",     value: 8192},
  { name: "Fan Fault",                  value: 16384},
  { name: "TWT Thermal ILok",           value: 32768},
  { name: "VSWR Fault",                 value: 65536},
  { name: "High RF",                    value: 131072},
  { name: "Factory RF",                 value: 262144},
  { name: "Low RF",                     value: 524288},
  { name: "Reflected RF",               value: 1048576},
  { name: "Pwr Limit Fault",            value: 268435456},
  { name: "Heater Fault",               value: 2097152},
  { name: "Ext Ref Present",            value: 8388608},
  { name: "Ext Ref Lock",               value: 16777216},
];


/**
 * @type {Enumeration[]}
 */
const M_ALARM_ENABLE = [
  { name: "Over Drive",                 value: 1},
  { name: "Low Drive",                  value: 2},
  { name: "High Drive",                 value: 4},
  { name: "Const Pwr Suspend",          value: 8},
  { name: "Hi RF",                      value: 16},
  { name: "Low RF",                     value: 32},
  { name: "Reflected RF",               value: 64},
  { name: "Low DC Voltage",             value: 512},
  { name: "High Temperature",           value: 1024},
  { name: "Ext Ref Present",            value: 4096},
  { name: "Inlet Temperature",          value: 2048},
];

/**
 * @typedef Group
 * @prop {String} name - Human readable name of group
 * @prop {String} id - Table id of group
 */

 /**
  * @type {Group}
  */
const GROUPS = {

  unitinfo:     { name: "Unit Info",          id: "#unit-info-table"    },
  powercontrol: { name: "Power Control",      id: "#power-table"        },
  comm:         { name: "Communication",      id: "#comm-table"         },
  redundancy:   { name: "Redundancy",         id: "#redundancy-table"   },
  digitalpots:  { name: "Digital Pots",       id: "#digitalpots-table"  },
  faultalarm:   { name: "Faults and Alarms",  id: "#fault-alarm-table"  },
  upc:          { name: "UPC",                id: "#upc-table"          },
  sampleport:   { name: "Sample Ports",       id: "#sampleport-table"   },
  scale:        { name: "Scaling Factors",    id: "#scaling-table"      },
  kpa:          { name: "KPA",                id: "#kpa-table"          },
  readings:     { name: "Readings",           id: "#readings-table"     },
  ui:           { name: "User Interface",     id: "#ui-table"           },
  misc:         { name: "Miscellaneous",      id: "#misc-table"         },
 // modelconfig:  { name: "Model Config",       id: "#modelconfig-table"  }

};

const subGroup =
{
  firmware: {id: "firmware"},
  info: {id: "info"},
  GMT: {id: "GMT"},
}

const modelConfigGroups = {
  unitinfo:       { name: "Unit Info",                  id: "#unit-info-table"    },
  powercontrol:   { name: "RF Power",                   id: "#power-table"        },
  rfband:         { name: "RF Band",                    id: "#rf-band"            },
  linearizer:     { name: "Linearizer / Attenuator Control",  id: "#linearizer-table" },
  comm:           { name: "Communication",              id: "#comm-table"         },
  redundancy:     { name: "Redundancy",                 id: "#redundancy-table"   },
  cathodemonitor: { name: "Cathode Current Monitor / Anode Control",    id: "#cathode-monitor"    },
  factorylevel:   { name: "Factory RF Trip Levels",        id: "#factory-trip-level" },
  tcomp:          { name: "Temperature Compensation",   id: "#gain-temp-comp"     },
  temptrip:       { name: "Temperature Trip Levels",    id: "#temp-trip-level"    },
  digitalpots:    { name: "Digital Pots",               id: "#digitalpots-table"  },
  misc:           { name: "Miscellaneous",              id: "#misc-table"         }
 /* analogscalers:{ name: "Analog Scalers",     id: "#analogscalers-table"},
  faultalarm:   { name: "Faults and Alarms",  id: "#fault-alarm-table"  },
  RF:           { name: "RF",                 id: "#rf-table"           },
  overdrive:    { name: "Overdrive",          id: "#overdrive"          },
  upc:          { name: "UPC",                id: "#upc-table"          },
  kpa:          { name: "KPA",                id: "#kpa-table"          },
  readings:     { name: "Readings",           id: "#readings-table"     },
  misc:         { name: "Miscellaneous",      id: "#misc-table"         },
*/
}


/**
 * @typedef ValueType
 * @prop {String} name - Name of the type
 * @prop {Number} bytes - Size of the type in bytes
 * @prop {Boolean} signed - True if signed, false if unsigned type
 * @prop {Boolean} aligned - True if type is word aligned, false if not
 * @prop {Boolean} [isEnum=false] - True if type is an enumeration
 * @prop {Boolean} [isMultiset=false] - True type has multiple options. Think of
 *                              OR-ing bits in a value where each bit is an option
 * @prop {Enumeration} [opts=undefined] - Enum to use for the multiple selectable options if isMultiset is true
 * @prop {Enumeration} [enum=undefined] - Enum to use for the value type
 */

 /**
  * @summary Available value types
  * @prop {ValueType} raw - Unknown value type
  * @prop {ValueType} int - Integer type (4 bytes)
  * @prop {ValueType} chararray - Character string type - null terminated by default
  * @prop {ValueType} char - Char type (1 byte)
  * @prop {ValueType} BOOL - Netburner boolean type
  * @prop {ValueType} WORD - Netburner WORD type
  * @prop {ValueType} DWORD - Netburner DWORD
  * @prop {ValueType} short
  * @prop {ValueType} float
  * @prop {ValueType} double
  * @prop {ValueType} BYTE
  * @prop {ValueType} IPADDR - IPv4 T2 / alignment is true
  * @prop {ValueType} IPADDR4 - IPv4 O2 / alignment is false
  * @prop {ValueType} IPADDR128 - IPv6 O2
  * @prop {ValueType} OVERDRIVE_FLAGS
  * @prop {ValueType} SAMPLE_RF
  * @prop {ValueType} HEATERCTRL
  * @prop {ValueType} USERALARMBITS
  * @prop {ValueType} EVENT
  * @prop {ValueType} TUBESUBTYPE
  * @prop {ValueType} BAUD
  * @prop {ValueType} DATA_BITS
  * @prop {ValueType} STOPT_BITS
  * @prop {ValueType} PARITY
  * @prop {ValueType} KPAMODE
  * @prop {ValueType} HVBOOT
  * @prop {ValueType} REDUNDANCY
  * @prop {ValueType} BEACONRANGE
  * @prop {ValueType} PARAMETER
  * @prop {ValueType} PWRUNITS
  * @prop {ValueType} TUBETYPE
  * @prop {ValueType} CUSTOMIZATION
  * @prop {ValueType} AMPCMD
  * @prop {ValueType} LANGUAGE
  * @prop {ValueType} SWPRIORITY
  * @prop {ValueType} HVDIVIDER
  * @prop {ValueType} HVDIVIDER_BYTES
  * @prop {ValueType} AMPENUM
  * @prop {ValueType} RFBANDID
  * @prop {ValueType} RFBANDNUMBER
  * @prop {ValueType} ANALOGCHANNEL
  */
const ValueTypes = {
  raw:              { name: "raw",            bytes: 0, signed: false, aligned: false, isEnum: false, isMultiset: false },
  int:              { name: "int",            bytes: 4, signed: true , aligned: true,  isEnum: false, isMultiset: false },
  chararray:        { name: "chararray",      bytes: 0, signed: true , aligned: false, isEnum: false, isMultiset: false },
  char:             { name: "char",           bytes: 1, signed: true , aligned: false, isEnum: false, isMultiset: false },
  BOOL:             { name: "BOOL",           bytes: 1, signed: false, aligned: false, isEnum: false, isMultiset: false },   // 1 or 0
  WORD:             { name: "WORD",           bytes: 2, signed: false, aligned: true,  isEnum: false, isMultiset: false },
  DWORD:            { name: "DWORD",          bytes: 4, signed: false, aligned: true,  isEnum: false, isMultiset: false },
  short:            { name: "short",          bytes: 2, signed: true , aligned: true,  isEnum: false, isMultiset: false },
  float:            { name: "float",          bytes: 4, signed: true , aligned: true,  isEnum: false, isMultiset: false },
  double:           { name: "double",         bytes: 8, signed: true , aligned: true,  isEnum: false, isMultiset: false },
  BYTE:             { name: "BYTE",           bytes: 1, signed: true , aligned: false, isEnum: false, isMultiset: false },
  IPADDR:           { name: "IPADDR",         bytes: 4, signed: true , aligned: true,  isEnum: false, isMultiset: false },
  IPADDR4:          { name: "IPADDR4",        bytes: 4, signed: true , aligned: false,  isEnum: false, isMultiset: false },
  IPADDR128:        { name: "IPADDR128",      bytes: 16,signed: true , aligned: false,  isEnum: false, isMultiset: false },
  OVERDRIVE_FLAGS:  { name: "OVERDRIVE_FLAGS",bytes: 1, signed: false, aligned: false, isEnum: false, isMultiset: true, opts: M_OVEDRIVE_FLAGS },
  SAMPLERF:         { name: "SAMPLE_RF",      bytes: 1, signed: false, aligned: false, isEnum: false, isMultiset: true, opts: M_SAMPLE_RF},
  HEATERCTRL:       { name: "HEATER_CTRL",    bytes: 1, signed: false, aligned: false, isEnum: false, isMultiset: true, opts: M_HEATER_CONTROL},
  USERALARMBITS:    { name: "USERALARMBITS",  bytes: 2, signed: false, aligned: true,  isEnum: false, isMultiset: true, opts: M_USER_ALARM_ENABLES},
  FAULTENABLE:      { name: "FAULT_ENABLE",   bytes: 4, signed: false, aligned: true,  isEnum: false, isMultiset: true, opts: M_FAULT_ENABLE },
  ALARMENABLE:      { name: "ALARM_ENABLE",   bytes: 4, signed: false, aligned: true,  isEnum: false, isMultiset: true, opts: M_ALARM_ENABLE },
  EVENT:            { name: "E_EVENT",        bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_EVENT},
  TUBESUBTYPE:      { name: "E_TUBE_SUB_TYPE",bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_TUBE_SUB_TYPE},
  BAUD:             { name: "E_BAUD",         bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_BAUD_RATES},
  DATA_BITS:        { name: "E_DATA_BITS",    bytes: 1, signed: false, aligned: false, isEnum: true,  isMultiset: false, enum: E_DATA_BITS},
  STOP_BITS:        { name: "E_STOP_BITS",    bytes: 1, signed: false, aligned: false, isEnum: true,  isMultiset: false, enum: E_STOP_BITS},
  PARITY:           { name: "E_PARITY",       bytes: 1, signed: false, aligned: false, isEnum: true,  isMultiset: false, enum: E_PARITY},
  KPAMODE:          { name: "E_KPA_MODE",     bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_KPA_MODE},
  HVBOOT:           { name: "E_HVBOOT",       bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_HVBOOT},
  REDUNDANCY:       { name: "E_REDUNDANCY",   bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_REDUNDANCY},
  BEACONRANGE:      { name: "E_BEACON_RANGE", bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_BEACON_RANGE},
  PARAMETER:        { name: "E_PARAMETER",    bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_PARAMETER},
  PWRUNITS:         { name: "E_PWRUNITS",     bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_PWRUNITS},
  TUBETYPE:         { name: "E_TUBETYPE",     bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_TUBETYPE},
  CUSTOMIZATION:    { name: "E_CUSTOMIZATION",bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_CUSTOMIZATION},
  AMPCMD:           { name: "E_AMP_COMMAND",  bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_AMP_COMMAND},
  LANGUAGE:         { name: "E_LANG",         bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_LANG},
  SWPRIORITY:       { name: "E_SW_PRIORITY",  bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_SW_PRIORITY},
  HVDIVIDER:        { name: "E_HV_DIVIDER",   bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_HV_DIVIDER},
  HVDIVIDER_BYTES:  { name: "E_HV_DIVIDER",   bytes: 1, signed: false, aligned: false,  isEnum: true,  isMultiset: false, enum: E_HV_DIVIDER},
  AMPENUM:          { name: "E_AMP_ENUM",     bytes: 4, signed: false, aligned: true,  isEnum: true,  isMultiset: false, enum: E_AMP_ENUM},
  RFBANDID:         { name: "E_RF_BAND_ID",   bytes: 1, signed: false, aligned: false,  isEnum: true,  isMultiset: false, enum: E_RF_BAND_ID},
  RFBANDNUMBER:     { name: "E_RF_BAND_NUMBER",bytes: 1, signed: false, aligned: false,  isEnum: true,  isMultiset: false, enum: E_RF_BAND_NUMBER},
  INSTALLEDBAND:     { name: "E_INSTALLED_BAND",bytes: 1, signed: false, aligned: false,  isEnum: true,  isMultiset: false, enum: E_INSTALLED_BAND},
  CURRENTSUBBAND:   { name: "E_CURRENT_SUBBAND",bytes: 1, signed: false, aligned: false,  isEnum: true,  isMultiset: false, enum: E_CURRENT_SUBBAND},
  ANALOGCHANNEL:    { name: "E_ANALOG_CHANNEL",bytes: 1, signed: false, aligned: false,  isEnum: true, isMultiset: false, enum: E_ANALOG_CHANNEL},
  OUTPUTSWITCHES:   { name: "E_OUTPUT_SWITCHES",bytes: 2, signed: false, aligned: true,  isEnum: true, isMultiset: false, enum: E_OUTPUT_SWITCHES}
};
