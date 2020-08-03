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

const txt_main = document.querySelector(".w_txt_main");
var txt_sub = document.querySelectorAll(".w_txt_sub");
txt_sub = Array.prototype.slice.call(txt_sub);

let textWidth = 19;
reset();
function reset(){
    for(let i=0;i<textG.length;i++){
        textG[i].style.strokeWidth = "19";
    }
    txt_sub[0].innerText = "18";
    txt_sub[1].innerText = "20";
    txt_sub[1].style.opacity = "0";
    txt_main.innerText = "19";
    plusbtn.style.opacity="0";
    plusbtn.style.cursor="default";
}

function onClickMinusBtn(e){
    e.preventDefault();
    if(textWidth > 1){
        textWidth--;
        console.log(textWidth);
    }
    textWidthChange();
    textChange();
}
function onClickPlusBtn(e){
    e.preventDefault();
    if(textWidth < 19){
        textWidth++;
        console.log(textWidth);
    }
    textWidthChange();
    textChange();
}
function textWidthChange(){
    for(let i=0;i<textG.length;i++){
        textG[i].style.strokeWidth = textWidth;
    }
}
function textChange(){
    if(textWidth <= 9){
        txt_main.innerText = "0" + textWidth;
        txt_sub[0].innerText = "0" + (textWidth - 1);
        if(textWidth == 9){
            txt_sub[1].innerText = textWidth + 1;
        }
        else{
            txt_sub[1].innerText = "0" + (textWidth + 1);
        }
    }
    if(textWidth == 10){
        txt_main.innerText = textWidth;
        txt_sub[0].innerText = "0" + (textWidth - 1);
        txt_sub[1].innerText = textWidth + 1;
    }
    if(textWidth >= 11){
        txt_main.innerText = textWidth;
        txt_sub[0].innerText = textWidth - 1;
        txt_sub[1].innerText = textWidth + 1;
    }

    if(textWidth == 19){
        txt_sub[1].style.opacity = "0";
        plusbtn.style.opacity="0";
        plusbtn.style.cursor="default";
    }
    else if(textWidth == 1){
        txt_sub[0].style.opacity = "0";
        minusbtn.style.opacity="0";
        minusbtn.style.cursor="default";
    }
    else{
        txt_sub[0].style.opacity = "10%";
        txt_sub[1].style.opacity = "10%";
        plusbtn.style.opacity="1";
        minusbtn.style.opacity="1";
        plusbtn.style.cursor="pointer";
        minusbtn.style.cursor="pointer";
    }
}
plusbtn.addEventListener("click", onClickPlusBtn);
minusbtn.addEventListener("click", onClickMinusBtn);

function onClickRedrawBtn(e){
    e.preventDefault();
    realDraw();
}
function realDraw(){
    removedraw();
    setTimeout(function(){
        ondraw();
    },1500);
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
redrawbtn.addEventListener("click", onClickRedrawBtn);

const hambtn = document.querySelector(".hambtn");
const backCard = document.querySelector(".back_card");
const nav = document.querySelector("nav");
const nav_link_area = document.querySelector(".nav_link_area");
var ham = document.querySelectorAll(".ham");

function onClickHamBtn(e){
    e.preventDefault();
    if(!ham[0].classList.contains("toggleham")){
        realDraw();
    }
    backCard.classList.toggle("togglebackCard");
    backCard.style.transition = "all 0.6s ease-in-out";
    if(nav_link_area.classList.contains("nav_link_area")){
        nav_link_area.classList.add("nav_scale");
        nav_link_area.classList.remove("nav_link_area");
        nav_link_area.style.transition = "0.2s all 0.6s ease-in-out";
    }
    else if(!nav_link_area.classList.contains("nav_link_area")){
        nav_link_area.classList.remove("nav_scale");
        nav_link_area.classList.add("nav_link_area");
        nav_link_area.style.transition = "all 0.2s ease-in-out";
    }
    
    
    nav.classList.toggle("nav_height_remove");
    for(let i=0;i<ham.length;i++){
        ham[i].classList.toggle("toggleham");
    }
    hambtnAni();
}
function hambtnAni(){
    ham[0].classList.toggle("firstham");
    ham[1].classList.toggle("secondham");
    ham[2].classList.toggle("thirdham");
}
hambtn.addEventListener("click", onClickHamBtn);

window.onresize = function(e){
    backCard.style.transition = "none";
    nav_link_area.style.transition = "none";
}

const nav_hr = document.querySelector(".nav_link_inform hr");
const nav_h2 = document.querySelector(".nav_inform_box h2");
const nav_p = document.querySelector(".nav_inform_box p");
const nav_link_inform = document.querySelector(".nav_link_inform");
var nav_linkA = document.querySelectorAll(".nav_link > li > a");
nav_linkA = Array.prototype.slice.call(nav_linkA);

function onMouseNavA(e){
    let mTarget = e.currentTarget;
    let index = nav_linkA.indexOf(mTarget);
    if(e.type === "mouseover"){
        // console.log("over");
        nav_link_inform.style.opacity = "1";
        nav_hr.classList.add("informbox0" + index );
        if(index == 0){
            nav_h2.innerText = "기역 이란 :";
            nav_p.innerText = "나를 소개하는 자기소개 페이지입니다.";
        }
        else if(index == 1){
            nav_h2.innerText = "기역 바다 :";
            nav_p.innerText = "바다라는 넓은 공간에 나의 프로젝트 영역을 넓혀가고 있습니다.";
        }
        else{
            nav_h2.innerText = "기역 공간 :";
            nav_p.innerText = "공간은 나의 놀이터이고, 다양한 시도를 해보는 공간입니다.";
        }
    }
    else if(e.type === "mouseout"){
        // console.log("leave");
        nav_link_inform.style.opacity = "0";
        nav_hr.classList.remove("informbox0" + index );
    }
}

for(let i=0;i<nav_linkA.length;i++){
    nav_linkA[i].addEventListener("mouseover", onMouseNavA);
    nav_linkA[i].addEventListener("mouseout", onMouseNavA);
}