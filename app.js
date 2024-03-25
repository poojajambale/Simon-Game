let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["pink", "blue", "purple", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("started");

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIndex = Math.floor(Math.random() * 3);
    let ranClr = btns[ranIndex];
    let ranBtn = document.querySelector(`.${ranClr}`);
    gameSeq.push(ranClr);
    gameFlash(ranBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!  Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "pink";
        }, 200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userClr = btn.getAttribute("id");
    console.log(userClr);
    userSeq.push(userClr);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}