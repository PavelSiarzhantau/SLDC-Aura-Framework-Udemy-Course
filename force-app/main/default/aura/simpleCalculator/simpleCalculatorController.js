({
  doInit: function (component, event, helper) {
    component.set("v.firstValue", 0);
    component.set("v.secondValue", 0);
    component.set("v.result", 0);
  },
  add: function (component, event, helper) {
    helper.calculate(component, "add");
  },
  multiply: function (component, event, helper) {
    helper.calculate(component, "multiply");
  }
});
