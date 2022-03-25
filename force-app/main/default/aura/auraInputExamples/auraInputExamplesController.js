({
  handleKeyUp: function (cmp, evt) {
    var isEnterKey = evt.keyCode === 13;
    if (isEnterKey) {
      var queryTerm = cmp.find("enter-search").get("v.value");
      alert('Searched for "' + queryTerm + '"!');
    }
  },
  writeConsole: function (cmp, evt) {
    console.log(evt.getSource().get("v.value"));
    console.log(evt.getSource());
    console.log(evt.getSource());
  }
});
