class Gnd{
    constructor(x, y, width, height) {
        var options = {
             'isStatic' : true,
             'friction' :1.0,
             'density' :1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       
      }
      display(){
        push()
          strokeWeight(3);
          stroke("brown");
          fill("gbrown");

          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
       pop();
      
      }
    } 