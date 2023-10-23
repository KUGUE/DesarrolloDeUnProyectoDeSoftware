const miInput = document.getElementById("miInput");

miInput.addEventListener("focus", function() {
  resultadoH1.textContent = "resultado";
  resultadoH1.style.backgroundColor = "transparent";
});
// Función para generar números aleatorios entre 1 y 20
function generarNumerosAleatorios() {
    const numeroAleatorio1 = Math.floor(Math.random() * 20) + 1;
    const numeroAleatorio2 = Math.floor(Math.random() * 20) + 1;
    document.getElementById("escribir").textContent = numeroAleatorio1;
    document.getElementById("escribir2").textContent = numeroAleatorio2;
    return numeroAleatorio1 * numeroAleatorio2;
  }
  
  const botonCalcular = document.getElementById("calcularButton");
  const resultadoH1 = document.querySelector(".resultado");
  
  let sumaAleatoria = generarNumerosAleatorios(); 
  
  botonCalcular.addEventListener("click", function() {
    const valorInput = parseInt(document.getElementById("miInput").value);
  
 
    if (valorInput === sumaAleatoria) {
      resultadoH1.textContent = "Correcto";
      resultadoH1.style.backgroundColor = "#adff98";
  
      setTimeout(function() {
        resultadoH1.textContent = "resultado";
        resultadoH1.style.backgroundColor = "transparent";
        sumaAleatoria = generarNumerosAleatorios();
      }, 2000); 
    } else {
      resultadoH1.textContent = "Incorrecto";
      resultadoH1.style.backgroundColor = "#ffa4a4";
    }
  }
  );
  
  