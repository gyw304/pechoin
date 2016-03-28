MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#ffffff';
        this.loadBar = this.add.group();
        //this.loadBar.create(0,0,'loadingBar_0');
        this.preloadBar = this.loadBar.create(0,0,'loadingBar_1');
        this.load.setPreloadSprite(this.preloadBar);
        this.loadBar.x = MyGame.GAME_WIDTH/2+50;
        this.loadBar.y = MyGame.GAME_HEIGHT - 600;
        this.loadBar.rotation = 1.561;
        this.loadBar.alpha = 0;

        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, 'Loading...', { font: "30px microsoft yahei", fill: "#000000", align: "center" });
        this.text.anchor.setTo(0.5);


        this.load.image('ele_01','assets/ele_01.png?1');
        this.load.image('ele_02','assets/ele_02.png?1');
        this.load.image('ele_03','assets/ele_03.png');
        this.load.image('ele_04','assets/ele_04.png');
        this.load.image('ele_05','assets/ele_05.png');
        this.load.image('ele_06','assets/ele_06.png');
        this.load.image('ele_07','assets/ele_07.png');
        this.load.image('ele_08','assets/ele_08.png');
        this.load.image('line','assets/line.png');
        this.load.image('ele_09','assets/ele_09.png?1');
        this.load.image('ele_10','assets/ele_10.png?1');
        this.load.image('whiteFace','assets/whiteFace.gif');
        this.load.image('ele_11','assets/ele_11.png');
        this.load.image('ele_12','assets/ele_12.png');
        this.load.image('ele_13','assets/ele_13.png');
        this.load.image('ele_14','assets/ele_14.png');
        this.load.image('ele_15','assets/ele_15.png');
        this.load.image('ele_16','assets/ele_16.png');
        this.load.image('ele_17','assets/ele_17.png');
        this.load.image('ele_18','assets/ele_18.png');
        this.load.image('ele_19','assets/ele_19.png');
        this.load.image('ele_20','assets/ele_20.png?1');
        this.load.image('ele_21','assets/ele_21.png');
        this.load.image('ele_22','assets/ele_22.png');
        this.load.image('ele_23','assets/ele_23.png?2');
        this.load.image('ele_24','assets/ele_24.png?1');
        this.load.image('ele_25','assets/ele_25.png?1');
        this.load.image('ele_26','assets/ele_26.png?3');
        this.load.image('ele_27','assets/ele_27.png?2');
        this.load.image('ele_28','assets/ele_28.png?2');
        this.load.image('ele_29','assets/ele_29.png?1');
        this.load.image('ele_13_up','assets/ele_13_up.png');
        this.load.image('arr','assets/arr.png');
        this.load.image('reMakeBtn','assets/c_reMakeBtn.png?1');
        //this.load.image('end_p_0','assets/end_p_0.png');
        this.load.spritesheet('end_p_0','assets/end_p_0.png?1',120,621,4);
        //this.load.image('end_p_1','assets/end_p_1.png');
        this.load.spritesheet('end_p_1','assets/end_p_1.png?1',146,504,4);
        //this.load.image('end_p_2','assets/end_p_2.png');
        this.load.spritesheet('end_p_2','assets/end_p_2.png?1',106,505,4);
        //this.load.image('end_p_3','assets/end_p_3.png');
        this.load.spritesheet('end_p_3','assets/end_p_3.png?1',92,431,4);
        //this.load.image('end_p_4','assets/end_p_4.png');
        this.load.spritesheet('end_p_4','assets/end_p_4.png?1',159,190,4);

        this.load.image('yaoyao_ele_0','assets/yaoyao_ele_0.png');
        this.load.image('yaoyao_ele_1','assets/yaoyao_ele_1.png');
        this.load.image('yaoyao_ele_2','assets/yaoyao_ele_2.png');
        this.load.image('yaoyao_ele_3','assets/yaoyao_ele_3.png');

        this.load.spritesheet('color_bar','assets/color_bar.png',65,33,4);
        this.load.spritesheet('color_pingzi','assets/color_pingzi.png?1',154,385,4);
        this.load.spritesheet('color_tie','assets/color_tie.png?2',48,212,4);
        this.load.spritesheet('mzj_pic','assets/mzj_pic.png',491,850,3);

        this.load.image('c_btn','assets/c_btn.png?2');
        this.load.image('nextPage','assets/nextPage.png');

        this.load.image('zj','assets/zj.png');
        this.load.image('zjBtn','assets/zj_btn.png');

        this.load.image('replay','assets/replay.png');
        this.load.image('share','assets/share.png');
        this.load.image('shareImgs','assets/shareImgss.png?2');
        this.load.image('si','assets/si.png');

        this.load.atlasJSONHash('ping_sprite', 'assets/ping_sprit_json.png?10', 'assets/ping_sprit_json.json?11');

        this.load.spritesheet('ends_text','assets/ends_text.png?11',240,101,4);


        /*this.load.image('bird','assets/bird.png');
        this.load.image('wall_left','assets/wall.jpg');
        this.load.image('wall_right','assets/wall.jpg');
        this.load.image('nail_top','assets/nail_top.png?1');
        this.load.image('nail_bottom','assets/nail_bottom.png?1');
        this.load.image('nail_left','assets/nail_left.png?1');
        this.load.image('nail_right','assets/nail_right.png?1');
        this.load.image('button-rest','assets/restBtn.png');*/

    },
    create: function() {
        this.state.start('scene1');

    }
};
