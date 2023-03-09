var result = "", H01 = "", H02 = "", H03 = "", H04 = "", H05 = "";

function calcularregrade3() 
{
    var primeirovalor, segundovalor, terceirovalor;

    primeirovalor = document.getElementById('1Vl').value
    segundovalor = document.getElementById('2Vl').value
    terceirovalor = document.getElementById('3Vl').value

 H05 = H04
 H04 = H03 
 H03  = H02
 H02 = H01
 H01 = result

result = (segundovalor * terceirovalor) / primeirovalor

document.getElementById('resultado').value = result;
document.getElementById("hist01").textContent =  H01;
document.getElementById("hist02").textContent =  H02;
document.getElementById("hist03").textContent =  H03;
document.getElementById("hist04").textContent =  H04;
document.getElementById("hist05").textContent =  H05;
}

