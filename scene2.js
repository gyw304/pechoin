MyGame.scene2 = function(game) {

};
var flag = false;
var isin = false;
var slf;
var isli = true;
MyGame.scene2.prototype = {
    create: function() {
        slf = this;
        this.stage.backgroundColor = '#ffffff';

        this.ele_11 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2 + 100,'ele_11');
        this.ele_11.anchor.set(0.5);

        this.c_btn = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene, this);
        this.c_btn.anchor.set(0.5);
        this.c_btn.alpha = 0;

        this.group = this.add.group();
        this.ele_12 = this.group.create(MyGame.GAME_WIDTH/2, 420,'ele_12');
        this.ele_12.anchor.set(0.5);
        this.ele_12.inputEnabled = true;
        this.ele_12.input.enableDrag();
        this.ele_12.input.allowHorizontalDrag = false;
        this.ele_12.events.onInputDown.add(this.touchDown, this);
        this.ele_12.events.onInputUp.add(this.touchUp, this);

        this.ele_13 = this.add.sprite(MyGame.GAME_WIDTH/2,570,'ele_13');
        this.ele_13.anchor.set(0.5);
        this.add.tween(this.ele_13).to({y: 580}, 1000, Phaser.Easing.Linear.None, true, 0,1000, true);

        this.ele_14 = this.group.create(MyGame.GAME_WIDTH/2, 770,'ele_14');
        this.ele_14.anchor.set(0.5);

        this.ele_15 = this.add.sprite(MyGame.GAME_WIDTH/2,140,'ele_15');
        this.ele_15.anchor.set(0.5);
        this.ele_15.alpha = 0;


        this.teenGroup = this.add.group();
        this.ele_16 = this.teenGroup.create(MyGame.GAME_WIDTH/2, 250,'ele_16');
        this.ele_16.anchor.set(0.5);
        this.lines_left = this.teenGroup.create(0, 250,'ele_17');
        this.lines_left.anchor.set(0,0);
        this.lines_right = this.teenGroup.create(MyGame.GAME_WIDTH, 250,'ele_17');
        this.lines_right.anchor.set(1,0);

        this.teenGroup.alpha = 0;

        this.add.tween(this.teenGroup).to({alpha:1},1500,Phaser.Easing.Linear.Out,true,800);

        this.add.tween(this.ele_15).to({alpha:1,y:120},1500,Phaser.Easing.Linear.Out,true,1000);


        this.ele_27 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 50,'ele_27');
        this.ele_27.anchor.set(0.5);
        this.ele_27.alpha = 1;

        this.whiteFace = this.add.sprite(0,0,"whiteFace");
        var fadeTween = this.add.tween(this.whiteFace);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Linear.Out,true);
    },
    update : function(){
        if(isin) return;
        if(flag)
        {
            if(this.ele_12.y>=769)
            {
                isin = true;
                this.ele_12.inputEnabled = false;
                this.roundIn()
            }
        }
    },
    touchDown : function(){
        flag = true;
        this.ele_13.kill();
    },
    touchUp : function(){
        flag = false;
    },
    roundIn : function(){
        this.show_tween()
    },
    show_tween : function(){

        type = 3;

        if(isli)
        {
            slf.ele_12.kill();
            slf.ele_14.kill();
            slf.ele_11.kill();
            slf.ele_15.kill();
            slf.gotoNextScene();
            isli = false;
        }


        /*this.ele_12.kill();
        this.ele_14.kill();
        this.ele_11.kill();
        this.ele_15.kill();*/
        //this.gotoNextScene();
        //this.add.tween(this.group).to({y:-150},1500,Phaser.Easing.Linear.Out,true);
        //this.gotoNextScene();
    },
    /*show_nextBtn : function(){
        this.c_btn.y = MyGame.GAME_HEIGHT - 45;
        this.add.tween(this.c_btn).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true)
    },*/
    gotoNextScene : function(){
        this.state.start('scene3');
    }
};
