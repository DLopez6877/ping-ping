// Business Logic (Back-end)
var counter = function(userInput) {
  var result = [];
  for ( var index = 1 ; index <= userInput; index += 1 ) {
    result.push(index);
  }
  return result;
}

var pingPongRange = function(userInput) {

  var userInputs = counter(userInput);

  var result = userInputs.map(function(userInput) {
    if ((userInput % 3 === 0) && (userInput % 5 !== 0 )) {
      userInput = "PING";
      return " " + userInput;
    } else if ((userInput % 5 === 0) && (userInput % 3 !== 0 )) {
      userInput = "PONG";
      return " " + userInput;
    } else if ((userInput % 3 === 0) && (userInput % 5 === 0 )) {
      userInput = "PING-PONG";
      return " " + userInput;
    } else {
      return " " + userInput;
    }

  });

  return result;
}

var pingPong = function(userInput) {

  if ((userInput % 3 === 0) && (userInput % 5 !== 0 )) {
    userInput = "PING";
    return userInput;
  } else if ((userInput % 5 === 0) && (userInput % 3 !== 0 )) {
    userInput = "PONG";
    return userInput;
  } else if ((userInput % 3 === 0) && (userInput % 5 === 0 )) {
    userInput = "PING-PONG";
    return userInput;
  } else {
    return userInput;
  }

  return result;
}

// User Interface Logic (Front-end) below this point
$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    var singleResult = pingPong(userInput);
    var rangeResult = pingPongRange(userInput);

    $("#log").text(singleResult);
    $("#flashResult").text(singleResult);
    $("#range").text(rangeResult);
    $("#flashResult").show();
    $("#flashResult").fadeOut(500);
  });

});
