let particles = [];
let screen_width = window.outerWidth;
let screen_height = window.innerHeight;

function setup() {
    createCanvas(screen_width, screen_height);
    for (let i = 0; i < 1000; i++) {
        particles.push(new Particle(random(10, screen_width), random(10, screen_height), random(2, screen_height/30)));
    }
}

function draw() {
    background(0);
    for (const particle of particles) {
        particle.update();
        particle.draw();
    }
}

window.onresize = function() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas.size(screen_width, screen_height);
}

function windowResized() {
    resizeCanvas(screen_width, screen_height);
}