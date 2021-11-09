var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '✓'];
var cur = 0;

$(".alphabet-input").keypress(function(event) {
  if(event.key.toUpperCase() === alphabets[cur]) {
    $(".next-alphabet").text(alphabets[++cur]);
  }
});

$(".reset-button").click(function() {
  $(".alphabet-input").val("");
  $(".next-alphabet").text(alphabets[cur = 0]);
});
