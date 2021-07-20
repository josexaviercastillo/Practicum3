

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Que es Powtoon?",
    respuestas: {
      a: "Creador de videos",
      b: "Creador de fotos",
      c: "Creador de texto",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. Cual de las siguientes opciones es un paso para crear videos?",
    respuestas: {
      a: "Hacer un recorrido por el sistema ",
      b: "Elaborar un guión",
      c: "Seleccionar la aplicación ",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "3. Que es VYOND?",
    respuestas: {
      a: "Un videojuego ",
      b: "Un programa de TV",
      c: "Un creador de videos  ",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "4. Que es Explaindio?",
    respuestas: {
      a: "Editor de texto",
      b: "Red social",
      c: "Ninguna de las anteriores ",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "5. Los editores de video son dificiles de manejar?",
    respuestas: {
      a: "No ",
      b: "Siempre",
      c: "A veces ",
    },
    respuestaCorrecta: "c",
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
