class Ball {
    constructor(x,y,r)
    {
        var options={
            
            restitution:0.9,
            friction:1
            
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r
        
        
        
    }
    display()
    {
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        ellipseMode (CENTER);
        
  ellipse(0,0,this.r)
  pop ()
    }
}