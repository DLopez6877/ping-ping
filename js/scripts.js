// Business Logic (Back-end)

var pingPong = function(userInput) {
  if ((userInput % 3 === 0) && (userInput % 5 !== 0 )) {
    userInput = "PING";
  } else if ((userInput % 5 === 0) && (userInput % 3 !== 0 )) {
      userInput = "PONG";
  }

  return userInput;
}


// User Interface Logic (Front-end) below this point
$(document).ready(function() {

  var cleanLog = function() {
    $("#log li:nth-child(6)").remove();
  };

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    var result = pingPong(userInput);
    $("#log").prepend("<li>" + result + "</li>");
    cleanLog();
  });

});
