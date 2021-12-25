class Divisions {
    constructor(x, y, width, height) {
        var divoptions = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x, y, width, height, divoptions);
        World.add(world, this.body);
    }

    display() {
        var divPos = this.body.position;

        push()
        translate(divPos.x, divPos.y);
        rectMode(CENTER)
        fill("cyan")
        rect(0, 0, this.w, this.h);
        pop()
    }
}