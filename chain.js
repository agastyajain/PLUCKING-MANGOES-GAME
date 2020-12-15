class Chain{
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 20
          }
          this.Sling = Constraint.create(options);
          World.add(world,this.Sling);
    }

    fly(){
       this.Sling.bodyA=null;
    }
    display(){
        if(this.Sling.bodyA){
            var pointA=this.Sling.bodyA.position;
            var pointB=this.Sling.pointB;
            strokeWeight(10);
            stroke("brown");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}