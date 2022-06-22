function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}

var time = 0;

function starttime(){
  time = 0;
}

function incrementtime(){
  if (time >= 10){
    return;
  }
  time = time + 1
}

function righttime(){
  if (time >= 10){
    return false;
  }
    return true;
}
