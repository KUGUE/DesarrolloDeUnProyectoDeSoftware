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
  var timer = setInterval(function () {
    var voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      voz.voice = voices[7];
      voz.voiceURI = voices[7].voiceURI;
      clearInterval(timer);
    }
    console.log(voices)
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