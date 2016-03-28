MyGame.MainMenu = function(game) {};
MyGame.MainMenu.prototype = {
    create: function() {
        this.stage.backgroundColor = '#dedede';
        //this.add.button(Kiteflying.GAME_WIDTH/2-160, Kiteflying.GAME_HEIGHT/2+100,'button-start', this.startGame, this);
        this.add.button(0, 0,'button-rest', this.startGame, this);
    },
    startGame: function() {
        this.state.start('Game');
    }
};