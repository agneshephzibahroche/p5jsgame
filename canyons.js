//draw Canyon function
function drawCanyon(canyons) {
  for (var i = 0; i < canyons.length; i++) {
    noStroke()
    fill(153, 51, 0,150)
    quad(canyons[i].x_pos, floorPos_y, canyons[i].x_pos+100, floorPos_y, canyons[i].x_pos+90, floorPos_y+147, canyons[i].x_pos+10, floorPos_y+147)

    fill(153, 0, 0,150)
    quad(canyons[i].x_pos+5, floorPos_y, canyons[i].x_pos+95, floorPos_y, canyons[i].x_pos+85, floorPos_y+147, canyons[i].x_pos+15, floorPos_y+147)

    fill(128, 0, 0,150,150)
    quad(canyons[i].x_pos+10, floorPos_y, canyons[i].x_pos+90, floorPos_y, canyons[i].x_pos+80, floorPos_y+147, canyons[i].x_pos+20, floorPos_y+147)

    fill(102, 0, 0,150,150)
    quad(canyons[i].x_pos+15, floorPos_y, canyons[i].x_pos+85, floorPos_y, canyons[i].x_pos+75, floorPos_y+147, canyons[i].x_pos+25, floorPos_y+147)

    fill(176, 3, 34)
    quad(canyons[i].x_pos+20, floorPos_y, canyons[i].x_pos+80, floorPos_y, canyons[i].x_pos+70, floorPos_y+147, canyons[i].x_pos+30, floorPos_y+147)

    fill(255, 102, 0)
    quad(canyons[i].x_pos+28, floorPos_y+120, canyons[i].x_pos+42, floorPos_y+120, canyons[i].x_pos+42, floorPos_y+144, canyons[i].x_pos+30, floorPos_y+144)
    quad(canyons[i].x_pos+58, floorPos_y+120,canyons[i].x_pos+58, floorPos_y+144, canyons[i].x_pos+71, floorPos_y+144, canyons[i].x_pos+72, floorPos_y+120)

    noStroke()
    arc(canyons[i].x_pos+35, floorPos_y+120, 15, 15, PI, 0)
    noFill();
    stroke(255, 102, 0)
    arc(canyons[i].x_pos+50, floorPos_y+120, 16, 15, 0, PI)
    noStroke()
    fill(255, 102, 0)
    arc(canyons[i].x_pos+65, floorPos_y+120, 15, 15, PI, 0)

    triangle(canyons[i].x_pos+42, floorPos_y+124, canyons[i].x_pos+58, floorPos_y+144, canyons[i].x_pos+42, floorPos_y+144)
    triangle(canyons[i].x_pos+58, floorPos_y+125, canyons[i].x_pos+58, floorPos_y+146, canyons[i].x_pos+35, floorPos_y+128)

    ellipse(canyons[i].x_pos+35, floorPos_y+105,5,5)
    ellipse(canyons[i].x_pos+50, floorPos_y+115,5,5)
    ellipse(canyons[i].x_pos+60, floorPos_y+100,5,5)
  }
}

//check canyon function
function checkCanyon(t_canyon) {
  if (lives == 0) {
    return;
  }
  if (
    gameChar_y == floorPos_y &&
    gameChar_world_x - gameChar_width / 2 > t_canyon.x_pos &&
    gameChar_world_x + gameChar_width / 2 < t_canyon.x_pos + t_canyon.width
  ) {
    isPlummeting = true;
    //decrease lives
    lives--;
    //play falling sound
    falling.play();
  }
}
