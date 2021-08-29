class PlayerBase{
    constructor(x,y,width,height){
    var Options = {isStatic:true}
    this.body = Bodies.rectangle(1200,500,50,50,Options)
    this.image = loadImage("assets/base1.png")
    this.width=width
    this.height = height;
     
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop();
    
    }
    
    }