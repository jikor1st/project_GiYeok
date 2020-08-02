console.log("javascript load");

const minusbtn = document.querySelector(".minus_btn");
const plusbtn = document.querySelector(".plus_btn");
const textG = document.querySelectorAll(".text_g");
const redrawbtn = document.querySelector(".redraw_btn");
var horizon_line_outer = document.querySelectorAll(".horizon_line_outer");
horizon_line_outer = Array.prototype.slice.call(horizon_line_outer);
var horizon_line_inner = document.querySelectorAll(".horizon_line_inner");
horizon_line_inner = Array.prototype.slice.call(horizon_line_inner);
var st0 = document.querySelectorAll(".st0");
st0 = Array.prototype.slice.call(st0);
var st1 = document.querySelectorAll(".st1");
st1 = Array.prototype.slice.call(st1);
var line = document.querySelectorAll(".line");
line = Array.prototype.slice.call(line);
let textWidth = 19;
reset();
function reset(){
    for(let i=0;i<textG.length;i++){
        textG[i].style.strokeWidth = "19";
    }
}

function onClickMinusBtn(e){
    e.preventDefault();
    textWidth--;
    textWidthChange();
}
function onClickPlusBtn(e){
    e.preventDefault();
    textWidth++;
    textWidthChange();
}

plusbtn.addEventListener("click", onClickPlusBtn);
minusbtn.addEventListener("click", onClickMinusBtn);

function textWidthChange(){
    for(let i=0;i<textG.length;i++){
        textG[i].style.strokeWidth = textWidth;
    }
}

function onClickRedrawBtn(e){
    e.preventDefault();
    removedraw();
    console.log("click redraw");
    setTimeout(function(){
        ondraw();
    },3000);
}

function removedraw(){
    for(let i=0;i<horizon_line_outer.length;i++){
        horizon_line_outer[i].style.animation = "1.4s unopacityDraw 0.5s ease-in-out forwards";
    }
    for(let i=0;i<horizon_line_inner.length;i++){
        horizon_line_inner[i].style.animation = "1.4s unopacityDraw 0.5s ease-in-out forwards";
    }
    for(let i=0;i<line.length;i++){
        line[i].style.animation = "1s undrawLine ease-in-out";
    }
    for(let i=0;i<st0.length;i++){
        st0[i].style.animation = "1s undraw ease-in-out";
    }
    for(let i=0;i<st1.length;i++){
        st1[i].style.animation = "1s undraw ease-in-out";
    }
}
function ondraw(){
    for(let i=0;i<horizon_line_outer.length;i++){
        horizon_line_outer[i].style.animation = "0.5s opacityDraw ease-in-out";
    }
    for(let i=0;i<horizon_line_inner.length;i++){
        horizon_line_inner[i].style.animation = "0.5s opacityDraw ease-in-out";
    }
    for(let i=0;i<line.length;i++){
        line[i].style.animation = "2s drawLine ease-in-out forwards";
    }
    for(let i=0;i<st0.length;i++){
        st0[i].style.animation = "3s draw ease-in-out forwards";
    }
    for(let i=0;i<st1.length;i++){
        st1[i].style.animation = "4s draw ease-in-out forwards";
    }
}
redrawbtn.addEventListener("click", onClickRedrawBtn)