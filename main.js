function calc() {
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
  
  let agua = document.getElementById("agua");
  
  agua = agua.value * 2;
  
  let suco = document.getElementById("suco");
  
  suco = suco.value * 3;



  let quei = document.getElementById("queijo");

  quei = quei.value * 6;

  let pmisto = document.getElementById("pmisto");

  pmisto = pmisto.value * 7;

  let frango = document.getElementById("frango");

  frango = frango.value * 8;

  let tsalg = parseFloat(salg) + parseFloat(canu) + parseFloat(mini);
  let trefri = parseFloat(refri) + parseFloat(coca) + parseFloat(gua) + parseFloat(agua) + parseFloat(suco);
  let tpas = parseFloat(quei) + parseFloat(pmisto) + parseFloat(frango);
  let total = parseFloat(tsalg) + parseFloat(trefri) + parseFloat(tpas);
  
  let perc = parseFloat(total) * 0.053;
  let cart = parseFloat(total) + parseFloat(perc);

  let res = document.getElementById("resp");
  res.innerHTML = "";
  res.style.backgroundColor = 'white';
  res.innerHTML = "Salgados: R$" + tsalg + "<br>Bebidas: R$" + trefri + "<br>Pastéis: R$" + tpas + "<br><br>Total: R$" + total.toFixed(2) + "<br><br>Cartão: R$" + cart.toFixed(2);
}
