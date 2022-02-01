function generateO2(unitstate) {
  unitstate.addProp("Size",                     ValueTypes.int, 0, { group: GROUPS.unitinfo, readonly: true, units: "bytes", info: "Size of amp state file in bytes" });
  unitstate.addProp("Checksum",                 ValueTypes.int, 0, { group: GROUPS.unitinfo, readonly: true, info: "a value use to compare with a calculated checksum to determine if data tampered"});
  unitstate.addProp("Signature",                ValueTypes.chararray, "O2 Status", { group: GROUPS.unitinfo, numberOfBytes: 10, readonly: true, info: "state file type"});
  unitstate.addProp("Firmware Version",         ValueTypes.chararray, "088", { group: GROUPS.unitinfo, numberOfBytes: 4 , readonly: true, info: "3 numeric digits ### w/o dot. eg 088", subGroup: subGroup.firmware });
  unitstate.addProp("Serial Number",            ValueTypes.chararray, "", {  group: GROUPS.unitinfo, numberOfBytes: 10, protected: true, subGroup: subGroup.info });
  unitstate.addProp("Beta",                     ValueTypes.BOOL, false, { group: GROUPS.unitinfo, readonly: true, info: "indicate beta firmware", subGroup: subGroup.firmware });
  unitstate.addProp("Remote Mode",              ValueTypes.BOOL, false, { group: GROUPS.unitinfo, readonly: true, info: "Remote / Local"});
  unitstate.addProp("Automatic Mode",           ValueTypes.BOOL, false, { group: GROUPS.redundancy, isModelConfig: true, modelGroups: modelConfigGroups.redundancy, info: "automatic switchover when an amp fail in system" });
  unitstate.addProp("Forward Pwr",              ValueTypes.int, 0, { group: GROUPS.readings, units: "dBm", multiplier: 100, readonly: true });
  unitstate.addProp("Reverse Pwr",              ValueTypes.int, 0, { group: GROUPS.readings, units: "dBm", multiplier: 100, readonly: true });
  unitstate.addProp("Temperature",              ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true, info: "TWT temperature"});
  unitstate.addProp("Helix Current",            ValueTypes.int, 0, { group: GROUPS.readings, units: "mA", multiplier: 100, readonly: true });
  unitstate.addProp("Helix Voltage",            ValueTypes.int, 0, { group: GROUPS.readings, units: "V", readonly: true });
  unitstate.addProp("Heater Voltage",           ValueTypes.int, 0, { group: GROUPS.readings, units: "V", multiplier: 100, readonly: true });
  unitstate.addProp("Gain Balance Enable",      ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.linearizer});
  unitstate.addProp("Obsolete Fault Enable",    ValueTypes.FAULTENABLE, 2147483647, { group: GROUPS.faultalarm, protected: true, visible: false, info: "" });
  unitstate.addProp("PlaceHolder",              ValueTypes.BOOL, false, { visible: false });
  unitstate.addProp("Obsolete Alarm Enable",    ValueTypes.ALARMENABLE, 2147483647, { group: GROUPS.faultalarm, protected: true, visible: false, info: "" });
  unitstate.addProp("Attenuation",              ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100 });
  unitstate.addProp("Attenuation Counts",       ValueTypes.int, 4095, { group: GROUPS.readings, units: "counts", min: 0, max: 4095, readonly: true});
  unitstate.addProp("RF Offset",                ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100});
  unitstate.addProp("Constant Pwr Target",      ValueTypes.int, 4000, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100 });
  unitstate.addProp("Constant Pwr Enable",      ValueTypes.BOOL, false, { group: GROUPS.powercontrol });
  unitstate.addProp("Constant Pwr Suspend",     ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true });
  unitstate.addProp("RF Dropout",               ValueTypes.int, 0, { group: GROUPS.powercontrol, typeOverride: ValueTypes.BOOL, numberOfBytes: 4, readonly: true });
  unitstate.addProp("FTD",                      ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true });
  unitstate.addProp("HV Selected",              ValueTypes.BOOL, false, { group: GROUPS.powercontrol });
  unitstate.addProp("HV On",                    ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true, info: "indicate device is hv on/off" });
  unitstate.addProp("RF Inhibit",               ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true, info: "indicate RF Inhibit status"});
  unitstate.addProp("Inhibit Selected",         ValueTypes.BOOL, false, { group: GROUPS.powercontrol, info: "Local setting. See 'Inhibit Invert'" });
  unitstate.addProp("External Inhibit",         ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("Overdrive Inhibit",        ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("SW1 Inhibit",              ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("SW2 Inhibit",              ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("HV Divider",               ValueTypes.int, 2000,   { group: GROUPS.powercontrol, typeOverride: ValueTypes.HVDIVIDER, info: "2000 or 1000", protected: true });
  unitstate.addProp("Heater Time",              ValueTypes.DWORD, 0,    { group: GROUPS.readings, multiplier: 60, units: "hours", readonly: true});
  unitstate.addProp("Beam Time",                ValueTypes.DWORD, 0,    { group: GROUPS.readings, multiplier: 60, units: "hours", readonly: true});
  unitstate.addProp("Fault",                    ValueTypes.int, false,  { group: GROUPS.faultalarm, typeOverride: ValueTypes.BOOL, numberOfBytes: 4, protected: true });
  unitstate.addProp("Fault 1",                  ValueTypes.BOOL, false, { group: GROUPS.faultalarm, protected: true });
  unitstate.addProp("Fault 2",                  ValueTypes.BOOL, false, { group: GROUPS.faultalarm, protected: true });
  unitstate.addProp("SW1 Position",             ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, or blank if not detected"});
  unitstate.addProp("SW2 Position",             ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, or blank if not detected"});
  unitstate.addProp("VPC Position",             ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, C, D, or blank if not detected"});
  unitstate.addProp("CFG Redundancy",           ValueTypes.REDUNDANCY, 0, { group: GROUPS.redundancy, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });             // is an ENUM
  unitstate.addProp("PWR Units",                ValueTypes.PWRUNITS, 0, { group: GROUPS.ui });             // is an ENUM
  unitstate.addProp("GMT Hours",                ValueTypes.short, 0, { group: GROUPS.misc, min: -12, max:12, units: "Hours", subGroup: subGroup.GMT, });
  unitstate.addProp("UNUSED5",                  ValueTypes.DWORD, false, { visible: false });
  unitstate.addProp("UNUSED6",                  ValueTypes.DWORD, false, { visible: false });
  unitstate.addProp("UNUSED7",                  ValueTypes.DWORD, false, { visible: false });
  unitstate.addProp("Gain Balance Value",       ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, readonly: true });
  unitstate.addProp("Use DHCP",                 ValueTypes.BOOL, true, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("Inhibit Invert",           ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, info: "Set to use inverted RF inhibit, disable to use Xicom standard inhibit." });
  unitstate.addProp("COM1 Baud",                ValueTypes.BAUD, 9600, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, units: "baud" });
  unitstate.addProp("COM2 Baud",                ValueTypes.BAUD, 9600, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, units: "baud" });
  unitstate.addProp("COM1 Data",                ValueTypes.DATA_BITS, 8, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Data",                ValueTypes.DATA_BITS, 8, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM1 Stop",                ValueTypes.STOP_BITS, 1, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Stop",                ValueTypes.STOP_BITS, 1, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM1 Parity",              ValueTypes.PARITY, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Parity",              ValueTypes.PARITY, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("RS485 Termination",        ValueTypes.BOOL, false, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, info: "Set to enable RS485 termination"});
  unitstate.addProp("RS485 2Wire",              ValueTypes.BOOL, false, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, info: "Set to configure RS485 for a 2-wire cable instead of a 4-wire cable" });
  unitstate.addProp("RS485 Address",            ValueTypes.BYTE, "A", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, typeOverride: ValueTypes.chararray, numberOfBytes: 1, nullTerm: false });
  unitstate.addProp("HV Boot",                  ValueTypes.HVBOOT, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });         // is an ENUM
  unitstate.addProp("Fahrenheit",               ValueTypes.BOOL, false, { group: GROUPS.ui, info: "True: Fahrenheit, False: Celsius"});
  unitstate.addProp("Screen Volume",            ValueTypes.int, 0, { group: GROUPS.ui, info: "0: no touch screen volume, 255: max touch screen volume", min: 0, max: 255});
  unitstate.addProp("Buzzer Volume",            ValueTypes.int, 0, { group: GROUPS.ui, min: 0, max: 8, info: "0 no sound, 8 max volume." });         // 0 to 8
  unitstate.addProp("User Max Pwr Limit",       ValueTypes.int, 6000, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Min Pwr Limit",       ValueTypes.int, 3000, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Reverse Pwr Limit",   ValueTypes.int, 4000, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Max Trip",            ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("User Min Trip",            ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("User Reverse Trip",        ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("Factory VSWR",             ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.factorylevel, protected: true, info: "Set to 0 to disable." });
  unitstate.addProp("Scale Temp",               ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales temperature [0:8191] where 8191 = 100%" });
  unitstate.addProp("Scale Helix Voltage",      ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info:"Scales helix voltage [0:8191] where 8191 = 100%"});      // ex: for scale_helix_v=4000, helix_v = (adc_count * 4000/4095);
  unitstate.addProp("Scale Helix Current",      ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info:"Scales helix current [0:8191] where 8191 = 100%"});      // ex: exception: temperature is inverted...
  unitstate.addProp("Offset Reverse Power",     ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100, protected: true});         // not scaled: fpower = fpower_cal() + offset_rpower (in dBm x 100)
  unitstate.addProp("Scale Heater Voltage",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info:"Scales heater voltage [0:8191] where 8191 = 100%" });         // not scaled: fpower = fpower_cal() + offset_rpower (in dBm x 100)
  unitstate.addProp("Part Number",              ValueTypes.chararray, "305-XXXX-XXX", { group: GROUPS.unitinfo, isModelConfig: true, modelGroups: modelConfigGroups.unitinfo, numberOfBytes: 13, subGroup: subGroup.info, info: "xxx-xxxx-xxx"});
  unitstate.addProp("Summary Status Alarm",     ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true, info: "indicate the alarm status "});
  // main upc parameters....  also separately further down: upc_mvoltage, upc_db, upc_nudge, upc_interval, upc_maxstep, etc.
  unitstate.addProp("UPC Available",            ValueTypes.BOOL, false, { group: GROUPS.upc, protected: true});
  unitstate.addProp("UPC Enabled",              ValueTypes.BOOL, false, { group: GROUPS.upc, });
  unitstate.addProp("UPC Suspended",            ValueTypes.BOOL, false, { group: GROUPS.upc, readonly: true });
  unitstate.addProp("UPC Slope Defined",        ValueTypes.BOOL, false, { group: GROUPS.upc, });
  unitstate.addProp("UPC Slope Invert",         ValueTypes.BOOL, false, { group: GROUPS.upc, });
  unitstate.addProp("UPC Slope",                ValueTypes.int, 0, { group: GROUPS.upc, units: "mV/dB",});
  unitstate.addProp("UPC Calibrated",           ValueTypes.BOOL, false, { group: GROUPS.upc });
  unitstate.addProp("UPC Clearsky",             ValueTypes.int, 0, { group: GROUPS.upc, units: "mV", });
  unitstate.addProp("UPC Clearsky Atten",       ValueTypes.int, 0, { group: GROUPS.upc, multiplier: 100, units: "dB", });
  unitstate.addProp("UPC Beacon Range",         ValueTypes.BEACONRANGE, 0, { group: GROUPS.upc, });
  unitstate.addProp("Model Config",             ValueTypes.chararray, "807-XXXX-XXX X", { group: GROUPS.unitinfo, numberOfBytes: 16, nullTerm: true, isModelConfig:true, modelGroups: modelConfigGroups.unitinfo, subGroup: subGroup.info, info: "12 char model config part number + revision number" });
  unitstate.addProp("Sample Port 0 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 0 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 1 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 1 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 2 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 2 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 3 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 3 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 4 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 4 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 5 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 5 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 6 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 6 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 7 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 7 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 8 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 8 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 9 Freq",       ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 9 Offset",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 10 Freq",      ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 10 Offset",    ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 11 Freq",      ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 11 Offset",    ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Graph 1",                  ValueTypes.PARAMETER, 0, { group: GROUPS.ui });
  unitstate.addProp("Graph 2",                  ValueTypes.PARAMETER, 0, { group: GROUPS.ui });
  unitstate.addProp("Graph High 0",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 1",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 2",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 3",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 4",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 5",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 6",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 7",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 8",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 9",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 10",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 11",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 12",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 13",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 14",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 15",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 0",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 1",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 2",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 3",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 4",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 5",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 6",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 7",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 8",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 9",              ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 10",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 11",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 12",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 13",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 14",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 15",             ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("System Position",          ValueTypes.BYTE, "A", { group: GROUPS.redundancy, typeOverride: ValueTypes.chararray, nullTerm: false, numberOfBytes: 1, readonly: true, });
  unitstate.addProp("Poll Amp Serial 1",        ValueTypes.chararray, "00000000", { group: GROUPS.redundancy, numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Poll Amp Serial 2",        ValueTypes.chararray, "00000000", { group: GROUPS.redundancy  , numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Poll Ctrl Serial 2",       ValueTypes.chararray, "00000000", { group: GROUPS.redundancy, numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Display Dim",              ValueTypes.short, 0, { group: GROUPS.ui, info: "0 = full brightness, 255 = min bightness, -255 = max brightness"});       // 0 = full brightness, 255 min brightness, -255 max brightness
  unitstate.addProp("Auto Dim Delay",           ValueTypes.short, 0, { group: GROUPS.ui, units: "minutes", info: "0 = no auto dim, otherwise minutes until screen is dimmed." });       // 0 = no auto dim, otherwise minutes til dimming diisplay
  unitstate.addProp("Auto Dim",                 ValueTypes.short, 0, { group: GROUPS.ui, info: "0 = no auto dim, 255 = complete dim." });       // 0 = no auto dim, 255 = complete dim
  unitstate.addProp("Auto Cmd Seconds",         ValueTypes.DWORD, 0, { group: GROUPS.misc, units: "seconds", info: "Elapsed seconds since auto/manual cmd", readonly: true });
  unitstate.addProp("Command Flags 0",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });       // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 1",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 2",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 3",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 4",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 5",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });       // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 6",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 7",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Battery mV",               ValueTypes.WORD, 0, { group: GROUPS.readings, readonly: true, units: "mV" });
  unitstate.addProp("Enable Cathode Current",   ValueTypes.BOOL, true, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, info: "Enabled by default", protected: true });     // default is true
  unitstate.addProp("Enable Autocathode",       ValueTypes.BOOL, true, { group: GROUPS.powercontrol, protected: true, info: "Enabled by default" });     // default is true
  unitstate.addProp("Cathode Current",          ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, info: "([0:4095] Cathode current in counts (mA if KPA)", protected: true});         // cathode current reading in counts. (KPA: beam current reading in mA)
  unitstate.addProp("Ideal Cathode Current",    ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, protected: true,  info: "([0:4095] Ideal cathode current in counts (mA if KPA)"});         // ideal cathode current reading in counts. (KPA: beam current reading in mA)
  unitstate.addProp("Anode Voltage",            ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, min: 0, max: 4095, protected: true, info: "[0:4095] convert to voltage = count * range / 4095 + starting volt" }); // counts written to anode voltage DAC output by auto-cathode routine
  unitstate.addProp("Scale Cathode Current",    ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", isModelConfig: false, modelGroups: modelConfigGroups.cathodemonitor, protected: true, min: 0, max: 8191, info: "Sets max scaled count [0:8191] where nomimal = 8191" });      // represents max scaled count. nominal = 4095
  unitstate.addProp("Amp Tab Parameter 1",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 2",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 3",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 4",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 5",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 6",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 7",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 8",      ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("UPC mV",                   ValueTypes.int, 0, { group: GROUPS.upc, units: "mV", readonly: true, min: 0, max: 10000, info: "[0:10000] mV. Ignores input offset." });         // upc reading from ADC stored as 0-10000 mV regardless of input offset
  unitstate.addProp("UPC dB",                   ValueTypes.int, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, readonly: true, info: "calculated from UPC voltage" });         // upc x100 as calculated from UPC Voltage
  unitstate.addProp("Amp Type",                 ValueTypes.TUBETYPE, 0, { group: GROUPS.unitinfo, isModelConfig: true, modelGroups: modelConfigGroups.unitinfo });         // is an ENUM (e_tubetype) TWT or SSPA
  unitstate.addProp("Linearizer Amplitude",     ValueTypes.short, 0, { group: GROUPS.readings, readonly: true, units: "counts", min: 0, max: 4095, info: "[0:4095] amplitude reading in current selected subband/band" });       // counts
  unitstate.addProp("Linearizer Phase",         ValueTypes.short, 0, { group: GROUPS.readings, readonly: true, units: "counts", min: 0, max: 4095, info: "[0:4095] phase reading in current selected subband/band" });       // counts
  unitstate.addProp("Overdrive Flags",          ValueTypes.OVERDRIVE_FLAGS, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, protected: true, info: "" });        // is an ENUM (kind of) OVERDRIVE_SUPPORTED 1; _MANDATED 2; _ENABLED 4; Orig a BOOL
  unitstate.addProp("Overdrive Limit",          ValueTypes.WORD, 256, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, protected: true, units: "counts", min: 0, max: 256, info: "[0:256]Shown as a voltage on screen" });        // Quad pot counts, shown as voltes of dBmx100 if forward power calibrated
  unitstate.addProp("Overdrive Trip",           ValueTypes.int, 2500, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, protected: true, units: "dB", multiplier: 100 });         // dB x 100; floating trip relative to attenuation setpoint
  unitstate.addProp("Overdrive Stability",      ValueTypes.WORD, 128, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, protected: true, units: "counts", min: 0, max: 256, info: "[0:256]" });        // counts 0-255 (displayed as 0-50 KOhms)
  unitstate.addProp("UPC Nudge",                ValueTypes.short, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "UPC Bias. Offset typically within +- 3dB"});       // dB x1000; aka UPC "bias". Operating UPC offset typically within +/- 3dB
  unitstate.addProp("UPC Interval",             ValueTypes.short, 200, { group: GROUPS.upc, units: "ms", min: 100, max: 15000, info: "Range from 100 to 15000 msec. Default: 500 msec." });     // update interval in msec, 100-1500. Defaut: 500 msec
  unitstate.addProp("UPC Max Step",             ValueTypes.short, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "Default: 1 dB" });       // Maximum adjustment step in dBx100 (default 1 dB)
  unitstate.addProp("System ID",                ValueTypes.BYTE, 0, { group: GROUPS.redundancy, min: 0, max: 15, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });        //
  unitstate.addProp("Out 1 Label",              ValueTypes.chararray, 0, { group: GROUPS.ui, numberOfBytes: 8, nullTerm: false });   // no null terminator
  unitstate.addProp("Out 2 Label",              ValueTypes.chararray, 0, { group: GROUPS.ui, numberOfBytes: 8, nullTerm: false });   // no null terminator
  unitstate.addProp("Power Supply Temperature", ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });        // v70 In degrees C
  unitstate.addProp("Air In Temperature",       ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });         // v70 In degrees C
  unitstate.addProp("Air Out Temperature",      ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });         // v70 In degrees C
  unitstate.addProp("Blower Hz",                ValueTypes.int, 0, { group: GROUPS.readings, units: "Hz", readonly: true});         // v70 Blower frequency in Hz if/as read from ADC
  unitstate.addProp("Blower Frequency",         ValueTypes.int, 0, { group: GROUPS.readings, units: "Hz", readonly: true, info: "Blower frequency setpoint in Hz as written to ADC" });         // v70 Blower frequency setpoint in Hz as written to ADC
  unitstate.addProp("Dual Supply",              ValueTypes.BOOL, false, { group: GROUPS.powercontrol, protected: true });    // v71 Future: possible dual-deck TWTs
  unitstate.addProp("Temperature 2",            ValueTypes.int, 0, { group: GROUPS.readings, units: "C", protected: true, info: "In case of dual supply config" });         // v71 SSPA Temperature 2 reading in case of dual supply configuration
  unitstate.addProp("TComp Enable",             ValueTypes.BOOL, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, info: "Temperature Compensation" });        // v71 SSPA
  unitstate.addProp("TComp Slope",              ValueTypes.float, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, units: "dB/C", info: "Temperature coefficient. Default: 0 = disables compensation." });       // v71 dB/degreeC (aka temp comp coefficient) ( default: 0 which disables compensation)
  unitstate.addProp("TComp Ambient",            ValueTypes.int, 30, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, units: "C", info: "Temperature in C where attenuator was calibrated." });         // v71 temp in C where attenuator was calibrated (AKA ambient)
  unitstate.addProp("TComp Max",                ValueTypes.int, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, units: "C", info: "Temperature in C above which additional compensation will not be added." });         // v71 temp in C above which additional compensation will not be added
  unitstate.addProp("TComp Min",                ValueTypes.int, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, units: "C", info: "Temperature in C below which additional compensation will not be added." });         // v71 temp in C below which additional compensation will not be added
  unitstate.addProp("Read Chainfaults",         ValueTypes.BOOL, false, { group: GROUPS.misc });    // v73 Enable chain fault boxes on 1:1 config
  unitstate.addProp("Output Switches",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.OUTPUTSWITCHES });        // v73 If output switches are part of the system
  unitstate.addProp("Customization",            ValueTypes.CUSTOMIZATION, 0, { group: GROUPS.unitinfo });         // v73 is an ENUM (e_customization) - to track K2 emulation mode for DTV
  unitstate.addProp("Switchover Backoff",       ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100, info: "Only used for K2 emulation. Limits max switchover target power." });         // v75 in dB100. Only for K2 emulation. Limits max switchover target power
  unitstate.addProp("HV Based Inhibit",         ValueTypes.BOOL, false, { group: GROUPS.powercontrol, info: "Checked: CPLD generates RF inhibit during HV off." });    // v80 If CPLD generates RF inhibits during HV off
  unitstate.addProp("HV RF Inhibit",            ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true, info: "Indicates whether the \"HV Based Inhibit\" option is presently generating an inhibit" });    // v80 if CPLD is generationg RF inhbit due to HV off
  unitstate.addProp("Switched FE",              ValueTypes.BOOL, false, { group: GROUPS.powercontrol, protected: true, info: "TWT only" });    // v82 If switched FE hardware (TWT only)
  unitstate.addProp("FE Inhibit",               ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true, info: "Indicates whether \"FE Inhibit\" option is presently generating an inhibit."});    // v82 If RF is inhibited due to switched FE (Either HV is off or recently came on)
  // KPA Stuff:
  unitstate.addProp("KPA Mode",                 ValueTypes.KPAMODE, 0, { group: GROUPS.kpa, propTubeType: "TWT - 2KW" });         // v84 is an ENUM (e_kpda_mode) manual/sleep/autobeam
  unitstate.addProp("Beam Voltage Setpoint",    ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "V", propTubeType: "TWT - 2KW" });         // v84 in Volts
  unitstate.addProp("Max Beam Voltage",         ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "V", propTubeType: "TWT - 2KW" });         // v86 in Volts
  unitstate.addProp("Min Beam Voltage",         ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "V", propTubeType: "TWT - 2KW" });         // v86 in Volts
  unitstate.addProp("Min Sat Power",            ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "dBm", multiplier: 100, propTubeType: "TWT - 2KW" });         // v86 in dBm x 100
  unitstate.addProp("Max Sat Power",            ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "dBm", multiplier: 100, propTubeType: "TWT - 2KW" });         // v86 in dBm x 100
  unitstate.addProp("Autobeam Backoff",         ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "dB", multiplier: 100, propTubeType: "TWT - 2KW", info: "Desired KPA operating point as 'dB below saturation'" });         // v86 in dBm x 100 - Desired KPA op point specified as "dB below saturation"
  unitstate.addProp("Heater Current",           ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "A", multiplier: 100, propTubeType: "TWT - 2KW", info: "Displayed as xx.x A" });         // v86 Amps x 100 - Displayed as xx.x A
  unitstate.addProp("Blower Pressure",          ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "Inches", multiplier: 100, propTubeType: "TWT - 2KW", info: "Displayed as xx.x In" });         // v86 Inches x 100 - Displayed as xx.x In
  unitstate.addProp("Reverse Power 2",          ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "dBm", multiplier: 100, propTubeType: "TWT - 2KW", info: "Klystron reflected power" });         // v86 dBm x 100 - Klystron reflected power
  unitstate.addProp("Tube Fault Temp Trip",           ValueTypes.int, 120, { group: GROUPS.faultalarm, protected: true,visible: true, units: "C", isModelConfig: true, modelGroups: modelConfigGroups.temptrip, propTubeType: "TWT - 2KW", info: "Temperature fault trip level" });         // v90 C, tube temp trip (for KPAs)
  unitstate.addProp("Low Heater Trip",          ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "A", multiplier: 100, propTubeType: "TWT - 2KW", info: "0 = trip disabled." });         // v91 Amps x 100 - 0 = trip disabled
  unitstate.addProp("Body Current @Min BeamV",  ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "mA", multiplier: 100, propTubeType: "TWT - 2KW", info: "Nominal body current at minimum beam voltage." });         // v91 nominal body current (mA x 100) at min beam voltage
  unitstate.addProp("Body Current @Max BeamV",  ValueTypes.int, 0, { group: GROUPS.kpa, readonly: true, visible: true, units: "mA", multiplier: 100, propTubeType: "TWT - 2KW", info: "Nominal body current at maximum beam voltage." });         // v91 nominal body current (mA x 100) at max beam voltage
  // END KPA STUFF
  unitstate.addProp("GMT Minutes",              ValueTypes.short, 0, { group: GROUPS.misc, units: "minutes", min: -59, max: 59, info: "GMT additional offset in minutes", subGroup: subGroup.GMT, });       // v91 GMT additional offset in minutes
  unitstate.addProp("NTP Interval",             ValueTypes.short, 0, { group: GROUPS.misc, typeOverride: ValueTypes.BOOL, info: "Checked: Enable NTP 24HR refresh.", subGroup: subGroup.GMT, });       // v94 NTP 24HR refresh enable
  unitstate.addProp("Alternate Amp ID",         ValueTypes.BYTE, 0, { group: GROUPS.misc });        // v94 Nonzero means use 1/2/3 instead of A/B/C (originally a BYTE)
  unitstate.addProp("Customer Password",        ValueTypes.BOOL, 0, { group: GROUPS.misc });        // v94 If customer password is enabled
  unitstate.addProp("Latch Temp Faults",        ValueTypes.BOOL, 0, { group: GROUPS.faultalarm, isModelConfig: true, modelGroups: modelConfigGroups.temptrip });        // v94 If temperature faults set a summary fault
  unitstate.addProp("Sticky Adjust",            ValueTypes.BOOL, 0, { group: GROUPS.ui, visible: true });        // v94 For single handed power adjustment
  unitstate.addProp("Heater Control",           ValueTypes.HEATERCTRL, 0, { group: GROUPS.misc });        // v101 Heater control features (is an ENUM sort of) ( HEATER_ definitions)
  // unitstate.addProp("FILLER ",                  ValueTypes.WORD, 0);        // v101 If input switches are part of the system
  unitstate.addProp("Input Switching",          ValueTypes.WORD, 0, { group: GROUPS.redundancy, overriden: true, typeOverride: ValueTypes.BOOL, numberOfBytes:2});        // v101 If input switches are part of the system
  unitstate.addProp("RF Input 1 Label",         ValueTypes.chararray, "", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 2 Label",         ValueTypes.chararray, "", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 3 Label",         ValueTypes.chararray, "", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 4 Label",         ValueTypes.chararray, "", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("Hide Antenna",             ValueTypes.BOOL, false, { group: GROUPS.ui });
  unitstate.addProp("Fast VSWR",                ValueTypes.BOOL, false, { group: GROUPS.powercontrol, protected: true, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots});
  unitstate.addProp("Disable Heater Standby",   ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("Fast VSWR Trip",           ValueTypes.short, 255, { group: GROUPS.digitalpots, protected: true, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, units: "counts", min: 0, max: 256, info: "[0:256]" });       // Fast VSWR trip threshold, counts from 0 - 255
  unitstate.addProp("Allow Cross paths",        ValueTypes.BOOL, 0, { group: GROUPS.redundancy });        // v112: 0 = don't allow RF path A/B cross-routing for 1:2 input switch config
  unitstate.addProp("Fixed Gain Switchover",    ValueTypes.BOOL, 0, { group: GROUPS.redundancy });        // v123: 1 = no goto power during 1:2 switchover.  0 = execute goto power at switchover.
  unitstate.addProp("Path A Attenuation",       ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // absolute attenuation dB x 100 for Amp C to activate upon replacing A. 0 = don't change atten
  unitstate.addProp("Path B Attenuation",       ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // absolute attenuation dB x 100 for Amp C to activate upon replacing B. 0 = don't change atten
  unitstate.addProp("Path A Delta",             ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // Additional gain to apply to gotopower/UPC when amp-C replaces Amp-A
  unitstate.addProp("Path B Delta",             ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // Additional gain to apply to gotopower/UPC when amp-C replaces Amp-B
  unitstate.addProp("Switchover Priority 1:2",  ValueTypes.SWPRIORITY, 0, { group: GROUPS.redundancy });         // is an ENUM (e_sw_priority)
  unitstate.addProp("RF Sample",                ValueTypes.SAMPLERF, 0, { group: GROUPS.powercontrol, protected: true });        // v133 Each bit enables an RF port to be sampled, ex: SAMPLE_COMBINED_ANTENNA
  unitstate.addProp("Offset RF Antenna",        ValueTypes.int, 0, { group: GROUPS.powercontrol, protected: true, units: "dB", multiplier: 100 });         // dB x 100 to be added to forward power curve when reading combined atenna/fwd power
  unitstate.addProp("Offset RF Load",           ValueTypes.int, 0, { group: GROUPS.powercontrol, protected: true, units: "dB", multiplier: 100 });         // dB x 100 to be added to forward power curve when reading combined load power
  unitstate.addProp("Language",                 ValueTypes.LANGUAGE, 0, { group: GROUPS.ui });         // v143 is an ENUM (e_language)
  unitstate.addProp("No Inverter",              ValueTypes.BOOL, 0, { group: GROUPS.powercontrol, protected: true });        // v147 for 2Kw only
  unitstate.addProp("UPC Ratio",                ValueTypes.int, 0, { group: GROUPS.upc, units: "ratio", multiplier: 100, info: "Ratio of [uplink gain change] vs [beacon downlink change]. Ex: 0 = 1:1" });         // v153: x100 ratio of [uplink gain change] vs [beacon downlink change]
  unitstate.addProp("UPC Cap",                  ValueTypes.int, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "0 = no cap"});         // Max UPC gain increase in dB x1000. 0 = no cap
  unitstate.addProp("Show UPC Delta",           ValueTypes.BOOL, false, { group: GROUPS.upc });
  unitstate.addProp("SNMP Community RO",        ValueTypes.chararray, "", { group: GROUPS.comm, numberOfBytes: 41, protected: true });
  unitstate.addProp("SNMP Community RW",        ValueTypes.chararray, "", { group: GROUPS.comm, numberOfBytes: 41, protected: true });
  unitstate.addProp("HV Count",                 ValueTypes.DWORD, 0, { group: GROUPS.readings, units: "counts", readonly: true, min: 0, max: 4095, info: "[0:4095]"});       // v166
  unitstate.addProp("HV Divider Ratio",         ValueTypes.BYTE, 0, { group: GROUPS.powercontrol, protected: true });
  unitstate.addProp("Negative Anode",           ValueTypes.BOOL, false, { group: GROUPS.powercontrol, visible: false, info: "Anode Voltage is negative" });
  unitstate.addProp("Linearizer Slope",         ValueTypes.short, 0, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 4095, info: "[0:4095]"});
  unitstate.addProp("Linearizer Tilt",          ValueTypes.short, 0, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 4095, info: "[0:4095]"});
  unitstate.addProp("Power Supply Voltage",     ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", min: 0, max: 4095, info: "[0:4095]"});
  unitstate.addProp("FE Delay",                 ValueTypes.WORD, 0,  { group: GROUPS.powercontrol, units: "ms" });
  unitstate.addProp("Current Subband",          ValueTypes.CURRENTSUBBAND, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband });
  unitstate.addProp("RF Band Number",           ValueTypes.RFBANDNUMBER, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband });
  unitstate.addProp("Number of Installed Bands",ValueTypes.INSTALLEDBAND, 1, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("Subband Count",            ValueTypes.CURRENTSUBBAND, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band ID 1",             ValueTypes.RFBANDID, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band ID 2",             ValueTypes.RFBANDID, 255, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band ID 3",             ValueTypes.RFBANDID, 255, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band ID 4",             ValueTypes.RFBANDID, 255, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 1",           ValueTypes.float, 14.125, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true, info: "Center Frequency of Band" });
  unitstate.addProp("RF Band Freq 2",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 3",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 4",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Sub Band Freq 1",       ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Sub Band Freq 2",       ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Sub Band Freq 3",       ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Sub Band Freq 4",       ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("Multi Band",               ValueTypes.BOOL, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true, info: "Tri-Band Option" });
  unitstate.addProp("NTP Server",               ValueTypes.IPADDR4, 0, { group: GROUPS.misc, subGroup: subGroup.GMT, });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Address",               ValueTypes.IPADDR4, "10.0.0.254", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Mask",                  ValueTypes.IPADDR4, "255.255.255.0", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Gateway",               ValueTypes.IPADDR4, "0.0.0.0", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Multicast",             ValueTypes.IPADDR4, 0, { group: GROUPS.comm, });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("Use Multicast",            ValueTypes.BOOL, false, { group: GROUPS.comm, });
  unitstate.addProp("Amp Config Mask",          ValueTypes.WORD, 0, { group: GROUPS.misc, readonly: true });
  unitstate.addProp("VTune Level",              ValueTypes.WORD, 128, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 256, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, info: "[0:256] where 256 = 100%"});
  unitstate.addProp("Spare Pot",                ValueTypes.WORD, 128, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 256, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, info: "[0:256] where 256 = 100%"});
  unitstate.addProp("Negative Anode Mode",      ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, info: "true if amp has a neative anode voltage" });
  unitstate.addProp("Starting Anode Voltage",   ValueTypes.int, -6000, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, units: "V", protected: true, min: -10000, max: 0, info: "Starting voltage for a negative anode [-10000:0]"});
  unitstate.addProp("Max Anode Voltage",        ValueTypes.int, 500, { group: GROUPS.powercontrol, units: "V", protected: true, min: 0, max: 1000, info: "Tube dependant [0:1000]"  });
  unitstate.addProp("Anode Volt Range",         ValueTypes.int, 6000, { group: GROUPS.powercontrol, units: "V", protected: true, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, min: 0, max: 10000, info: "[0:10000]" });
  unitstate.addProp("PWM Fan Frequency",        ValueTypes.WORD, 0, { group: GROUPS.misc, units: "Hz", readonly: true, info: "Frequency of the PWM signal used for PWM fans"} );
  unitstate.addProp("Tube Alarm Temp Trip",     ValueTypes.short, 120, { group: GROUPS.faultalarm, isModelConfig: true, modelGroups: modelConfigGroups.temptrip, units: "C", info: "Temperature Alarm Level" });
  unitstate.addProp("Inlet Temp Difference",    ValueTypes.short, 50, { group: GROUPS.faultalarm, isModelConfig: true, modelGroups: modelConfigGroups.temptrip, units: "C", info: "The temperature difference between inlet and internal temperature to throw alarm" });
  unitstate.addProp("Scale Heater Current",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales heater current ADC counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale Battery Sensor",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales battery sensor voltage ADC counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale Forward RF Power",   ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales forward RF ADC counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale Reverse RF Power",   ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales reverse RF ADC counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale UPC Voltage",        ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales UPC voltage ADC counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale Inlet Temperature",  ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales inlet temperature ADC counts [0:8091] where 8091 = 100%"});
  unitstate.addProp("Scale ADC Channel 11",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales ADC Channel 11 counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale ADC Channel 13",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales ADC Channel 13 counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale ADC Channel 14",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales ADC Channel 14 counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("Scale ADC Channel 15",     ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, min: 0, max: 8191, info: "Scales ADC Channel 15 counts [0:8191] where 8191 = 100%"});
  unitstate.addProp("User Alarm Enable 1",      ValueTypes.BOOL, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("User Alarm Enable 2",      ValueTypes.BOOL, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("Factory Forward Power Trip", ValueTypes.int, 0, { group: GROUPS.faultalarm, protected: true, visible: true, isModelConfig: true, modelGroups: modelConfigGroups.factorylevel, units: "dBm", multiplier: 100, info: "Set to 0 to disable. Peak Power" });
  unitstate.addProp("Tube Subtype",             ValueTypes.TUBESUBTYPE, 0, { group: GROUPS.powercontrol, protected: true, visible: true });
  unitstate.addProp("Require EXC",              ValueTypes.BOOL, false, { group: GROUPS.redundancy, protected: true, visible: true });
  unitstate.addProp("Obsolete IP",            ValueTypes.DWORD, 0, {  group: GROUPS.misc, protected: true, visible: false, info: "Last IP to program this unit"});
  unitstate.addProp("Web Password",             ValueTypes.chararray, 0, { group: GROUPS.misc, numberOfBytes: 20, nullTerm: true });
  unitstate.addProp("AMC Digital IO",           ValueTypes.WORD, 0, { group: GROUPS.misc });
  unitstate.addProp("AMC DAC Count 1",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 2",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 3",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 4",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 5",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 6",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 7",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("AMC DAC Count 8",          ValueTypes.WORD, 0, { group: GROUPS.digitalpots, units: "counts", protected: true, min: 0, max: 4095, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 1",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 2",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 3",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 4",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 1",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 2",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 3",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 4",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 1",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 2",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 3",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 4",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 1",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 2",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 3",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 4",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Gain Balance Subband 1",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 2",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 3",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 4",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Auto Update IP",           ValueTypes.DWORD, 0, { group: GROUPS.misc, overridden: true, readonly: true, typeOverride: ValueTypes.IPADDR, info: "Whoever last reprogrammed the device" });       // v171
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("UPC Power Cap",            ValueTypes.int, 0,  { group: GROUPS.upc, multiplier: 100, units: "dBm", info: "Max UPC algorithm output" });
  unitstate.addProp("UPC Target Size",          ValueTypes.int, 0,  { group: GROUPS.upc, multiplier: 100, units: "dBm", info: "Minimum delta from target power required before UPC adjusts attenuator" });
  unitstate.addProp("UPC Clearsky Zone",        ValueTypes.int, 0,  { group: GROUPS.upc, multiplier: 100, units: "dBm", info: "Minimum clearsky delta before UPC adjusts attenuator" });
  unitstate.addProp("UPC Clearsky Ceiling",     ValueTypes.BOOL, 0, { group: GROUPS.upc, info: "If True: UPC treats beacon values above clearsky as clearsky itself; no gain decrease" });
  unitstate.addProp("IP DNS",                   ValueTypes.IPADDR4, 0, { group: GROUPS.comm,});
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",              ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("NTP6 Server",              ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("IP6 Address",              ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("IP6 Mask",                 ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("IP6 Gateway",              ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("IP6 Multicast",            ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("IP6 DNS",                  ValueTypes.IPADDR128, 0, { group: GROUPS.comm, });
  unitstate.addProp("Auto Update IP6",          ValueTypes.IPADDR128, 0, { group: GROUPS.misc, readonly: true, info: "Whoever last reprogrammed the device" });
  unitstate.addProp("AutoRecovery Enable",      ValueTypes.BOOL, false, { group: GROUPS.redundancy, isModelConfig: true, modelGroups: modelConfigGroups.redundancy, info: "True when Autorecovery Mode enabled" });
  unitstate.addProp("AutoRecovery Boost Active",ValueTypes.BOOL, false, { group: GROUPS.redundancy, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });
  unitstate.addProp("Burst Power Enable",       ValueTypes.BOOL, false, { group: GROUPS.redundancy, info: "True for Burst RF Power measurements"});
  unitstate.addProp("Output Power limit level", ValueTypes.int, 0, {group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, multiplier: 100, units: "dBm", info: "Max Output Power Level in dBm"});
  unitstate.addProp("Output Power limit Range", ValueTypes.int, 0, {group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, multiplier: 100, units: "dB", info: "The max amount of attenuation, in dB, to use to keep Output power under the limit."});
  unitstate.addProp("Input Power limit level",  ValueTypes.int, 0, {group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, multiplier: 100, units: "dBm", info: "Max Input Power Level in dBm. Usually a negative value." });
  unitstate.addProp("Input Power threshold level", ValueTypes.int, 0, {group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, multiplier: 100, units: "dBm", info: "Min Input Power Level to measure input power, in dBm. Usually a negative value." });
  unitstate.addProp("Power Limit enabled",      ValueTypes.BOOL, false, {group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, info : "True to enable Input & Output Power Limits feature."});
  unitstate.addProp("Use multisegment TC",      ValueTypes.BOOL, false, {group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, info: "True to use a multi-segment temperature compensation cal table"});
  unitstate.addProp("TC segment points subband 1",      ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                   );
  unitstate.addProp("TC segment points subband 2",        ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                 );

  unitstate.addProp("TC segment points subband 3",        ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs serperate by a semicolon"
                                                        }
                 );
  unitstate.addProp("TC segment points subband 4",      ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                   );
  
  unitstate.addProp("TC uses temp2",            ValueTypes.BOOL, false, {group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, info: "True to use the second temperature sensor for temperature compensation"  });
  unitstate.addProp("unused",                   ValueTypes.int, false, {visible: false})
  unitstate.addProp("GoTo Power 1:1",           ValueTypes.BOOL, false, {group: GROUPS.REDUNDANCY, info: "True to use GoTo Power feature for 1-for-1 redundant mode"})
  unitstate.addProp("xml file length",         ValueTypes.int, 0, {group: GROUPS.misc, })
  unitstate.addProp("RF Band Freq 5",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 6",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 7",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("RF Band Freq 8",           ValueTypes.float, 0, { group: GROUPS.powercontrol, units: "GHz", isModelConfig: true, modelGroups: modelConfigGroups.rfband, protected: true });
  unitstate.addProp("Linearizer AMP Subband 5",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 6",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 7",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer AMP Subband 8",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 5",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 6",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 7",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Phase Subband 8",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 5",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 6",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 7",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Slope Subband 8",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 5",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 6",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 7",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Linearizer Tilt Subband 8",  ValueTypes.short, 0, { group: GROUPS.powercontrol, units: "counts", protected: true, min: 0, max: 4095, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, info:"[0:4095]" });
  unitstate.addProp("Gain Balance Subband 5",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 6",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 7",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("Gain Balance Subband 8",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", protected: true, multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer, min: 0 });
  unitstate.addProp("TC segment points subband 5",      ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                   );
  unitstate.addProp("TC segment points subband 6",        ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                 );

  unitstate.addProp("TC segment points subband 7",        ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs serperate by a semicolon"
                                                        }
                 );
  unitstate.addProp("TC segment points subband 8",      ValueTypes.chararray, "0.0:75;5.2:35;10.5:-5;13.5:-30", 
                                                        { 
                                                          group: GROUPS.misc, numberOfBytes: 64, isModelConfig: true, 
                                                          modelGroups: modelConfigGroups.tcomp, info: "A series of four attenuation: temperature pairs seperate by a semicolon"
                                                        }
                   );

  unitstate.addProp("HEX leftover",             ValueTypes.raw, 0, { group: GROUPS.misc, readonly: true, info: "Unknown remaining hex of state file" });       // v166

  }
