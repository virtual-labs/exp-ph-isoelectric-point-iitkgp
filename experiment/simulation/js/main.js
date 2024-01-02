//Your JavaScript goes in here
/*
 Lab name: Experimental Biochemistry
Exp name: pH-titration of amino acids and small peptides, and estimation of isoelectric point (pI)
File name: main.js
Developer: Prakriti Dhang

 */

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
      window.scrollBy(0,500);
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
  


  function showcon(){
    window.scrollBy(0,500);
    document.getElementById("step3").disabled = false;
    document.getElementById("conicalflask").style.display = "block";
  }

  function titration(){
    
    document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
    $('#alertModal').modal('show');
    $('.modal-body').text('Click on the stopcock of the burette.');
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
        document.getElementById("pdrop").style.display = "block";
        currenttop = 67;
        document.getElementById("conicalflask").setAttribute("onclick", "conicalflaskstir()");
        document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitchstop()");
     //clearInterval(imgobjpdrop);
      
      }
      else {
        currenttop++;
        imagepdrop.style.top = currenttop + '%';
  
      }
    }
  
  }

  var imgobjcflask = null;
  function conicalflaskstir(){
    var currentleft = 42;
    document.getElementById("conicalflask").style.display = "block";
    var imagecflask = document.getElementById("conicalflask");
    clearInterval(imgobjcflask);
    imgobjcflask = setInterval(frame, 140);
  
    function frame() {
      if (currentleft == 43) {
        document.getElementById("conicalflask").style.display = "block";
        currentleft = 41;
       
     //clearInterval(imgobjpdrop);
      
      }
      else {
        currentleft++;
        imagecflask.style.left = currentleft + '%';
  
      }
    }
  }

  function buretteswitchstop(){
    clearInterval(imgobjpdrop);
    clearInterval(imgobjcflask);
    document.getElementById("pdrop").style.display = "none";
    document.getElementById("step4").disabled = false;
    document.getElementById("conicalflask").removeAttribute("onclick", "conicalflaskstir()");
  }

  function dataanalysis(){

  }