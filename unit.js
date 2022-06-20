class bug{

}

class unit{
    constructor(x,y){
        window.alert("yum")
        this.x = x
        this.y = y
        window.alert("gum")
        this.i_size = 0
        this.inventory = Array()
        window.alert("tum")
    }
    get x(){
        return this.x
    }
    get y(){
        return this.y
    }
    move(x,y){
        if (this.x-x == 1 && this.y-y == 1){
            this.x = x
            this.y = y
            return true;
        }
    }
    hold(item){
        if (this.i_size < this.inventory.length()){
            if (this.inventory.findIndex(NaN) != -1){
                this.inventory[this.inventory.findIndex(NaN)] = item
            }
            this.inventory.push(item)
        }
    }
    drop(item){
        if (this.inventory.findIndex(item) != -1){
            this.inventory[this.inventory.findIndex(item)] = NaN
        }
    }
    draw(ctx,x,y){
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x,y,20,20)
    }
}

class mech extends unit {
    constructor(x,y){
        super(x,y)
        this.x = x
        this.y = y
        this.base_actions = 3
        this.avalible_actions = 0
        this.i_size = 3
        this.inventory = []
        window.alert("Here")
    }
    draw(ctx,x,y){
        ctx.fillStyle = "#FFF000"
        ctx.fillRect(x,y,20,20)
    }
}