class Plinko {
    constructor(x, y, r) {

        this.x = x;
        this.y = y;
        this.r = r;


        this.body = Bodies.circle(this.x, this.y, this.r);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display() {

        var plinkoPos = this.body.position;

        push();
        translate(plinkoPos.x, plinkoPos.y);
        rectMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
    }



}