var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '✓'];
var ind = 0, prevTime, stopwatchInterval, elapsedTime = 0;

$(".alphabet-input").keypress(function(event) {
  if (event.key.toLowerCase() === alphabets[ind]) {
    $(".next-alphabet").text(alphabets[++ind].toUpperCase());
    if (!stopwatchInterval) {
      stopwatchInterval = setInterval(function() {
        if (!prevTime)
          prevTime = Date.now();
        elapsedTime = Date.now() - prevTime;
        $(".time").text("Time: " + getTime());
      }, 50);
    }
    if (ind == 26)
      stopTime();
    $("." + alphabets[ind - 1]).text(alphabets[ind - 1] + ": " + getTime());
  }
});

$(".reset-button").click(function() {
  reset();
});

$(document).keypress(function(event) {
  if (event.which == 13)
    reset();
});

function getTime() {
  var tempTime = elapsedTime;
  var milliseconds = tempTime % 1000;
  tempTime = Math.floor(tempTime / 1000);
  var seconds = tempTime % 60;
  var zeros = new Array(3 - milliseconds.toString().length + 1).join('0');
  return seconds + "." + zeros + milliseconds + "s";
}

function reset() {
  $(".alphabet-input").val("");
  $(".next-alphabet").text(alphabets[ind = 0].toUpperCase());
  stopTime();
  elapsedTime = 0;
  $(".time").text("Time: " + getTime());
  $("li").map(function() {
    $(this).text($(this).attr("class") + ":");
  });
}

function stopTime() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  prevTime = null;
}
