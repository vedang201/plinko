class Particle {
    constructor(x,y) {
      var options = {
         restitution : 0.4
      }
      this.body = Bodies.circle(x,y,6,options);
      this.radius = 15;
      this.color = color(random(0,225),random(0,225),random(0,225))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
}