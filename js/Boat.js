class Boat{
    constructor(x,y,width,height, boatPos, boatAnimation){ //adding the boatAnimation
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        };

        this.boatAnimation = boatAnimation; //defining the boat animation

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //defining the speed of the animation
        this.speed = 0.05;

        this.boatPos = boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world,this.body);
    }

    remove(index) {
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
    }

    //handling the speed of the animation
    animate(){
        this.speed += 0.05;
    }

    display(){
        var pos = this.body.position;

        //index will handle the image 
        var index = floor(this.speed%this.boatAnimation.length);

        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);

        //displaying the animated image according to the index value
        image(this.boatAnimation[index],0,this.boatPos,this.width,this.height);
        
        pop();
    }
}