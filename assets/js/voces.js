async function speech() {
  var text = document.querySelector(".edadTitulo").textContent;
  if (text !== "") {
    voz.text = text;
    window.speechSynthesis.speak(voz);
  }
}

var voz = new SpeechSynthesisUtterance();
voz.lang = "es-ES";
voz.volume = 1;

// Definir la voz que deseas utilizar
var voiceToUse = null;

var timer = setInterval(function () {
  var voices = speechSynthesis.getVoices();
  if (voices.length !== 0) {
    // Busca la voz que deseas utilizar, por ejemplo, por su nombre.
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name === "Google español") {
        voiceToUse = voices[i];
        break;
      }
    }

    // Si se encontró la voz, configúrala
    if (voiceToUse) {
      voz.voice = voiceToUse;
      voz.voiceURI = voiceToUse.voiceURI;
      clearInterval(timer);
    }
  }
}, 100);

setTimeout(function () {
  speech();
}, 100);

var vozEnReproduccion = false;
function speechh(vocal) {
  if (!vozEnReproduccion) {
    vozEnReproduccion = true;
    var text = "vocal, " + vocal;
    if (text !== "") {
      voz.text = text;
      window.speechSynthesis.speak(voz);
    }

    voz.onend = function () {
      vozEnReproduccion = false;
    };
  }
}
