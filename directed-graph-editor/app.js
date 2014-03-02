//main app functionality
function onLoad(){
  console.log("load");
        var clearLog = document.getElementById('clearLog');
        clearLog.onclick = clearLog;
}

// app starts here
svg.on('mousedown', mousedown)
  .on('mousemove', mousemove)
  .on('mouseup', mouseup);
d3.select(window)
  .on('keydown', keydown)
  .on('keyup', keyup);
restart();


