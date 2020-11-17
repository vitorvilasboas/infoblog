// Regra de Negócio:
// Bolo - 300gr por pessoa + de 6 horas - 500gr
// Salgado - 30un por Pessoa + 6 horas - 50 un
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");  // Cammelcase
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("Calculando...1 2 3");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalBolo = (boloPP(duracao) * adultos) + (boloPP(duracao)/2 * criancas)
  let qtdTotalSalgado = (salgadoPP(duracao) * adultos) + (salgadoPP(duracao)/2 * criancas)
  let qtdTotalBebida = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao)/2 * criancas)

  // console.log(qtdTotalBolo, qtdTotalSalgado, qtdTotalBebida);

  resultado.innerHTML = `<p>${Math.ceil(qtdTotalBolo/1000)} Kg de bolo</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalSalgado/100)} centos de salgado</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} garrafas de bebida (2L)</p>`

}

function boloPP(duracao){
  if (duracao >= 6){
    return 500;
  } else {
    return 300;
  }
}

function salgadoPP(duracao){
  if (duracao >= 6){
    return 50;
  } else {
    return 30;
  }
}

function bebidaPP(duracao){
  if (duracao >= 6){
    return 1500;
  } else {
    return 1000;
  }
}