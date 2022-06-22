class unit{
    constructor(x,y,team){
        this.team = team
        this.xpos = x
        this.ypos = y
        this.baseactions = 2
        this.actions = this.baseactions
        this.i_size = 0
        this.inventory = Array()
    }
    canmove(x,y){
        if (x < 0 || x > 15){return false;};
        if (y < 0 || y > 15){return false;};
        for (let k = 0; k < unitdata.length; k++){
            if (unitdata[k].xpos == position.x && unitdata[k].ypos == position.y){
                if (unitdata[k] != this){
                    return false
                }
            }
        }
        if ((Math.abs(this.xpos-x) == 1) || (Math.abs(this.ypos-y) == 1)){
            return true;
        };
        return false;
    }
    move(x,y){
        if (this.actions <= 0){return false;};
        if (!this.canmove(x,y)){return false;};
        this.xpos = x;
        this.ypos = y;
        this.actions -= 1;
        return true;
    }
    hold(item){
        if (this.i_size < this.inventory.length()){
            if (this.inventory.findIndex(null) != -1){
                this.inventory[this.inventory.findIndex(null)] = item
            }
            this.inventory.push(item)
        }
    }
    drop(item){
        if (this.inventory.findIndex(item) != -1){
            this.inventory[this.inventory.findIndex(item)] = null
        }
    }
    unitaction(u){
        //pass inventory contents to other unit

    }
    tileaction(){
        //produce on tile
        if (this.actions <= 0){return false;};
        this.hold(mapdata[this.xpos][this.ypos])
        window.alert("love")
    }
    draw(ctx,x,y,s){
        ctx.fillStyle = "#CC9900"
        ctx.fillRect(x,y,s,s)
        ctx.fillText(this.actions,x,y)
    }
}

class base extends unit {
    constructor(x,y){
        super(x,y)
    }
    canmove(x,y){
        return false;
    }

}

class mech extends unit {
    constructor(x,y){
        super(x,y)
    }
    draw(ctx,x,y,s){
        ctx.fillStyle = "#CC0050"
        ctx.fillRect(x,y,s,s)
        ctx.fillText(this.actions,x,y)
    }
}