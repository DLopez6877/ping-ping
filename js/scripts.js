// Business Logic (Back-end)
var counter = function(userInput) {
  var result = [];
  for ( var index = 1 ; index <= userInput; index + 1 ) {
    result.push(index);
  }
  return result;
  console.log(result);
}


var pingPong = function(userInput) {

  output = counter(userInput);

  // for (var index = 1; index <= userInput; index + 1 ) {
    if ((userInput % 3 === 0) && (userInput % 5 !== 0 )) {
      userInput = "PING";
    } else if ((userInput % 5 === 0) && (userInput % 3 !== 0 )) {
      userInput = "PONG";
    } else if ((userInput % 3 === 0) && (userInput % 5 === 0 )) {
      userInput = "PING-PONG";
    } else {
      result.push(userInput);
    }
    result.push(userInput);
  // }

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
    // $("#flashResult").text(result);
    // cleanLog();
  });

});
