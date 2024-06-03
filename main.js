function calc(){
  let salg = document.getElementById("salgados");
  
  let vsalg = 1.50;
  
  salg = salg.value * vsalg;
  
  let canu = document.getElementById("canudinho");
  
  canu = canu.value
  
  let mini = document.getElementById("mini");
  
  mini = mini.value * 4;
  
  
  
  let refri = document.getElementById("refri");
  
  refri = refri.value * 2;
  
  let coca = document.getElementById("coca");
  
  coca = coca.value * 4;
  
  let gua = document.getElementById("gua");
  
  gua = gua.value * 6;
  
  
  
  let quei = document.getElementById("queijo");
  
  quei = quei.value * 6;
  
  let pmisto = document.getElementById("pmisto");
  
  pmisto = pmisto.value * 7;
  
  let frango = document.getElementById("frango");
  
  frango = frango.value * 8;
  
  let tsalg = parseFloat(salg) + parseFloat(canu) + parseFloat(mini);
  let trefri = parseFloat(refri) + parseFloat(coca) + parseFloat(gua);
  let tpas = parseFloat(quei) + parseFloat(pmisto) + parseFloat (frango);
  let total = parseFloat(tsalg) + parseFloat(trefri) + parseFloat(tpas);
  
  let res = document.getElementById("resp");
  res.innerHTML = "";
  res.innerHTML = "Salgados: R$" + tsalg + "<br>Refris: R$" + trefri + "<br>Pastéis: R$" + tpas + "<br><br>Total: R$" + total;
  }