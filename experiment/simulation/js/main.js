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
    var canvasstb = document.getElementById("canvasburette");
    var ctxgstb = canvasstb.getContext("2d");
    var posY = 0;
    var speed = 0.1;



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

  else if ((aminoacid.options[aminoacid.selectedIndex].value == 14) || (aminoacid.options[aminoacid.selectedIndex].value == 19) || (aminoacid.options[aminoacid.selectedIndex].value == 20)) {
    window.scrollBy(0, 500);
    valuesArray = [1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50];
    document.getElementById("conicalflaskph").style.display = "block";
    document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
    document.getElementById("step42").style.display = "block";
    document.getElementById("step41").style.display = "none";
    document.getElementById("step43").style.display = "none";
    document.getElementById("step2").disabled = true;
    document.getElementById("pi1").style.display = "none";
    document.getElementById("pi2").style.display = "block";
    document.getElementById("pi3").style.display = "none";
    document.getElementById("inputpiresult").value = aminoacid.options[aminoacid.selectedIndex].text;
  }
  else if ((aminoacid.options[aminoacid.selectedIndex].value == 17) || (aminoacid.options[aminoacid.selectedIndex].value == 18)) {
    window.scrollBy(0, 500);
    valuesArray = [1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50];
    document.getElementById("conicalflaskph").style.display = "block";
    document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
    document.getElementById("step43").style.display = "block";
    document.getElementById("step42").style.display = "none";
    document.getElementById("step41").style.display = "none";
    document.getElementById("step2").disabled = true;
    document.getElementById("pi3").style.display = "block";
    document.getElementById("pi1").style.display = "none";
    document.getElementById("pi2").style.display = "none";
    document.getElementById("inputpiresult").value = aminoacid.options[aminoacid.selectedIndex].text;

  }
  else {
    valuesArray = [1.5, 1.64, 1.81, 1.98, 2.15, 2.31, 2.48, 2.67, 2.9, 3.23, 4.22, 8.58, 8.99, 9.24, 9.46, 9.82, 10.03, 10.29, 10.69, 11.6, 12.05, 12.36, 12.45];
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
    document.getElementById("inputpiresult").value = aminoacid.options[aminoacid.selectedIndex].text;
  }

}

function titration() {

  document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
  $('#alertModal').modal('show');
  $('.modal-body').text('Click on the stopcock of the burette to start the titration.');
}


var imgobjpdrop = null;
var imgobjb = null;
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


  /*var currentheight = 37;
  
  clearInterval(imgobjb);
  imgobjb = setInterval(frameb, 80);
  
  
    function frameb() {
      if (currentheight == 50) {
        
       
        clearInterval(imgobjb);
  
      }
      else {
        currentheight--;
        canvasstb1.style.height = currentheight + '%';
  
      }
    }*/

 var canvasstb1 = document.getElementById("canvasburetteempty");
  var ctxgstb1 = canvasstb1.getContext("2d");
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
  //document.getElementById("buretteswitch").setAttribute("onclick", "buretteswitch()");
}
var currentIndex = 0;
var imgobjcphprobe = null;
var txtph= null;
function phprobedown() {
  var currentltop = 30;
  var currentltoptxt = 36;
  document.getElementById("phprobe").style.display = "block";
  var imagecprobe = document.getElementById("phprobe");
  clearInterval(imgobjcphprobe);
  imgobjcphprobe = setInterval(frame, 140);

  var textph = document.getElementById("phvaluetxt");
  clearInterval(txtph);
  txtph = setInterval(frametxt, 140);

  function frame() {
    if (currentltop == 51) {
      // document.getElementById("phprobe").removeAttribute("onclick", "phprobedown()");
      document.getElementById("phprobe").setAttribute("onclick", "phprobemoveup()");
      document.getElementById("conicalflaskph").removeAttribute("onclick", "conicalflaskmain()");
      document.getElementById("phvaluetxt").value = valuesArray[currentIndex];
      currentIndex = currentIndex + 1;
      //(currentIndex + 1) % valuesArray.length

      if (currentIndex >= 3) {
        $('#alertModal').modal('show');
        $('.modal-body').text('With addition of NaOH, pH is measured upto 12. To view the plot, click on the "Data Analysis" button.');
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


  function frametxt() {
    if (currentltoptxt == 57) {
     
      clearInterval(txtph);


    }
    else {
      currentltoptxt++;
      textph.style.top = currentltoptxt + '%';

    }
  }



}




var imgobjcphprobeup = null;
var txtphup=null;
function phprobemoveup() {
  var currentltop = 51;
  var currentltoptxt = 57;
  document.getElementById("phprobe").style.display = "block";
  var imagecprobeup = document.getElementById("phprobe");
  clearInterval(imgobjcphprobeup);
  imgobjcphprobeup = setInterval(frame, 140);

  var textphup = document.getElementById("phvaluetxt");
  clearInterval(txtphup);
  txtphup = setInterval(frametxtup, 140);

  function frame() {
    if (currentltop == 30) {

      //document.getElementById("phprobe").setAttribute("onclick", "phprobedown()");
      document.getElementById("conicalflaskph").setAttribute("onclick", "conicalflaskmain()");
      document.getElementById("phprobe").removeAttribute("onclick", "phprobemoveup()");
      clearInterval(imgobjcphprobeup);

    }
    else {
      currentltop--;
      imagecprobeup.style.top = currentltop + '%';

    }
  }


  function frametxtup() {
    if (currentltoptxt == 36) {

      
      clearInterval(txtphup);

    }
    else {
      currentltoptxt--;
      textphup.style.top = currentltoptxt + '%';

    }
  }


}

function conicalflaskmain() {
  document.getElementById("buretteswitch").removeAttribute("onclick", "buretteswitch()");
  $('#alertModal').modal('show');
  $('.modal-body').text('Click on the titrate button. ');
  document.getElementById("conicalflaskph").style.display = "none";
  document.getElementById("conicalflask").style.display = "block";
  document.getElementById("step3").disabled = false;
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
      interval: 2,
      gridThickness: 0.5

    },
    axisX: {
      title: "NaOH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 5,


    },

    data: [{
      type: "spline",

      dataPoints: datapoints
      /*}
      {
        type: "spline",
        lineColor: "white",
        dataPoints: [
          { x: 0, y: 2.34, indexLabel: "pK1", indexLabelFontColor: "orangered" },
  
          { x: 0, y: 9.60, indexLabel: "pK2", indexLabelFontColor: "orangered" },
        ]*/

    }]
  });
  chart.render();
  //document.getElementById("exportChart").addEventListener("click", function () {
   // chart.exportChart({ format: "jpg" });
  //});
}

function dataanalysisgraph2() {
  x = [0, 0.2, 0.5, 0.7, 0.9, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.1, 5.3, 5.5, 5.7, 5.8, 5.9, 6.1, 6.3, 6.5, 6.7, 6.9,
    7.1, 7.3, 7.4, 7.6, 7.9, 8, 8.1, 8.2, 8.4, 8.6, 8.9, 9.2, 9.4, 9.5, 9.6, 10.2, 10.7, 11.7]
  y = [1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50]
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
      title: "NaOH equivalents",
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
  //document.getElementById("exportChart").addEventListener("click", function () {
   // chart.exportChart({ format: "jpg" });
  //});
}

function dataanalysisgraph3() {
  x = [0, 0.2, 0.5, 0.7, 0.9, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.1, 5.3, 5.5, 5.7, 5.8, 5.9, 6.1, 6.3, 6.5, 6.7, 6.9,
    7.1, 7.3, 7.4, 7.6, 7.9, 8, 8.1, 8.2, 8.4, 8.6, 8.9, 9.2, 9.4, 9.5, 9.6, 10.2, 10.7, 11.7]
  y = [1.15, 1.20, 1.30, 1.40, 1.46, 1.51, 1.58, 1.76, 2.10, 2.14, 2.15, 2.16, 2.20, 2.32, 2.50, 2.60, 2.67, 2.85, 3.12, 3.47, 3.66, 3.79, 3.98, 4.08, 4.16, 4.24, 4.39, 4.55, 4.71, 4.95, 5.17, 5.40, 6.04, 8.13, 8.56, 8.78, 8.95, 9.07, 9.32, 9.41, 9.52, 9.59, 9.67, 9.79, 9.95, 10.20, 10.40, 10.52, 10.58, 10.71, 10.79, 10.91, 11.00, 11.33, 11.61, 11.85, 12.01, 12.08, 12.14, 12.21, 12.26, 12.32, 12.40, 12.44, 12.47, 12.49, 12.50]
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
      title: "NaOH equivalents",
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
 // document.getElementById("exportChart").addEventListener("click", function () {
   // chart.exportChart({ format: "jpg" });
  //});
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
      interval: 2,
      gridThickness: 0

    },
    axisX: {
      title: "NaOH equivalents",
      minimum: 0,
      maximum: 10,
      interval: 2,

    },

    data: [{
      type: "spline",

      dataPoints: [

      ]
    }]
  });
  chart.render();
}

function tableshow(){
  scrollBy(0,1000);
}

/***********************************************************    pI check 1  **************************************************************************/
function check1() {
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;
  var userinpt = document.getElementById("inputpi12").value;


  if (userinpt == "") {
    $('#alertModal').modal('show');
    $('.modal-body').html('Enter the calculated pI value in the input box. Consider pK<sub>1</sub> and pK<sub>2</sub> values of chosen amino acid from the table.');
  }
  else {
    if (aminoacid.options[aminoacid.selectedIndex].value == 1) {

      if (userinpt == "5.97") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.97";
        document.getElementById("inputpi12").value = "5.97";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 2) {

      if (userinpt == "6.01") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "6.01";
        document.getElementById("inputpi12").value = "6.01";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 3) {

      if (userinpt == "6.48") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "6.48";
        document.getElementById("inputpi12").value = "6.48";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 4) {

      if (userinpt == "5.98") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.98";
        document.getElementById("inputpi12").value = "5.98";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }
    if (aminoacid.options[aminoacid.selectedIndex].value == 5) {

      if (userinpt == "6.02") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "6.02";
        document.getElementById("inputpi12").value = "6.02";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }
    if (aminoacid.options[aminoacid.selectedIndex].value == 6) {

      if (userinpt == "5.68") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.68";
        document.getElementById("inputpi12").value = "5.68";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }
    if (aminoacid.options[aminoacid.selectedIndex].value == 7) {

      if (userinpt == "5.60") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.60";
        document.getElementById("inputpi12").value = "5.60";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 8) {

      if (userinpt == "5.07") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.07";
        document.getElementById("inputpi12").value = "5.07";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }


    if (aminoacid.options[aminoacid.selectedIndex].value == 9) {

      if (userinpt == "5.74") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.74";
        document.getElementById("inputpi12").value = "5.74";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 10) {

      if (userinpt == "6.48") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "6.48";
        document.getElementById("inputpi12").value = "6.48";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 11) {

      if (userinpt == "5.48") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.48";
        document.getElementById("inputpi12").value = "5.48";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }


    if (aminoacid.options[aminoacid.selectedIndex].value == 12) {

      if (userinpt == "5.66") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.66";
        document.getElementById("inputpi12").value = "5.66";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }


    if (aminoacid.options[aminoacid.selectedIndex].value == 13) {

      if (userinpt == "5.89") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.89";
        document.getElementById("inputpi12").value = "5.89";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 15) {

      if (userinpt == "5.65") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.65";
        document.getElementById("inputpi12").value = "5.65";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 16) {

      if (userinpt == "5.41") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "5.41";
        document.getElementById("inputpi12").value = "5.41";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi1").disabled = false;
        document.getElementById("inputpi12").value = " ";
      }
    }
  }
}

function showans1() {


  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;


  if (aminoacid.options[aminoacid.selectedIndex].value == 1) {


    document.getElementById("inputpiresultpi").value = "5.97";
    document.getElementById("inputpi12").value = "5.97";

    document.getElementById("showsteppi1").disabled = true;


  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 2) {


    document.getElementById("inputpiresultpi").value = "6.01";
    document.getElementById("inputpi12").value = "6.01";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 3) {


    document.getElementById("inputpiresultpi").value = "6.48";
    document.getElementById("inputpi12").value = "6.48";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 4) {


    document.getElementById("inputpiresultpi").value = "5.98";
    document.getElementById("inputpi12").value = "5.98";

    document.getElementById("showsteppi1").disabled = true;

  }
  if (aminoacid.options[aminoacid.selectedIndex].value == 5) {


    document.getElementById("inputpiresultpi").value = "6.02";
    document.getElementById("inputpi12").value = "6.02";

    document.getElementById("showsteppi1").disabled = true;

  }
  if (aminoacid.options[aminoacid.selectedIndex].value == 6) {


    document.getElementById("inputpiresultpi").value = "5.68";
    document.getElementById("inputpi12").value = "5.68";

    document.getElementById("showsteppi1").disabled = true;

  }
  if (aminoacid.options[aminoacid.selectedIndex].value == 7) {


    document.getElementById("inputpiresultpi").value = "5.60";
    document.getElementById("inputpi12").value = "5.60";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 8) {


    document.getElementById("inputpiresultpi").value = "5.07";

    document.getElementById("showsteppi1").disabled = true;

  }


  if (aminoacid.options[aminoacid.selectedIndex].value == 9) {


    document.getElementById("inputpiresultpi").value = "5.74";
    document.getElementById("inputpi12").value = "5.74";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 10) {


    document.getElementById("inputpiresultpi").value = "6.48";
    document.getElementById("inputpi12").value = "6.48";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 11) {



    document.getElementById("inputpiresultpi").value = "5.48";
    document.getElementById("inputpi12").value = "5.48";

    document.getElementById("showsteppi1").disabled = true;
  }


  if (aminoacid.options[aminoacid.selectedIndex].value == 12) {


    document.getElementById("inputpiresultpi").value = "5.66";
    document.getElementById("inputpi12").value = "5.66";

    document.getElementById("showsteppi1").disabled = true;

  }


  if (aminoacid.options[aminoacid.selectedIndex].value == 13) {



    document.getElementById("inputpiresultpi").value = "5.89";
    document.getElementById("inputpi12").value = "5.89";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 15) {


    document.getElementById("inputpiresultpi").value = "5.65";
    document.getElementById("inputpi12").value = "5.65";

    document.getElementById("showsteppi1").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 16) {


    document.getElementById("inputpiresultpi").value = "5.41";
    document.getElementById("inputpi12").value = "5.41";

    document.getElementById("showsteppi1").disabled = true;

  }



}



/***********************************************************    pI check 2  **************************************************************************/
function check2() {
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;
  var userinpt = document.getElementById("inputpi12basic").value;
  if (userinpt == "") {
    $('#alertModal').modal('show');
    $('.modal-body').html('Enter the calculated pI value in the input box. Consider pK<sub>2</sub> and pK<sub>R</sub> values of chosen amino acid from the table.');
  }
  else {


    if (aminoacid.options[aminoacid.selectedIndex].value == 14) {

      if (userinpt == "7.59") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "7.59";
        document.getElementById("inputpi12basic").value = "7.59";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi2").disabled = false;
        document.getElementById("inputpi12basic").value = " ";

      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 19) {

      if (userinpt == "9.74") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "9.74";
        document.getElementById("inputpi12basic").value = "9.74";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi2").disabled = false;
        document.getElementById("inputpi12basic").value = " ";

      }
    }

    if (aminoacid.options[aminoacid.selectedIndex].value == 20) {

      if (userinpt == "10.76") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "10.76";
        document.getElementById("inputpi12basic").value = "10.76";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi2").disabled = false;
        document.getElementById("inputpi12basic").value = " ";

      }
    }
  }

}

function showans2() {
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;


  if (aminoacid.options[aminoacid.selectedIndex].value == 14) {


    document.getElementById("inputpiresultpi").value = "7.59";
    document.getElementById("inputpi12basic").value = "7.59";
    document.getElementById("showsteppi2").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 19) {


    document.getElementById("inputpiresultpi").value = "9.74";
    document.getElementById("inputpi12basic").value = "9.74";
    document.getElementById("showsteppi2").disabled = true;

  }


  if (aminoacid.options[aminoacid.selectedIndex].value == 20) {


    document.getElementById("inputpiresultpi").value = "10.76";
    document.getElementById("inputpi12basic").value = "10.76";
    document.getElementById("showsteppi2").disabled = true;

  }

}

/***********************************************************    pI check 3  **************************************************************************/
function check3() {
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;
  var userinpt = document.getElementById("inputpi12acid").value;
  if (userinpt == "") {
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty. Enter the calculated pI value in the input box. Consider pK<sub>1</sub> and pK<sub>R</sub> values of chosen amino acid from the table ');
  }
  else {
    if (aminoacid.options[aminoacid.selectedIndex].value == 17) {

      if (userinpt == "3.22") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "3.22";
        document.getElementById("inputpi12acid").value = "3.22";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi3").disabled = false;
        document.getElementById("inputpi12acid").value = " ";

      }
    }


    if (aminoacid.options[aminoacid.selectedIndex].value == 18) {

      if (userinpt == "2.77") {
        $('#alertModal').modal('show');
        $('.modal-body').text('Correct');
        document.getElementById("inputpiresultpi").value = "2.77";
        document.getElementById("inputpi12acid").value = "2.77";
      }
      else {
        $('#alertModal').modal('show');
        $('.modal-body').text('Incorrect pI value');
        document.getElementById("showsteppi3").disabled = false;
        document.getElementById("inputpi12acid").value = " ";


      }
    }
  }
}


function showans3() {
  var aminoacid = document.getElementById("aminoacidsel");
  aaobj = aminoacid.options[aminoacid.selectedIndex].text;

  if (aminoacid.options[aminoacid.selectedIndex].value == 17) {


    document.getElementById("inputpiresultpi").value = "3.22";
    document.getElementById("inputpi12acid").value = "3.22";
    document.getElementById("showsteppi3").disabled = true;

  }

  if (aminoacid.options[aminoacid.selectedIndex].value == 18) {


    document.getElementById("inputpiresultpi").value = "2.77";
    document.getElementById("inputpi12acid").value = "2.77";
    document.getElementById("showsteppi3").disabled = true;

  }
}


/*****************************************  Part B ****************************************************/
function checkb1(){

  var usrinpnc1= document.getElementById("netcharge1").value;
  var usrinpnc2= document.getElementById("netcharge2").value;
  var usrinpnc3= document.getElementById("netcharge3").value;
  var usrinpnc4= document.getElementById("netcharge4").value;
  var usrinpnc5= document.getElementById("netcharge5").value;

  if(usrinpnc1 == ""){
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty');
    document.getElementById("netcharge1").style.border="2px solid blue";
   }
   else if(usrinpnc1 == "+2"){
    document.getElementById("netcharge1").value= "+2";
    document.getElementById("netcharge1").style.border="2px solid green";
    }
  
   else{
    document.getElementById("netcharge1").style.border="2px solid red";
    document.getElementById("showsteppb1").disabled=false;
   }

   if(usrinpnc2 == ""){
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty');
    document.getElementById("netcharge2").style.border="2px solid blue";
   }
   else if(usrinpnc2 == "+1"){
    document.getElementById("netcharge2").value="+1";
    document.getElementById("netcharge2").style.border="2px solid green";
    }
  
   else{
    
    document.getElementById("netcharge2").style.border="2px solid red";
    document.getElementById("showsteppb1").disabled=false;
   }


   if(usrinpnc3 == ""){
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty');
    document.getElementById("netcharge3").style.border="2px solid blue";
   }
   else if(usrinpnc3 == "0"){
    document.getElementById("netcharge3").value="0";
    document.getElementById("netcharge3").style.border="2px solid green";
    }
  
   else{
    
    document.getElementById("netcharge3").style.border="2px solid red";
    document.getElementById("showsteppb1").disabled=false;
   }

  
   if(usrinpnc4 == ""){
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty');
    document.getElementById("netcharge4").style.border="2px solid blue";
   }
   else if(usrinpnc4 == "-1"){
    document.getElementById("netcharge4").value="-1";
    document.getElementById("netcharge4").style.border="2px solid green";
    }
  
   else{
    
    document.getElementById("netcharge4").style.border="2px solid red";
    document.getElementById("showsteppb1").disabled=false;
   }

   if(usrinpnc5 == ""){
    $('#alertModal').modal('show');
    $('.modal-body').html('Input box cannot be empty');
    document.getElementById("netcharge5").style.border="2px solid blue";
   }
   else if(usrinpnc5 == "-2"){
    document.getElementById("netcharge5").value="-2";
    document.getElementById("netcharge5").style.border="2px solid green";
    }
  
   else{
    
    document.getElementById("netcharge5").style.border="2px solid red";
    document.getElementById("showsteppb1").disabled=false;
   }


}

function showansb1(){
  document.getElementById("netcharge1").value= "+2";
  document.getElementById("netcharge2").value="+1";
  document.getElementById("netcharge3").value="0";
  document.getElementById("netcharge4").value="-1";
  document.getElementById("netcharge5").value="-2";


  document.getElementById("netcharge1").style.border="2px solid green";
  document.getElementById("netcharge2").style.border="2px solid green";
  document.getElementById("netcharge3").style.border="2px solid green";
  document.getElementById("netcharge4").style.border="2px solid green";
  document.getElementById("netcharge5").style.border="2px solid green";

}


function checkb2(){

 var usrinpvalue1= document.getElementById("inputpib1").value;
 var usrinpvalue2= document.getElementById("inputpib2").value;

 if(usrinpvalue1 == ""){
  $('#alertModal').modal('show');
  $('.modal-body').html('Input box cannot be empty');
  document.getElementById("inputpib1").style.border="2px solid blue";
 }
 else if(usrinpvalue1 == "4.8"){
  document.getElementById("inputpib1").value=4.8;
  document.getElementById("inputpib1").style.border="2px solid green";
  
 }

 else{
  
  document.getElementById("inputpib1").style.border="2px solid red";
  document.getElementById("showsteppb2").disabled=false;
 }

 if(usrinpvalue2 == ""){
  $('#alertModal').modal('show');
  $('.modal-body').html('Input box cannot be empty');
  document.getElementById("inputpib2").style.border="2px solid blue";
 }

 else if(usrinpvalue2 == "9"){
  document.getElementById("inputpib2").value=9;
  document.getElementById("inputpib2").style.border="2px solid green";
 }
 else{
  
  document.getElementById("inputpib2").style.border="2px solid red";
  document.getElementById("showsteppb2").disabled=false;
 }
}

function showansb2(){
  document.getElementById("partbans2").style.display="block";
}
