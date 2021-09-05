class Ball {
    constructor(startx, starty, speed) {
        this.body = createVector(startx, starty);
        this.speed = speed;
        this.xdir = -1 * speed;
        this.ydir = -1 * speed;
        this.size = 8;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        this.body.x += this.xdir;
        this.body.y += this.ydir;
    }

    reset(startx, starty) {
        this.body.x = startx;
        this.body.y = starty;
        this.xdir = 0;
        this.ydir = 0;
    }

    start(xdir, ydir) {
        this.xdir = xdir * this.speed;
        this.ydir = ydir * this.speed;
    }

    wallColl(bottom) {
        if (this.body.y < 0) {
            this.body.y = 0;
            this.ydir *= -1;
        } else if (this.body.y > bottom - this.size + 1) {
            this.body.y = bottom - this.size + 1;
            this.ydir *= -1;
        }
    }

    paddleColl(paddley, paddlelength) {
        if ((this.body.y + this.size >= paddley) && (this.body.y <= (paddley + paddlelength))) {
            this.xdir *= -1;
        }
    }
    draw() {
        fill(0, 200, 0);
        noStroke();
        rect(this.body.x, this.body.y, this.size);
    }
}