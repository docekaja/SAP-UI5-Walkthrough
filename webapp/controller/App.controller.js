sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';
  return Controller.extend('sap.ui.walkthrough.controller.App', {
    onShowHello: function () {
      alert('It is working!');
    },
  });
});
