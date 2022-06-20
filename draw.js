// dependent on: gamestate.js

var xpos = 0
var ypos = 0
var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d")

function draw(){
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0,0,500,500)
    for (let k = 0; k < mapsize; k++){
        for (let j = 0; j < mapsize; j++){
            ctx.fillStyle = "#000000"
            ctx.fillRect(10+k*60-xpos, 10+j*60-ypos, 50, 50)
            if (mapdata[k][j] == 1){
                ctx.fillStyle = "#FF0000"
                ctx.fillRect(10+k*60-xpos+5,10+j*60-ypos+5,20,20)
            }
        }
    }
    for (let k = 0; k < unitdata.length; k++){
        unitdata[k].draw(ctx,10+unitdata[k].x*60-xpos+5,0+unitdata[k].y*60-ypos+5)
    }
}