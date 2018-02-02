window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

  function startGame() {
   draw();
  }
  function draw() {
    var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#D4D4D4'; //grey
      ctx.fillRect(0, 0, 400, 700);
      ctx.fillStyle = '#008000'// green
      ctx.fillRect(0, 0, 40, 700);
      ctx.fillStyle = '#D4D4D4' //grey
      ctx.fillRect(40, 0, 30, 700);
      ctx.fillStyle = "#fff"; //white
      ctx.fillRect(45, 0, 20, 700);
      ctx.fillStyle = "#fff"; //white
      ctx.fillRect(375, 0, 20, 700);
      ctx.fillStyle = '#D4D4D4' //grey
      ctx.fillRect(329, 0, 10, 700);
      ctx.fillStyle = '#008000'// green
      ctx.fillRect(400, 0, 40, 700);

      // ctx.fillStyle = "#fff"; //white
      // ctx.fillRect(200, 0, 20, 700);
    
      ctx.beginPath();
      ctx.setLineDash([20, 15]);
      ctx.moveTo(223, 10);
      ctx.lineTo(223, 500);
      ctx.lineWidth = "10";
      ctx.strokeStyle = '#fff' //white
      ctx.stroke();
  
  
  }
  
  
};
