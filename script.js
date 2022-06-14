
function homeView(padre) {
    $(padre).html(`
        <div class="seccion-mobile">
        <h1>Kinesiología Deportiva</h1>
        <div class="imagen-principal">
          <img src="./Images/principal1.jpg" alt="maniobra-kinesiologia">
          </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="./Images/carousel-1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulo-carousel">Kinesiología Deportiva</h5>
              <p class="parrafo-carousel">Zona Oeste | Morón | Castelar | Padua</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="./Images/carousel-2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulo-carousel">Kinesiología Deportiva</h5>
              <p class="parrafo-carousel">Zona Oeste | Morón | Castelar | Padua</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="./Images/carousel-3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulo-carousel">Kinesiología Deportiva</h5>
              <p class="parrafo-carousel">Zona Oeste | Morón | Castelar | Padua</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        <h2 class="nombre">Edgardo Castro</h2>
        <h5 class="profesion">Kinesiologo especialista en Kinesiología Deportiva</h5>
        <h6 class="universidad">Universidad de Morón <br> Universidad de Favaloro</h6>
      <div class="container card-group">    
        <div class="card text-white m-4">
        <a class="link-card" href="#/servicios">
        <img src="./Images/imagen-card.jpg" class="card-img" alt="...">
        <div class="card-img-overlay container-titulo-card">
        <hr>
          <h5 class="card_title">Servicios</h5>
          <hr>
        </div>
        </a>
      </div>
      <div class="card text-white m-4">
      <a class="link-card" href="#/contacto">
      <img src="./Images/principal2.jpg" class="card-img" alt="...">
      <div class="card-img-overlay container-titulo-card">
      <hr>
        <h5 class="card_title">Contacto</h5>
        <hr>
      </div>
      </a>
      </div>
      </div>
        <div class="footer">
        <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
        <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
        <a href="#"><i class="bi bi-facebook icono-face"></i></a>
        <a href="https://alvo.chat/V1" target="_blank"><i class="bi bi-whatsapp icono-whapp"></i></a>
        </div>
    `);
}

function servicesView(padre) {
    $(padre).html(`
        <section class="servicios">
            <h1>Servicios</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Rehabilitación deportiva</li>
                <li class="list-group-item list-group-item-secondary">Estiramientos</li>
                <li class="list-group-item">Tapping</li>
                <li class="list-group-item list-group-item-secondary">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
                <div class="footer fixed-bottom">
                <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
                <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
                <a href="#"><i class="bi bi-facebook icono-face"></i></a>
                <a href="https://alvo.chat/V1" target="_blank"><i class="bi bi-whatsapp icono-whapp"></i></a>
                </div>
        </section>
    `);
}

function contactView(padre) {
    $(padre).html(`
        <section class="seccion-contacto">
            <h1>Contacto</h1>
            <form id="enviar" class="form" action="">
            <label class="form_label" for="name">Nombre</label>
            <input class="form_input" type="text" required="required" placeholder="Nombre"/>
            <label class="form_label" for="email">Email</label>
            <input id="email" 
            class="form_input" 
            type="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Email"
            />
            <h5 id="result"></h5>
            <label class="form_label" for="text">Mensaje</label>
            <textarea name="message" id="" cols="30" rows="9" required="required"></textarea>
            <input class="input_enviar" type="submit" value="Enviar" />
          </form>
          <div class="footer fixed-bottom">
          <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
          <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
          <a href="#"><i class="bi bi-facebook icono-face"></i></a>
          <a href="https://alvo.chat/V1" target="_blank"><i class="bi bi-whatsapp icono-whapp"></i></a>
          </div>
        </section>
    `);
}


//Declaro las rutas
const routes = [
    {path: "/", action: "home"},
    {path: "/servicios", action: "servicios"},
    {path: "/contacto", action: "contacto"}
]

//console.dir(location);

// Función que nos dice cuál es nuestra locacion
const parseLocation = () => location.hash.slice(1).toLowerCase() || "/"

// Función para buscar la ruta en nuestro array

const findActionByPath = (path) => routes.find(r => r.path == path) || undefined

// Creamos el router

const router = () => {

    const path = parseLocation();

    const route = findActionByPath(path);

    switch (route.action) {

        case "home":
            homeView('#app');
            break;
        
        case "servicios":
            servicesView('#app');
            break;
        
        case "contacto":
            contactView('#app');
            break;

        default:
            error();
            break;
        }
}

// Llamo a la función router

$(window).on("load", function() {
    router();
})

$(window).on("hashchange", function() {
    router();
})


// Formulario


let inputEmail = $("#email").val();
console.log(inputEmail);

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  let resultado = $("#result");
  let email = $("#email").val();
  resultado.text ('');

  if (validateEmail(email)) {
    console.log(email);
    resultado.text(email + ' es válido');
    resultado.css('color', 'green');
  } else {
    resultado.text(email + ' es inválido');
    resultado.css('color', 'red');
  }
  return false;
}

$('#email').on("input", validate);

$(()=>{


$('#enviar').on("submit", function(e) {
    e.preventDefault();

    console.log("Mensaje enviado");

    e.submit;

})

})