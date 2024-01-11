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


function switchburette() {

  if (document.getElementById("check1").checked) {
    window.scrollBy(0, 500);
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
    document.getElementById("step1").disabled = true;
    document.getElementById("aminoacidsel").disabled = false;
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Check NaOH to fill the burette.');
  }

}
function cancelmsg() {
  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
}


var valuesArray;
function showcon() {
  cancelAnimationFrame(cancelani);
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;
  if (aminoacid.options[aminoacid.selectedIndex].value == 0) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Select any amino acid from the dropdown');
  }

  else if ((aminoacid.options[aminoacid.selectedIndex].value == 13) || (aminoacid.options[aminoacid.selectedIndex].value == 19) || (aminoacid.options[aminoacid.selectedIndex].value == 20)) {
    window.scrollBy(0, 500);
    valuesArray= [12.01,11.85,11.61];
    document.getElementById("conicalflaskph").style.display = "block";
    document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
    document.getElementById("step42").style.display = "block";
    document.getElementById("step41").style.display = "none";
    document.getElementById("step43").style.display = "none";
    document.getElementById("step2").disabled = true;
    document.getElementById("pi1").style.display = "none";
    document.getElementById("pi2").style.display = "block";
    document.getElementById("pi3").style.display = "none";
    document.getElementById("inputpiresult").value=aminoacid.options[aminoacid.selectedIndex].text;
  }
  else if ((aminoacid.options[aminoacid.selectedIndex].value == 17) || (aminoacid.options[aminoacid.selectedIndex].value == 18)) {
    window.scrollBy(0, 500);
    valuesArray= [12.5,12.49,12.47];
    document.getElementById("conicalflaskph").style.display = "block";
    document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
    document.getElementById("step43").style.display = "block";
    document.getElementById("step42").style.display = "none";
    document.getElementById("step41").style.display = "none";
    document.getElementById("step2").disabled = true;
    document.getElementById("pi3").style.display = "block";
    document.getElementById("pi1").style.display = "none";
    document.getElementById("pi2").style.display = "none";
    document.getElementById("inputpiresult").value=aminoacid.options[aminoacid.selectedIndex].text;
    
  }
  else {
    valuesArray= [1.5, 1.64,1.81];
    window.scrollBy(0, 500);
    document.getElementById("step41").style.display = "block";
    document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
    document.getElementById("step42").style.display = "none";
    document.getElementById("step43").style.display = "none";
    document.getElementById("conicalflaskph").style.display = "block";
    document.getElementById("step2").disabled = true;
    document.getElementById("pi1").style.display = "block";
    document.getElementById("pi2").style.display = "none";
    document.getElementById("pi3").style.display = "none";
    document.getElementById("inputpiresult").value=aminoacid.options[aminoacid.selectedIndex].text;
  }

}

function titration() {

  document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
  $('#alertModal').modal('show');
  $('.modal-body').text('Click on the stopcock of the burette to start the titration.');
}


var imgobjpdrop = null;
var imgobjb= null;
function buretteswitch() {
  document.getElementById("conicalflask").removeAttribute("onclick", "conicalflaskmovetoph()");
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

canvasstb1 = document.getElementById("canvasburetteempty");
/*var currentheight = 37;

clearInterval(imgobjb);
imgobjb = setInterval(frameb, 80);


  function frameb() {
    if (currentheight == 50) {
      
     
      clearInterval(imgobjpdrop);

    }
    else {
      currentheight--;
      canvasstb1.style.height = currentheight + '%';

    }
  }*/
  ctxgstb1 = canvasstb.getContext("2d");
  var posY1 = 0;
  var speed1 = 0.01;



  function drawLine1() {


    ctxgstb1.strokeStyle = 'white';
    ctxgstb1.lineWidth = 600;
    ctxgstb1.beginPath();
    ctxgstb1.moveTo(0, posY1);
    ctxgstb1.lineTo(0, 0);
    ctxgstb1.stroke();

  }

  function moveLine1() {
    posY1 += speed1;

    if (posY1 < 0 || posY1 > canvasstb1.height) {
      speed1 = speed1 * -1;
    }
  }

  function loop1() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine1();
    drawLine1();
    cancelaniwhite = requestAnimationFrame(loop1);

  }
  requestAnimationFrame(loop1);





}

var imgobjcflask = null;
function conicalflaskstir() {
  var currentleft = 42;
  document.getElementById("conicalflask").style.display = "block";
  var imagecflask = document.getElementById("conicalflask");
  clearInterval(imgobjcflask);
  imgobjcflask = setInterval(frame, 140);

  function frame() {
    if (currentleft == 43) {
      document.getElementById("conicalflask").style.display = "block";
      document.getElementById("conicalflask").setAttribute("onclick", "conicalflaskstirstop()");
      currentleft = 41;

      //clearInterval(imgobjpdrop);

    }
    else {
      currentleft++;
      imagecflask.style.left = currentleft + '%';

    }
  }
}


function conicalflaskstirstop() {
  clearInterval(imgobjcflask);
}

function buretteswitchstop() {
  clearInterval(imgobjpdrop);
  clearInterval(imgobjcflask);
  cancelAnimationFrame(cancelaniwhite);
  document.getElementById("pdrop").style.display = "none";
  document.getElementById("conicalflask").removeAttribute("onclick", "conicalflaskstir()");
  document.getElementById("conicalflask").setAttribute("onclick", "conicalflaskmovetoph()");
  document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
}
var currentIndex = 0;
var imgobjcphprobe = null;
function phprobedown() {
  var currentltop = 45;
  document.getElementById("phprobe").style.display = "block";
  var imagecprobe = document.getElementById("phprobe");
  clearInterval(imgobjcphprobe);
  imgobjcphprobe = setInterval(frame, 140);
  
 
  function frame() {
    if (currentltop == 65) {
      document.getElementById("phprobe").removeAttribute("onclick", "phprobedown()");
      document.getElementById("phprobe").setAttribute("onclick", "phprobemoveup()");
      document.getElementById("conicalflaskph").removeAttribute("onclick", "conicalflaskmain()");
      document.getElementById("phvaluetxt").value = valuesArray[currentIndex];
      currentIndex = currentIndex +1 ;
     //(currentIndex + 1) % valuesArray.length

      if (currentIndex == valuesArray.length) {
        $('#alertModal').modal('show');
  $('.modal-body').text('With addition of NaOH, pH is measured upto 14. To view the plot, click on the "Data Analysis" button.');
  document.getElementById("step41").disabled = false;
  document.getElementById("step42").disabled = false;
  document.getElementById("step43").disabled = false;
      }

      clearInterval(imgobjcphprobe);

       
    }
    else {
      currentltop++;
      imagecprobe.style.top = currentltop + '%';

    }
  }
  

}




var imgobjcphprobeup = null;
function phprobemoveup() {
  var currentltop = 65;
  document.getElementById("phprobe").style.display = "block";
  var imagecprobeup = document.getElementById("phprobe");
  clearInterval(imgobjcphprobeup);
  imgobjcphprobeup = setInterval(frame, 140);

  function frame() {
    if (currentltop == 45) {

      document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
      document.getElementById("conicalflaskph").setAttribute("onclick", "conicalflaskmain()");
      document.getElementById("phprobe").removeAttribute("onclick", "phprobemoveup()");
      clearInterval(imgobjcphprobeup);

    }
    else {
      currentltop--;
      imagecprobeup.style.top = currentltop + '%';

    }
  }
}

function conicalflaskmain() {
  document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
  $('#alertModal').modal('show');
  $('.modal-body').text('Click on the stopcock of the burette.');
  document.getElementById("conicalflaskph").style.display = "none";
  document.getElementById("conicalflask").style.display = "block";
//  document.getElementById("step3").disabled = false;
  document.getElementById("conicalflaskph").removeAttribute("onclick", "conicalflaskmain()");
  document.getElementById("conicalflask").removeAttribute("onclick", "conicalflaskmovetoph()");
  document.getElementById("phprobe").removeAttribute("onclick", "phprobedown()");

}

function conicalflaskmovetoph() {
  document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
  document.getElementById("conicalflaskph").removeAttribute("onclick", "conicalflaskmain()");
  document.getElementById("conicalflaskph").style.display = "block";
  document.getElementById("conicalflask").style.display = "none";
}


function dataanalysisgraph1() {
  var x = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
  var y = [1.5, 1.64, 1.81, 1.98, 2.15, 2.31, 2.48, 2.67, 2.9, 3.23, 4.22, 8.58, 8.99, 9.24, 9.46, 9.82, 10.03, 10.29, 10.69, 11.6, 12.05, 12.36, 12.45];
  var datapoints = [];
  for (var i = 0; i < x.length; i++) {
    datapoints.push({ x: x[i], y: y[i] });
  }

  window.scrollBy(0, 900);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Titration "
    },
    axisY: {
      title: "pH",
      minimum: 0,
      maximum: 14,
      interval: 1,
      gridThickness: 0.5

    },
    axisX: {
      title: "OH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 0.5,


    },

    data: [{
      type: "spline",

      dataPoints: datapoints


    }]
  });
  chart.render();
  document.getElementById("exportChart").addEventListener("click", function () {
    chart.exportChart({ format: "jpg" });
  });
}

function dataanalysisgraph2() {
  x =[0,0.2,0.5,0.7,0.9,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,3,3.2,3.4,3.5,3.6,3.7,3.8,3.9,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.1,5.3,5.5,5.7,5.8,5.9,6.1,6.3,6.5,6.7,6.9,
    7.1,7.3,7.4,7.6,7.9,8,8.1,8.2,8.4,8.6,8.9,9.2,9.4,9.5,9.6,10.2,10.7,11.7]
y=[1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50]
  var datapoints = [];
  for (var i = 0; i < x.length; i++) {
    datapoints.push({ x: x[i], y: y[i] });
  }

  window.scrollBy(0, 900);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Titration "
    },
    axisY: {
      title: "pH",
      minimum: 0,
      maximum: 14,
      interval: 1,
      gridThickness: 0.5

    },
    axisX: {
      title: "OH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 0.5,


    },

    data: [{
      type: "spline",

      dataPoints: datapoints


    }]
  });
  chart.render();
  document.getElementById("exportChart").addEventListener("click", function () {
    chart.exportChart({ format: "jpg" });
  });
}

function dataanalysisgraph3() {
  x =[0,0.2,0.5,0.7,0.9,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,3,3.2,3.4,3.5,3.6,3.7,3.8,3.9,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.1,5.3,5.5,5.7,5.8,5.9,6.1,6.3,6.5,6.7,6.9,
    7.1,7.3,7.4,7.6,7.9,8,8.1,8.2,8.4,8.6,8.9,9.2,9.4,9.5,9.6,10.2,10.7,11.7]
y=[1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50]
  var datapoints = [];
  for (var i = 0; i < x.length; i++) {
    datapoints.push({ x: x[i], y: y[i] });
  }

  window.scrollBy(0, 900);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Titration "
    },
    axisY: {
      title: "pH",
      minimum: 0,
      maximum: 14,
      interval: 1,
      gridThickness: 0.5

    },
    axisX: {
      title: "OH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 0.5,


    },

    data: [{
      type: "spline",

      dataPoints: datapoints


    }]
  });
  chart.render();
  document.getElementById("exportChart").addEventListener("click", function () {
    chart.exportChart({ format: "jpg" });
  });
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Titration "
    },
    axisY: {
      title: "pH",
      minimum: 0,
      maximum: 14,
      interval: 1,
      gridThickness: 0

    },
    axisX: {
      title: "OH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 0.5,

    },

    data: [{
      type: "spline",

      dataPoints: [

      ]
    }]
  });
  chart.render();
}