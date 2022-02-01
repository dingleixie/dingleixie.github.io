/**
 * @summary Entry point for the application
 * @desc This file should be loaded last after all the dependencies are met.
 * 
 * @requires resources/js/model.js
 * @requires resources/js/view.js
 * @requires resources/js/controller.js
 */
(function () {
  this.model = new app.Model();
  this.view = new app.View();
  this.controller = new app.Controller(this.model, this.view);

  window.app = this;
 }(window));