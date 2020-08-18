class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.path = [];
  }
  display() {
    super.display();
    if(this.body.position.x > 230 && this.body.velocity.x > 10){
      var positions = [this.body.position.x, this.body.position.y]
      this.path.push(positions);
    
    }
    for (var I = 0; I < this.path.length; I ++ ){
      image (this.image1, this.path[I][0], this.path[I][1])
    }
  }
}