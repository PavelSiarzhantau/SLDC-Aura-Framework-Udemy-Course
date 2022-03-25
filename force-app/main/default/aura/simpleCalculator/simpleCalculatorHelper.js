({
  calculate: function (component, operation) {
    var firstValue = component.get("v.firstValue");
    var secondValue = component.get("v.secondValue");
    component.set("v.result", "");
    var result = 0;
    console.log("firstValue", firstValue);
    console.log("secondValue", secondValue);
    if (operation === "add") {
      result = parseInt(firstValue, 10) + parseInt(secondValue, 10);
      console.log("add result", result);
      component.set("v.result", result);
    } else if (operation === "multiply") {
      result = parseInt(firstValue, 10) * parseInt(secondValue, 10);
      console.log("multiply result", result);
      component.set("v.result", result);
    }
  }
});
