// dependent on: unit.js

var mapsize = 16
var mapdata = Array(16)
for (let k = 0; k < mapsize; k++){
    mapdata[k] = Array(16)
    for (let j = 0; j < mapsize; j++){
        mapdata[k][j] = 0
    }
}
var unitdata = []
window.alert("test2")
unitdata.push(new unit(2,2))
window.alert("test3")

function getGameState(){
    var url = window.location.href
    if (url.indexOf("?") == -1){
        document.getElementById("main").innerHTML = "err: no game data"
    } else {
        var gamedata = url.substring(url.indexOf("?")+1,url.length)
        document.getElementById("main").innerHTML = gamedata
    }
}