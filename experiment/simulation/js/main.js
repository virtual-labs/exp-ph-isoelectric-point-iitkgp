//Your JavaScript goes in here
function start() {
   
    document.getElementById("step0").disabled = true;
   
    document.getElementById("step1").disabled = false;
    document.getElementById("check1").disabled = false;
    
  }
  
  function restartexp() {
    location.reload();
  }
  

  function switchburette(){

    if(document.getElementById("check1").checked){
      canvasstb = document.getElementById("canvasburette");
      ctxgstb = canvasstb.getContext("2d");
      var posY = 0;
      var speed = 0.2;
  
  
  
      function drawLine() {
  
  
        ctxgstb.strokeStyle = '#90CBFF   ';
        ctxgstb.lineWidth = 600;
        ctxgstb.beginPath();
        ctxgstb.moveTo(0, posY); /*  */
        ctxgstb.lineTo(0, 0);
        ctxgstb.stroke();
      }
  
      function moveLine() {
        posY += speed;
  
        if (posY < 0 || posY > canvasstb.height) {
          speed = speed * -1;
        }
      }
  
      function loop() {
        // clear old frame;
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        moveLine();
        drawLine();
        cancelani = requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
      document.getElementById("step2").disabled = false;
    }
    else{
      $('#alertModal').modal('show');
      $('.modal-body').text('Check NaOH to fill the burette.');
    }
    
  }
  function cancelmsg() {
    document.getElementById("alertModal").style.display = "none";
    document.getElementById("alertModal").classList.remove("show");
  }
  var imgobjpdrop = null;
  function buretteswitch(){
    var currenttop = 67;
    document.getElementById("pdrop").style.display = "block";
    var imagepdrop = document.getElementById("pdrop");
    clearInterval(imgobjpdrop);
    imgobjpdrop = setInterval(frame, 80);
  
    function frame() {
      if (currenttop == 86) {
        document.getElementById("pdrop").style.display = "none";
      
     clearInterval(imgobjpdrop);
      
      }
      else {
        currenttop++;
        imagepdrop.style.top = currenttop + '%';
  
      }
    }
  
  }

  function showcon(){
    document.getElementById("step3").disabled = false;
    document.getElementById("conicalflask").style.display = "block";
  }

  function titration(){
    document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
  }