(function (window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order='form']";
  var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";

  var App = window.App;
  var Truck = App.Truck;
  var Datastore = App.Datastore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;

  var myTruck = new Truck("ncc-1701", new Datastore());
  window.myTruck = myTruck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  var formhandler = new FormHandler(FORM_SELECTOR);

  formhandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

})(window);
