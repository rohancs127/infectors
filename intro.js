'use strict';

var introState = {
  create: function() {
    bitmapTextCentered(150, uiFonts.TITLE, 'Planet Earth has been infected by hundreds of', 26);
    bitmapTextCentered(180, uiFonts.TITLE, 'viruses. To save the world you must capture', 26);
    bitmapTextCentered(210, uiFonts.TITLE, 'them using cryogenic capsules.', 26);
    bitmapTextCentered(250, uiFonts.TITLE, 'The future of humanity is in your hands...', 26);

    if(matchMedia("(pointer: coarse)").matches)
    bitmapTextCentered(450, uiFonts.TITLE, 'Tap to continue', 18);
    else
    bitmapTextCentered(450, uiFonts.TITLE, 'Press ENTER to continue', 18);
    game.input.onTap.add(this.handleTap, this);


    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },
  handleTap: function(pointer) {
      if (pointer.x > 0 && pointer.x < 450 && pointer.y > 450 && pointer.y < 500) {
        this.start();
      }
  },

  start: function() {
    game.state.start('play');
  }
};
