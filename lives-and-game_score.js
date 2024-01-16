//Dsiplay Lives
function displayLives() {
  fill(153, 0, 51)
  for (var i = 0; i < lives; i++) {
    beginShape();
    vertex(40 * i + 900, 10);
    bezierVertex(
      40 * i + 900 - 22 / 2,
      10 - 22 / 2,
      40 * i + 900 - 22,
      10 + 22 / 3,
      40 * i + 900,
      10 + 22
    );
    bezierVertex(
      40 * i + 900 + 22,
      10 + 22 / 3,
      40 * i + 900 + 22 / 2,
      10 - 22 / 2,
      40 * i + 900,
      10
    );
    endShape(CLOSE);
  }
}

//Display Game Score
function displayGameScoreandInstrcutions() {
  fill(230, 172, 0)
  textSize(60);
  text("Score: " + game_score, 10, 50);
  textSize(30);
  text("Collect 5 treasure chests and cross the finish", 250, 30);
  text("line while avoiding the skulls with only 3 lives.", 230, 60);
}
