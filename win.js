'use strict';

var winState = {
  create: function() {
    bitmapTextCentered(90, 'engeexpa', 'You won!', 38);
    // Score
    bitmapTextCentered(170, 'engeexpa', 'Congratulations! You have saved the earth from', 25);
    bitmapTextCentered(200, 'engeexpa', 'the infectors invasion through ' + game.global.level + ' levels. You', 25);
    bitmapTextCentered(230, 'engeexpa', 'are a smart and true warrior but be careful...', 25);
    bitmapTextCentered(280, 'engeexpa', 'They could be back', 25);

    if(matchMedia("(pointer: coarse)").matches){
      bitmapTextCentered(439, uiFonts.TITLE, 'Tap to go to the menu', 18);
      game.input.onTap.add(this.handleTap, this);
      }
    else
    bitmapTextCentered(439, 'engeexpa', 'Press ENTER to go to the menu', 18);

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.exit, this);
    game.sound.stopAll();
    this.bgmSound = game.add.audio('win');
    this.bgmSound.play();
  },

  handleTap: function(pointer) {
    if (pointer.x > 200 && pointer.x < 400 && pointer.y > 400 && pointer.y < 550) {
      this.exit();
    }
  },

  exit: function() {
    game.state.start('menu');
  }
};
