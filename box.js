class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.5,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<2){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }

else{
  World.remove(world,this.body);
  push();
  this.Visibility=this.Visibility-5;
  tint(255,this.Visibility);
  rect(this.body.position.x,this.body.position.y,this.wirdth,this.height);
  pop();
  }
};

}
