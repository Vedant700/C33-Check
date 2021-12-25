class Ground {
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, ground_options);
        World.add(world, this.body);
    }

    display() {

        var groundPos = this.body.position;

        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        fill(229, 229, 229)
        rect(0, 0, this.w, this.h);
        pop()

    }
}