let num_display = "0";

const display = document.getElementById("display");

const bt_igual = document.getElementById("bt_igual");

const bt_perc = document.getElementById("bt_perc");
const bt_CE = document.getElementById("bt_CE");
const bt_C = document.getElementById("bt_C");
const bt_bs = document.getElementById("bt_bs");

const bt_mais = document.getElementById("bt_mais");
const bt_menos = document.getElementById("bt_menos");
const bt_multi = document.getElementById("bt_multi");

const bt_numeros = document.querySelectorAll(".bt_num");

const bt_troca = document.getElementById("bt_troca");
const bt_0 = document.getElementById("bt_0");
const bt_ponto = document.getElementById("bt_ponto");

function monta_numero(tecla_num) {
  const numero_clicado = tecla_num.target.innerText;
  if (num_display === "0") {
    num_display = numero_clicado;
  } else {
    num_display += numero_clicado;
  }
  display.innerText = num_display;
}

function backspace() {
  if (num_display.length > 1) {
    num_display = num_display.slice(0, -1);
  } else {
    num_display = "0";
  }

  display.innerText = num_display;
}

function limpa_numero() {
  num_display = "0";
  display.innerText = num_display;
}

bt_numeros.forEach((botao) => {
  botao.addEventListener("click", monta_numero);
});

bt_bs.addEventListener("click", backspace);
bt_CE.addEventListener("click", limpa_numero);
