class Score_divs {
    constructor(x, y, width, height) {
        var soptions = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x, y, width, height, soptions);
        World.add(world, this.body);
    }

    display() {
        var sPos = this.body.position;

        push()
        translate(sPos.x, sPos.y);
        rectMode(CENTER)
        fill(255, 165, 0)
        rect(0, 0, this.w, this.h);
        pop()
    }
}