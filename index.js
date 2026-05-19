let num_display = "0";
let valor_cima = "0";
let operacao_atual = "=";
let valor_memoria = 0;
let ultima_operacao = "";
let valor_total = "";

const display = document.getElementById("display");

const linha_cima = document.getElementById("linha_cima");

const bt_igual = document.getElementById("bt_igual");

const bt_perc = document.getElementById("bt_perc");
const bt_CE = document.getElementById("bt_CE");
const bt_C = document.getElementById("bt_C");
const bt_bs = document.getElementById("bt_bs");

const bt_mais = document.getElementById("bt_mais");
const bt_menos = document.getElementById("bt_menos");
const bt_multi = document.getElementById("bt_multi");

const bt_numeros = document.querySelectorAll(".bt_num");

const bt_opera = document.querySelectorAll(".bt_opera");

const bt_troca = document.getElementById("bt_troca");
const bt_0 = document.getElementById("bt_0");
const bt_ponto = document.getElementById("bt_ponto");

const operacoes = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Erro" : a / b),
};

function ajustaTamanhonumero(novo_valor) {
  display.innerText = novo_valor;
  const tamanho = novo_valor.length;
  if (tamanho > 9) {
    const novo_tamanho = Math.max(16, 36 - (tamanho - 9) * 2);

    display.style.fontSize = `${novo_tamanho}px`;
  } else {
    display.style.fontSize = "2.5rem";
    display.style.lineHeight = "2.5rem";
  }
}

function monta_numero(tecla) {
  const tecla_clicada = tecla.target.innerText.trim();
  const operacao_grupo = ["+", "-", "*", "/", "="];

  // SE FOR NÚMERO
  if (!operacao_grupo.includes(tecla_clicada)) {
    if (num_display === "0") {
      num_display = tecla_clicada;
    } else {
      num_display += tecla_clicada;
    }
  }
  // operacoes
  else {
    if (tecla_clicada === "=") {
      if (ultima_operacao && operacoes[ultima_operacao]) {
        valor_total = `${valor_cima} ${ultima_operacao} ${num_display}`;
        linha_cima.innerText = valor_total;

        const resultado = operacoes[ultima_operacao](Number(valor_cima), Number(num_display));

        num_display = String(resultado);
        valor_cima = "0";
        ultima_operacao = "";
      }
    } else {
      if (valor_cima === "0") {
        valor_cima = num_display;
      } else if (ultima_operacao) {
        valor_cima = String(operacoes[ultima_operacao](Number(valor_cima), Number(num_display)));
      }

      ultima_operacao = tecla_clicada;
      linha_cima.innerText = `${valor_cima} ${ultima_operacao} `;
      num_display = "0";
    }
  }

  ajustaTamanhonumero(num_display);
}

function backspace() {
  if (num_display.length > 1) {
    num_display = num_display.slice(0, -1);
  } else {
    num_display = "0";
  }
  ajustaTamanhonumero(num_display);

  display.innerText = num_display;
}

function limpa_numero() {
  num_display = "0";
  ajustaTamanhonumero(num_display);
  display.innerText = num_display;
}

bt_opera.forEach((botao_op) => {
  botao_op.addEventListener("click", monta_numero);
});
bt_numeros.forEach((botao) => {
  botao.addEventListener("click", monta_numero);
});

// function operacao(op) {
//   const resultado = Number(num_display);
//   if (op == "+") {
//     resultado += Number(valor);
//   }
//   num_display = String(resultado);
// }

bt_bs.addEventListener("click", backspace);
bt_CE.addEventListener("click", limpa_numero);
