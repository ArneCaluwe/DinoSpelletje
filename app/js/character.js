let loaded = 0;

const runningAnimations = [];
const jumpinganinimations = [];
const dyingAnimations = [];

let fencer = new Image();
let run1 = new Image();
let run2 = new Image();
let run3 = new Image();
let run4 = new Image();
let jump1 = new Image();
let jump2 = new Image();
let jump3 = new Image();
let jump4 = new Image();
let jump5 = new Image();
let jump6 = new Image();
let jump7 = new Image();
let jump8 = new Image();
let jump9 = new Image();
let jump10 = new Image();
let jump11 = new Image();
let die1 = new  Image();
let die2 = new  Image();
let die3 = new  Image();
let die4 = new  Image();
let die5 = new  Image();
let die6 = new  Image();
let die7 = new  Image();

let jumpsequence = 0;



runningAnimations.push(fencer);
runningAnimations.push(run1);
runningAnimations.push(run2);
runningAnimations.push((run3));
runningAnimations.push(run4);

jumpinganinimations.push(jump1);
jumpinganinimations.push(jump2);
jumpinganinimations.push(jump3);
jumpinganinimations.push(jump4);
jumpinganinimations.push(jump5);
jumpinganinimations.push(jump6)
jumpinganinimations.push(jump7);
jumpinganinimations.push(jump8);
jumpinganinimations.push(jump9);
jumpinganinimations.push(jump10);
jumpinganinimations.push(jump11);

dyingAnimations.push(die1);
dyingAnimations.push(die2);
dyingAnimations.push(die3);
dyingAnimations.push(die4);
dyingAnimations.push(die5);
dyingAnimations.push(die6);
dyingAnimations.push(die7);



for(let i = 0; i < runningAnimations.length; i++){
    if(i === 0) {
        runningAnimations[i].src = './assets/img/Standing.png';
    }else {
        runningAnimations[i].src = './assets/img/Running' + i + '.png';
    }

    runningAnimations[i].addEventListener('load', function () {
        loaded ++;
        console.log("loaded!");
    }, false);
}

for(let i = 0; i < jumpinganinimations.length; i++){
    if(i === 0) {
        jumpinganinimations[i].src = './assets/img/Standing.png';
    }
    else {
        jumpinganinimations[i].src = './assets/img/jump' + i + '.png';
    }

    jumpinganinimations[i].addEventListener('load', function () {
        loaded ++;
        console.log("loaded " + i + "!");
    }, false);
}

for(let i = 0; i < dyingAnimations.length; i++){
    if(i === 0) {
        dyingAnimations[i].src = './assets/img/Standing.png';
    }
    else {
        dyingAnimations[i].src = './assets/img/die' + i + '.png';
    }

    jumpinganinimations[i].addEventListener('load', function () {
        loaded ++;
        console.log("loaded " + i + "!");
    }, false);
}


// Controls

const fencerStates = {run: 1, jump: 2,  die: 3, doubleJump:4}
let fencerState = fencerStates.run;
let animationframe = 0;

let jumpheight = [1, 2, 3, 3, 4, 5, 5, 4, 3, 2, 1];
let factor = 50;



function drawCharacter(ctx, canvas) {
    let charX = canvas.width / 2 - 100;
    let charY = canvas.height - 200;

    if (loaded < runningAnimations.length + jumpinganinimations.length - 1 + cactusses.length)
        return;

    if (fencerState === fencerStates.run) {
        ctx.drawImage(runningAnimations[animationframe % runningAnimations.length], charX, charY);
    } else if (fencerState === fencerStates.jump) {

        ctx.drawImage(jumpinganinimations[animationframe % jumpinganinimations.length], charX, charY - (jumpheight[animationframe] * factor));
        if (animationframe % jumpinganinimations.length === jumpinganinimations.length - 1) {
            fencerState = fencerStates.run
        }
    }else if(fencerState === fencerStates.doubleJump){
        ctx.drawImage(jumpinganinimations[animationframe % jumpinganinimations.length], charX, charY - ((jumpheight[animationframe]+jumpheight[jumpsequence]) * factor));
        if (animationframe % jumpinganinimations.length === jumpinganinimations.length - 1) {
            fencerState = fencerStates.run
        }
    }else if (fencerState === fencerStates.die){
        ctx.drawImage(dyingAnimations[animationframe % dyingAnimations.length], charX, charY + 60);
        if(animationframe % dyingAnimations.length === dyingAnimations.length -1){
            stopGame();
        }
    }

}

function jump() {
    if(fencerState === fencerStates.run){
        /// logic
        animationframe = 0;
        fencerState = fencerStates.jump;
    }else if(fencerState === fencerStates.jump){
        doubleJump();
    }
}

function doubleJump() {
    console.log("double");
    fencerState = fencerStates.doubleJump;
    jumpsequence = animationframe;
    animationframe = 0;

}

function die() {
    fencerState = fencerStates.die;
}