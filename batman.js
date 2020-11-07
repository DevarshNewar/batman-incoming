class Bruce {


     constructor(x, y) {

          var options = {

               'isStatic': true
     


          }


          this.body = Bodies.rectangle(x, y, 20, 20, options)
          this.image = loadImage("bruce.png");
          this.width = 60;
          this.height = 70;

          World.add(world, this.body);

     }


     display() {

          var pos = this.body.position;

          image(this.image, pos.x, pos.y, this.width, this.height);



     }


}