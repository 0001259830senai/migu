let pontosA = 0;
let pontosB = 0;

function atualizarTela() {
  document.getElementById("ptsA").textContent = pontosA;
  document.getElementById("ptsB").textContent = pontosB;
}

function somar(dupla, valor) {
  if (dupla === "A") {
    pontosA = Math.min(12, pontosA + valor);
  } else {
    pontosB = Math.min(12, pontosB + valor);
  }
  atualizarTela();
}

function subtrair(dupla) {
  if (dupla === "A") {
    pontosA = Math.max(0, pontosA - 2);
  } else {
    pontosB = Math.max(0, pontosB - 2);
  }
  atualizarTela();
}

function zerar() {
  pontosA = 0;
  pontosB = 0;
  atualizarTela();
}