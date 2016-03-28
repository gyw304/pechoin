MyGame.yaoyao = function(game) {

};

var yaoyao;
var yaoyaoFlag = true;
MyGame.yaoyao.prototype = {
    create: function() {
        yaoyao = this;
        this.stage.backgroundColor = '#ffffff';

        this.yaoyao_ele_0 = this.add.sprite(MyGame.GAME_WIDTH/2-50,MyGame.GAME_HEIGHT - 400 + 80,'yaoyao_ele_0');
        this.yaoyao_ele_0.anchor.set(.6,.6);

        this.add.tween(this.yaoyao_ele_0).to({angle: 360}, 5000, 'Linear', true, 0, false);

        this.yaoyao_ele_1 = this.add.sprite(MyGame.GAME_WIDTH/2-50,MyGame.GAME_HEIGHT - 400 + 80,'yaoyao_ele_1');
        this.yaoyao_ele_1.anchor.set(.4,.4);
        this.add.tween(this.yaoyao_ele_1).to({angle: -360}, 5000, 'Linear', true, 0, false);

        this.yaoyao_ele_2 = this.add.sprite(MyGame.GAME_WIDTH - 100, 50,'yaoyao_ele_2');
        this.yaoyao_ele_2.alpha = 0;
        this.add.tween(this.yaoyao_ele_2).to({alpha:1,y:70}, 1500, Phaser.Easing.Linear.Out,true);

        this.yaoyao_ele_3 = this.add.sprite(MyGame.GAME_WIDTH - 250, 150,'yaoyao_ele_3');
        this.yaoyao_ele_3.alpha = 1;
        this.add.tween(this.yaoyao_ele_3).to( { y: 160 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);



        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        }else{
            alert('您的设备不支持硬件运动');
            return;
        }

        // 变量初始化
        var SHAKE_THRESHOLD = 1400;  // 设定摇晃的阈值为800
        var lastUpdate = 0;
        var x, y, z, lastX, lastY, lastZ, curTime, diffTime, speed, acceleration;

        // 只要硬件发生运动，那么就执行这个函数

        var num = 0;


        function deviceMotionHandler(eventData) {

            //获取重力加速度
            acceleration = eventData.accelerationIncludingGravity;

            curTime = new Date().getTime();

            if ((curTime - lastUpdate) > 100) {

                diffTime = (curTime - lastUpdate);
                lastUpdate = curTime;

                // 重力加速度中的三个轴的值
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;

                speed = Math.abs(x+y+z-lastX-lastY-lastZ) / diffTime * 10000;

                // document.getElementById("container").innerHTML = documents.getElementById("container").innerHTML + "<br />" + speed;——在页面中显示speed的值

                // 如果达到阈值则出现动画
                if (speed > SHAKE_THRESHOLD && yaoyaoFlag) {
                    yaoyao.state.start('result');
                    yaoyaoFlag = false;
                }
                lastX = x;
                lastY = y;
                lastZ = z;

            }
        }



        var whiteFace = this.add.sprite(0,0,"whiteFace");
        var fadeTween = this.add.tween(whiteFace);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Linear.Out,true);
    }
};
