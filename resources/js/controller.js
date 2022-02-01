/**
 * @requires resources/js/model.js
 * @requires resources/js/view.js
 * @requires resources/js/util.js
 */
(function () {
  this.showProtected = true;
  this.showIrrelevant = true;
  function Controller(model, view) {

    this.model = model;
    this.view = view;

    this.view.subscribe("passwordEntered", this.verifyPassword);
    this.view.subscribe("fileLoaded", this.onFileLoaded);
    this.view.subscribe("loaded", this.onPageLoaded);
    this.view.subscribe("lockChanged", this.updateLocks);
    this.view.subscribe("exportRequested", this.onExportRequest);
    this.view.subscribe("modelConfigRequested", this.generateModelConfig);
    this.view.subscribe("visibilityToggled", this.togglePropVisibility);
    this.view.subscribe("irrelevantPropVisibility", this.nonRelevantPropVisibility);
    this.model.subscribe("stateLoaded", this.updateTypeOnView);
  }

  /**
   * Handle DOM events
   * @param {Event} event DOM event
   */
  Controller.prototype.handleEvent = function (event) {
    if (event.type === "load") {
      this.view.init(this.model.appstate.VERSION);
    }
  };

  Controller.prototype.onPageLoaded = function () {
    this.view.init(this.model.appstate.VERSION);
    // this.view.navbarInit();
  };

  Controller.prototype.on = function (event, params) {
    if (event === "passwordEntered") {

    } else if (event === "import") {

    } else if (event === "export") {

    } else if (event === "generate") {
      this.model.generateStructure(params.type);
    }
  };

  Controller.prototype.generateModelConfig = function (type) {
   // let UnitType = document.getElementById("unit-type").textContent;
    // if(modelconfig_hex !== undefined){
    //   let UnitType = document.getElementById("signature-3").value;
    //   if(UnitType !== type)
    //   {
    //        alertify.alert("model config type does not match with signature." +
    //               "Please select the correct type to show the model config items");
    //        document.getElementById("modelGenerator").checked = false;
    //        return;
    //   }
    // }

    this.model.generateModelConfig(type);
    if(this.model.unitstate.props.length <=0)
    {
      if(type === "T2 Status") generateT2(this.model.unitstate);
      else if(type === "O2 Status" || type === "Ogtr Stat") generateO2(this.model.unitstate);
    }
    this.view.fill(GROUPS.ModelConfig, this.model.unitstate, true);
    this.model.appstate.appMode = AppModes.ModelConfig;
  };

  Controller.prototype.onFileLoaded = function (file) {
    let self = this;
    this.model.import(file, function (result) {
      if (result.valid) {
        document.getElementById("filename").innerHTML = file.name;
        var sigOk = true;

        // if (result.signature !== "T2 Status" &&
        //     result.signature !== "O2 Status") {
        //   self.view.alert("Unrecognized signature: " + result.signature);
        //   sigOk = false;
        // }
        this.view.navbarInit();
        if (sigOk) {
          self.model.appstate.appMode = AppModes.StateFile;
          self.model.appstate.fileLoaded = true;
          self.view.fill(GROUPS, self.model.unitstate, false);
          self.view.setChecksumState(self.model.unitstate.checksumValid);
      //    if(modelconfig_hex !== undefined) {
        //    document.getElementById("ampStateExport").removeAttribute('disabled');    // enable all the buttons
        //    document.getElementById("toggleVisibility").removeAttribute('disabled');
        //    document.getElementById("modelGenerator").removeAttribute('disabled');
       //     document.getElementById("protectionUnlock").removeAttribute('disabled');
        //      document.getElementById("generator-type-selector").style.visibility = "visible";
        //      document.getElementById("ampStateExport").style.visibility = "visible";
        //      document.getElementById("toggleVisibility").style.visibility = "visible";
        //      document.getElementById("modelGenerator").style.visibility = "visible";
        //      document.getElementById("protectionUnlock").style.visibility = "visible";
       //   }
        }

      } else {
        self.view.alert(result.errorInfo);
      }
    });
  };

  Controller.prototype.onExportRequest = function (filename) {
    let result = Parser.getHex(this.model.unitstate);

      //  Util.fmtAndPrint(result.hex); //debugging use

    let self = this;

    if (result.err.length > 0) {
      let formattedError =
        this.view.confirm("Errors occurred. Continue anyways?" + Util.formatError(result.err),
          function () {
            console.log("INFO: Exporting anyways");

           // Util.fmtAndPrint(result.hex);  //debugging

            // if (self.model.appstate.appMode === AppModes.ModelConfig) {
              self.model.exportHex(result.hex, filename, result.size);
            // } else {
            //   self.model.exportHex(result.hex, filename, result.size);
            // }
          },
          function () {
            console.log("INFO: Export aborted");
            return;
          });
    } else {
//       if (this.model.appstate.appMode === AppModes.ModelConfig) {
        self.model.exportHex(result.hex, filename, result.size);
//       } else {
//         if(modelconfig_hex === undefined) {
//           alert("Please load a state file first");
//           return;
//         }
//         self.model.exportHex(result.hex, filename, self.model.unitstate.props[0].value);
//       }
    }
  };

  Controller.prototype.verifyPassword = function (password) {
    if (this.model.appstate.appMode === AppModes.StateFile && !this.model.appstate.fileLoaded) {
      this.view.alert("Please load a state file first.");
      return;
    }

    if (this.model.appstate.locked) {
      if (password === "sesame") {
        this.view.unlock();
        this.model.appstate.locked = !this.model.appstate.locked;
      } else {
        this.view.alert("Password is invalid!");
      }
    } else {
      this.view.lock();
      this.model.appstate.locked = !this.model.appstate.locked;

    }
  };

  Controller.prototype.updateLocks = function (lock) {
    for (let i = this.model.unitstate.props.length-1; i >= 0; i--) {
      if (this.model.unitstate.props[i].readonly === false &&
        this.model.unitstate.props[i].protected) {
        let id = this.model.unitstate.props[i].id;
        let el = document.getElementById(id);
        if(el)
        {
          if(lock) el.title ="unlock to edit";
          else el.title = "";
        }
        this.view.setItemLockState(id, lock);

        // if(this.model.unitstate.props[i].isModelConfig){
        //   let modelId = model.unitstate.props[i].id;
        //   modelId = "modelconfig-" + modelId;      // *********
        //   this.view.setItemLockState(modelId, lock);
        // }

      }
    }
  };

  /**
   * @summary Toggle visibility of the readonly/protected properties
   */
  Controller.prototype.togglePropVisibility = function () {
    let el = document.getElementById("toggleVisibility");
    this.showProtected = el.checked;
    // !this.showProtected;

    for (let i = this.model.unitstate.props.length - 1; i >= 0; i--)
    {
      if(this.showIrrelevant){
        if(this.model.appstate.locked)
        {
          if (this.model.unitstate.props[i].readonly || this.model.unitstate.props[i].protected)
          {
            this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showProtected);
            if(this.model.unitstate.props[i].isModelConfig)
            {
              let modelId = model.unitstate.props[i].id;
              modelId = "modelconfig-" + modelId;    // **********
              this.view.setPropVisibility(modelId, this.showProtected);
            }
          }

        }

        if(!this.model.appstate.locked){
            if (this.model.unitstate.props[i].readonly)
            {
              this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showProtected);
              if(this.model.unitstate.props[i].isModelConfig)
              {
              let modelId = model.unitstate.props[i].id;
              modelId = "modelconfig-" + modelId;
              this.view.setPropVisibility(modelId, this.showProtected);
              }
            }
            if (this.model.unitstate.props[i].protected)
            {
              this.view.setPropVisibility(this.model.unitstate.props[i].id, true);
              if(this.model.unitstate.props[i].isModelConfig)
              {
                let modelId = model.unitstate.props[i].id;
                modelId = "modelconfig-" + modelId;
                this.view.setPropVisibility(modelId, true);
              }
            }
        }
      }
      else if(!this.showIrrelevant){
        var propTubeType = this.model.unitstate.props[i].propTubeType;
        if(propTubeType === "common" || propTubeType === TubeType){

            if(this.model.appstate.locked)
            {
              if (this.model.unitstate.props[i].readonly || this.model.unitstate.props[i].protected)
              {
                this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showProtected);
                if(this.model.unitstate.props[i].isModelConfig)
                {
                  let modelId = model.unitstate.props[i].id;
                  modelId = "modelconfig-" + modelId;    // **********
                  this.view.setPropVisibility(modelId, this.showProtected);
                }
              }

            }
            else if(!this.model.appstate.locked){
                if (this.model.unitstate.props[i].readonly)
                {
                  this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showProtected);
                  if(this.model.unitstate.props[i].isModelConfig)
                  {
                  let modelId = model.unitstate.props[i].id;
                  modelId = "modelconfig-" + modelId;
                  this.view.setPropVisibility(modelId, this.showProtected);
                  }
                }
                if (this.model.unitstate.props[i].protected)
                {
                  this.view.setPropVisibility(this.model.unitstate.props[i].id, true);
                  if(this.model.unitstate.props[i].isModelConfig)
                  {
                    let modelId = model.unitstate.props[i].id;
                    modelId = "modelconfig-" + modelId;
                    this.view.setPropVisibility(modelId, true);
                  }
                }
            }

        }
      }
    }
    let buttonText = this.showProtected ? "Exclude Readonly Properties" : "Include Readonly Properties";
    this.view.setVisibilityButtonText(buttonText);
  };

// ================== function under developing ================

  Controller.prototype.nonRelevantPropVisibility = function () {
    let el = document.getElementById("nonRelevantProp");
    this.showIrrelevant = el.checked;
    // !this.showIrrelevant;
    for (let i = this.model.unitstate.props.length - 1; i >= 0; i--)
    {

      var propTubeType = this.model.unitstate.props[i].propTubeType;
      if(this.showProtected){
        if( propTubeType !== "common" && propTubeType !== TubeType )
          this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showIrrelevant);
      }
      else{
        if(!(this.model.unitstate.props[i].readonly || this.model.unitstate.props[i].protected))
          if(propTubeType !== "common" && propTubeType !== TubeType)
            this.view.setPropVisibility(this.model.unitstate.props[i].id, this.showIrrelevant);

      }

    }



    let buttonText = this.showIrrelevant ? "Hide Irrelevant Properties" :"Display Irrelevant Properties";
    this.view.setIrrelevantVsibilityButtonText(buttonText);
  };

//====================end of developing function ===========================


  Controller.prototype.updateTypeOnView = function (type) {
    this.view.lock();

    if (type.indexOf("T2") !== -1) {
      self.view.setUnitType("T2");
    } else if (type.indexOf("O2") !== -1) {
      self.view.setUnitType("O2");
    } else if (type.indexOf("Ogtr") !== -1) {
      self.view.setUnitType("Ogtr");
    }
  };

  // Export to window
  window.app = window.app || {};
  window.app.Controller = Controller;
} (window));
