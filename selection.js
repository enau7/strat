// dependent on: gamestate.js, draw.js
{
    var selection = null
    
    var select = (e) => {
        position = findxy(e);
        for (let k = 0; k < unitdata.length; k++){
            if (unitdata[k].xpos == position.x && unitdata[k].ypos == position.y){
                if (selection == null){
                    selection = unitdata[k]
                    return
                }
                selection.unitaction(unitdata[k]);
            }
        }
        if ([position.x,position.y]==[selection.xpos,selection.ypos]){
            selection.tileaction();
            return
        }
        selection.move(position.x,position.y)
        selection = null
    }
}