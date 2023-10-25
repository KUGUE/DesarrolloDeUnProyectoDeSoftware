const miInput = document.getElementById("miInput");

miInput.addEventListener("focus", function() {
  resultadoH1.textContent = "resultado";
  resultadoH1.style.backgroundColor = "transparent";
});

// Función para generar números aleatorios pares entre 1 y 20
function generarNumerosAleatoriosPares() {
  let numeroAleatorio1, numeroAleatorio2;
  do {
    numeroAleatorio1 = Math.floor(Math.random() * 100) + 1;
    numeroAleatorio2 = Math.floor(Math.random() * 100) + 1;
  } while (numeroAleatorio1 % 2 !== 0 || numeroAleatorio2 % 2 !== 0 || numeroAleatorio1 % numeroAleatorio2 !== 0);
  document.getElementById("escribir").textContent = numeroAleatorio1;
  document.getElementById("escribir2").textContent = numeroAleatorio2;
  console.log(numeroAleatorio1 / numeroAleatorio2);

  return numeroAleatorio1 / numeroAleatorio2;
}

const botonCalcular = document.getElementById("calcularButton");
const resultadoH1 = document.querySelector(".resultado");

let divisionAleatoria = generarNumerosAleatoriosPares();

botonCalcular.addEventListener("click", function() {
  const valorInput = parseInt(document.getElementById("miInput").value);

  if (valorInput === divisionAleatoria) {
    resultadoH1.textContent = "Correcto";
    resultadoH1.style.backgroundColor = "#adff98";

    setTimeout(function() {
      resultadoH1.textContent = "resultado";
      resultadoH1.style.backgroundColor = "transparent";
      divisionAleatoria = generarNumerosAleatoriosPares();
    }, 2000);
  } else {
    resultadoH1.textContent = "Incorrecto";
    resultadoH1.style.backgroundColor = "#ffa4a4";
  }
});
