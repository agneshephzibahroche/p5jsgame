//Game controls
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var cameraPosX;
var gameChar_world_x;

var game_score;
var lives;

//Background scene variables
var mountains;
var mountains_x;

var tree;
var trees_x;

var clouds;
var sun;
var canyons;
var collectables;
var flagpole;

var platforms;
var onPlatform;

var enemies;
var hitByenemy;

var soundReady;
var soundLoadCounter;
var collect;
var falling;
var jump;
var win;
var lose;

function preload() {
  soundReady = false;
  soundLoadCounter = 0;

  //Sound from https://mixkit.co/free-sound-effects
  soundFormats("mp3");
  collect = loadSound("assets/collect.mp3", soundLoaded());
  falling = loadSound("assets/falling.mp3", soundLoaded);
  jump = loadSound("assets/jump.mp3", soundLoaded);
  win = loadSound("assets/win.mp3", soundLoaded);
  lose= loadSound("assets/lose.mp3", soundLoaded)

  //Font from https://fonts.google.com/specimen/VT323
  vT323 = loadFont("assets/vT323-Regular.ttf");
}

function soundLoaded() {
  soundLoadCounter++;
  if (soundLoadCounter == 5) {
    soundReady = true;
  }
}

function setup() {
  createCanvas(1024, 576);
  textFont(vT323);

  floorPos_y = (height * 3) / 4;

  lives = 3;
  startGame();
}

function startGame() {
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  gameChar_width = 40;

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
  onPlatform = false;
  hitByenemy = false;

  cameraPosX = 0;
  gameChar_world_x = gameChar_x;

  game_score = 0;

  //Background scene set up

  //1. Clouds
  clouds = [
    { pos_x: 50, pos_y: 90, size: 80 },
    { pos_x: 500, pos_y: 200, size: 65 },
    { pos_x: 800, pos_y: 100, size: 50 },
  ];

  //2. Mountains
  mountains = [
    { pos_y: floorPos_y - 125, height: 250, width: 300 },
    { pos_y: floorPos_y - 175, height: 350, width: 200 },
  ];
  mountains_x = [100, 700, 1300];

  //3. Trees
  trees_x = [480, 800, 1100, 1400, 1700];
  treePos_y = floorPos_y - 50;

  //4. Canyons
  canyons = [
    { x_pos: 600, width: 100 },
    { x_pos: 80, width: 100 },
    { x_pos: 1200, width: 100 },
  ];

  //5. Sun
  sun = { pos_x: 945, pos_y: 70, width: 115 };

  //6. Collectables
  collectables = [
    { x_pos: 10, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 200, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 450, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 800, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 1000, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 1500, y_pos: floorPos_y - 15, size: 22, isfound: false },
    { x_pos: 1700, y_pos: floorPos_y - 15, size: 22, isfound: false },
  ];

  //7. Flag Pole
  flagpole = { x_pos: 1800, isReached: false };

  //8. Platforms
  platforms = [];
  platforms.push(createPlatform(-150, floorPos_y - 70, 100));
  platforms.push(createPlatform(82, floorPos_y - 100, 100));
  platforms.push(createPlatform(350, floorPos_y - 60, 100));
  platforms.push(createPlatform(600, floorPos_y - 90, 100));
  platforms.push(createPlatform(1000, floorPos_y - 70, 100));
  platforms.push(createPlatform(1500, floorPos_y - 70, 100));

  //9. Enemies
  enemies = [];
  enemies.push(createEnemy(350, floorPos_y - 10, 100));
  enemies.push(createEnemy(-150, floorPos_y - 10, 100));
  enemies.push(createEnemy(1000, floorPos_y - 10, 100));
  enemies.push(createEnemy(1500, floorPos_y - 10, 100));
}

function draw() {
  if (!soundReady) {
    return;
  }

  cameraPosX = gameChar_world_x - width / 2;

  ///////////DRAWING CODE//////////
  //Purple fill sky
  background(31, 116, 173)
  //Purple fill ground
  noStroke();
  fill(219, 160, 83)
  rect(0, floorPos_y, width, height - floorPos_y);

  //Scrolling
  push();
  translate(-cameraPosX, 0);

  //1. draw Clouds
  drawClouds();

  //2. draw Mountains
  drawMountains();

  //3. draw Trees
  drawTrees();

  //4. draw Canyons
  drawCanyon(canyons);
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
    checkCanyon(canyons[i]);
  }

  //6. draw Collectables
  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isfound) {
      drawCollectable(collectables[i]);
      checkCollectable(collectables[i]);
    }
  }

  //7. draw Flagpole
  renderFlagpole();

  //8. draw Platform
  drawPlatforms();

  //9. draw Enemies
  drawEnemies();

  pop();

  //5. draw Sun
  drawSun();

  //Dsiplay Lives
  displayLives();

  //Display Game Score
  displayGameScoreandInstrcutions();

  //Display Game Over
  if (lives < 1) {
    fill(230, 172, 0)
    strokeWeight(10);
    stroke(0);
    textSize(150);
    text("Game Over!", 220, 300);
    textSize(50);
    strokeWeight(5);
    text("Press space to restart.", 280, 350);
    return;
  //Display Level complete
  } else if (flagpole.isReached && game_score > 4) {
    fill(230, 172, 0)
    strokeWeight(10);
    stroke(0);
    textSize(150);
    text("Level Complete!", 55, 300);
    textSize(50);
    strokeWeight(5);
    text("Press space to play again.", 280, 370);
    return;
  }

  //Game character
  if (onPlatform && isLeft) {
    gameChar_walk_left();
  } else if (onPlatform && isRight) {
    gameChar_walk_right();
  } else if (isLeft && isFalling) {
    //Character jumping-left
    gameChar_jump_left();
  } else if (isRight && isFalling) {
    //Character jumping-right
    gameChar_jump_right();
  } else if (isLeft) {
    //Character walking left
    gameChar_walk_left();
  } else if (isRight) {
    //Character walking right
    gameChar_walk_right();
  } else if (onPlatform) {
    gameChar_face_front();
  } else if (isFalling || isPlummeting) {
    //Character jumping facing forwards
    gameChar_jump_front();
  } else {
    //Character facing front
    gameChar_face_front();
  }
  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character
  if (isPlummeting) {
    gameChar_y += 10;
    checkPlayerDie();
    return;
  }

  if (gameChar_y < floorPos_y) {
    isFalling = true;
  } else {
    isFalling = false;
  }

  if (isLeft) {
    gameChar_world_x -= 5;
  } else if (isRight) {
    gameChar_world_x += 5;
  }

  if (hitByenemy == true) {
    if (lives > 0) {
      startGame();
    }
    return;
  }

  //Check If GameChar In Collectable Range
  checkCollectable(collectables);

  //Check If GameChar On Canyon
  checkCanyon(canyons);

  //Check If GameChar had passed FlagPole
  checkFlagpole();

  //Check If GameChar is on any platform
  checkIfGameCharIsOnAnyPlatforms();

  //Check If GameChar in contact with enemy
  checkIfGameCharInContactWithEnemies();
}

function keyPressed() {
  //Animation of GameChar when key pressed
  if (keyCode == 37) {
    isLeft = true;
  } else if (keyCode == 39) {
    isRight = true;
  } else if (keyCode == 38 || onPlatform) {
    if (gameChar_y >= floorPos_y) {
      gameChar_y -= 130;
      jump.play();
    }
  }else if (keyCode == 32) {
    setup();
  }
}

function keyReleased() {
  //Animation of GameChar when key released
  if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
      isRight = false;
  }
}

//check if player died
function checkPlayerDie() {
  if (gameChar_y > height || hitByenemy) {
    if (lives > 0) {
      startGame();
    }
  }
}
