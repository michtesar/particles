class Particle {
    constructor(x, y, size) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(0, 3), random(0, 3));
        this.size = size;
        this.color = color(random(255), random(255), random(255));
    }

    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.position.x,this.position.y,this.size,this.size);
    }

    update() {
        this.position.add(this.velocity);
        if (this.position.y + this.size / 2 > screen_height || this.position.y - this.size / 2 < 0) {
            this.velocity.y *= -1;
        }
        if (this.position.x + this.size / 2 > screen_width || this.position.x - this.size / 2 < 0 ) {
            this.velocity.x *= -1;
        }
    }
}