MyGame.scene3 = function(game) {

};
var istouch =true;
var isins = false;
var flags= false;

var istouchDown = true;
var selfs;
var colorTie;
var isEle13Show = true;
var canTouchToYaoYao = true;

MyGame.scene3.prototype = {
    create: function() {
        selfs = this;
        this.stage.backgroundColor = '#ffffff';

        /*this.ele_18 = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 500 + 80,'ele_18');
        this.ele_18.anchor.set(0.5);*/


        this.ping_sprite = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 500 + 80, 'ping_sprite');
        this.ping_sprite.anchor.set(0.5);
        this.ping_sprite.animations.add('ping_sprite');
        this.ping_sprite.animations.play('ping_sprite',10,false);


        this.colorGroup = this.add.group();

        for(var i=0;i<4;i++)
        {
            this.item = this.add.sprite(0+65*i+20*i, 0, 'color_bar', i,this.colorGroup);
            this.item.name = 'color_' + i;
            this.item.events.onInputDown.add(this.touchs, this);
        }

        this.colorGroup.setAll('inputEnabled', true);




        this.colorGroup.x = 160;
        this.colorGroup.y = MyGame.GAME_HEIGHT - 120;

        this.c_btn = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene, this);
        this.c_btn.anchor.set(0.5);
        this.c_btn.alpha = 0;

        this.c_btn2 = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene2, this);
        this.c_btn2.anchor.set(0.5);
        this.c_btn2.alpha = 0;

        this.nextPage = this.add.button(MyGame.GAME_WIDTH/2 + 100, MyGame.GAME_HEIGHT + 50,'nextPage', this.gotoNextScene3, this);
        this.nextPage.anchor.set(0.5);
        this.nextPage.alpha = 0;

        this.c_btn4 = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT + 50,'c_btn', this.gotoNextScene4, this);
        this.c_btn4.anchor.set(0.5);
        this.c_btn4.alpha = 0;

        this.c_reMakeBtn = this.add.button(MyGame.GAME_WIDTH/2 - 100, MyGame.GAME_HEIGHT + 50,'reMakeBtn', this.reMake, this);
        this.c_reMakeBtn.anchor.set(0.5);
        this.c_reMakeBtn.alpha = 0;


        this.group = this.add.group();
        this.ele_20 = this.add.sprite(MyGame.GAME_WIDTH/2,140,'ele_20');
        this.ele_20.anchor.set(0.5);
        this.ele_20.alpha = 0;
        this.teenGroup = this.add.group();
        this.ele_16 = this.teenGroup.create(MyGame.GAME_WIDTH/2, 270,'ele_16');
        this.ele_16.anchor.set(0.5);
        this.lines_left = this.teenGroup.create(0, 270,'ele_17');
        this.lines_left.anchor.set(0,0);
        this.lines_right = this.teenGroup.create(MyGame.GAME_WIDTH, 270,'ele_17');
        this.lines_right.anchor.set(1,0);


        this.ele_19 = this.add.sprite(-200, 360, 'ele_19');
        this.ele_19.anchor.set(0.5);
        this.ele_19.alpha = 0;

        this.ele_13 = this.add.sprite(MyGame.GAME_WIDTH / 2,370,'ele_13');
        this.ele_13.anchor.set(0.5);
        this.ele_13.alpha = 0;

        this.ele_jiantou = this.add.sprite(MyGame.GAME_WIDTH / 2,390,'ele_13');
        this.ele_jiantou.anchor.set(0.5);
        this.ele_jiantou.alpha = 0;

        this.ele_21 = this.add.sprite(MyGame.GAME_WIDTH/2, 145, 'ele_21');
        this.ele_21.anchor.set(0.5);
        this.ele_21.alpha = 0;

        this.ele_22 = this.add.sprite(MyGame.GAME_WIDTH/2, 145, 'ele_22');
        this.ele_22.anchor.set(0.5);
        this.ele_22.alpha = 0;

        this.ele_24 = this.add.sprite(MyGame.GAME_WIDTH/2, 145, 'ele_24');
        this.ele_24.anchor.set(0.5);

        this.ele_28 = this.add.sprite(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 70, 'ele_28');
        this.ele_28.anchor.set(0.5);
        this.ele_28.alpha = 0;

        this.ele_29 = this.add.sprite(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 70, 'ele_29');
        this.ele_29.anchor.set(0.5);
        this.ele_29.alpha = 0;


        this.color_ping_group = this.add.group();

        this.arcGroup = this.add.group();

        this.arcGroup.y = 400;


        this.ele_23 = this.add.sprite(MyGame.GAME_WIDTH/2,60,'ele_23');
        this.ele_23.anchor.set(0.5);
        this.ele_23.alpha = 0;


        this.colorTieGroup = this.add.group();




        var whiteFace = this.add.sprite(0,0,"whiteFace");
        var fadeTween = this.add.tween(whiteFace);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Linear.Out,true);
    },
    update : function(){

        if(isins) return;
        if(flags)
        {
            if(this.ele_19.y>=397)
            {
                isins = true;
                this.ele_19.inputEnabled = false;
                this.gaiIn()
            }
        }

    },
    touchs : function(i){
        if(istouch)
        {
            this.add.tween(this.ele_24).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true)


            this.add.tween(this.colorGroup).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
                this.colorGroup.y = MyGame.GAME_HEIGHT + 100;
            },this);


            this.add.tween(this.teenGroup).to({alpha:1},1500,Phaser.Easing.Linear.Out,true,800);
            this.add.tween(this.ele_20).to({alpha:1,y:120},1500,Phaser.Easing.Linear.Out,true,1000).onComplete.add(function(){

                this.add.tween(this.ele_20).to( { alpha : 0,y:100}, 800, Phaser.Easing.Linear.Out, true,1000).onComplete.add(function(){
                    this.add.tween(this.ele_21).to({alpha:1,y:125},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
                        this.add.tween(this.ele_28).to({alpha:1},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
                            this.add.tween(this.ele_13).to({alpha:1},1500,Phaser.Easing.Linear.Out,true);

                            this.add.tween(this.ele_13).to({y: 380}, 1000, Phaser.Easing.Linear.None, true, 0,1000, true)

                            this.ele_19.inputEnabled = true;
                            this.ele_19.input.enableDrag();
                            this.ele_19.input.allowHorizontalDrag = false;
                            this.ele_19.events.onDragUpdate.add(this.dragUpdate, this);
                            this.ele_19.events.onInputDown.add(this.touchDown, this);
                            this.ele_19.events.onInputUp.add(this.touchUp, this);
                        },this)


                    },this);
                },this);



            },this);

            this.ele_19.x = MyGame.GAME_WIDTH/2;
            this.add.tween(this.ele_19).to({alpha:1,y:380},1500,Phaser.Easing.Linear.Out,true,1500)

            istouch = false;
        }

        _idx = parseInt(i.name.split("_")[1]);
        this.ping_color = this.add.sprite(MyGame.GAME_WIDTH/2-2, MyGame.GAME_HEIGHT - 355, 'color_pingzi', _idx,this.color_ping_group);
        this.ping_color.anchor.set(0.5);
        this.ping_color.alpha=0;
        this.add.tween(this.ping_color).to({alpha:1},600,Phaser.Easing.Linear.Out,true);
        if(tieShow)
        {
             this.showTie(_idx);
             this.add.tween(this.color_tie).to({alpha:1,height:212},1000,Phaser.Easing.Linear.Out,true);
        }
    },
    show_nextBtn : function(){
        this.c_btn.y = MyGame.GAME_HEIGHT - 45;
        this.add.tween(this.c_btn).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true)
    },
    gotoNextScene : function(){
        this.add.tween(this.c_btn).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_btn.kill()
        },this);
        this.add.tween(this.teenGroup).to({alpha:0},1500,Phaser.Easing.Linear.Out,true)

        this.add.tween(this.ele_20).to({alpha:0,y:100},1500,Phaser.Easing.Linear.Out,true,500).onComplete.add(function(){
            this.ele_20.kill();

        },this);

        this.add.tween(this.colorGroup).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.colorGroup.forEach(function(itemss){
                itemss.kill()
            })
        },this);
    },
    dragUpdate : function() {
      if (this.ele_19.y<380) this.ele_19.y = 380;
      if (this.ele_19.y>397) this.ele_19.y = 397;
    },
    touchDown : function(){
        flags = true;
        //this.ele_13.alpha = 0;
        this.ele_13.kill()
    },
    touchUp : function(){
        flags = false;

    },
    gaiIn : function(){

        this.add.tween(this.ele_28).to({alpha:0,y:MyGame.GAME_HEIGHT - 80},800,Phaser.Easing.Linear.Out,true)

        this.add.tween(this.ele_21).to({alpha:0,y:105},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.add.tween(this.ele_jiantou).to({alpha:1},1500,Phaser.Easing.Linear.Out,true);

            this.add.tween(this.ele_jiantou).to({y: 400}, 1000, Phaser.Easing.Linear.None, true, 0,1000, true);

            this.add.tween(this.ele_29).to({alpha:1},800,Phaser.Easing.Linear.Out,true)
            type = 2;
        },this);

        touch.on('#body', 'swipedown', function(ev){
           if(!tieShow)
           {
	           	if(type == 2)
	            {
	            	selfs.ele_jiantou.kill();
	                selfs.showTie(_idx);
	                selfs.add.tween(selfs.color_tie).to({alpha:1,height:212},1000,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
                        selfs.add.tween(selfs.ele_29).to({alpha:0,y:MyGame.GAME_HEIGHT - 80},800,Phaser.Easing.Linear.Out,true)
	                	selfs.add.tween(selfs.ele_22).to({alpha:1,y:125},1500,Phaser.Easing.Linear.Out,true,500).onComplete.add(function(){
	                		selfs.nextPage.y = MyGame.GAME_HEIGHT - 75;

                            selfs.add.tween(selfs.nextPage).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true);

                            selfs.c_reMakeBtn.y = MyGame.GAME_HEIGHT - 75;

                            selfs.add.tween(selfs.c_reMakeBtn).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true);


	                	},this);
	                },this);
	                tieShow = true;
	            }
           }
        });

    },

    showTie : function(_idx){
        this.color_tie = this.colorTieGroup.create(MyGame.GAME_WIDTH/2-2, 327, 'color_tie',_idx);
        this.colorTieGroup.forEach(function(item_tie){
            item_tie.alpha = 0;
            item_tie.height = 0;
            item_tie.anchor.set(0.5,0);
        })
    },

    gotoNextScene2 : function(){
        this.add.tween(this.c_btn2).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_btn2.kill()
        },this);
        this.add.tween(this.teenGroup).to({alpha:0},1500,Phaser.Easing.Linear.Out,true)
        this.add.tween(this.ele_21).to({alpha:0,y:105},1500,Phaser.Easing.Linear.Out,true,1000).onComplete.add(function(){
            this.ele_21.kill();
            this.ele_13 = this.add.sprite(MyGame.GAME_WIDTH/2,400,'ele_13');
            this.ele_13.anchor.set(0.5);
            this.ele_13.alpha = 0;
            this.add.tween(this.ele_13).to({alpha:1},1500,Phaser.Easing.Linear.Out,true)
                this.ele_13.inputEnabled = true;
                this.ele_13.input.enableDrag();
                this.ele_13.input.allowHorizontalDrag = false;
                this.ele_13.input.allowVerticalDrag = false;
                this.ele_13.events.onDragStop.add(this.dropHandler, this);

        },this);

    },
    gotoNextScene3 : function(){
        this.add.tween(this.nextPage).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.nextPage.kill()
        },this);

        this.add.tween(this.c_reMakeBtn).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_reMakeBtn.kill()
        },this);

        this.add.tween(this.teenGroup).to({alpha:0},1500,Phaser.Easing.Linear.Out,true)

        this.add.tween(this.ele_22).to({alpha:0,y:100},1500,Phaser.Easing.Linear.Out,true,500).onComplete.add(function(){
            this.ele_22.kill();
        },this);

        this.add.tween(this.color_ping_group).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.color_ping_group.forEach(function(itemsss){
                itemsss.kill()
            })
        },this);


        this.add.tween(this.color_tie).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.color_tie.kill()
        },this);
        this.add.tween(this.ele_19).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.ele_19.kill()
        },this);

        this.add.tween(this.ping_sprite).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.ping_sprite.kill()
        },this);

        this.add.tween(this.colorGroup).to({alpha:0},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.colorGroup.forEach(function(itemss){
                itemss.kill()
            })
        },this);


        //this.end_p_0 = this.arcGroup.create(260, -20,'end_p_0');

        this.end_p_4 = this.add.sprite(450,220, 'end_p_4', _idx,this.arcGroup);
        this.end_p_4.alpha = 0;
        this.add.tween(this.end_p_4).to({y:240,alpha:1},800,Phaser.Easing.Linear.Out,true,1600).onComplete.add(function(){
            this.showEndText()
        },this);



        /*this.end_p_1 = this.arcGroup.create(140, 15,'end_p_1');
        this.end_p_1.alpha = 0;*/

        this.end_p_1 = this.add.sprite(140,15, 'end_p_1', _idx,this.arcGroup);
        this.end_p_1.alpha = 0;
        this.add.tween(this.end_p_1).to({y:35,alpha:1},800,Phaser.Easing.Linear.Out,true,400);


        this.end_p_2 = this.add.sprite(375,45, 'end_p_2', _idx,this.arcGroup);
        this.end_p_2.alpha = 0;
        this.add.tween(this.end_p_2).to({y:65,alpha:1},800,Phaser.Easing.Linear.Out,true,800);


        //this.end_p_3 = this.arcGroup.create(70, 130,'end_p_3');
        this.end_p_3 = this.add.sprite(70,70, 'end_p_3', _idx,this.arcGroup);
        this.end_p_3.alpha = 0;
        this.add.tween(this.end_p_3).to({y:90,alpha:1},800,Phaser.Easing.Linear.Out,true,1200);

        this.end_p_0 = this.add.sprite(260,-20, 'end_p_0', _idx,this.arcGroup);
        this.end_p_0.alpha = 0;
        this.add.tween(this.end_p_0).to({y:0,alpha:1},800,Phaser.Easing.Linear.Out,true);


        this.ends_text = this.add.sprite(MyGame.GAME_WIDTH/2,170, 'ends_text', _idx);
        this.ends_text.anchor.set(0.5);
        this.ends_text.alpha = 0;
        this.add.tween(this.ends_text).to({y:160,alpha:1},800,Phaser.Easing.Linear.Out,true,4000);


    },

    showEndText : function(){

        this.add.tween(this.ele_23).to({alpha:1,y:50},1500,Phaser.Easing.Linear.Out,true)

        this.add.tween(this.teenGroup).to({alpha:1},1500,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.c_btn4.y = MyGame.GAME_HEIGHT - 95;
            this.add.tween(this.c_btn4).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true, 0, 1000, true);

            if(canTouchToYaoYao)
            {
                this.input.onDown.addOnce(this.gotoNextScene4, this);
                canTouchToYaoYao = false;
            }
        },this)


    },

    reMake : function(){
        istouch =true;
        isins = false;
        flags= false;

        istouchDown = true;

        selfs.add.tween(selfs.nextPage).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.nextPage.y = MyGame.GAME_HEIGHT + 50;
        },this)

        selfs.add.tween(selfs.c_reMakeBtn).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.c_reMakeBtn.y = MyGame.GAME_HEIGHT + 50;
        },this)

        this.colorGroup.y = MyGame.GAME_HEIGHT - 120;
        this.add.tween(this.colorGroup).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true);

        this.add.tween(this.ping_color).to({alpha:0},600,Phaser.Easing.Linear.Out,true);

        this.add.tween(this.ele_19).to({alpha:0,y:360},1500,Phaser.Easing.Linear.Out,true);

        this.add.tween(this.color_tie).to({alpha:0},1000,Phaser.Easing.Linear.Out,true).onComplete.add(function(){
            this.colorTieGroup.forEach(function(item_tie){
                item_tie.alpha = 0;
                item_tie.height = 0;
            })
            tieShow = false;
        },this);

        this.add.tween(this.ele_24).to( { alpha : 1}, 800, Phaser.Easing.Linear.Out, true);

        this.add.tween(this.ele_22).to( { alpha : 0}, 800, Phaser.Easing.Linear.Out, true).onComplete.add(function(){
            this.ele_22.y = 145;
        },this);

        this.ele_20.y = 140;
        this.ele_21.y = 145;


        this.ele_13 = this.add.sprite(MyGame.GAME_WIDTH / 2,370,'ele_13');
        this.ele_13.anchor.set(0.5);
        this.ele_13.alpha = 0;

        isEle13Show = false;

        this.ele_jiantou = this.add.sprite(MyGame.GAME_WIDTH / 2,390,'ele_13');
        this.ele_jiantou.anchor.set(0.5);
        this.ele_jiantou.alpha = 0;

        type = -1;

        //this.state.start('scene3');
    },

    gotoNextScene4 : function(){
        this.state.start('yaoyao');
    }
};
