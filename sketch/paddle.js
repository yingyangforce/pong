class Paddle {
    constructor(length, speed) {
        this.body = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;
        this.width = 8;
        this.length = length;
        this.speed = speed;
    }
    
    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    approach(bally, ballsize) {
        if (bally + ballsize < this.body.y) {
            this.ydir = -1 * this.speed;
        } else if (bally > this.body.y + this.length) {
            this.ydir = 1 * this.speed;
        }
    }

    update() {
        this.body.x += this.xdir;
        this.body.y += this.ydir;
    }
    
    wallColl(height) {
        if (this.body.y < 0) {
        this.body.y = 0;
        } else if (this.body.y > (height - this.length)) {
        this.body.y = (height - this.length);
        }
    }
    
    draw() {
        fill(69); //Nice.
        noStroke();
        rect(this.body.x, this.body.y, this.width, this.length);
    }
}