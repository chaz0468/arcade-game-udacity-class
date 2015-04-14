// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random() * 505;
    this.y = 63 + (Math.round(Math.random() * 3) * 83);
    this.velocity = (Math.random() * 50) + 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.velocity * dt;

    //If enemy is off screen, rest to beginning and randomly start 
    //on a row of stone blocks.
    if( this.x >= 505) {
        this.y = 63 + (Math.round(Math.random() * 3) * 83);
        this.x = -101;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {

    this.sprite = 'images/char-horn-girl.png';
    this.x = 202;
    this.y = 404; 
}
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   // console.log('this.x: ' + this.x);
   // console.log('this.y: ' + this.y);
if (this.y == -11) {
  this.x = 202;
  this.y = 404;
  }
}

player.prototype.update = function(dt) {
    //console.log('dt: ' + dt);
    //console.log('this.x: ' + this.x);
    //console.log('this.y: ' + this.y);
    //this.x = this.x-1
    //player.render()
for(var roach in allEnemies) {
        if(this.x < allEnemies[roach].x + 90 && this.x + 65 > allEnemies[roach].x + 2 
          && this.y + 135 > allEnemies[roach].y + 142 && this.y + 65 < allEnemies[roach].y + 79) {
            this.x = 202;
            this.y = 404;
        }
    }
}

player.prototype.handleInput = function(keypress) {
   if (keypress == 'up' && this.y -83 >=-11) {
  this.y = this.y-83
  }
  if (keypress == 'down' && this.y +83 <487) {
  this.y = this.y+83
  }
  if (keypress == 'left' && this.x -101 >=0) {
  this.x = this.x-101
  }
  if (keypress == 'right' && this.x +101 < 505) {
  this.x = this.x+101
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player

for (var index = 0; index < 5; index++) {
    var enemyObj = new Enemy();
    allEnemies.push(enemyObj);
}
var player = new player();
//player.render();
//player.update()


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
