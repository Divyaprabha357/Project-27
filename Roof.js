class Roof{
  constructor(x,y,width,height) {
    var options = {
      isStatic: true,
      friction:2,

}
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(128, 128, 128);
    stroke(35, 35, 35);
    rect(pos.x, pos.y, this.width, this.height);
}
}
