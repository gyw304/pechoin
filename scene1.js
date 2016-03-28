MyGame.scene1 = function(game) {

};
var self;
var isrote = true;
var type = 1;
var isups = 1;
var _idx;
var tieShow = false;
var flag1 = true;
var flag2 = true;
var flag3 = true;
MyGame.scene1.prototype = {
    create: function() {
        self = this;

        this.stage.backgroundColor = '#ffffff';
        this.ele_01 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 963,'ele_01');
        this.ele_01.anchor.set(0.5,0);

        this.ele_02 = this.add.sprite(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 130,'ele_02');
        this.ele_02.anchor.set(0.5);
        this.ele_02.scale.setTo(.45,.45);


        touch.on('#body', 'swipeup', function(ev){
            if(isups)
            {
                self.startTween()
            }

        });


        /*this.ele_02Tween = this.add.tween(this.ele_02).to( { alpha : 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);*/


        this.ele_03 = this.add.sprite(240,490,'ele_03');
        this.ele_03.alpha = 0;
        this.ele_03.anchor.set(-1.1,.7);

        this.ele_04 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 270,'ele_04');
        this.ele_04.anchor.set(0.5);
        this.ele_04.alpha = 0;

        this.ele_05 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 270,'ele_05');
        this.ele_05.anchor.set(0.5);
        this.ele_05.alpha = 0;

        this.ele_06 = this.add.sprite(MyGame.GAME_WIDTH/2,200,'ele_06');
        this.ele_06.anchor.set(0.5);
        this.ele_06.alpha = 0;

        /*this.c_btn = self.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene, this);
        this.c_btn.anchor.set(0.5);
        this.c_btn.alpha = 0;*/

        /*this.c_btn2 = self.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene2, this);
        this.c_btn2.anchor.set(0.5);
        this.c_btn2.alpha = 0;*/

        this.c_btn3 = self.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene3, this);
        this.c_btn3.anchor.set(0.5);
        this.c_btn3.alpha = 0;

        this.ele_07 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 450,'ele_07');
        this.ele_07.anchor.set(0.5);
        this.ele_07.alpha = 0;

        this.ele_08 = this.add.sprite(MyGame.GAME_WIDTH/2,170,'ele_08');
        this.ele_08.anchor.set(0.5);
        this.ele_08.alpha = 0;

        this.line = this.add.sprite(270,MyGame.GAME_HEIGHT/2,'line');
        this.line.anchor.set(0.5);
        this.line.height = 0;
        this.line.alpha = 0;

        this.ele_09 = this.add.sprite(300,200,'ele_09');
        this.ele_09.alpha = 0;

        this.ele_10 = this.add.sprite(350,200,'ele_10');
        this.ele_10.alpha = 0;

        this.ele_jiantou = this.add.sprite(MyGame.GAME_WIDTH / 2,400,'ele_13');
        this.ele_jiantou.anchor.set(0.5);
        this.ele_jiantou.alpha = 0;

        this.ele_25 = this.add.sprite(MyGame.GAME_WIDTH / 2, MyGame.GAME_HEIGHT - 50,'ele_25');
        this.ele_25.anchor.set(0.5);
        this.ele_25.alpha = 0;

        this.ele_26 = this.add.sprite(MyGame.GAME_WIDTH / 2, MyGame.GAME_HEIGHT - 230,'ele_26');
        this.ele_26.anchor.set(0.5);
        this.ele_26.alpha = 0;

        this.colorTieGroups = this.add.group();


        this.arr = this.add.sprite(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 25,'arr');
        this.arr.anchor.set(0.5);
        this.add.tween(this.arr).to({y: MyGame.GAME_HEIGHT - 30}, 500, Phaser.Easing.Linear.None, true, 0,1000, true);

    },
    startTween : function(){
        this.add.tween(this.arr).to({alpha:0}, 500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.arr.kill()
        },this)
        this.add.tween(this.ele_01).to( { alpha: 0 }, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.ele_01.kill()
        },this);
        this.add.tween(this.ele_02).to( { y: MyGame.GAME_HEIGHT/2 }, 2200, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.logoBig()
        },this)
    },
    logoBig : function(){
        this.add.tween(this.ele_02.scale).to( { x:1,y:1 }, 1500, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.add.tween(this.ele_03).to( { alpha : 1 }, 1500, Phaser.Easing.Linear.Out, true);
            this.add.tween(this.ele_03).to({angle: 10}, 1500, Phaser.Easing.Linear.None, true, 0,1000, true);
            this.rotate()
        },this)
    },
    rotate : function(){ //rotate Logo
        /*touch.on('#body', 'touchstart', function(ev){
            //ev.startRotate();
            ev.preventDefault();
        });*/

        this.add.tween(this.ele_26).to( { alpha: 1 }, 800, Phaser.Easing.Linear.Out, true)
        
        touch.on('#body', 'swipedown', function(ev){
        	if(isrote)
        	{
                if(type == 1)
                {
                    self.add.tween(self.ele_02).to( { angle : 360 ,alpha : 0}, 1000, Phaser.Easing.Linear.Out, true)
                    self.add.tween(self.ele_03).to( { alpha : 0}, 1000, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
                        self.logoRotateOver();
                    },this)
                }
        	}
	            
        });
        
    },
    logoRotateOver : function(){
        this.ele_02.kill();
        this.ele_03.kill();
        this.add.tween(this.ele_05).to( { alpha : 1}, 1000, Phaser.Easing.Linear.Out, true)
        this.add.tween(this.ele_04).to( { alpha : 1}, 1200, Phaser.Easing.Linear.Out, true,1000)
        this.add.tween(this.ele_06).to( { alpha : 1,y:180}, 1000, Phaser.Easing.Linear.Out, true,1300).onComplete.add(function(){
            this.showCtrBtn()
        },this);
        this.add.tween(this.ele_26).to( { alpha: 0 }, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.ele_26.kill()
        },this)
        isrote = false;
    },

    showCtrBtn : function(){
        this.add.tween(this.ele_25).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true);
        if(flag1)
        {
            this.input.onDown.addOnce(this.gotoNextScene, this);
            flag1 = false;
        }
        /*this.c_btn.y = MyGame.GAME_HEIGHT - 45;
        this.add.tween(this.c_btn).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true)*/
    },

    gotoNextScene : function(){
        /*this.add.tween(this.c_btn).to( { alpha :0}, 1000, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_btn.kill();
        },this);*/
        this.add.tween(this.ele_04).to( { alpha : 0}, 1200, Phaser.Easing.Linear.Out, true,500).onComplete.add(function(){
            this.ele_04.kill()
        },this);
        this.add.tween(this.ele_06).to( { alpha : 0,y:160}, 1000, Phaser.Easing.Linear.Out, true,1000).onComplete.add(function(){
            this.ele_06.kill();
        },this);
        this.add.tween(this.ele_07).to( { alpha :1}, 1500, Phaser.Easing.Linear.Out, true,1500);
        this.add.tween(this.ele_08).to( { alpha :1,y:150}, 1500, Phaser.Easing.Linear.Out, true,2000).onComplete.add(function(){
            this.showCtrBtn2()
        },this);
    },

    showCtrBtn2 : function(){
        if(flag2)
        {
            this.input.onDown.addOnce(this.gotoNextScene2, this);
            flag2 = false;
        }

        /*this.c_btn2.y = MyGame.GAME_HEIGHT - 45;
        this.add.tween(this.c_btn2).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true)*/
    },

    gotoNextScene2 : function(){
        /*this.add.tween(this.c_btn2).to( { alpha :0}, 1000, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_btn2.kill();
        },this);*/
        this.add.tween(this.ele_25).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.ele_25.kill()
        },this)
        this.add.tween(this.ele_05).to( { alpha : 0}, 1000, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.ele_05.kill();
        },this);
        this.add.tween(this.ele_07).to( { alpha : 0}, 1000, Phaser.Easing.Linear.Out, true,500).onComplete.add(function(){
            this.ele_07.kill();
        },this);
        this.add.tween(this.ele_08).to( { alpha : 0,y:130}, 1000, Phaser.Easing.Linear.Out, true,800).onComplete.add(function(){
            this.ele_08.kill();
        },this);
        this.add.tween(this.line).to( {alpha : 1,height:592}, 1000, Phaser.Easing.Linear.Out, true,2000).onComplete.add(function(){
            this.add.tween(this.ele_09).to( {alpha : 1,y:210}, 1000, Phaser.Easing.Linear.Out, true);
            this.add.tween(this.ele_10).to( {alpha : 1,y:210}, 1000, Phaser.Easing.Linear.Out, true,500).onComplete.add(function(){
                this.showCtrBtn3()
            },this)
        },this);

    },

    showCtrBtn3 : function(){

        this.c_btn3.y = MyGame.GAME_HEIGHT - 95;
        this.add.tween(this.c_btn3).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true, 0, 1000, true);

        if(flag3)
        {
            this.input.onDown.addOnce(this.gotoNextScene3, this);
            flag3 = false;
        }

        //this.add.tween(this.c_btn3).to( { alpha : 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    },

    gotoNextScene3 : function(){
        this.state.start('scene2');
    }

};

