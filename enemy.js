function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.currentX = x;
  this.inc = 1;

  this.update = function () {
    this.currentX += this.inc;
    if (this.currentX > this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
  };

  this.draw = function () {
    this.update();
    //draw enemy
    noStroke();
    fill(192,192,192);
    ellipse(this.currentX, this.y-6, 27, 27);
    ellipse(this.currentX+7, this.y+5, 7, 7);
    ellipse(this.currentX, this.y+5, 7, 7);
    ellipse(this.currentX-6, this.y+5, 7, 7);

    fill(0);
    ellipse(this.currentX-5, this.y-8,6,6)
    ellipse(this.currentX+5, this.y-8,6,6)
    triangle(this.currentX, this.y-4, this.currentX-3, this.y+1, this.currentX+3, this.y+1)

  };
  this.checkContact = function (ge_x, gameCharY) {
    var d = dist(ge_x, gameCharY, this.currentX, this.y);
    if (d < 20) {
      return true;
    }
    return false;
  };
}

//Create an instance of the enemy 
function createEnemy(x, y, range) {
  var e = new Enemy(x, y, range);
  return e;
}

//Draw the enemy on screen
function drawEnemies() {
  for (var i=0; i<enemies.length; i++) {
    enemies[i].draw();
  }
}

function checkIfGameCharInContactWithEnemies() {
  if (lives < 1) {
    return;
  }
  for (var i = 0; i < enemies.length; i++) {
    var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
    if (isContact) {
      hitByEnemy = true;
      lives--;
      lose.play();
      break;
    }
  }
}
