/**
 * @requires resources/js/domprototypes.js
 * @requires resources/js/observer.js
 * @requires resources/js/types.js
 * @requires resources/js/util.js
 */
 var modelconfig_hex; // for modelconfig generator use.
 var TubeType = "";
 var isExpandAll = true;
(function () {
  'use strict';

  function View()
  {
    let self = this;
    this.navbarCollapsed = true;
    document.getElementById("passwordEntry").addEventListener("keyup", this);
    document.getElementById("protectionUnlock").addEventListener("click", this);
    document.addEventListener("load", this);
    document.body.onload = function ()
    {
      document.getElementById("expandAndCollapse").checked = true; // reset checkbox in IE browser when refresh
      document.getElementById("toggleVisibility").checked = true;
      document.getElementById("nonRelevantProp").checked = true;
      document.getElementById("modelGenerator").checked = false;
      self.emit("loaded");
    };

    document.body.onunload = function()
    {
      document.getElementById("expandAndCollapse").checked = true;
    }

    document.getElementsByClassName("navheader")[0].onclick = function (event) {
      self._navbarToggle();
    };

    document.getElementById("maskFile").onclick = function()
    {
      console.clear();
      let temp = "", mask="", fileName ="", myJSON ="";
      let el = document.getElementById("generator-type-selector");
      const isO2 = el.value == "O2 Status" || el.value == "Ogtr Stat";
      fileName = (isO2)? "O2.json"  : "T2.json";
      let stateStruc = (window.model.unitstate.props.length) ? JSON.parse(JSON.stringify(window.model.unitstate)) : new StateStructure();
      if(!window.model.unitstate.props.length)
      {
        if(isO2) generateO2(stateStruc);
        else generateT2(stateStruc);
      }

      let props = JSON.parse(JSON.stringify(stateStruc.props)); // duplicate the array of object so that original array won't be changed.
      const keep = ['name', 'isModelConfig', 'align', 'length', 'startIndex'];
      for(let element of props)
      {
        if(!element.display) element.name +=" (PlaceHolder/Obsolete)";
        element.align = element.type.aligned;

        if(element.align)
        {
          let aligned  = (mask.length % 4 === 0) ? true : false;
          if(!aligned)
          {
            let remainder = mask.length % 4;
            mask += "".padEnd(4 - remainder , '0');
          }
        }
        mask += "".padEnd(element.totalBytes*2, 'F');
        element.length = element.totalBytes * 2;
        element.startIndex = mask.length - element.totalBytes*2;
      } 
      myJSON = JSON.stringify(props, keep, '\t');

      let blob = new Blob([myJSON], {type: 'application/json'});
      window.model.downloadFile(blob, fileName);
    };

    document.getElementById("expandAndCollapse").onchange = function(event)
    {
      let element = document.getElementById("modelGenerator");
      isExpandAll = document.getElementById("expandAndCollapse").checked;
      let group = (element.checked)? modelConfigGroups : GROUPS;
      for(var g in group)
      {
        if(group.hasOwnProperty(g))
        {
          let ID = group[g].id;
          if(ID.startsWith("#"))
          {
            ID = ID.substr(1);
          }
          let el = document.getElementById(ID);
          el = (el.parentElement)? el.parentElement : el;
          if(el.nodeName ==="DETAILS")
            el.open = isExpandAll;
        }
      }
    };

    document.getElementById("modelGenerator").onchange = function (event)
    {
      // console.clear();
      if(window.model)  window.model.appstate.locked = true;
      let temp = document.getElementById("modelGenerator");
      if(temp.checked)
      {
        let selection = document.getElementById("generator-type-selector");
        self.emit("modelConfigRequested", selection.value);
        if(selection.value == "T2 Status"){
          window.model.emit("stateLoaded", "T2");
        } 
        else if(selection.value == "O2 Status") {
          window.model.emit("stateLoaded", "O2");
        }
        else if(selection.value == "Ogtr Stat") {
          window.model.emit("stateLoaded", "Ogtr");
        }
      }
      else
      {
        let result = Parser.getHex(window.model.unitstate);
        let hex = result.hex;
        let size = result.size;
        let statearray = Util.getBytesFromHexString(hex);

        let calculatedChecksum = Checksum.Crc16_Ccitt(statearray, 8, hex.length / 2 - 2 * 4);
        let CS = Util.getNumberToByteString(calculatedChecksum, 4, false);
        size = Util.getNumberToByteString(size, 4, false);
        hex = size + CS + hex.substr(16);
        let blob = new Blob([hex], {type: "text/plain" }); // IE and Edge don't support File().
        blob.name = document.getElementById("filename").textContent;
        self.emit("fileLoaded", blob);
      }
    };

    document.getElementById("ampStateInput").onchange = function (event) {
      let x = document.getElementById(event.target.id);
      if (x.files.length === 0) {
        self.alert("Please select a file");
      } else {
        self.emit("fileLoaded", x.files[0]);
        document.getElementById("modelGenerator").checked = false;
        // document.getElementById("ampStateExport").innerHTML = "Save State File";
   //     self.emit("visibilityToggled");
      }
    };

    document.getElementById("ampStateInputButton").onclick = function (event) {
      document.getElementById("ampStateInput").click();
    };
    
    shortcut.add("alt+n", function() {
      document.getElementsByClassName("navheader")[0].click();
    });

    shortcut.add("alt+p", function() {
      document.getElementById("passwordEntry").value = "sesame";
      document.getElementById("passwordEntry").select();
    });

    shortcut.add("alt+i", function() {
      document.getElementById("ampStateInput").click();
    });
    
    shortcut.add("alt+s", function() {
      document.getElementById("ampStateExport").click();
    });

    shortcut.add("alt+j", function() {
      document.getElementById("maskFile").click();
    });

    shortcut.add("alt+e", function() {
      document.getElementById("expandAndCollapse").click();
    });

    shortcut.add("alt+r", function() {
      document.getElementById("toggleVisibility").click();
    });

    shortcut.add("alt+m", function() {
      document.getElementById("modelGenerator").click();
    });

    document.getElementById("toggleVisibility").onchange = function (event) {
      self.emit("visibilityToggled");
    };

    document.getElementById("nonRelevantProp").onchange = function (event) {
      self.emit("irrelevantPropVisibility");
    };

    /**
     * @summary Exports the state structure into a text file
     * @desc Will alert the user of any errors and give the
     *       user an option to continue exporting anyways.
     */
    document.getElementById("ampStateExport").onclick = function (event) {
      // document.getElementById("maskFile").click();
      let filename = document.getElementById("filename").innerHTML;
      let isChecked = document.getElementById("modelGenerator").checked;
      let x = (isChecked) ? document.getElementById("model-config-92"):
                     document.getElementById("serial-number-5");
                
      if(window.model.unitstate.props.length!==0){

      //let config = (x)?  x.value : document.getElementById("model-config-92").value;
      let config = x.value;
      //config = (config) ? config.trim() : config;
      filename = (isChecked)? config +".txt" : ((config)? config : "XXXXX")+"Cfg.txt";
      }
      if (window.model.unitstate.props.length <= 0) {
        alertify.alert("Please load a state file first");
        return;
      }

      self.emit("exportRequested", filename);
    };

    this.addEvent([
      "loaded",
      "passwordEntered",
      "fileLoaded",
      "lockChanged",
      "exportRequested",
      "modelConfigRequested",
      "visibilityToggled",
      "irrelevantPropVisibility"
    ]);
  }

  View.prototype.MultiSetOnChange = function(b, id, i){
     b.childNodes[i].firstChild.onchange = function(event){
        document.getElementById(id.substr(12)).childNodes[i].firstChild.checked = b.childNodes[i].firstChild.checked;
     }
  };


  View.prototype.handleEvent = function (event) {
    if (event.srcElement.id === "passwordEntry") {
      this._handlePassKeyUp(event);
    } else if (event.srcElement.id === "protectionUnlock") {
      let pass = document.getElementById("passwordEntry").value;
      this.emit("passwordEntered", pass);
      document.getElementById("passwordEntry").value = "";
    } else if (event.srcElement.id === "mainbody") {
      switch (event.type) {
        case "load":
          this.emit("loaded");
          break;
        default:
          break;
      }
    }
  };

  View.prototype.init = function (appversion) {
    console.log("INFO: hello world");
    this.setTitle(appversion);
    this.navbarInit();

  };

  View.prototype._handlePassKeyUp = function (event) {
    var key = event.which || event.keyCode;
    const ENTER_KEY = 13;
    if (key === ENTER_KEY) {
      let pass = document.getElementById("passwordEntry").value;
      // this.controller.verifyPassword(pass);
      this.emit("passwordEntered", pass);
      document.getElementById("passwordEntry").value = "";
    }
  };

  View.prototype.unlock = function () {
    document.getElementById("protectionUnlock").textContent = "Lock";
    this._setLockState(false);
  };

  View.prototype.lock = function () {
    document.getElementById("protectionUnlock").textContent = "Unlock";
    this._setLockState(true);
  };

  /**
   * @summary Set the lock state
   * @param {Boolean} state true to lock, false to unlock
   */
  View.prototype._setLockState = function (state) {
    this.emit("lockChanged", state);
    let el = document.getElementById("mainbody");
    if (state === true) {
      el.removeClass('locked');
      el.removeClass('unlocked');
    } else {
      el.removeClass("locked");
      el.addClass("unlocked");
    }
  };

  View.prototype.alert = function (msg) {
    alertify.alert(msg);
  };

  View.prototype.confirm = function (msg, onOk, onCancel) {
    alertify.confirm(msg, onOk, onCancel);
  };

  /**
   * @param {Event} event
   */
  View.prototype.allowDrop = function (event) {
    event.preventDefault();
    var el = document.getElementById(event.currentTarget.id);
    if (el) {
      el.addClass("dragged-over");
    }
  };

  /**
   * @param {String} id id of element
   * @param {Event} event
   */
  View.prototype.dragLost = function (event) {
    var el = document.getElementById(event.currentTarget.id);
    if (el) {
      el.removeClass("dragged-over");
    }
  };

  /**
   * @param {Event} event
   */
  View.prototype.doDrop = function (event) {
    event.preventDefault();
    var el = document.getElementById(event.currentTarget.id);
    if (!el) {
      return;
    }

    el.addClass("dragged-over");
    event.preventDefault();

    if (!event.dataTransfer.files[0]) {
      return;
    }

    var fileInfo = event.dataTransfer.files[0];
    if (fileInfo.type.indexOf("text") == 0) {
      // this.importAmpStateFromFile(file_info);
      this.emit("fileLoaded", fileInfo);
      document.getElementById("modelGenerator").checked = false;
      document.getElementById("ampStateExport").innerHTML = "Save State File";
      
    } else {
      this.alert("Invalid file detected: " + fileInfo.name + " \nExpected a text file.");
    }

    el.removeClass("dragged-over");
  };

  View.prototype.setTitle = function (version) {
    document.title = "State Editor v" + version;
    document.getElementById("version").textContent = "v" + version;
  };

  View.prototype.fill = function (groups, unitstate, isModelConfig) {
    document.getElementById("page-content").innerHTML = "";
    this.drawTableGroups(groups, isExpandAll);
    this.drawTableRows(unitstate, isModelConfig);
  };

  /**
   * @summary Show the checksum state
   * @param {String} elementId ID of the element to display checkum state on
   */
  View.prototype.setChecksumState = function (isChecksumValid) {
    var elem = document.getElementById("checksum-state");
    if (elem !== null) {
      elem.innerHTML = isChecksumValid ? "VALID" : "INVALID";
      if (isChecksumValid) {
        elem.removeClass('invalid');
      } else {
        elem.removeClass('valid');
      }

      elem.addClass(isChecksumValid ? 'valid' : 'invalid');
    }
  };

  View.prototype.setUnitType = function (type) {
    var elem = document.getElementById("unit-type");
    var title = "Unit State Editor";
    if (type === "T2") {
      title = "T2 Editor";
    } 
    else if (type === "O2") {
      title = "O2 Editor";
    }
    else if(type === "Ogtr")
    {
      title = "Ogtr Editor";
    }
    

    if (elem !== null) {
      elem.innerHTML = title;
    }
  };

  View.prototype.setItemLockState = function (elementId, lock) {
    let el = document.getElementById(elementId);
    if (el === null || el === undefined) {
      return;
    }
    if(el.tagName === "DIV"){
      var children = el.children; //get container element children.
      for (var i = 0, len = children.length ; i < len; i++) {
        var id = children[i].firstChild.id;
        var element = document.getElementById(id);
        if (lock === false) {
          element.removeAttribute("disabled");
          

        } else if (lock === true) {
          element.setAttribute("disabled", "disabled");

        }
      }
     return;
    }
    let parent = el.parentElement.parentElement;
    if (lock === false)
    {
        el.removeAttribute("disabled");
        //parent.firstChild.style.backgroundColor = parent.style.backgroundColor;
    }
    else if (lock === true)
    {
        el.setAttribute("disabled", "disabled");
        //el.parentElement.parentElement.style.backgroundColor = "pink";
    }
  };

  View.prototype.drawTableGroups = function (groups, bool) {

    let content = document.getElementById("page-content");
   
    let div = document.createElement("div");
    for (var g in groups) {
      if (groups.hasOwnProperty(g)) {
        let details = document.createElement("details");
        details.addClass("details");

        div.addClass("modelconfigDiv");
        details.open = bool;
        let summary = document.createElement("summary");
        summary.innerHTML = groups[g].name;
        summary.addClass("thickpadding");
        summary.addClass("shadow");
        summary.addClass("summary");
        details.appendChild(summary);

        let body = document.createElement("table");
        body.id = groups[g].id.replace("#", "");
        let row = body.insertRow();
        let headerText = document.createElement("th");
        headerText.innerText = "Name";
        row.appendChild(headerText);
        headerText = document.createElement("th");
        headerText.innerText = "Value";
        row.appendChild(headerText);
        headerText = document.createElement("th");
        headerText.innerText = "Remark";
        row.appendChild(headerText);

        if(groups === GROUPS)
        {
          headerText = document.createElement("th");
          headerText.innerText = "MCI";
          row.appendChild(headerText);
          headerText = document.createElement("th");
          headerText.innerText = "MCI Group";
          row.appendChild(headerText);
        }
        details.appendChild(body);
        div.appendChild(details);
        content.appendChild(div);
      }
    }

  };

  View.prototype.drawTableDiv = function(Div){
    let content = document.getElementById("modelConfigDiv");
    for(var d in Div){
      if(Div.hasOwnProperty(d)){
        let subDiv = document.createElement("div");
        subDiv.addClass("subdiv");
        subDiv.innerText = Div[d].name;
        let tab = document.createElement("table");
        tab.id = Div[d].id.replace("#", "");
        subDiv.appendChild(tab);
        content.appendChild(subDiv);
      }
    }
  }

  View.prototype.drawTableRows = function (unitstate, onlyModelConfig) {

    if (unitstate.props.length === 0) return;

    if (onlyModelConfig) {
      let selection = document.getElementById("generator-type-selector");

      // unitstate.clear();
      if (selection.value === "T2 Status") {
        // generateT2(unitstate);
      } else if (selection.value === "O2 Status" || selection.value == "Ogtr Stat") {
        // generateO2(unitstate);
        if(selection.value == "Ogtr Stat")
        {
          unitstate.props[2].value = "Ogtr Stat";
        }
      } else {
        alertify.alert("Invalid model config type");
      }
      if(modelconfig_hex !== undefined){
//        let result = Parser.getHex(window.model.unitstate);
        Parser.parseState(modelconfig_hex, unitstate);
      }
      let modelDiv = document.createElement("div");
      modelDiv.addClass("modelconfigDiv");
   //   modelDiv.innerText = "modelConfigDiv";
      modelDiv.id = "modelConfigDiv";
      modelDiv.innerText = "Model Config Items";
      document.getElementById("page-content").appendChild(modelDiv);
      this.drawTableGroups(modelConfigGroups, isExpandAll);

      let bar = document.getElementById("navbarcontents");
      bar.innerHTML = "";
      for (var group in modelConfigGroups)
      {
      if (modelConfigGroups.hasOwnProperty(group))
        this._navbarAddItem(bar, modelConfigGroups[group].name, modelConfigGroups[group].id);
      }

    }
    else{
      
      // var ua = window.navigator.userAgent;
      // var isIE = /MSIE|Trident/.test(ua);
      // if ( !isIE ) { //check if browser is Internet Explorer
      let modelDiv = document.createElement("div");
      modelDiv.addClass("modelconfigDiv");
      modelDiv.id = "modelConfigDiv";
      modelDiv.innerText = "All Items";
      let parent = document.getElementById("page-content");
      parent.insertBefore(modelDiv, parent.firstChild);
      // }
    }
    
    for (var i = 0; i < unitstate.props.length; i++) {

      if(unitstate.props[i].value ==="O2 Status" || unitstate.props[i].value ==="Ogtr Stat") {
        let el = document.getElementById("ui-table");
        if(el){
          el = el.parentElement;
          el.addClass("collapsed");  // UI section will be hidden if a ODU state file was loaded
        }
      }

      if(unitstate.props[i].value ==="T2 Status") {
        let el = document.getElementById("rf-band");
        if(el){
          el = el.parentElement;
          el.addClass("collapsed"); // hide rf band section when state file is T2
        }
      }

      if(unitstate.props[i].name === "Signature")
      {
        let el = document.getElementById("generator-type-selector");
        if(unitstate.props[i].value === "O2 Status")
          el.selectedIndex = 0;
        else if(unitstate.props[i].value === "T2 Status")
          el.selectedIndex = 1;
        else if(unitstate.props[i].value === "Ogtr Stat")
          el.selectedIndex = 2;
      }

      let selection = document.getElementById("generator-type-selector");
      if(selection.value === "O2 Status" || selection.value == "Ogtr Stat")
      {
        if(unitstate.props[i].name == "Firmware Version")
        {
          if(unitstate.props[i].value == "")
          {
            alertify.alert("Input file has empty field of Firmwar Version. Set to 088 to prevent fw crash");
            unitstate.props[i].value ="088";
          }
        }
      }
      if ((!onlyModelConfig && unitstate.props[i].display === true) ||
        (onlyModelConfig && unitstate.props[i].isModelConfig && unitstate.props[i].display)
        )
      {
      //  let tableId = onlyModelConfig ? GROUPS.modelconfig.id : unitstate.props[i].group.id;
        let tableId = unitstate.props[i].group.id;
        if(onlyModelConfig){
          tableId = (unitstate.props[i].modelGroups.id)? unitstate.props[i].modelGroups.id : modelConfigGroups.misc.id;
        }
        if (tableId.startsWith("#")) {
          tableId = tableId.substr(1);
        }

        let table = document.getElementById(tableId);
        let row = (table.tBodies.length) ? table.tBodies[table.tBodies.length-1].insertRow() : table.insertRow(); // insert row that the property does not 
                                                                                                                  // have a defined subGroup attribute to last tbody of table
                                                                                                                  
        if(unitstate.props[i].subGroup)
        {
          if(!document.getElementById(unitstate.props[i].subGroup.id)) //if subGroup tbody is not already been created, create subGroup tbody.
          {
            let subGroup = document.createElement('tbody');
            subGroup.id = unitstate.props[i].subGroup.id;
            // table.insertBefore(subGroup,table.firstChild); // IE doesnot support prepend(), insert subGroup tbody to table
            table.appendChild(subGroup);
          }
          let body = document.getElementById(unitstate.props[i].subGroup.id);
          row = body.insertRow(); // insert row to subgroup tbody
        }

        if (!onlyModelConfig && !unitstate.props[i].valueSet) {
          row.addClass("unset");
        }

        let label = row.insertCell(0);
        label.addClass("parameter-label");
        label.innerText = unitstate.props[i].name;
        // if(unitstate.props[i].protected)
        // {
        //   label.style.backgroundColor = "LightSkyBlue";
        // }

        let content = row.insertCell(1);
        content.addClass("parameter-content");
        content.colSpan = unitstate.props[i].colspan;

        let paramInput = null;
        let input = this._createInputBasedOnProperty(unitstate.props[i]);
        if(unitstate.props[i].protected)
        {
          input.title = "unlock to edit";
        }
        
        content.appendChild(input);
        if(unitstate.props[i].name ==="Amp Type")
        {
          let el = document.getElementById(unitstate.props[i].id);
          var selectedText = el.options[el.selectedIndex].text;
          if(selectedText === "TWT - 2KW") selectedText = "TWT";
          if(selectedText !== "KPA") {
            let el = document.getElementById("kpa-table");
            if(el){
              el = el.parentElement;
              el.addClass("collapsed");  // KPA section will be hidden if Amp Type is not KPA
            }
          }
          document.getElementById(input.id).addEventListener("change", function(event) {
          let el = document.getElementById(event.target.id);
          var selectedText = el.options[el.selectedIndex].text;
          if(selectedText === "TWT - 2KW") selectedText = "TWT";
          el = document.getElementById(GROUPS.kpa.id.substring(1)).parentElement;
          if(selectedText !== "KPA") {
            if(el){
              el.addClass("collapsed");  // KPA section will be hidden if Amp Type is not KPA
            }
          }
          else{
            if(el){
              el.removeClass("collapsed");  // KPA section will be shown if Amp Type is KPA
            }
          }

          });
        }
        

        
        if (unitstate.props[i].units) {
          let units = document.createTextNode(unitstate.props[i].units);
          content.appendChild(units);
        }

        let info = row.insertCell(2);
        info.addClass("parameter-info");
        if (unitstate.props[i].info) {
          info.innerText = unitstate.props[i].info;
        }
        if(!onlyModelConfig) // if page show all items, give each property an option to select to be a model config item, and the MCI group it belong to
        {
          let isModelConfigItem = row.insertCell(3);
          let MCIgroup = row.insertCell(4);

          let checkboxItem = document.createElement("input");
          checkboxItem.type = "checkbox";
          checkboxItem.checked = unitstate.props[i].isModelConfig;
          isModelConfigItem.appendChild(checkboxItem);
          
          
          // checkboxItem.setAttribute('disabled', true);
          checkboxItem.addEventListener('change', function(event){
            let id = event.path[2].childNodes[1].childNodes[0].id;
            let index = id.substring( id.lastIndexOf('-') +1 );
            if(event.target.checked){
              window.model.unitstate.props[parseInt(index) -1].isModelConfig = true;
              event.path[1].nextSibling.childNodes[0].style.visibility = 'visible';
            }
            else{
              window.model.unitstate.props[parseInt(index) -1].isModelConfig = false;
              event.path[1].nextSibling.childNodes[0].style.visibility = 'hidden';
              
            }
          });
          
          let groupList = document.createElement("select");
          // groupList.setAttribute("rawValue", prop.value);
          
          for (var g in modelConfigGroups) {
            if(modelConfigGroups.hasOwnProperty(g))
            {
              let option = document.createElement("option");
              option.text = modelConfigGroups[g].name;
              if(option.text == unitstate.props[i].modelGroups.name) 
                option.selected = true;
              groupList.add(option);
            }
          }
          if(!checkboxItem.checked)
          {
            groupList.style.visibility = 'hidden';
          }

          MCIgroup.appendChild(groupList);
          
          groupList.addEventListener('change', function(event){
            let id = event.path[2].childNodes[1].childNodes[0].id;
            let index = id.substring( id.lastIndexOf('-') +1 );
            let selectedIndex = event.target.selectedIndex;
            let keys = Object.keys(modelConfigGroups);
            window.model.unitstate.props[parseInt(index) -1].modelGroups = modelConfigGroups[keys[selectedIndex]];
            

          });

        }

          if(unitstate.props[i].protected || unitstate.props[i].readonly){
            let id= unitstate.props[i].id;
            let el = document.getElementById("toggleVisibility");
            this.setPropVisibility(id, el.checked);
          }
          if(unitstate.props[i].propTubeType !== "common" && unitstate.props[i].propTubeType !== TubeType){
            let id= unitstate.props[i].id;
            let el = document.getElementById("nonRelevantProp");
            this.setPropVisibility(id, el.checked);

          }

      }
    }
  };

  /**
   * @todo Rename method to createInputBasedOnProperty(prop: valueTypes)
   * @todo Refactor method to return a proper DOM object instead of string
   * @param {types.valueTypes} prop
   */
  View.prototype._createInputBasedOnProperty = function (prop) {

    if (prop.type.isEnum || (prop.overridden && prop.typeOverride.isEnum)) {
      var enumtype = (prop.overridden ? prop.typeOverride.enum : prop.type.enum);
      let input = document.createElement("select");
      input.id = prop.id;
      input.setAttribute("rawValue", prop.value);

      for (var i = 0; i < enumtype.length; i++) {
        let option = document.createElement("option");
        option.text = enumtype[i].name;
        if (prop.value === enumtype[i].value) {
          option.selected = true;
        }

        input.add(option);
      }
      input.disabled = prop.protected || prop.readonly;
      return input;
    } else if (prop.type.isMultiset || (prop.overridden && prop.typeOverride.isMultiset)) {
      let opts = (prop.overridden ? prop.typeOverride.opts : prop.type.opts);
      let combo = document.createElement("div");
      combo.id = prop.id;

      for (var i = 0; i < opts.length; i++) {
        let label = document.createElement("label");
        label.addClass("checkbox-label");
        label.addClass("checkbox-group");
        let cb = document.createElement("input");
        cb.type = "checkbox";
        cb.name = opts[i].name;
        cb.id = prop.id + "-" + i;
        cb.value = opts[i].value;
        cb.checked = Util.isBitSet(prop.value, opts[i].value);
        cb.disabled= prop.protected || prop.readonly;
        let labelName = document.createElement("span");
        labelName.textContent = opts[i].name;
        label.appendChild(cb);
        label.appendChild(labelName);
        combo.appendChild(label);
      }
      return combo;
    } else {
      let input = document.createElement("input");
      input.addClass("in-table");
      input.id = prop.id;

      if(prop.min != undefined)
        input.min = prop.min;
      if(prop.max != undefined)
        input.max = prop.max;

      input.type = this._getInputBasedOnValueType(prop);
      var propTypeName = prop.typeOverride ? prop.typeOverride.name : prop.type.name;
      if(input.type ==="number")
      {
        input.step = "any";
      }

      this._setInputValue(input, prop); // Add input value based on type
      input.disabled = prop.protected || prop.readonly;
      return input;
    }
  };

  View.prototype._getInputBasedOnValueType = function (prop) {
    var inputType;
    var propTypeName = prop.typeOverride ? prop.typeOverride.name : prop.type.name;
    switch (propTypeName) {
      case "int":
        inputType = "number";
        break;
      case "chararray":
        inputType = "text";
        break;
      case "char":
        inputType = "text";
        break;
      case "BOOL":
        inputType = "checkbox";
        break;
      case "WORD":
        inputType = "number";
        break;
      case "DWORD":
        inputType = "number";
        break;
      case "short":
        inputType = "number";
        break;
      case "float":
        inputType = "number";
        break;
      case "BYTE":
        inputType = "number";
        break;
      case "IPADDR4":
      case "IPADDR":
        inputType = "text";
        break;
      default:
        inputType = "text";
    }

    return inputType;
  };

  View.prototype._setInputValue = function (input, prop) {
    var valueAtrr = "";
    var propTypeName = prop.typeOverride ? prop.typeOverride.name : prop.type.name;
    switch (propTypeName) {
      case "BOOL":
        {
          input.checked = prop.value;
          break;
        }
      case "raw":
      case "chararray":
        {
          input.value = prop.value ? prop.value : "";
          break;
        }
      case "char":
        {
          input.value = prop.value ? prop.value : "";
          break;
        }
      case "IPADDR4":
      case "IPADDR":
        {
          input.value = prop.value ? prop.value : "0.0.0.0";
          break;
        }
      case "DWORD":
      case "short":
      case "BYTE":
      case "WORD":
      case "float":
      case "int":
        {
          var v = prop.value / prop.multiplier;
          if (v % 1 === 0) {
            input.value = v.toString();
          } else {
            input.value = v.toFixed(2);
          }
          if(prop.name == "Heater Time" || prop.name == "Beam Time"){
          //  input.value = Math.round(input.value);
          }
          break;
        }
      default:
        {
          // input.value = prop.value ? prop.value / prop.multiplier : "";
          input.value = prop.value;
          break;
        }
    }

    if (prop.type.name === "chararray" || prop.type.name === "char" ){  //|| prop.type.name === "BYTE") {
      var maxl = prop.totalBytes;
      if (prop.nullTerm) {
        maxl -= 1;
      }

      input.max = maxl;
    } else if (prop.min && prop.max) {
      input.min = prop.min;
      input.max = prop.max;
    }

  };

  /**
   * @summary Scroll an element into view
   * @param {String} elementId ID of the element
   */
  View.prototype.scrollElementIntoView = function (elementId) {
    var i = elementId.indexOf('#');
    if (i >= 0) {
      elementId = elementId.substr(i + 1);
    }

    var elem = document.getElementById(elementId);

    if (elem === null) {
      return;
    }

    elem.parentElement.scrollIntoView({behavior: "instant", block: "start", inline: "start"});
    window.scrollBy(0,-120);
  };

  /**
   * @summary Populate navbar with the required navbar buttons
   * @param {String} elementId ID of the element to fill
   */
  View.prototype.navbarInit = function () {
    let id = "navbarcontents";

    let bar = document.getElementById(id);
    bar.innerHTML= "";
    for (var group in GROUPS) {
      if (GROUPS.hasOwnProperty(group)) {
        this._navbarAddItem(bar, GROUPS[group].name, GROUPS[group].id);
      }
    }
  };

  /**
   * @summary Add a navbar item to the bar
   * @param {HTMLElement} navbar Navbar element
   * @param {String} label Text of the new navbar item
   * @param {String} targetId Target of the navbar item
   */
  View.prototype._navbarAddItem = function (navbar, label, targetId) {
    var navButton = document.createElement('button');
    navButton.setAttribute('class', 'nav');

    let self = this;
    navButton.addEventListener('click', function () {
      self.scrollElementIntoView(targetId);
      self._navbarToggle();
    });

    var txt = document.createTextNode(label);
    navButton.appendChild(txt);
    navbar.appendChild(navButton);
  };

  /**
   * @summary Toggle collapsed class of an element
   * @param {String} elementId ID of element to be toggled
   */
  View.prototype._navbarToggle = function () {
    var el = document.getElementById("navbarcontents");
    if (el.hasClass("collapsed")) {
      el.removeClass("collapsed");
    } else {
      el.addClass("collapsed");
    }
  };

  /**
   * @summary Toggle visibility of the readonly/protected IDs
   */
  View.prototype.setPropVisibility = function (id, visible) {
    let el = document.getElementById(id);
    if (el) {
      let row = el.parentElement.parentElement;
      if (visible) {
        row.removeClass("collapsed");
      } else {
        row.addClass("collapsed");
      }
    }
  };

  View.prototype.setVisibilityButtonText = function (text) {
    let el = document.getElementById("toggleVisibility");
    if (el) {
      el.textContent = text;
    }
  };


  View.prototype.setIrrelevantVsibilityButtonText = function (text) {
    let el = document.getElementById("nonRelevantProp");
    if (el) {
      el.textContent = text;
    }
  };

  // Export to window
  window.app = window.app || {};
  window.app.View = View;
}(window));
