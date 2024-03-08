function randomPassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  var pass = "";
  for (var x = 0; x < length; x++) {
    var i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}

input = document.getElementById("password");

function generate() {
  input.value = randomPassword(10);
}

function copy() {
  input.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

