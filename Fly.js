class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:200
        }
        this.pointB =pointB;
        this.rope=Constraint.create(options);

        World.add(world,this.rope);
    }
    attach(bodyA)
{
this.rope.bodyA=bodyA;
}   
 fly(){
        this.rope.bodyA =null;
    }
    display(){
        if(this.rope.bodyA){
            var pointA =this.rope.bodyA.position;
            var pointB =this.pointB;
            push();
            strokeWeight(0);
            stroke("brown");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();

        }
    }
}