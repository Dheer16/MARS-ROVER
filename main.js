

var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var bgimg="mars.jpg";
var rimg="rover.png";

var rimgwidth=100;
var rimgheight=100;
var roverx=0;
var rovery=0;

function add (){

    backround_image_tag=new Image();
    backround_image_tag.onload=uploadbackround;
    backround_image_tag.src=bgimg;


    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rimg;
    
}

function uploadbackround(){

ctx.drawImage(backround_image_tag,0,0,canvas.width,canvas.height);

}

function uploadrover (){
    ctx.drawImage(rover_imagetag,roverx,rovery,rimgwidth,rimgheight);
    
}



window.addEventListener ("keydown",my_keydown);



function my_keydown (e){

    keypressed=e.keyCode;

    if (keypressed =="38"){

        up();
        console.log("pressed the up arrow") ;

    }
    if (keypressed =="39"){

        right();
        console.log("pressed the right arrow") ;

    }
    if (keypressed =="40"){

        down();
        console.log("pressed the down arrow") ;

    }
    if (keypressed =="37"){

        left();
        console.log("pressed the left arrow") ;

    }

    if (keypressed =="49"){

        bgimg="aug12019apod.jpg";
        add();
        uploadbackround();
        uploadrover();
        console.log("changed bg") ;

    }

    if (keypressed =="50"){

        bgimg="aug12020apod.png";
        add();
        uploadbackround();
        uploadrover();
        console.log("changed bg") ;

    }

    if (keypressed =="51"){

        bgimg="aug12021apod.jpg";
        add();
        uploadbackround();
        uploadrover();
        console.log("changed bg") ;

    }




}



function down (){

    if (rovery<500){

        rovery=rovery+10;
        uploadbackround();
        uploadrover();
    }

}


function up (){

    if (rovery>0){

        rovery=rovery-10;
        uploadbackround();
        uploadrover();
    }

}



function right (){

    if (roverx<700){

        roverx=roverx+10;
        uploadbackround();
        uploadrover();
    }

}





function left (){

    if (roverx>0){

        roverx=roverx-10;
        uploadbackround();
        uploadrover();
    }

}















