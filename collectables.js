//draw Collectables function
function drawCollectable(t_collectable) {
  if (t_collectable.isfound == false) {
    fill(102, 51, 0,100)
    rect(t_collectable.x_pos-2, t_collectable.y_pos-5, t_collectable.size*1.65, t_collectable.size*1.3,5,5,0,0)
    fill(102, 51, 0)
    rect(t_collectable.x_pos, t_collectable.y_pos-3, t_collectable.size*1.5, t_collectable.size*1.1,5,5,0,0)
    fill(204, 153, 0)
    rect(t_collectable.x_pos+3, t_collectable.y_pos+11, t_collectable.size+5, t_collectable.size-14)
    rect(t_collectable.x_pos+3, t_collectable.y_pos, t_collectable.size+5, t_collectable.size-14,5,5,0,0)
    fill(128,128,128)
    rect(t_collectable.x_pos+13, t_collectable.y_pos+9, t_collectable.size/3, t_collectable.size/4)
  }
}

//check collectable function
function checkCollectable(t_collectable) {
  if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos,
      t_collectable.y_pos
    ) < 30
  ) {
    t_collectable.isfound = true;
    game_score += 1;
    collect.play();
  }
}
