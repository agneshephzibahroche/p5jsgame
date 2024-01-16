//draw flag
function renderFlagpole() {
  noStroke();
  fill(0, 51, 0)
  rect(flagpole.x_pos, floorPos_y - 100, 5, 100);
  fill(153, 0, 0)
  if (flagpole.isReached && game_score > 4) {
    triangle(
      flagpole.x_pos + 5,
      floorPos_y - 100,
      flagpole.x_pos + 5,
      floorPos_y - 70,
      flagpole.x_pos + 30,
      floorPos_y - 85
    );
  } else {
    triangle(
      flagpole.x_pos + 5,
      floorPos_y,
      flagpole.x_pos + 5,
      floorPos_y - 30,
      flagpole.x_pos + 30,
      floorPos_y - 15
    );
  }
}

//check flag pole function
function checkFlagpole() {
  if (flagpole.isReached == false) {
    var d = dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y);
    if (d < 10) {
      flagpole.isReached = true;
      win.play();
    }
  }
}