class Particles {
    constructor(x, y, r,) {
        var particles_options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, this.r, particles_options);
        World.add(world, this.body);
    }

    display() {

        var particlesPos = this.body.position;

        push();
        translate(particlesPos.x, particlesPos.y);
        rectMode(CENTER);
        fill(255, 165, 0);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}