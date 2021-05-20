class Character{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        circle(this.body.position.x, this.body.position.y, this.r);
      }
}