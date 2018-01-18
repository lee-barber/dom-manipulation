document.addEventListener('keydown', function(event) {

  var x = event.keyCode;
  var y = String.fromCharCode(x);
  document.getElementById("_h_").innerHTML = y

});