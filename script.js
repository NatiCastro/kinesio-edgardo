
function homeView(padre) {
    $(padre).html(`
        <div class="container-desk">
        <img class="imagen-desk" src="./Images/carousel-1.jpg" alt="maniobra">
        </div>
          <div class="seccion-mobile">
          <h1>Kinesiología Deportiva</h1>
          <div class="imagen-principal">
            <img src="./Images/principal1.jpg" alt="maniobra-kinesiologia">
            </div>
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
            <h1>Encontrame en</h1> 
            <div class="container-contacto">
            <span class="span-contacto">Kinesia Castelar: Arias 1234, Castelar</span>          
            <span class="span-contacto">Kinesia Haedo: Calle falsa 1234, Haedo</span>              
            <span class="span-contacto">C.D. Argentino de Merlo: Calle falsa 1234, Merlo</span>              
            </div>     
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

$(window).on('load', function() {
    router();
})

$(window).on("hashchange", function() {
    router();
})



