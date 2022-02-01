/**
 * @constructor
 * @summary Small container class to hold application state
 * @todo This class may be removed and folded into app.js
 */
const AppModes = {
  StateFile: { },
  ModelConfig: { }
};

var AppState = function () {
  'use strict';
  /**
   * @summary Application version
   * @memberof AppState
   * @type {Number}
   */
  this.VERSION = "0.27";

  /**
   * @summary Protection override state
   * @desc Just a flag to keep track of lock state
   * @memberof AppState
   * @type {Boolean}
   */
  this.locked = true;

  /**
   * @summary File loaded state
   * @desc Just a flag to keep track of file load state
   * @memberof AppState
   * @type {Boolean}
   */
  this.fileLoaded = false;

  this.appMode = AppModes.StateFile;
};
