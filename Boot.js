var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 640;
    MyGame.GAME_HEIGHT = 1010;
};
MyGame.Boot.prototype = {
    preload: function() {
        this.load.image('loadingBar_1', 'assets/loadingBar_1.png?3');
        this.load.image('ele_02','assets/ele_02.png?12');
        //this.load.image('loadingBar_0', 'assets/loadingBar_0.png?1');
    },
    create: function() {
        this.input.maxPointers = 1;
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // this.scale.setScreenSize(true);
        this.state.start('Preloader');
    }
};
