getGameState();
window.addEventListener('keydown', (e) => {
    let dist = 50
    if (e.key == "d"){
        xpos += dist;
    }
    if (e.key == "a"){
        xpos -= dist;
    }
    if (e.key == "s"){
        ypos += dist;
    }
    if (e.key == "w"){
        ypos -= dist;
    }
    draw();
})
draw();