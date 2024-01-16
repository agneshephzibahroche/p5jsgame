//Draw Platforms
function Platform(x, y, length) {
  this.x = x;
  this.y = y;
  this.length = length;
  this.draw = function () {
    noStroke()
    fill(115, 77, 38,100)
    rect(this.x-4, this.y-4, this.length+8, 28,5);

    fill(115, 77, 38)
    rect(this.x, this.y, this.length, 20,5);

    stroke(102, 51, 0)
    line(this.x+5, this.y+15, this.x+25, this.y+15)
    line(this.x+30, this.y+5, this.x+50, this.y+5)
    line(this.x+20, this.y+10, this.x+90, this.y+10)
  };
  this.checkContact = function (gameChar_x, gameChar_y) {
    //check for x axis
    if (gameChar_x + 20 > this.x && gameChar_x < this.x + 20 + this.length) {
      //check for y axis - game char is on platform
      var d = this.y - gameChar_y;
      if (d >= 0 && d < 1) {
        return true;
      }
    }
    return false;
  };
}

function createPlatform(x, y, length) {
  var p = new Platform(x, y, length);
  return p;
}

function drawPlatforms() {
  for (var i = 0; i < platforms.length; i++) {
    platforms[i].draw();
  }
}

function checkIfGameCharIsOnAnyPlatforms() {
  if (isFalling) {
    var isContact = false;
    onPlatform = false;
    for (var i = 0; i < platforms.length; i++) {
      isContact = platforms[i].checkContact(gameChar_world_x, gameChar_y);
      if (isContact) {
        onPlatform = true;
        break;
      }
    }
    if (!isContact) {
      gameChar_y += 1;
    }
  }
}
