//main app functionality
function onLoad(){
  $("#clearLog").click(clearLog);
}



/* Log a message */
function log(msg){
  console.log(msg);
  $("#log-details").append("<div>" + msg + "</div>");
}

function clearLog(){
  console.log("clear log");
   $("#log-details").empty();
}

/* List the current nodes */
function listNodes(nodes){
  $("#node-details").empty();  
  $("#node-details").append(JSON.stringify(nodes));
 


}
function listEdges(){

}



// app starts here
svg.on('mousedown', mousedown)
  .on('mousemove', mousemove)
  .on('mouseup', mouseup);
d3.select(window)
  .on('keydown', keydown)
  .on('keyup', keyup);
restart();


