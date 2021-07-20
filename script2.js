

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Wordpress es un creador de contenido digital?",
    respuestas: {
      a: "Si ",
      b: "No",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. Outlook permite realizar el envio de:",
    respuestas: {
      a: "Correos Electronicos ",
      b: "Carpetas ",
      c: "Audios ",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "3. Cual de las siguientes opciones sirve para crear documentos?",
    respuestas: {
      a: "Canva",
      b: "Tik Tok",
      c: "Blog ",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "4. Que es Wix?",
    respuestas: {
      a: "Creador de sitios web",
      b: "Red social",
      c: "Editor de imagenes ",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Son similares Gmail y Outlook?",
    respuestas: {
      a: "No ",
      b: "Si",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
