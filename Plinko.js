class Plinko {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':1.0,
          'density':1.00
      }
      this.body = Matter.Bodies.circle(x, y, 10, options);
      this.radius = 10;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }
  