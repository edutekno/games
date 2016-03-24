var myVideo = document.getElementById("myVideo");
var canvas1 = document.getElementById("myCanvas1");
var canvas2 = document.getElementById("myCanvas2");
var canvas3 = document.getElementById("myCanvas3");
var chosen = false;
var chooseWp01 = 44.08;
var DaggerAttackTr = 52.30;
var chooseWp01end = 50.00;
var chooseWp02 = 75.66;
var FreezeTimeTr = 88.42;
var chooseWp02end = 85.00;
var ChooseWp03 = 126.58;
var RatBombTr = 139.55;
var chooseWp03end = 136.00;
var ChooseWp04 = 167.33;
var ChooseWp04end = 180.00;


myVideo.addEventListener("timeupdate",function(event){
                         var curTime = myVideo.currentTime;
                         document.getElementById("time").innerHTML = "time: " + curTime;
                         
                         if((curTime >= chooseWp01) && (curTime < DaggerAttackTr)){
                         chosen = false;
                         document.getElementById("demo").innerHTML = "menu 1 activer" + curTime;
                         showMenu2(false);
                         showMenu1(true);
                         if((curTime >= chooseWp01end) && (!chosen)){
                         myVideo.currentTime = chooseWp01;
                         }
                         }
                         else if((curTime >= chooseWp02) && (curTime < FreezeTimeTr)){
                         chosen = false;
                         document.getElementById("demo").innerHTML = "menu 2 activer" + curTime;
                         showMenu1(false);
                         showMenu3(false);
                         showMenu4(false);
                         showMenu2(true);
                         if((curTime >= chooseWp02end) && (!chosen)){
                         myVideo.currentTime = chooseWp02;
                         }
                         }
                         else if((curTime >= ChooseWp03) && (curTime < RatBombTr)){
                         chosen = false;
                         document.getElementById("demo").innerHTML = "menu 3 activer" + curTime;
                         showMenu1(false);
                         showMenu2(false);
                         showMenu4(false);
                         showMenu3(true);
                         if((curTime >= chooseWp03end) && (!chosen)){
                         myVideo.currentTime = ChooseWp03;
                         }
                         }
                         else if((curTime >= ChooseWp04) && (curTime < ChooseWp04end+2)){
                         chosen = false;
                         document.getElementById("demo").innerHTML = "menu 4 activer" + curTime;
                         showMenu1(false);
                         showMenu2(false);
                         showMenu3(false);
                         showMenu4(true);
                         if((curTime >= ChooseWp04end) && (!chosen)){
                         myVideo.currentTime = ChooseWp04;
                         }
                         }
                         else{
                         document.getElementById("demo").innerHTML = "menu desactiver";
                         showMenu1(false);
                         showMenu2(false);
                         showMenu3(false);
                         showMenu4(false);
                         }
                         
                         });
    function showMenu1(active){
        if(active){
            canvas1.addEventListener("mousedown",freeze);
            canvas2.addEventListener("mousedown",ratBomb);
            canvas3.addEventListener("mousedown",dagger);
        }
        else{
            canvas1.removeEventListener("mousedown", freeze);
            canvas2.removeEventListener("mousedown", ratBomb);
            canvas3.removeEventListener("mousedown", dagger);
        }
    }
    function showMenu2(active){
        if(active){
            canvas1.addEventListener("mousedown",freeze);
            canvas2.addEventListener("mousedown",ratBomb);
        }
        else{
            canvas1.removeEventListener("mousedown", freeze);
            canvas2.removeEventListener("mousedown", ratBomb);
        }
    }
    function showMenu3(active){
        if(active){
            canvas1.addEventListener("mousedown",dagger);
            canvas2.addEventListener("mousedown",ratBomb);
        }
        else{
            canvas1.removeEventListener("mousedown", dagger);
            canvas2.removeEventListener("mousedown", ratBomb);
        }
    }
    function showMenu4(active){
        if(active){
            canvas1.addEventListener("mousedown",dagger);
            canvas2.addEventListener("mousedown",freeze);
        }
        else{
            canvas1.removeEventListener("mousedown", dagger);
            canvas2.removeEventListener("mousedown", freeze);
        }
    }

    function dagger(){
        chosen = true;
        myVideo.currentTime = DaggerAttackTr;
    }
    function freeze(){
        chosen = true;
        myVideo.currentTime = FreezeTimeTr;
    }
    function ratBomb(){
        chosen = true;
        myVideo.currentTime = RatBombTr;
    }