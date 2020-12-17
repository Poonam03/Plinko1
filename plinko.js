class Plinko
{
    constructor(x,y)
    {
        var options={isStatic:true,restitution:0.4}
        this.body=Bodies.circle(x,y,10,options)
        this.radius=10;
        World.add(gameWorld,this.body);
    }
    display()
    {
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}