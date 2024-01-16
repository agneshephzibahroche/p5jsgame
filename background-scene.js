//1. draw Clouds function
function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(153, 204, 255, 100);
    rect(clouds[i].pos_x - 5, clouds[i].pos_y - 5, 150 + 10, 50 + 10, 70);
    ellipse(clouds[i].pos_x + 60, clouds[i].pos_y + 2, clouds[i].size*0.95);
    ellipse(clouds[i].pos_x + 100, clouds[i].pos_y - 5, clouds[i].size * 0.95);

    fill(153, 204, 255);
    rect(clouds[i].pos_x, clouds[i].pos_y, 150, 50, 70);
    ellipse(clouds[i].pos_x + 60, clouds[i].pos_y + 2, clouds[i].size * 0.8);
    ellipse(clouds[i].pos_x + 100, clouds[i].pos_y - 5, clouds[i].size * 0.8);

    clouds[0].pos_x = clouds[0].pos_x + 0.2;
    clouds[1].pos_x = clouds[1].pos_x + 0.3;
    clouds[2].pos_x = clouds[2].pos_x + 0.2;
  }
}

//2. draw Mountains function
function drawMountains() {
  for (var i = 0; i < mountains_x.length; i++) {
    //Right mountain
    fill(255, 55, 0, 150);
    triangle(
      mountains_x[i] + 120 - mountains[1].width / 2 + 2.5,
      mountains[1].pos_y + mountains[1].height / 2,
      mountains_x[i] + 152,
      mountains[1].pos_y - mountains[1].height / 2,
      mountains_x[i] + 120 + mountains[1].width / 2 + 90,
      mountains[1].pos_y + mountains[1].height / 2
    );
    fill(255, 55, 0, 150);
    triangle(
      mountains_x[i] + 120 - mountains[1].width / 2 + 300,
      mountains[1].pos_y + mountains[1].height / 2,
      mountains_x[i] + 150 + 2.5,
      mountains[1].pos_y - mountains[1].height / 2,
      mountains_x[i] + 170 + mountains[1].width / 2,
      mountains[1].pos_y + mountains[1].height / 2
    );

    fill(153, 33, 0);
    triangle(
      mountains_x[i] + 120 - mountains[1].width / 2 + 5,
      mountains[1].pos_y + mountains[1].height / 2,
      mountains_x[i] + 150 + 2.5,
      mountains[1].pos_y - mountains[1].height / 2 + 5,
      mountains_x[i] + 120 + mountains[1].width / 2 + 90 + 5,
      mountains[1].pos_y + mountains[1].height / 2
    );
    fill(118, 15, 0);
    triangle(
      mountains_x[i] + 120 - mountains[1].width / 2 + 300 - 5,
      mountains[1].pos_y + mountains[1].height / 2,
      mountains_x[i] + 150 + 2.5,
      mountains[1].pos_y - mountains[1].height / 2 + 5,
      mountains_x[i] + 170 + mountains[1].width / 2 - 5,
      mountains[1].pos_y + mountains[1].height / 2
    );

    //Left mountain
    fill(255, 55, 0, 150);
    triangle(
      mountains_x[i] - mountains[0].width / 2,
      mountains[0].pos_y + mountains[0].height / 2,
      mountains_x[i] + 1,
      mountains[0].pos_y - mountains[0].height / 2,
      mountains_x[i] + mountains[0].width / 2 - 50,
      mountains[0].pos_y + mountains[0].height / 2
    );
    fill(255, 55, 0, 150);
    triangle(
      mountains_x[i] - mountains[0].width / 2 + 250,
      mountains[0].pos_y + mountains[0].height / 2,
      mountains_x[i] + 1,
      mountains[0].pos_y - mountains[0].height / 2,
      mountains_x[i] + mountains[0].width / 2,
      mountains[0].pos_y + mountains[0].height / 2
    );

    fill(176, 3, 34);
    triangle(
      mountains_x[i] - mountains[0].width / 2 + 5,
      mountains[0].pos_y + mountains[0].height / 2,
      mountains_x[i] + 1,
      mountains[0].pos_y - mountains[0].height / 2 + 5,
      mountains_x[i] + mountains[0].width / 2 - 50 + 5,
      mountains[0].pos_y + mountains[0].height / 2
    );
    fill(118, 15, 0);
    triangle(
      mountains_x[i] - mountains[0].width / 2 + 250 - 5,
      mountains[0].pos_y + mountains[0].height / 2,
      mountains_x[i] + 2.5,
      mountains[0].pos_y - mountains[0].height / 2 + 5,
      mountains_x[i] + mountains[0].width / 2 - 5,
      mountains[0].pos_y + mountains[0].height / 2
    );
  }
}

//3. draw Trees function
function drawTrees() {
  for (var i = 0; i < trees_x.length; i++) {
    noStroke();
    //tree
    fill(153, 255, 153, 100);
    rect(trees_x[i] - 2.5, treePos_y - 75 - 2.5, 35, 135, 30, 30, 3, 3);
    rect(trees_x[i] - 2.5, treePos_y - 20 - 2.5, 69, 35, 30);
    rect(trees_x[i] + 34 - 2.5, treePos_y - 35 - 2.5, 35, 35, 30, 30, 3, 3);
    rect(trees_x[i] - 34-2.5, treePos_y - 40-2.5, 55, 35, 30);
    rect(trees_x[i] - 34-2.5, treePos_y - 55-2.5, 35, 35, 30, 30, 3, 3);
    fill(46, 96, 33);
    rect(trees_x[i], treePos_y - 75, 30, 130, 30, 30, 3, 3);
    rect(trees_x[i], treePos_y - 20, 64, 30, 30);
    rect(trees_x[i] + 34, treePos_y - 35, 30, 30, 30, 30, 3, 3);
    rect(trees_x[i] - 34, treePos_y - 40, 60, 30, 30);
    rect(trees_x[i] - 34, treePos_y - 55, 30, 30, 30, 30, 3, 3);
    stroke(0);
    strokeWeight(1);
    line(trees_x[i] - 30, treePos_y - 16, trees_x[i] - 30, treePos_y - 50);
    line(trees_x[i] - 25, treePos_y - 13, trees_x[i] - 25, treePos_y - 54);
    line(trees_x[i] - 20, treePos_y - 12, trees_x[i] - 20, treePos_y - 55);
    line(trees_x[i] - 15, treePos_y - 12, trees_x[i] - 15, treePos_y - 54);
    line(trees_x[i] - 10, treePos_y - 12, trees_x[i] - 10, treePos_y - 50);
    line(trees_x[i] - 5, treePos_y - 12, trees_x[i] - 5, treePos_y - 40);
    line(trees_x[i], treePos_y - 12, trees_x[i], treePos_y - 40);
    line(trees_x[i] + 5, treePos_y - 70, trees_x[i] + 5, treePos_y + 54);
    line(trees_x[i] + 10, treePos_y - 73, trees_x[i] + 10, treePos_y + 54);
    line(trees_x[i] + 15, treePos_y - 73, trees_x[i] + 15, treePos_y + 54);
    line(trees_x[i] + 20, treePos_y - 73, trees_x[i] + 20, treePos_y + 54);
    line(trees_x[i] + 25, treePos_y - 70, trees_x[i] + 25, treePos_y + 54);
    line(trees_x[i] + 30, treePos_y - 20, trees_x[i] + 30, treePos_y + 9);
    line(trees_x[i] + 35, treePos_y - 25, trees_x[i] + 35, treePos_y + 9);
    line(trees_x[i] + 40, treePos_y - 32, trees_x[i] + 40, treePos_y + 9);
    line(trees_x[i] + 45, treePos_y - 34, trees_x[i] + 45, treePos_y + 9);
    line(trees_x[i] + 50, treePos_y - 34, trees_x[i] + 50, treePos_y + 9);
    line(trees_x[i] + 55, treePos_y - 33, trees_x[i] + 55, treePos_y + 8);
    line(trees_x[i] + 60, treePos_y - 29, trees_x[i] + 60, treePos_y + 3);
    strokeWeight(3);
    point(trees_x[i] - 30, treePos_y - 25);
    point(trees_x[i] - 20, treePos_y - 45);
    point(trees_x[i] - 5, treePos_y - 30);
    point(trees_x[i] + 5, treePos_y);
    point(trees_x[i] + 5, treePos_y - 15);
    point(trees_x[i] + 15, treePos_y - 25);
    point(trees_x[i] + 20, treePos_y + 5);
  }
}

//4. draw Sun function
function drawSun() {
  noStroke();
  fill(247, 210, 135, 100);
  ellipse(sun.pos_x, sun.pos_y, sun.width + 20, sun.width + 20);
  fill(31, 116, 173, 50);
  ellipse(sun.pos_x, sun.pos_y, sun.width + 15, sun.width + 15);
  fill(247, 210, 135, 100);
  ellipse(sun.pos_x, sun.pos_y, sun.width + 10, sun.width + 10);
  fill(31, 116, 173, 50);
  ellipse(sun.pos_x, sun.pos_y, sun.width + 5, sun.width + 5);
  fill(247, 210, 135, 100);
  ellipse(sun.pos_x, sun.pos_y, sun.width, sun.width);
  fill(31, 116, 173, 50);
  ellipse(sun.pos_x, sun.pos_y, sun.width - 5, sun.width - 5);
  fill(247, 210, 135);
  ellipse(sun.pos_x, sun.pos_y, sun.width - 10, sun.width - 10);
}
