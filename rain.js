class Raindrop {

     constructor(x, y) {

          var options = {

          
               friction: 0.1,
               restitution: 0.1

          }

          this.body = Bodies.circle(x, y, 7, options);
          World.add(world, this.body);

     }

     updateY() {

          if (this.body.position.y > height) {


               Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})

          }

     }


     display() {

          var pos = this.body.position;

          fill(0, 0, 255);
          ellipse(pos.x, pos.y, 7, 7);

     }





}