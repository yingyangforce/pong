let paddle;
let paddleR;
let ball;
let ballspeed = 1;


function setup() {
    createCanvas(400, 250);
    paddle = new Paddle(60, 2); //length, speed
    paddleR = new Paddle(60, 2);
    paddleR.body.x = width - paddleR.width;
    ball = new Ball((width / 2), (height / 2), ballspeed);
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        paddle.setDir(0, 0);
    } else if (keyCode === DOWN_ARROW) {
        paddle.setDir(0, 0);
    }
}

function draw() {
    background(220);
    noStroke();
    
    if (keyIsDown(UP_ARROW)) {
        paddle.setDir(0, (-1 * paddle.speed));
    } else if (keyIsDown(DOWN_ARROW)) {
        paddle.setDir(0, (1 * paddle.speed));
    } else if (keyIsDown(65)) {
        ball.start(-1, -1);
    }
    
    paddle.update();
    paddle.wallColl(height); //wall coll check, updates x cords
    paddleR.approach(ball.body.y, ball.size); // paddle moves towards the ball
    paddleR.update();
    paddleR.wallColl(height);
    
    if (ball.body.x == paddle.width - 1) {            //ball+paddle collision checks
        ball.paddleColl(paddle.body.y, paddle.length);
    } else if (ball.body.x == paddleR.body.x - ball.size + 1) {
        ball.paddleColl(paddleR.body.y, paddleR.length);
    }
    
    ball.update();
    ball.wallColl(height);
    
    if ((ball.body.x < 0) || (ball.body.x > width + 1)) {
        ball.reset((width / 2), (height / 2));
    }
    
    paddle.draw();
    paddleR.draw();
    ball.draw();
}