class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.boatposition = boatPos
    this.image=loadImage("assets/boat.png")
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, this.boatposition, this.width, this.height);
    pop();
  }
}
