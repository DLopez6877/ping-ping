// Business Logic (Back-end)
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

var pingPong = function(userInput) {
  if ((userInput % 3 === 0) && (userInput % 5 !== 0 )) {
    userInput = "PING";
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
