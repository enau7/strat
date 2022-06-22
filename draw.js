// dependent on: gamestate.js utility.js

{
    let dragx = 0
    let dragy = 0
    let xpossave = 0
    let ypossave = 0
    let dragging = false
    let xpos = -10
    let ypos = -10
    let scale = 60
    let c = document.getElementById("myCanvas")
    let ctx = c.getContext("2d")

    var startdrag = (e) => {
        position = getMousePos(c,e)
        dragx = position.x
        dragy = position.y
        xpossave = xpos
        ypossave = ypos
        dragging = true
    }
    var drag = (e) => {
        if (!dragging){
            return
        }
        position = getMousePos(c,e)
        xpos = dragx - position.x + xpossave;
        ypos = dragy - position.y + ypossave;
    }
    var stopdrag = () => {
        dragging = false
    }

    var changecoordsmouse = (e) => {
        let k = Math.exp(e.deltaY/200)
        scale *= k
        xpos = (xpos+c.width/2)*k - c.width/2
        ypos = (ypos+c.height/2)*k - c.height/2
    }

    var draw = () => {
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(0, 0, c.width, c.height)
        for (let k = 0; k < mapsize; k++) {
            for (let j = 0; j < mapsize; j++) {
                ctx.fillStyle = "#000000"
                position = transform(k,j)
                ctx.fillRect(position.x, position.y, scale*5/6, scale*5/6)
                if (mapdata[k][j] == 1) {
                    ctx.fillStyle = "#178735"
                    ctx.fillRect(position.x, position.y, scale*5/6, scale*5/6)
                }
            }
        }
        for (let k = 0; k < unitdata.length; k++) {
            unitdata[k].draw(ctx, unitdata[k].xpos*scale - xpos, 
                                  unitdata[k].ypos*scale - ypos,
                                  scale*4/6
                            )
        }
    }

    var transform = (x,y) => {
        return{
            x: x*scale - xpos,
            y: y*scale - ypos
        }
    }

    var descale = (x,y) => {
        return {
            x: Math.floor((x+xpos)/scale),
            y: Math.floor((y+ypos)/scale)
        }
    }

    var findxy = (e) => {
        position = getMousePos(c,e);
        position = descale(position.x, position.y);
        return position;
    }

    var drawmouse = (x,y) => {
        ctx.fillStyle = "#000000"
        ctx.fillRect(x,y,10,10)
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(x+2, y+2, 6, 6)
        position = descale(x,y)
        ctx.fillStyle = "#000FFF"
        ctx.fillRect(position.x*scale - xpos, position.y*scale - ypos, scale/2, scale/2)
    }

    var drawselect = (s) => {
        if (s == null) {
            return
        }
        ctx.fillStyle = "#FFFF00";
        position = transform(s.xpos,s.ypos);
        ctx.fillRect(position.x, position.y, scale*5/6,scale*5/6);
    }
}