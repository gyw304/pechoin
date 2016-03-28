MyGame.result = function(game) {

};
var zj = 0;
MyGame.result.prototype = {
    create: function() {

        this.stage.backgroundColor = '#ffffff';

        if(zj)
        {
            this.zj = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2 - 50,'zj');
            this.zj.anchor.set(0.5);
            this.zjBtn  = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 70,'zjBtn', this.showBaoMing, this);
            this.zjBtn.anchor.set(0.5);
        }
        else
        {
            this.mzj_pic = this.add.sprite(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2 - 50, 'mzj_pic', this.rnd.integerInRange(0, 2));
            this.mzj_pic.anchor.set(0.5);
            this.replayBtn  = this.add.button(215, MyGame.GAME_HEIGHT - 70,'replay', this.replay, this);
            this.replayBtn.anchor.set(0.5);
            this.shareBtn  = this.add.button(420, MyGame.GAME_HEIGHT - 70,'share', this.shareImg, this);
            this.shareBtn.anchor.set(0.5);
        }

        var whiteFace = this.add.sprite(0,0,"whiteFace");
        var fadeTween = this.add.tween(whiteFace);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Linear.Out,true);
    },
    replay : function(){
        yaoyaoFlag = true;
        this.state.start('yaoyao');
    },
    shareImg : function(){
        this.shareImgs = this.add.sprite(0,0,'shareImgs');
        this.si = this.add.sprite(MyGame.GAME_WIDTH - 350,50,'si');
        this.add.tween(this.si).to( {x: MyGame.GAME_WIDTH - 350 + 10, y:40}, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        this.shareImgs.inputEnabled = true;
        this.shareImgs.events.onInputDown.add(this.closeShare, this);
    },
    closeShare : function(){
        this.shareImgs.kill();
        this.si.kill()
    },
    showBaoMing : function(){
        document.getElementById('baoming').style.display = 'block';

    }
};

