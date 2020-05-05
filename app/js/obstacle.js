cactus1 = new Image();
cactus2 = new Image();
cactusses = [];

let cactussesLoaded = 0;

cactusses.push(cactus1, cactus2);

for(let i = 0; i < cactusses.length; i++){

    cactusses[i].src = './assets/img/Cactus' + (i+1) + '.png';


    cactusses[i].addEventListener('load', function () {
        cactussesLoaded ++;
        console.log(" cactus loaded!");
        cactusses[i].width = 50;
        cactusses[i].height = 50;
    }, false);
}

obstacle1 = {
    image: cactusses[0],
    x: 300,
    y: 370,
    height: 60,
    width: 10
}

obstacle2 = {
    image: cactusses[1],
    x: 100,
    y: 500,
    height: 60,
    width: 10
}

let _obstacleSpeed = 25;

function setObstacleSpeed(speed){
    _obstacleSpeed = speed
}

function testCollision(height) {
    console.log("col");
}

drawObstacle= function (ctx, canvas) {
    if(cactussesLoaded < cactusses.length)
        return;

    ctx.fillStyle = "black";

    ctx.drawImage(obstacle1.image, obstacle1.x, obstacle1.y)
    ctx.drawImage(obstacle2.image, obstacle2.x, obstacle2.y)


    obstacle1.x -= _obstacleSpeed;
    obstacle2.x -= _obstacleSpeed;
    if(obstacle1.x < 0){
        obstacle1.x = Math.random()*500 + 800;
        _obstacleSpeed ++;
    }
    if(obstacle2.x < 0){
        obstacle2.x = Math.random()*500 + 800;
        _obstacleSpeed ++;
    }

    if( (obstacle1.x > canvas.width / 2 - 100 )&& (obstacle1 < canvas.width/2 )){
        console.log(obstacle1.x);
    }
    if(obstacle2.x > canvas.width / 2 - 100 && obstacle2 < canvas.width/2){
        testCollision(obstacle2.height);
    }

}




