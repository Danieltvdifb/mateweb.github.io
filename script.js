// variable para guardar el tema seleccionado
let temaActual = "";

// informacion de todos los temas
const info = {

  derivadas: {
    titulo: "Derivadas",
    texto: `
Las derivadas forman parte del cálculo diferencial y permiten analizar cómo cambia una función respecto a una variable. Este concepto es fundamental para comprender fenómenos como la velocidad, la aceleración y el crecimiento de cantidades variables en el tiempo. En términos generales, la derivada mide el cambio instantáneo.

Desde el punto de vista geométrico, la derivada de una función en un punto representa la pendiente de la recta tangente a la curva en ese punto. Esta interpretación permite visualizar el comportamiento de la función y determinar si es creciente o decreciente.
    `,
    video: "https://www.youtube.com/watch?v=ia8L26ub_pc&list=PL9SnRnlzoyX1kIbHdA7GN-6g-hvkyLbWp"
  },

  funciones: {
    titulo: "Funciones",
    texto: `
Una función es una relación matemática que asigna a cada elemento del dominio un único elemento del codominio. Las funciones permiten modelar relaciones entre cantidades y describir fenómenos del mundo real.

Las funciones pueden representarse mediante expresiones algebraicas, tablas de valores, gráficas o descripciones verbales. Cada representación aporta información distinta sobre su comportamiento.

Existen diferentes tipos de funciones: lineales, cuadráticas, racionales, exponenciales y trigonométricas. Cada una tiene propiedades específicas que determinan su forma y crecimiento.
    `,
    video: "https://www.youtube.com/watch?v=ojiMGOqwwCE"
  },

  ecuaciones: {
    titulo: "Ecuaciones",
    texto: `
Una ecuación es una igualdad matemática que contiene una o más incógnitas. Resolver una ecuación consiste en encontrar los valores que hacen verdadera la igualdad.

Las ecuaciones de primer grado se resuelven mediante despeje, mientras que las de segundo grado pueden resolverse por factorización, completación de cuadrados o fórmula general.

Las ecuaciones permiten modelar situaciones reales como problemas de edades, distancias, costos y movimientos, siendo fundamentales en la resolución de problemas.
    `,
    video: "https://www.youtube.com/watch?v=NlDnt_WvZRU"
  },

  potencias: {
    titulo: "Reglas de Potenciación",
    texto: `
La potenciación es una operación matemática que consiste en multiplicar una base por sí misma un número determinado de veces. Se representa mediante una base y un exponente.

Las propiedades de la potenciación permiten simplificar expresiones algebraicas, como la suma de exponentes con igual base o la resta de exponentes en divisiones.

Los exponentes negativos indican el inverso de una potencia, mientras que los exponentes fraccionarios se relacionan directamente con la radicación.
    `,
    video: "https://www.youtube.com/watch?v=UGBZr9rTTBU"
  },

  radicacion: {
    titulo: "Radicación",
    texto: `
La radicación es la operación inversa de la potenciación y permite encontrar un número que elevado a una potencia produce un valor determinado.

Existen raíces cuadradas, cúbicas y de índice superior, cada una con propiedades específicas que facilitan su manipulación algebraica.

Las propiedades de la radicación permiten simplificar expresiones y operar raíces de manera correcta y ordenada.
    `,
    video: "https://www.youtube.com/watch?v=J38jAF6zuwA"
  },

  geometria: {
    titulo: "Geometría y Trigonometría",
    texto: `
La geometría estudia las formas, tamaños y posiciones de las figuras en el plano y en el espacio. Es una de las ramas más antiguas de las matemáticas.

La trigonometría analiza las relaciones entre los ángulos y los lados de los triángulos, especialmente los triángulos rectángulos.

Las razones trigonométricas como seno, coseno y tangente permiten calcular distancias y ángulos desconocidos.
      `,
    video: "https://www.youtube.com/watch?v=BNdlrmP_AQo&list=PL9SnRnlzoyX3kLYWUsrmrq0qy2Bye1JF4"
  }
};


// convierte un link normal de youtube a formato embed
function convertirAEmbed(url) {
  if (url.includes("embed")) return url;

  let videoId = "";

  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

// muestra la pantalla de inicio
function mostrarInicio() {
  temaActual = "";
  document.getElementById("bienvenida").style.display = "block";
  document.getElementById("zonaTrabajo").style.display = "none";
  document.getElementById("simuladorVista").style.display = "none";
  ocultarSecciones();
}

// carga el tema seleccionado
function seleccionarTema(tema) {
  temaActual = tema;

  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("zonaTrabajo").style.display = "block";

  document.getElementById("tituloTema").innerText = info[tema].titulo;
  document.getElementById("temaResultado").innerText = info[tema].texto;
  document.getElementById("imagenEjercicios").src = `imagen/${tema}.png`;
  document.getElementById("videoTema").src = convertirAEmbed(info[tema].video);

  ocultarSecciones();
}

// muestra una seccion especifica
function toggleSeccion(id) {
  if (!temaActual) {
    alert("Primero selecciona un tema.");
    return;
  }
  document.getElementById(id).style.display = "block";
}

// oculta la barra de navegacion
function ocultarSecciones() {
  ["ia", "videos", "ejercicios"].forEach(sec => {
    document.getElementById(sec).style.display = "none";
  });
}

// abre gemini en otra pestaña
function abrirGemini() {
  window.open("https://gemini.google.com/app?hl=es", "_blank");
}

// abre el simulador en pantalla completa
function abrirSimulador() {
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("zonaTrabajo").style.display = "none";
  document.getElementById("simuladorVista").style.display = "block";

  document.getElementById("iframeSimulador").src =
    "https://precavidos.com/simulador/matematicas/";
}

// cierra el simulador
function cerrarSimulador() {
  document.getElementById("simuladorVista").style.display = "none";
  document.getElementById("zonaTrabajo").style.display = "block";
  document.getElementById("iframeSimulador").src = "";
}

// indica el inicio del registro
let modoRegistro = false;

// abilita el formulario
function mostrarRegistro() {
  modoRegistro = true;
  document.getElementById("authTitulo").innerText = "Registrarse";
  document.querySelector(".auth-card button").innerText = "Crear cuenta";
  document.querySelector(".auth-toggle").innerHTML =
    `¿Ya tienes cuenta? <span onclick="mostrarLogin()">Inicia sesión</span>`;
  document.getElementById("authMensaje").innerText = "";
}

// cambia a formulario del registro
function mostrarLogin() {
  modoRegistro = false;
  document.getElementById("authTitulo").innerText = "Iniciar sesión";
  document.querySelector(".auth-card button").innerText = "Entrar";
  document.querySelector(".auth-toggle").innerHTML =
    `¿No tienes cuenta? <span onclick="mostrarRegistro()">Regístrate</span>`;
  document.getElementById("authMensaje").innerText = "";
}

// validar registro
function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const mensaje = document.getElementById("authMensaje");

  if (!usuario || !password) {
    mensaje.innerText = "Completa todos los campos";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (modoRegistro) {
    if (usuarios[usuario]) {
      mensaje.innerText = "El usuario ya existe";
      return;
    }

    usuarios[usuario] = password;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mensaje.style.color = "#7aff9c";
    mensaje.innerText = "Cuenta creada correctamente";
    mostrarLogin();
  } else {
    if (!usuarios[usuario] || usuarios[usuario] !== password) {
      mensaje.innerText = "Usuario o contraseña incorrectos";
      return;
    }

    // acceso correcto
    document.getElementById("auth").style.display = "none";
    mostrarInicio();
  }
}


// efecto lluvia de numeros
function activarLluvia(elemento) {
  if (elemento.querySelector(".lluvia")) return;

  const lluvia = document.createElement("div");
  lluvia.className = "lluvia";

  const cantidad = Math.floor(elemento.offsetWidth / 20);

  for (let i = 0; i < cantidad; i++) {
    const num = document.createElement("span");
    num.textContent = Math.random() > 0.5 ? "1" : "0";
    num.style.left = Math.random() * 100 + "%";
    num.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
    num.style.animationDelay = Math.random() * 2 + "s";
    lluvia.appendChild(num);
  }

  elemento.appendChild(lluvia);
}

function quitarLluvia(elemento) {
  const lluvia = elemento.querySelector(".lluvia");
  if (lluvia) lluvia.remove();
}

document.querySelectorAll(".panel, .tema-card, .bienvenida").forEach(sec => {
  sec.addEventListener("mouseenter", () => activarLluvia(sec));
  sec.addEventListener("mouseleave", () => quitarLluvia(sec));
});

function entrarFisica() {
  const respuesta = confirm("¿Deseas entrar al tema de Física?");
  
  if (respuesta) {
    window.open(
      "https://gamma.app/docs/Segundo-Bachillerato-efuea0i2c0vtmxb",
      "_blank"
    );
  }
  // si presiona "Cancelar", no pasa nada
}
function entrarFisica() {
  document.getElementById("confirmFisica").classList.remove("oculto");
}

function confirmarFisica(respuesta) {
  document.getElementById("confirmFisica").classList.add("oculto");

  if (respuesta) {
    window.open(
      "https://gamma.app/docs/Segundo-Bachillerato-efuea0i2c0vtmxb",
      "_blank"
    );
  }
}

  function mostrarPresentacion() {
  document.getElementById("presentacionPregunta").classList.remove("oculto");
}

function respuestaPresentacion(valor) {
  document.getElementById("presentacionPregunta").classList.add("oculto");
  if (valor) {
    document.getElementById("presentacionElegir").classList.remove("oculto");
  }
}

function abrirPresentacion() {
  document.getElementById("presentacionClave").classList.add("oculto");
  document.getElementById("presentacionElegir").classList.remove("oculto");
}

function abrirPresentacion1() {
  document.getElementById("presentacionElegir").classList.add("oculto");
  window.open("https://gamma.app/docs/Segundo-Bachillerato-efuea0i2c0vtmxb", "_blank");
}

function abrirPresentacion2() {
  document.getElementById("presentacionElegir").classList.add("oculto");
  window.open("https://view.genially.com/69617dd26cf4b363424794b3/presentation-movimiento-circular-uniformamente-variado", "_blank");
}




// activacion del color aleatirio
function colorAleatorio() {
  const colores = [
    "#7a3cff",
    "#00ffd5",
    "#ff4ecd",
    "#ffb300",
    "#4cff4c",
    "#00aaff"
  ];
  return colores[Math.floor(Math.random() * colores.length)];
}

document.querySelectorAll(".nav-links a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    const color = colorAleatorio();
    btn.style.backgroundColor = color;
    btn.style.borderColor = color;
    btn.style.boxShadow = `0 0 18px ${color}`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "transparent";
    btn.style.borderColor = "transparent";
    btn.style.boxShadow = "none";
  });
});
// color totalmente aleatorio
function colorRandom() {
  return `hsl(${Math.random() * 360}, 80%, 60%)`;
}

// aplica colores aleatorios
document.querySelectorAll(".tema-card, .panel, .auth-card").forEach(el => {
  el.style.backgroundColor = colorRandom();
});
// genera color aleatorio
function colorGlobal() {
  return `hsl(${Math.random() * 360}, 85%, 60%)`;
}

// cambia iluminacion sin ocultar fondo
function cambiarAmbiente() {
  const color = colorGlobal();

  document.querySelectorAll(".tema-card, .panel, .auth-card, .bienvenida").forEach(el => {
    el.style.boxShadow = `0 0 25px ${color}`;
  });

  // iluminacion general suave
  document.body.style.filter =
    `brightness(${0.95 + Math.random() * 0.2})
     saturate(${1.1 + Math.random() * 0.3})`;
}
// color aleatorio
function colorRandom() {
  return `hsl(${Math.random() * 360}, 90%, 65%)`;
}

// ilumina cuadros aleatoriamente
function iluminarCuadros() {
  document.querySelectorAll(".tema-card, .panel, .auth-card").forEach(cuadro => {
    if (Math.random() > 0.5) {
      const color = colorRandom();
      cuadro.style.boxShadow = `0 0 30px ${color}`;
      cuadro.style.borderColor = color;
    } else {
      cuadro.style.boxShadow = "none";
    }
  });
}

// ilumina letras aleatoriamente
function iluminarLetras() {
  document.querySelectorAll("h1, h2, h3, p, span").forEach(texto => {
    if (Math.random() > 0.6) {
      const color = colorRandom();
      texto.style.color = color;
      texto.style.textShadow = `0 0 12px ${color}`;
    } else {
      texto.style.textShadow = "none";
    }
  });
}

// ciclo de iluminacion
setInterval(() => {
  iluminarCuadros();
  iluminarLetras();
}, 3000);
// color rgb constante
function colorVivo() {
  return `hsl(${Date.now() / 40 % 360}, 85%, 60%)`;
}

// cambia color continuamente
function animarColores() {
  const color = colorVivo();

  document.querySelectorAll(".tema-card, .panel, .auth-card").forEach(cuadro => {
    cuadro.style.borderColor = color;
    cuadro.style.boxShadow = `0 0 25px ${color}`;
    cuadro.style.backgroundColor = `hsla(${Date.now() / 40 % 360}, 85%, 55%, 0.08)`;
  });
}

// animacion continua
setInterval(animarColores, 120);
const KEY = "usuarios_online_math_ia";
const INTERVALO = 5000; // 5 segundos
const TIEMPO_VIVO = 10000; // 10 segundos

function actualizarUsuarios() {
  const ahora = Date.now();
  let usuarios = JSON.parse(localStorage.getItem(KEY)) || [];

  // eliminar usuarios inactivos
  usuarios = usuarios.filter(t => ahora - t < TIEMPO_VIVO);

  // agregar/actualizar este usuario
  usuarios.push(ahora);

  localStorage.setItem(KEY, JSON.stringify(usuarios));

  document.getElementById("usuariosOnline").innerText = usuarios.length;
}

actualizarUsuarios();
setInterval(actualizarUsuarios, INTERVALO);

window.addEventListener("beforeunload", () => {
  let usuarios = JSON.parse(localStorage.getItem(KEY)) || [];
  usuarios.pop();
  localStorage.setItem(KEY, JSON.stringify(usuarios));
});



