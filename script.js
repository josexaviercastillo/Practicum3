

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Del listado escoja cual es un editor de imagenes?",
    respuestas: {
      a: "Facebook",
      b: "Google",
      c: "Canva",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "2. Es posible crear imagenes con Fotor?",
    respuestas: {
      a: "Si ",
      b: "No",
      c: "A veces ",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "3. Para crear imagenes que se debe hacer primero?",
    respuestas: {
      a: "Seleccionar la aplicación",
      b: "Hacer un recorrido por el sistema",
      c: "Ninguna de las anteriores ",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4. Que es Adove Spark?",
    respuestas: {
      a: "Editor de texto",
      b: "Red social",
      c: "Editor de imagenes ",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "5. Es poible editar plantillas con Canva?",
    respuestas: {
      a: "No ",
      b: "Siempre",
      c: "A veces ",
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
