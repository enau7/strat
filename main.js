//depends on all
{
let canvas = document.getElementById("myCanvas");
let drawall = (e) => {
    let position = getMousePos(canvas, e);
    draw();
    drawselect(selection);
    drawmouse(position.x,position.y);
}

getGameState();
window.addEventListener('mousemove', (e) => {
    incrementtime();
    drag(e);
    drawall(e);
})
window.addEventListener('wheel', (e) => {
    changecoordsmouse(e);
    drawall(e);
})
window.addEventListener('mousedown', (e) => {
    starttime()
    startdrag(e)
    drawall(e);
})
window.addEventListener('mouseup', (e) => {
    stopdrag()
    drawall(e);
})
window.addEventListener('click', (e) => {
    if (righttime()){ 
        select(e)
        drawall(e);
    }
})
draw();
}