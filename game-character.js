//Game Character jumping-left
function gameChar_jump_left() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 49, 6, 10);
  ellipse(gameChar_x, gameChar_y - 55, 15, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 5, gameChar_y - 40, 10, 25);

  fill(205, 133, 63);
  rect(gameChar_x - 2, gameChar_y - 47, 5, 20, 2, 2, 0, 0);

  fill(102, 102, 51);
  rect(gameChar_x - 2, gameChar_y - 14, 5, 9);

  fill(0);
  rect(gameChar_x - 5, gameChar_y - 7, 8, 4, 2, 0, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 66, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 76, 16.5, 10);

  fill(0);
  ellipse(gameChar_x - 4, gameChar_y - 55, 2, 3);
  ellipse(gameChar_x - 4, gameChar_y - 50, 3);
}

//Game Character jumping-right
function gameChar_jump_right() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 49, 6, 10);
  ellipse(gameChar_x, gameChar_y - 55, 15, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 4, gameChar_y - 40, 10, 25);

  fill(205, 133, 63);
  rect(gameChar_x - 2, gameChar_y - 47, 5, 20, 2, 2, 0, 0);

  fill(102, 102, 51);
  rect(gameChar_x - 2, gameChar_y - 14, 5, 9);

  fill(0)
  rect(gameChar_x - 2, gameChar_y - 7, 8, 4, 0, 2, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 66, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 76, 16.5, 10);

  fill(0);
  ellipse(gameChar_x + 4, gameChar_y - 55, 2, 3);
  ellipse(gameChar_x + 4, gameChar_y - 50, 3);
}

//Game Character walking left
function gameChar_walk_left() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 44, 6, 10);
  ellipse(gameChar_x, gameChar_y - 50, 15, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 5, gameChar_y - 35, 10, 25);

  fill(205, 133, 63);
  rect(gameChar_x - 2, gameChar_y - 33, 5, 20, 0, 0, 2, 2);

  fill(102, 102, 51);
  rect(gameChar_x - 2, gameChar_y - 9, 5, 9);
  fill(0)
  rect(gameChar_x - 5, gameChar_y - 2, 8, 4, 2, 0, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 61, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 71, 16.5, 10);

  fill(0);
  ellipse(gameChar_x - 4, gameChar_y - 50, 2, 3);
  line(gameChar_x - 6, gameChar_y - 46, gameChar_x - 3, gameChar_y - 46);
}
//Game Character walking right
function gameChar_walk_right() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 44, 6, 10);
  ellipse(gameChar_x, gameChar_y - 50, 15, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 4, gameChar_y - 35, 10, 25);

  fill(205, 133, 63);
  rect(gameChar_x - 2, gameChar_y - 33, 5, 20, 0, 0, 2, 2);

  fill(102, 102, 51);
  rect(gameChar_x - 2, gameChar_y - 9, 5, 9);

  fill(0);
  rect(gameChar_x - 2, gameChar_y - 2, 8, 4, 0, 2, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 61, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 71, 16.5, 10);

  fill(0);
  ellipse(gameChar_x + 4, gameChar_y - 50, 2, 3);
  line(gameChar_x + 6, gameChar_y - 46, gameChar_x + 3, gameChar_y - 46);
}

//Game Character jumping facing forwards
function gameChar_jump_front() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 49, 6, 10);
  ellipse(gameChar_x, gameChar_y - 55, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 9, gameChar_y - 40, 19, 25);

  fill(205, 133, 63);
  rect(gameChar_x - 13, gameChar_y - 47, 5, 20, 2, 2, 0, 0);
  rect(gameChar_x + 9, gameChar_y - 47, 5, 20, 2, 2, 0, 0);

  fill(102, 102, 51);
  rect(gameChar_x - 7, gameChar_y - 14, 5, 9);
  rect(gameChar_x + 3, gameChar_y - 14, 5, 9);

  fill(0)
  rect(gameChar_x - 10, gameChar_y - 7, 8, 4, 2, 0, 0, 0);
  rect(gameChar_x + 3, gameChar_y - 7, 8, 4, 0, 2, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 66, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 76, 16.5, 10);

  fill(0);
  ellipse(gameChar_x - 4, gameChar_y - 55, 2, 3);
  ellipse(gameChar_x + 4, gameChar_y - 55, 2, 3);
  ellipse(gameChar_x, gameChar_y - 52, 3);
}

//Game Character facing front
function gameChar_face_front() {
  stroke(0);

  fill(205, 133, 63);
  rect(gameChar_x - 3, gameChar_y - 44, 6, 10);
  ellipse(gameChar_x, gameChar_y - 50, 20);

  fill(102, 51, 0);
  rect(gameChar_x - 9, gameChar_y - 35, 19, 24);

  fill(205, 133, 63);
  rect(gameChar_x - 13, gameChar_y - 33, 5, 20, 0, 0, 2, 2);
  rect(gameChar_x + 9, gameChar_y - 33, 5, 20, 0, 0, 2, 2);

  fill(102, 102, 51);
  rect(gameChar_x - 6, gameChar_y - 11, 5, 9);
  rect(gameChar_x + 2, gameChar_y -11, 5, 9);
  fill(0)
  rect(gameChar_x - 9, gameChar_y - 2, 8, 4, 2, 0, 0, 0);
  rect(gameChar_x + 2, gameChar_y - 2, 8, 4, 0, 2, 0, 0);

  fill(0, 51, 0);
  rect(gameChar_x - 12, gameChar_y - 61, 23, 5);
  rect(gameChar_x - 9, gameChar_y - 71, 16.5, 10);

  fill(0);
  ellipse(gameChar_x - 4, gameChar_y - 50, 2, 3);
  ellipse(gameChar_x + 4, gameChar_y - 50, 2, 3);
  line(gameChar_x - 2, gameChar_y - 47, gameChar_x + 1, gameChar_y - 47);
}
