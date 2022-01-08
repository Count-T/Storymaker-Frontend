import React from "react";

var lines = 0;
var text;
$("div").on("keydown", "input", function (e) {
  if (e == 14) {
    $("div").append("<p>" + text + "</p>");
  }
});

function GameBoard() {
  return (
    <div class="scrollbar">
      <p></p>
    </div>
  );
}

export default GameBoard;
