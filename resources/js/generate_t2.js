function generateT2(unitstate) {
  unitstate.addProp("Size",                   ValueTypes.int, 0, { group: GROUPS.unitinfo, readonly: true, units: "bytes", info: "Size of amp state in bytes" });
  unitstate.addProp("Checksum",               ValueTypes.int, 0, { group: GROUPS.unitinfo, readonly: true });
  unitstate.addProp("Signature",              ValueTypes.chararray, "T2 Status", { group: GROUPS.unitinfo, numberOfBytes: 10, readonly: true });
  unitstate.addProp("Firmware Version",       ValueTypes.chararray, "", { group: GROUPS.unitinfo, numberOfBytes: 4 });
  unitstate.addProp("Serial Number",          ValueTypes.chararray, "", { group: GROUPS.unitinfo, numberOfBytes: 10, protected: true });
  unitstate.addProp("Beta",                   ValueTypes.BOOL, false, { group: GROUPS.unitinfo, readonly: true }) ,
  unitstate.addProp("Remote Mode",            ValueTypes.BOOL, false, { group: GROUPS.unitinfo });
  unitstate.addProp("Automatic Mode",         ValueTypes.BOOL, false, { group: GROUPS.unitinfo, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });
  unitstate.addProp("Forward Pwr",            ValueTypes.int, 0, { group: GROUPS.readings, units: "dBm", multiplier: 100, readonly: true });
  unitstate.addProp("Reverse Pwr",            ValueTypes.int, 0, { group: GROUPS.readings, units: "dBm", multiplier: 100, readonly: true });
  unitstate.addProp("Temperature",            ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });
  unitstate.addProp("Helix Current",          ValueTypes.int, 0, { group: GROUPS.readings, units: "mA", multiplier: 100, readonly: true });
  unitstate.addProp("Helix Voltage",          ValueTypes.int, 0, { group: GROUPS.readings, units: "V", readonly: true });
  unitstate.addProp("Heater Voltage",         ValueTypes.int, 0, { group: GROUPS.readings, units: "V", multiplier: 100, readonly: true });
  unitstate.addProp("Gain Balance Enable",    ValueTypes.BOOL,false,  { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });
  unitstate.addProp("Unused2",                ValueTypes.int, 0,      { visible: false });
  unitstate.addProp("Unused3",                ValueTypes.BOOL,false,  { visible: false });
  unitstate.addProp("Unused4",                ValueTypes.int, 0,      { visible: false });
  unitstate.addProp("Attenuator",             ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });
  unitstate.addProp("Attenuator Counts",      ValueTypes.int, 4095, { units: "counts", info: "[0:4095]", readonly: true, isModelConfig: true, modelGroups: modelConfigGroups.linearizer});
  unitstate.addProp("RF Offset",              ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100});
  unitstate.addProp("Constant Pwr Target",    ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("Constant Pwr Enable",    ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("Constant Pwr Suspend",   ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true });
  unitstate.addProp("RF Dropout",             ValueTypes.int, 0, { group: GROUPS.powercontrol, readonly: true,  typeOverride: ValueTypes.BOOL, numberOfBytes: 4, }); //
  unitstate.addProp("FTD",                    ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true });
  unitstate.addProp("HV Selected",            ValueTypes.BOOL, false, { group: GROUPS.powercontrol });
  unitstate.addProp("HV On",                  ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("RF Inhibit",             ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("Inhibit Selected",       ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true, info: "Local setting. See 'Inhibit Invert'" });
  unitstate.addProp("External Inhibit",       ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("Overdrive Inhibit",      ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("SW1 Inhibit",            ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("SW2 Inhibit",            ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  unitstate.addProp("HV Divider",             ValueTypes.int, 2000,   { group: GROUPS.powercontrol, typeOverride: ValueTypes.HVDIVIDER, info: "2000 or 1000", protected: true});
  unitstate.addProp("Heater Time",            ValueTypes.DWORD, 0,    { group: GROUPS.readings, multiplier: 60, units: "hours", readonly: true});
  unitstate.addProp("Beam Time",              ValueTypes.DWORD, 0,    { group: GROUPS.readings, multiplier: 60, units: "hours", readonly: true});
  unitstate.addProp("Fault",                  ValueTypes.int, false,  { group: GROUPS.faultalarm, typeOverride: ValueTypes.BOOL, numberOfBytes: 4, protected: true });
  unitstate.addProp("Fault 1",                ValueTypes.BOOL, false, { group: GROUPS.faultalarm, protected: true });
  unitstate.addProp("Fault 2",                ValueTypes.BOOL, false, { group: GROUPS.faultalarm, protected: true });
  unitstate.addProp("SW1 Position",           ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, or blank if not detected"});
  unitstate.addProp("SW2 Position",           ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, or blank if not detected"});
  unitstate.addProp("VPC Position",           ValueTypes.int, "A", { group: GROUPS.readings, typeOverride: ValueTypes.char, numberOfBytes: 4, readonly: true, info: "Position A, B, C, D, or blank if not detected"});
  unitstate.addProp("CFG Redundancy",         ValueTypes.REDUNDANCY, 0, { group: GROUPS.redundancy, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });             // is an ENUM
  unitstate.addProp("PWR Units",              ValueTypes.PWRUNITS, 0, { group: GROUPS.ui });             // is an ENUM
  unitstate.addProp("GMT Offset",             ValueTypes.short, 0, { group: GROUPS.unitinfo });
  var old_ntp_index = unitstate.addProp("NTP Server",  ValueTypes.DWORD, 0, { group: GROUPS.comm, typeOverride: ValueTypes.IPADDR, visible: false });
  var old_ip_address = unitstate.addProp("IP Address", ValueTypes.DWORD, 0, { group: GROUPS.comm, typeOverride: ValueTypes.IPADDR, visible: false });
  var old_ip_mask = unitstate.addProp("IP Mask",       ValueTypes.DWORD, 0, { group: GROUPS.comm, typeOverride: ValueTypes.IPADDR, visible: false });
  var old_ip_gateway = unitstate.addProp("IP Gateway", ValueTypes.DWORD, 0, { group: GROUPS.comm, typeOverride: ValueTypes.IPADDR, visible: false });
  unitstate.addProp("Use DHCP",               ValueTypes.BOOL, true, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("RF Inhibit Invert",      ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol, info: "Set to use inverted RF inhibit, disable to use Xicom standard inhibit.", isModelConfig: true });
  unitstate.addProp("COM1 Baud",             ValueTypes.BAUD, 9600, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, units: "baud" });
  unitstate.addProp("COM2 Baud",             ValueTypes.BAUD, 9600, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, units: "baud" });
  unitstate.addProp("COM1 Data",             ValueTypes.DATA_BITS, 8, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Data",             ValueTypes.DATA_BITS, 8, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM1 Stop",             ValueTypes.STOP_BITS, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Stop",             ValueTypes.STOP_BITS, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM1 Parity",           ValueTypes.PARITY, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("COM2 Parity",           ValueTypes.PARITY, 0, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm });
  unitstate.addProp("RS485 Termination",      ValueTypes.BOOL, false, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, info: "Set to enable RS485 termination"});
  unitstate.addProp("RS485 2Wire",            ValueTypes.BOOL, false, { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, info: "Set to configure RS485 for a 2-wire cable instead of a 4-wire cable" });
  unitstate.addProp("RS485 Address",          ValueTypes.BYTE, "A", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, typeOverride: ValueTypes.chararray, numberOfBytes: 1, nullTerm: false });
  unitstate.addProp("HV Boot",                ValueTypes.HVBOOT, 0, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });         // is an ENUM
  unitstate.addProp("Fahrenheit",             ValueTypes.BOOL, false, { group: GROUPS.ui, info: "True: Fahrenheit, False: Celsius"});
  unitstate.addProp("Screen Volume",          ValueTypes.int, 0, { group: GROUPS.ui, info: "0: no touch screen volume, 255: max touch screen volume", min: 0, max: 255});
  unitstate.addProp("Buzzer Volume",          ValueTypes.int, 0, { group: GROUPS.ui, min: 0, max: 8, info: "0 no sound, 8 max volume." });         // 0 to 8
  unitstate.addProp("User Max Pwr Limit",     ValueTypes.int, 0, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Min Pwr Limit",     ValueTypes.int, 0, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Reverse Pwr Limit", ValueTypes.int, 0, { group: GROUPS.faultalarm, units: "dBm", multiplier: 100 });         // dBm x 100
  unitstate.addProp("User Max Trip",          ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("User Min Trip",          ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("User Reverse Trip",      ValueTypes.EVENT, 0, { group: GROUPS.faultalarm });
  unitstate.addProp("Factory VSWR",           ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.factorylevel, info: "Set to 0 to disable." });
  unitstate.addProp("Scale Temp",             ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", protected: true, info: "Sets new max scaled count", min: 0, max: 8191 });
  unitstate.addProp("Scale Helix Voltage",    ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", min: 0, max: 8191, info: "Scale helix voltage. 4095 = 100%"});      // ex: for scale_helix_v=4000, helix_v = (adc_count * 4000/4095);
  unitstate.addProp("Scale Helix Current",    ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", min: 0, max: 8191, info: "Scale helix current. 4095 = 100%"});
  unitstate.addProp("Offset Reverse Power",   ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dBm", multiplier: 100 });         // not scaled: fpower = fpower_cal() + offset_rpower (in dBm x 100)
  unitstate.addProp("Scale Heater Voltage",   ValueTypes.int, 0, { group: GROUPS.scale, protected: true });         // not scaled: fpower = fpower_cal() + offset_rpower (in dBm x 100)
  unitstate.addProp("Part Number",           ValueTypes.chararray, "xxx-xxxx-xxx", { group: GROUPS.unitinfo, numberOfBytes: 13, protected: true, isModelConfig: true, modelGroups: modelConfigGroups.unitinfo, info: "xxx-xxxx-xxx"});
  unitstate.addProp("Alarm",                  ValueTypes.BOOL, false, { group: GROUPS.readings, readonly: true });
  // main upc parameters....  also separately further down: upc_mvoltage, upc_db, upc_nudge, upc_interval, upc_maxstep, etc.
  unitstate.addProp("UPC Available",          ValueTypes.BOOL, false, { group: GROUPS.upc, protected: true, isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Enabled",            ValueTypes.BOOL, false, { group: GROUPS.upc, isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Suspended",          ValueTypes.BOOL, false, { group: GROUPS.upc, readonly: true });
  unitstate.addProp("UPC Slope Defined",      ValueTypes.BOOL, false, { group: GROUPS.upc, isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Slope Invert",       ValueTypes.BOOL, false, { group: GROUPS.upc, isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Slope",              ValueTypes.int, 0, { group: GROUPS.upc, units: "mV/dB", isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Calibrated",         ValueTypes.BOOL, false, { group: GROUPS.upc });
  unitstate.addProp("UPC Clearsky",           ValueTypes.int, 0, { group: GROUPS.upc, units: "mV", isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Clearsky Atten",     ValueTypes.int, 0, { group: GROUPS.upc, multiplier: 100, units: "dB", isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("UPC Beacon Range",       ValueTypes.BEACONRANGE, 0, { group: GROUPS.upc, isModelConfig: true, modelGroups: modelConfigGroups.upc });
  unitstate.addProp("Model Config",           ValueTypes.chararray, "000-0000-000 X", { group: GROUPS.unitinfo, numberOfBytes: 16, nullTerm: true, protected: true, info: "12 char model config part number + revision letter", isModelConfig: true, modelGroups: modelConfigGroups.unitinfo });
  unitstate.addProp("Sample Port 0 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 0 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 1 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 1 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 2 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 2 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 3 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 3 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 4 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 4 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 5 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 5 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 6 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 6 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 7 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 7 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 8 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 8 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 9 Freq",     ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 9 Offset",   ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 10 Freq",    ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 10 Offset",  ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Sample Port 11 Freq",    ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "GHz", multiplier: 1000 });
  unitstate.addProp("Sample Port 11 Offset",  ValueTypes.WORD, 0, { group: GROUPS.sampleport, units: "dB",  multiplier: 100 });
  unitstate.addProp("Graph 1",                ValueTypes.PARAMETER, 0, { group: GROUPS.ui });
  unitstate.addProp("Graph 2",                ValueTypes.PARAMETER, 0, { group: GROUPS.ui });
  unitstate.addProp("Graph High 0",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 1",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 2",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 3",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 4",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 5",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 6",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 7",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 8",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 9",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 10",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 11",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 12",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 13",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 14",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph High 15",          ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 0",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 1",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 2",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 3",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 4",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 5",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 6",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 7",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 8",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 9",            ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 10",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 11",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 12",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 13",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 14",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("Graph Low 15",           ValueTypes.short, 0, { group: GROUPS.ui, units: "units" });
  unitstate.addProp("System Position",        ValueTypes.BYTE, "A", { group: GROUPS.unitinfo, typeOverride: ValueTypes.chararray, nullTerm: false, numberOfBytes: 1, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });
  unitstate.addProp("Poll Amp Serial 1",      ValueTypes.chararray, "00000000", { group: GROUPS.redundancy, numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Poll Amp Serial 2",      ValueTypes.chararray, "00000000", { group: GROUPS.redundancy, numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Poll Ctrl Serial 2",     ValueTypes.chararray, "00000000", { group: GROUPS.redundancy, numberOfBytes: 10, nullTerm: true, info: "For legacy (pre-UDP) systems." });  // 9 digit SN including null terminator
  unitstate.addProp("Display Dim",            ValueTypes.short, 0, { group: GROUPS.ui, info: "0 = full brightness, 255 = min bightness, -255 = max brightness"});       // 0 = full brightness, 255 min brightness, -255 max brightness
  unitstate.addProp("Auto Dim Delay",         ValueTypes.short, 0, { group: GROUPS.ui, units: "minutes", info: "0 = no auto dim, otherwise minutes until screen is dimmed." });       // 0 = no auto dim, otherwise minutes til dimming diisplay
  unitstate.addProp("Auto Dim",               ValueTypes.short, 0, { group: GROUPS.ui, info: "0 = no auto dim, 255 = complete dim." });       // 0 = no auto dim, 255 = complete dim
  unitstate.addProp("Auto Cmd Seconds",       ValueTypes.DWORD, 0, { group: GROUPS.misc, units: "seconds", info: "Elapsed seconds since auto/manual cmd", readonly: true });
  unitstate.addProp("Command Flags 0",        ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });       // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 1",        ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Command Flags 2",        ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.AMPCMD, numberOfBytes: ValueTypes.WORD.bytes, readonly: true });        // is an ARRAY. Amp A, Amp B, Amp C. (uses e_amp_command)
  unitstate.addProp("Battery mV",             ValueTypes.WORD, 0, { group: GROUPS.readings, readonly: true, units: "mV" });
  unitstate.addProp("Enable Cathode I",       ValueTypes.BOOL, true, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, info: "Enabled by default", protected: true });     // default is true
  unitstate.addProp("Enable Autocathode",     ValueTypes.BOOL, true, { group: GROUPS.powercontrol, info: "Enabled by default" });     // default is true
  unitstate.addProp("Cathode Current",        ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, info: "[0:4095] counts) (mA if KPA)", readonly: true});         // cathode current reading in counts. (KPA: beam current reading in mA)
  unitstate.addProp("Ideal Cathode Current",  ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, min: 0, max: 4095, info: "([0:4095] counts) (mA if KPA)"});         // ideal cathode current reading in counts. (KPA: beam current reading in mA)
  unitstate.addProp("Anode Voltage",          ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "counts", isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, min: 0, max: 4095, info: "[0:4095]"});         // counts written to anode voltage DAC output by auto-cathode routine
  unitstate.addProp("Scale Cathode Current",  ValueTypes.int, 4095, { group: GROUPS.scale, units: "counts", isModelConfig: true, modelGroups: modelConfigGroups.cathodemonitor, protected: true, min: 0, max: 8191, info: "[0:8191]" });      // represents max scaled count. nominal = 4095
  unitstate.addProp("Amp Tab Parameter 1",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 2",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 3",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 4",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 5",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 6",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 7",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("Amp Tab Parameter 8",    ValueTypes.BYTE, 0, { group: GROUPS.ui, typeOverride: ValueTypes.ANALOGCHANNEL });
  unitstate.addProp("UPC mV",                 ValueTypes.int, 0, { group: GROUPS.upc, units: "mV", readonly: true, min: 0, max: 10000, info: "[0:10000] mV. Ignores input offset." });         // upc reading from ADC stored as 0-10000 mV regardless of input offset
  unitstate.addProp("UPC dB",                 ValueTypes.int, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, readonly: true, info: "calculated from UPC voltage" });         // upc x100 as calculated from UPC Voltage
  unitstate.addProp("Amp Type",              ValueTypes.TUBETYPE, 0, { group: GROUPS.unitinfo, isModelConfig: true, modelGroups: modelConfigGroups.unitinfo });         // is an ENUM (e_tubetype) TWT or SSPA
  unitstate.addProp("Linearizer Amplitude",   ValueTypes.short, 0, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 4095, info: "[0:4095]", isModelConfig: true, modelGroups: modelConfigGroups.linearizer });       // counts
  unitstate.addProp("Linearizer Phase",       ValueTypes.short, 0, { group: GROUPS.digitalpots, units: "counts", min: 0, max: 4095, info: "[0:4095]", isModelConfig: true, modelGroups: modelConfigGroups.linearizer });       // counts
  unitstate.addProp("Overdrive Flags",        ValueTypes.OVERDRIVE_FLAGS, 0, { group: GROUPS.powercontrol, info: "" });        // is an ENUM (kind of) OVERDRIVE_SUPPORTED 1; _MANDATED 2; _ENABLED 4; Orig a BOOL
  unitstate.addProp("Overdrive Limit",        ValueTypes.BYTE, 0, { group: GROUPS.digitalpots, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, units: "counts", min: 0, max: 255, info: "[0:255] Shown as a voltage on screen. [0:255]" });        // Quad pot counts, shown as voltes of dBmx100 if forward power calibrated
  unitstate.addProp("Overdrive Trip",         ValueTypes.int, 0,  { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, units: "dB", multiplier: 100 });         // dB x 100; floating trip relative to attenuation setpoint
  unitstate.addProp("Overdrive Stability",    ValueTypes.BYTE, 0, { group: GROUPS.digitalpots, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, units: "counts", min: 0, max: 255, info: "[0:255]" });        // counts 0-255 (displayed as 0-50 KOhms)
  unitstate.addProp("UPC Nudge",              ValueTypes.short, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "UPC Bias. Offset typically within +- 3dB"});       // dB x1000; aka UPC "bias". Operating UPC offset typically within +/- 3dB
  unitstate.addProp("UPC Interval",           ValueTypes.short, 200, { group: GROUPS.upc, units: "ms", min: 100, max: 15000, info: "Range from 100 to 15000 msec. Default: 500 msec." });     // update interval in msec, 100-1500. Defaut: 500 msec
  unitstate.addProp("UPC Max Step",           ValueTypes.short, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "Default: 1 dB" });       // Maximum adjustment step in dBx100 (default 1 dB)
  unitstate.addProp("System ID",              ValueTypes.BYTE, 0, { group: GROUPS.unitinfo, min: 0, max: 9, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });        //
  unitstate.addProp("Out 1 Label",            ValueTypes.chararray, 0, { group: GROUPS.ui, numberOfBytes: 8, nullTerm: false });   // no null terminator
  unitstate.addProp("Out 2 Label",            ValueTypes.chararray, 0, { group: GROUPS.ui, numberOfBytes: 8, nullTerm: false });   // no null terminator
  unitstate.addProp("Power Supply Temperature",ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });        // v70 In degrees C
  unitstate.addProp("Air In Temperature",     ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });         // v70 In degrees C
  unitstate.addProp("Air Out Temperature",    ValueTypes.int, 0, { group: GROUPS.readings, units: "C", readonly: true });         // v70 In degrees C
  unitstate.addProp("Blower Hz",              ValueTypes.int, 0, { group: GROUPS.readings, units: "Hz", readonly: true});         // v70 Blower frequency in Hz if/as read from ADC
  unitstate.addProp("Blower Frequency",       ValueTypes.int, 0, { group: GROUPS.misc, units: "Hz", info: "Blower frequency setpoint in Hz as written to ADC" });         // v70 Blower frequency setpoint in Hz as written to ADC
  unitstate.addProp("Dual Supply",            ValueTypes.BOOL, false, { group: GROUPS.powercontrol, protected: true });    // v71 Future: possible dual-deck TWTs
  unitstate.addProp("Temperature 2",          ValueTypes.int, 0, { group: GROUPS.readings, units: "C", protected: true, info: "In case of dual supply config" });         // v71 SSPA Temperature 2 reading in case of dual supply configuration
  unitstate.addProp("TComp Enable",           ValueTypes.BOOL, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp });        // v71 SSPA
  unitstate.addProp("TComp Slope",            ValueTypes.float, 0, { group: GROUPS.misc, isModelConfig: true, modelGroups: modelConfigGroups.tcomp, units: "dB/degreeC", info: "Temperature coefficient. Default: 0 = disables compensation." });       // v71 dB/degreeC (aka temp comp coefficient) ( default: 0 which disables compensation)
  unitstate.addProp("TComp Ambient", ValueTypes.int, 30, { group: GROUPS.misc, isModelConfig: true, units: "C", modelGroups: modelConfigGroups.tcomp, info: "Temperature in C where attenuator was calibrated." });         // v71 temp in C where attenuator was calibrated (AKA ambient)
  unitstate.addProp("TComp Max",              ValueTypes.int, 0, { group: GROUPS.misc, isModelConfig: true, units: "C", modelGroups: modelConfigGroups.tcomp, info: "Temperature in C above which additional compensation will not be added." });         // v71 temp in C above which additional compensation will not be added
  unitstate.addProp("TComp Min",              ValueTypes.int, 0, { group: GROUPS.misc, isModelConfig: true, units: "C", modelGroups: modelConfigGroups.tcomp, info: "Temperature in C below which additional compensation will not be added." });         // v71 temp in C below which additional compensation will not be added
  unitstate.addProp("Read Chainfaults",       ValueTypes.BOOL, false, { group: GROUPS.misc });    // v73 Enable chain fault boxes on 1:1 config
  unitstate.addProp("Output Switches",        ValueTypes.WORD, 0, { group: GROUPS.redundancy, typeOverride: ValueTypes.OUTPUTSWITCHES });        // v73 If output switches are part of the system
  unitstate.addProp("Customization",          ValueTypes.CUSTOMIZATION, 0, { group: GROUPS.unitinfo });         // v73 is an ENUM (e_customization) - to track K2 emulation mode for DTV
  unitstate.addProp("Switchover Backoff",     ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100, info: "Only used for K2 emulation. Limits max switchover target power." });         // v75 in dB100. Only for K2 emulation. Limits max switchover target power
  unitstate.addProp("HV Based Inhibit",       ValueTypes.BOOL, false, { group: GROUPS.powercontrol, info: "Checked: CPLD generates RF inhibit during HV off." });    // v80 If CPLD generates RF inhibits during HV off
  unitstate.addProp("HV RF Inhibit",          ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true, info: "Indicates whether the \"HV Based Inhibit\" option is presently generating an inhibit" });    // v80 if CPLD is generationg RF inhbit due to HV off
  unitstate.addProp("Switched FE",            ValueTypes.BOOL, false, { group: GROUPS.powercontrol, info: "TWT only" });    // v82 If switched FE hardware (TWT only)
  unitstate.addProp("FE Inhibit",             ValueTypes.BOOL, false, { group: GROUPS.powercontrol, readonly: true, info: "Indicates whether \"FE Inhibit\" option is presently generating an inhibit."});    // v82 If RF is inhibited due to switched FE (Either HV is off or recently came on)

  // KPA stuff
  unitstate.addProp("KPA Mode",               ValueTypes.KPAMODE, 0, { group: GROUPS.kpa });         // v84 is an ENUM (e_kpda_mode) manual/sleep/autobeam
  unitstate.addProp("Beam Voltage Setpoint",  ValueTypes.int, 0, { group: GROUPS.kpa, units: "V" });         // v84 in Volts
  unitstate.addProp("Max Beam Voltage",       ValueTypes.int, 0, { group: GROUPS.kpa, units: "V" });         // v86 in Volts
  unitstate.addProp("Min Beam Voltage",       ValueTypes.int, 0, { group: GROUPS.kpa, units: "V" });         // v86 in Volts
  unitstate.addProp("Min Sat Power",          ValueTypes.int, 0, { group: GROUPS.kpa, units: "dBm", multiplier: 100 });         // v86 in dBm x 100
  unitstate.addProp("Max Sat Power",          ValueTypes.int, 0, { group: GROUPS.kpa, units: "dBm", multiplier: 100 });         // v86 in dBm x 100
  unitstate.addProp("Autobeam Backoff",       ValueTypes.int, 0, { group: GROUPS.kpa, units: "dB", multiplier: 100, info: "Desired KPA operating point as 'dB below saturation'" });         // v86 in dBm x 100 - Desired KPA op point specified as "dB below saturation"
  unitstate.addProp("Heater Current",         ValueTypes.int, 0, { group: GROUPS.kpa, units: "A", multiplier: 100, readonly: true, info: "Displayed as xx.x A" });         // v86 Amps x 100 - Displayed as xx.x A
  unitstate.addProp("Blower Pressure",        ValueTypes.int, 0, { group: GROUPS.kpa, units: "Inches", multiplier: 100, readonly: true, info: "Displayed as xx.x In" });         // v86 Inches x 100 - Displayed as xx.x In
  unitstate.addProp("Reverse Power 2",        ValueTypes.int, 0, { group: GROUPS.kpa, units: "dBm", multiplier: 100, readonly: true, info: "Klystron reflected power" });         // v86 dBm x 100 - Klystron reflected power
  unitstate.addProp("Tube Temp Trip",         ValueTypes.int, 0, { group: GROUPS.kpa, units: "C", isModelConfig: true, modelGroups: modelConfigGroups.temptrip, info: "Tube temperature trip for KPAs" });         // v90 C, tube temp trip (for KPAs)
  unitstate.addProp("Low Heater Trip",        ValueTypes.int, 0, { group: GROUPS.kpa, units: "A", multiplier: 100, info: "0 = trip disabled." });         // v91 Amps x 100 - 0 = trip disabled
  unitstate.addProp("Body Current @Min BeamV",ValueTypes.int, 0, { group: GROUPS.kpa, units: "mA", multiplier: 100, info: "Nominal body current at minimum beam voltage." });         // v91 nominal body current (mA x 100) at min beam voltage
  unitstate.addProp("Body Current @Max BeamV",ValueTypes.int, 0, { group: GROUPS.kpa, units: "mA", multiplier: 100, info: "Nominal body current at maximum beam voltage." });         // v91 nominal body current (mA x 100) at max beam voltage
  unitstate.addProp("GMT Minutes",            ValueTypes.short, 0, { group: GROUPS.misc, units: "minutes", info: "GMT additional offset in minutes" });       // v91 GMT additional offset in minutes
  unitstate.addProp("NTP Interval",           ValueTypes.short, 0, { group: GROUPS.misc, typeOverride: ValueTypes.BOOL, info: "Checked: Enable NTP 24HR refresh." });       // v94 NTP 24HR refresh enable
  unitstate.addProp("Alternate Amp ID",       ValueTypes.BYTE, 0, { group: GROUPS.misc });        // v94 Nonzero means use 1/2/3 instead of A/B/C (originally a BYTE)
  unitstate.addProp("Customer Password",      ValueTypes.BOOL, 0, { group: GROUPS.misc });        // v94 If customer password is enabled
  unitstate.addProp("Latch Temp Faults",      ValueTypes.BOOL, 0, { group: GROUPS.faultalarm, isModelConfig: true, modelGroups: modelConfigGroups.temptrip });        // v94 If temperature faults set a summary fault
  unitstate.addProp("Sticky Adjust",          ValueTypes.BOOL, 0, { group: GROUPS.ui });        // v94 For single handed power adjustment
  unitstate.addProp("Heater Control",         ValueTypes.BYTE, 0, { group: GROUPS.misc });        // v101 Heater control features (is an ENUM sort of) ( HEATER_ definitions)
  unitstate.addProp("Input Switching",        ValueTypes.WORD, 0, { group: GROUPS.redundancy, overridden: true, typeOverride: ValueTypes.BOOL, numberOfBytes:2});        // v101 If input switches are part of the system
  unitstate.addProp("RF Input 1 Label",       ValueTypes.chararray, "Input 1", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 2 Label",       ValueTypes.chararray, "Input 2", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 3 Label",       ValueTypes.chararray, "Input 3", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("RF Input 4 Label",       ValueTypes.chararray, "Input 4", { group: GROUPS.ui, numberOfBytes: 10, nullTerm: true}); // RF input label, 9 chars. reserve Null Term
  unitstate.addProp("Hide Antenna",           ValueTypes.BOOL, false, { group: GROUPS.ui });
  unitstate.addProp("Fast VSWR",              ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots });
  unitstate.addProp("Disable Heater Standby", ValueTypes.BOOL, false, { group: GROUPS.powercontrol, isModelConfig: true, modelGroups: modelConfigGroups.powercontrol });
  unitstate.addProp("Fast VSWR Trip",         ValueTypes.short, 0, { group: GROUPS.digitalpots, isModelConfig: true, modelGroups: modelConfigGroups.digitalpots, units: "counts", min: 0, max: 255, info: "[0:255]" });       // Fast VSWR trip threshold, counts from 0 - 255
  unitstate.addProp("Allow Cross paths",      ValueTypes.BOOL, 0, { group: GROUPS.redundancy });        // v112: 0 = don't allow RF path A/B cross-routing for 1:2 input switch config
  unitstate.addProp("Fixed Gain Switchover",  ValueTypes.BOOL, 0, { group: GROUPS.redundancy });        // v123: 1 = no goto power during 1:2 switchover.  0 = execute goto power at switchover.
  unitstate.addProp("Path A Attenuation",     ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // absolute attenuation dB x 100 for Amp C to activate upon replacing A. 0 = don't change atten
  unitstate.addProp("Path B Attenuation",     ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // absolute attenuation dB x 100 for Amp C to activate upon replacing B. 0 = don't change atten
  unitstate.addProp("Path A Delta",           ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // Additional gain to apply to gotopower/UPC when amp-C replaces Amp-A
  unitstate.addProp("Path B Delta",           ValueTypes.int, 0, { group: GROUPS.redundancy, units: "dB", multiplier: 100 });         // Additional gain to apply to gotopower/UPC when amp-C replaces Amp-B
  unitstate.addProp("Switchover Priority 1:2",ValueTypes.SWPRIORITY, 0, { group: GROUPS.redundancy });         // is an ENUM (e_sw_priority)
  unitstate.addProp("RF Sample",              ValueTypes.SAMPLERF, 0, { group: GROUPS.powercontrol });        // v133 Each bit enables an RF port to be sampled, ex: SAMPLE_COMBINED_ANTENNA
  unitstate.addProp("Offset RF Antenna",      ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100 });         // dB x 100 to be added to forward power curve when reading combined atenna/fwd power
  unitstate.addProp("Offset RF Load",         ValueTypes.int, 0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100 });         // dB x 100 to be added to forward power curve when reading combined load power
  unitstate.addProp("Language",               ValueTypes.LANGUAGE, 0, { group: GROUPS.ui });         // v143 is an ENUM (e_language)
  unitstate.addProp("No Inverter",            ValueTypes.BOOL, 0, { group: GROUPS.powercontrol});        // v147 for 2Kw only
  unitstate.addProp("UPC Ratio",              ValueTypes.int, 0, { group: GROUPS.upc, units: "ratio", multiplier: 100, info: "Ratio of [uplink gain change] vs [beacon downlink change]. Ex: 0 = 1:1" });         // v153: x100 ratio of [uplink gain change] vs [beacon downlink change]
  unitstate.addProp("UPC Cap",                ValueTypes.int, 0, { group: GROUPS.upc, units: "dB", multiplier: 100, info: "0 = no cap"});         // Max UPC gain increase in dB x1000. 0 = no cap
  unitstate.addProp("Show UPC Delta",         ValueTypes.BOOL, false, { group: GROUPS.upc });
  unitstate.addProp("SNMP Community RO",      ValueTypes.chararray, "", { group: GROUPS.unitinfo, numberOfBytes: 41, protected: true });
  unitstate.addProp("SNMP Community RW",      ValueTypes.chararray, "", { group: GROUPS.unitinfo, numberOfBytes: 41, protected: true });
  unitstate.addProp("HV Count",               ValueTypes.DWORD, 0, { group: GROUPS.readings, units: "counts", readonly: true, min: 0, max: 4095, info: "[0:4095]"});       // v166
  unitstate.addProp("Tube Subtype",           ValueTypes.TUBESUBTYPE, 0, { group: GROUPS.unitinfo, readonly: false });       // v170
  unitstate.addProp("Require EXC",            ValueTypes.BOOL, 0, { group: GROUPS.unitinfo, info: "Check to require EXC in system" });       // v171
  unitstate.addProp("Auto Update IP",         ValueTypes.DWORD, 0, { group: GROUPS.misc, overridden: true, typeOverride: ValueTypes.IPADDR, info: "Whoever last reprogrammed the device" });       // v171
  unitstate.addProp("Multicast",              ValueTypes.BOOL, 0, { group: GROUPS.comm }); // v171
  unitstate.addProp("Web Password",           ValueTypes.chararray, 0, { group: GROUPS.misc, numberOfBytes: 20, nullTerm: true, info: "Web password - up to 19 charactesr" });
  unitstate.addProp("Anode Voltage Cap",      ValueTypes.int, 0, { group: GROUPS.powercontrol, protected: true,info: "" });
  unitstate.addProp("Anode Voltage Reading",  ValueTypes.int, 0, { group: GROUPS.powercontrol, protected: true, info: "" });
  unitstate.addProp("Temporary Anode",        ValueTypes.BOOL, 0, { group: GROUPS.powercontrol, protected: true, info: "" });
  unitstate.addProp("UPC Power Cap",          ValueTypes.int, 0, { group: GROUPS.powercontrol, multiplier: 100, units: "dB", info: "Max UPC algorithm output" });
  unitstate.addProp("UPC Target Size",        ValueTypes.int, 0, { group: GROUPS.powercontrol, multiplier: 100, units: "dB", info: "Minimum delta from target power required before UPC adjusts attenuator" });
  unitstate.addProp("UPC Clearsky Zone",      ValueTypes.int, 0, { group: GROUPS.powercontrol, multiplier: 100, units: "dB", info: "Minimum clearsky delta before UPC adjusts attenuator" });
  unitstate.addProp("UPC Clearsky Ceiling",   ValueTypes.BOOL, 0, { group: GROUPS.powercontrol, info: "If True: UPC treats beacon values above clearsky as clearsky itself; no gain decrease" });
  unitstate.addProp("NTP Server",             ValueTypes.IPADDR, 0, { group: GROUPS.comm, onValueSet: function(val) {
    if (0 !== val) {
      unitstate.props[old_ntp_index].info = "Obsolete. See below.";
    }
  } });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Address",             ValueTypes.IPADDR, "10.0.0.254", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, onValueSet: function(val) {
    if (val !== 0) {
      unitstate.props[old_ip_address].info = "Obsolete. See below.";
    }
  }});
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Mask",                ValueTypes.IPADDR, "255.255.255.0", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, onValueSet: function(val) {
    if (val !== 0) {
      unitstate.props[old_ip_mask].info = "Obsolete. See below.";
    }
  } });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Gateway",             ValueTypes.IPADDR, "0.0.0.0", { group: GROUPS.comm, isModelConfig: true, modelGroups: modelConfigGroups.comm, onValueSet: function(val) {
    if (val != 0) {
      unitstate.props[old_ip_gateway].info = "Obsolete. See below.";
    }
  } });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP Multicast",           ValueTypes.IPADDR, 0, { group: GROUPS.comm });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("IP DNS",                 ValueTypes.IPADDR, 0, { group: GROUPS.comm });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("FILLER IPV6",            ValueTypes.BYTE, 0, { visible: false, info: "IPV6 filler" });
  unitstate.addProp("AutoRecovery Enable",    ValueTypes.BOOL, false, { group: GROUPS.readings, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });
  unitstate.addProp("AutoRecovery Boost Active",    ValueTypes.BOOL, false, { group: GROUPS.readings, isModelConfig: true, modelGroups: modelConfigGroups.redundancy });
  unitstate.addProp("Gain Balance Value",     ValueTypes.int,  0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });
  unitstate.addProp("Gain Balance Subband 1", ValueTypes.int,  0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });
  unitstate.addProp("Gain Balance Subband 2", ValueTypes.int,  0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });
  unitstate.addProp("Gain Balance Subband 3", ValueTypes.int,  0, { group: GROUPS.powercontrol, units: "dB", multiplier: 100, isModelConfig: true, modelGroups: modelConfigGroups.linearizer });

  unitstate.addProp("HEX leftover",           ValueTypes.raw, 0, { group: GROUPS.misc, readonly: true, info: "Unknown remaining hex of state file" });
}
