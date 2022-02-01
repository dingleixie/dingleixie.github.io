/**
 *  @requires resources/js/appstate.js
 *  @requires resources/js/generate_o2.js
 *  @requires resources/js/generate_t2.js
 *  @requires resources/js/observable.js
 *  @requires resources/js/parser.js
 *  @requires resources/js/util.js
 *  @requires resources/js/statestructure.js
 */
(function (window) {

  /**
   * Creates a new model instance
   * @constructor
   */
  function Model() {
    this.appstate = new AppState();
    this.unitstate = new StateStructure();
    this.addEvent("stateLoaded");
  }

  Model.prototype = function () {

    /**
     * @typedef {Object} ImportResult
     * @memberof App
     * @property {string} signature
     * @property {string} valid
     * @property {string} errorInfo
     */

    /**
     * @callback FileImportCallback
     * @param {ImportResult} result
     */

    /**
     * @summary Import a hex file into state structure
     * @memberof App
     * @param {String} - file to import from
     * @param {FileImportCallback} - callback when done importing
     */
    function importStructure(file, onDone) {
      // if(this.unitstate.props.length != 0) this.unitstate.clear();
      var result = {
        signature: "Unknown",
        valid: true,
        errorInfo: ""
      };

      if (file.size > 4096*2 || file.size < 250) {
        result.valid = false;
        result.errorInfo = "File size if out of range.\n" +
          "Expected Range: \t250Byte to 5KB" +
          "Loaded file   : \t" + file.size + "Byte";

        onDone(result);
      }

      let self = this;

      var r = new FileReader();
      r.onload = function (e) {
        var hex = e.target.result;
        hex.length;

        if (hex.indexOf('DOCTYPE HTML') > -1) {
          // hex contains an HTML file. Extract the body contents into hex before parsing
          hex = extractHexFromHTMLBody(hex);

        }

        modelconfig_hex = hex;
        Util.fmtAndPrint(hex);
        result.signature = extractSignatureFromHexString(hex);
        if (result.signature === "O2 Status") 
        {
          if(self.unitstate.props.length <=0 ) generateO2(self.unitstate);
          self.emit("stateLoaded", "O2");
        } 
        else if (result.signature === "Ogtr Stat") 
        {
          if(self.unitstate.props.length <=0 ) generateO2(self.unitstate);
          self.emit("stateLoaded", "Ogtr");
        }
        else if (result.signature === "T2 Status") {
          if(self.unitstate.props.length <=0 ) generateT2(self.unitstate);
          self.emit("stateLoaded", "T2");
          
        }


        self.appstate.fileLoaded = true;
        console.clear();
        Parser.parseState(hex, self.unitstate);
        console.log("Input hex string: ")
        Util.fmtAndPrint(hex);
        onDone(result);
      };

      r.readAsText(file);
    }

    function exportHex(hex, filename, size) {
      let state = hex;
      if (state.length > 0) {
        // var filename = document.getElementById('filename').innerHTML;
        if (size !== undefined) {
          state = injectSizeIntoHexString(size, state);
        }

        let statearray = Util.getBytesFromHexString(state);

        let calculatedChecksum = Checksum.Crc16_Ccitt(statearray, 8, size - 2 * 4);
        state = injectChecksumIntoHexString(calculatedChecksum, state);

        let blob = new Blob([state], {
          type: "text/plain"
        });
        console.log("exporting file");
        Util.fmtAndPrint(state);

        downloadFile(blob, filename);
        console.log("file downloaded successfuly");
        if(state === modelconfig_hex)
          console.log("output hex string match with input hex string");
        else
          console.log("some properties have been changed");
      }
    }

    function downloadFile(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob && window.Blob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        var saveurl = window.URL.createObjectURL(blob);
        var downloadLink = document.createElement("a");
        downloadLink.download = filename;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = saveurl;
        downloadLink.onclick = function (event) {
        document.body.removeChild(event.target);
        };

        downloadLink.innerHTML = "Download File";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    }

    /**
     * @memberof App
     * @summary Parse a hex string and return the unit signature
     * @param {String} hex - entire hex string to parse
     * @return {String} unit signature of the status structure
     */
    function extractSignatureFromHexString(hex) {
      var tmp = "";
      for (var i = 16; i < (36); i++) {
        tmp += hex[i];
      }
      var signature = "";
      for (var i = 0; i < tmp.length; i += 2) {
        signature += Util.getHexToAscii(tmp[i] + tmp[i + 1]);
      }
      return signature;
    }

    /**
     * @memberof App
     * @summary Parses an HTML markup string and returns <body> contents
     * @desc Some state files are saved with some HTML markup and the hex is
     *       embedded within the <body></body> tag
     * @param {string} markup The HTML markup to parse from
     * @return {string} The body represented in a string
     */
    function extractHexFromHTMLBody(htmlContents) {
      var dummy = document.createElement('html');
      dummy.innerHTML = htmlContents;
      return dummy.getElementsByTagName("BODY")[0].innerHTML;
    }

    /**
     * @memberof App
     *
     * @param {Number} checksum
     * @param {String} raw - hex string
     * @return {String} hex string with new checksum injected
     */
    function injectChecksumIntoHexString(checksum, raw) {
      var injected = raw.substring(0, 8); // Save size parameter
      injected += Util.getNumberToByteString(checksum, 4, false); // Add checksum
      injected += raw.substring(16, raw.length); // Add the rest of the original
      return injected;
    }

    function injectSizeIntoHexString(size, raw) {
      let injected = Util.getNumberToByteString(size, 4, false);
      injected += raw.substring(8, raw.length); // Add the rest of the original
      return injected;
    }

    function generateModelConfig (type) {

      let result = Parser.getHex(this.unitstate);
      if(modelconfig_hex)
        modelconfig_hex = result.hex;

      // Util.fmtAndPrint(modelconfig_hex);  //debugging use

      // if (type === "T2") {
      //   this.unitstate.clear();
      //   console.log("T2 Model Config Generated Successfully");
      //   generateT2(this.unitstate);
      //   this.emit("stateLoaded", "T2");
      // } else if (type === "O2") {
      //   this.unitstate.clear();
      //   console.log("O2 Model Config Generated Successfully");
      //   generateO2(this.unitstate);
      //   this.emit("stateLoaded", "O2");
      // }
    }

    return {
      import: importStructure,
      generateModelConfig: generateModelConfig,
      exportHex: exportHex,
      downloadFile: downloadFile
    };
  }();

  // Export to window
  window.app = window.app || {};
  window.app.Model = Model;
}(window));
