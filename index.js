// Carrosel
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Exercício 1

function calcularSomaDivisores() {
  const inputNumber = document.getElementById("inputNumber").value;
  const number = parseInt(inputNumber);
  console.log('deu certo')
  let soma = 0;
  for (let i = 1; i < number; i++) {
      if (number % i === 0) {
          soma += i;
      }
  }

  document.getElementById("resultado").textContent = `A soma dos divisores de ${number} é: ${soma}`;
}

// Exercício 2
function calcularDistancia() {
  // Obtém as coordenadas dos pontos A e B a partir das entradas do usuário
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);
  const dx = x2 - x1
  const dy = y2 - y1
  const resultado = Math.sqrt(dx*dx+dy*dy)
  document.getElementById("resultado1").textContent = `A distância euclidiana entre os pontos A e B é: ${resultado}`;
}

// Exercíco 3

function contarPalavras() {
  var inputElement = document.getElementById("fraseInput");
  var resultadoElement = document.getElementById("resultado2");

  // Obter a frase do campo de entrada
  var frase = inputElement.value;

  // Verificar se a entrada não está vazia
  if (frase.trim() === "") {
    resultadoElement.innerHTML = "Por favor, digite uma frase.";
    return;
  }

  // Converter a frase para letras minúsculas
  frase = frase.toLowerCase();

  // Dividir a frase em palavras usando espaços como separadores
  var palavras = frase.split(' ');

  var contagemPalavras = {};

  for (var i = 0; i < palavras.length; i++) {
    var palavra = palavras[i];

    if (!contagemPalavras[palavra]) {
      contagemPalavras[palavra] = 1;
    } else {
      contagemPalavras[palavra]++;
    }
  }
  var resultado = "";
  for (var palavra in contagemPalavras) {
    resultado += palavra + ": " + contagemPalavras[palavra] + "<br>";
  }

  resultadoElement.innerHTML = resultado;
}

// Exercício 4

function determinarDimensaoMatriz() {
  const matrizStr = document.getElementById('matrizInput').value;
  const dimensao = calcularDimensao(matrizStr);
  const resultadoDiv = document.getElementById('resultado3');
  resultadoDiv.innerHTML = `Dimensão da matriz: ${dimensao.linhas}x${dimensao.colunas}`;
}

function calcularDimensao(matrizStr) {
  const linhas = matrizStr.split(';');
  let numColunas = 0;

  if (linhas.length > 0) {
    const primeiraLinha = linhas[0].split(' ');
    numColunas = primeiraLinha.length;
  }

  const numLinhas = linhas.length;

  return { linhas: numLinhas, colunas: numColunas };
}

// Exercício 5

function gerarFibonacci() {
  var N = parseInt(document.getElementById("termos").value);
  var resultado = document.getElementById("resultado4");

  function fibonacciComLoop(N) {
      var fib = [0, 1];
      if (N <= 0) {
          return [];
      } else if (N === 1) {
          return [0];
      }

      for (var i = 2; i < N; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
      }

      return fib;
  }

  var sequencia = fibonacciComLoop(N);
  resultado.textContent = sequencia.join(", ");
}