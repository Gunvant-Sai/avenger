var canvas= new fabric.Canvas("HULACanvas");

blocks_height = 30;
blocks_width = 30;

player_x = 10;
player_y = 10;

var player_object = "";

var avengers_object = "";

var avengers_height = "";
var avengers_width = "";

function player_Docterstrange()
{
    fabric.Image.fromURL("PLAYER.png",function (Img){
    player_object = Img;


    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(player_object);
    })
}

function img_Thor(getImg)
{
    fabric.Image.fromURL(getImg,function (Img){
        avengers_object = Img;


        avengers_object.scaleToWidth(avengers_width);
        avengers_object.scaleToHeight(avengers_height);
        avengers_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(avengers_object);
    })
}
window.addEventListener ("keydown",mykeydown);
function mykeydown(k)
{
 var keyPressed = k.keyCode;
 console.log(keyPressed);

 
if (k.shiftKey == true && keyPressed == '80')
{
    console.log("Shift + P have been pressed");

    blocks_width = blocks_width + 10;
    blocks_height = blocks_height + 10;
    document.getElementById("current-width").innerHTML = blocks_width;
    document.getElementById("current-height").innerHTML = blocks_height;
}

if (k.shiftKey == true && keyPressed == '77')
{
    console.log("Shift + M have been pressed");

    blocks_width = blocks_width - 10;
    blocks_height = blocks_height - 10;
    document.getElementById("current-width").innerHTML = blocks_width;
    document.getElementById("current-height").innerHTML = blocks_height;
}

if (keyPressed == 38)
{
    up();
    console.log("up");
}

if (keyPressed == 40)
{
    down();
    console.log("down");
}

if (keyPressed == 37)
{
    left();
    console.log("left");
}

if (keyPressed == 39)
{
    right();
    console.log("right");
}

if (keyPressed == '72')
{
    img_Thor ("captain_america_left_hand.png");
    console.log ("h");
}

if (keyPressed == '76')
{
    img_Thor ("hulk_legs.png");
    console.log ("l");
}

if (keyPressed == '70')
{
    img_Thor ("ironman_face.jpg");
    console.log ("f");
}

if (keyPressed == '66')
{
    img_Thor ("spiderman_body.png");
    console.log ("b");
}

if (keyPressed == '82')
{
    img_Thor ("thor_right_hand.png");
    console.log ("r");
}
}

function up()
{
    if(player_y > 0)
    {
        player_y = player_y - blocks_height;
        console.log("blocks_height" + blocks_height);
        console.log("player_y" + player_y);
        canvas.remove(player_object);
        player_Docterstrange();
    }
}

function down()
{
    if(player_y < 450)
    {
        player_y = player_y + blocks_height;
        console.log("blocks_height" + blocks_height);
        console.log("player_y" + player_y);
        canvas.remove(player_object);
        player_Docterstrange();
    }
}

function right()
{
    if(player_x < 900)
    {
        player_x = player_x + blocks_width;
        console.log("blocks_width" + blocks_width);
        console.log("player_x" + player_x);
        canvas.remove(player_object);
        player_Docterstrange();
    }
}

function left()
{
    if(player_x > 0)
    {
        player_x = player_x - blocks_width;
        console.log("blocks_width" + blocks_width);
        console.log("player_x" + player_x);
        canvas.remove(player_object);
        player_Docterstrange();
    }
}
