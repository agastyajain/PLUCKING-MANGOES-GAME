class Mango {
    constructor(x, y, w, h) {
        var rect_properties = { isStatic: true, restitution: 0, friction: 1 };
        this.body = Bodies.rectangle(x, y, w, h, rect_properties);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        this.image = loadImage("mango.png");

    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}