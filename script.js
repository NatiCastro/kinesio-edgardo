function homeView(padre) {
    $(padre).html(`
        <section>
        <h1>Kinesiología Deportiva Zona Oeste</h1>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="./Images/carousel-1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="/Images/principal2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="./Images/carousel-2.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        </div>
        <div class="seccion-mobile">
        <div class="imagen-principal">
            <img src="./Images/principal1.jpg" alt="maniobra-kinesio">
        </div>
        <h2>Edgardo Castro</h2>
        <h5>Kinesiologo especialista en Kinesiología Deportiva</h5>
        <h6>Universidad de Morón <br> Universidad de Favaloro</h6>
        <div class="segunda-imagen">
            <img src="/Images/principal2.jpg" alt="maniobra-pesa">
        </div> 
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure, rem nostrum. Minima enim asperiores reprehenderit nesciunt sed tempore minus atque, 
            facilis, voluptatem est illo totam nemo nostrum doloribus eos dolores?
        </p>
        <div class="footer">
        <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
        <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
        <a href="#"><i class="bi bi-facebook icono-face"></i></a>
        </div>
        </section>
    `);
}

function servicesView(padre) {
    $(padre).html(`
        <section class="servicios">
            <h2>Servicios</h2>
                <li>Rehabilitación deportiva<li>
                <li>Estiramientos<li>
                <div class="footer fixed-bottom">
                <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
                <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
                <a href="#"><i class="bi bi-facebook icono-face"></i></a>
                </div>
        </section>
    `);
}

function contactView(padre) {
    $(padre).html(`
        <section>
            <h1>Contacto</h1>
            <form class="form" action="">
            <label class="form_label" for="name">Nombre</label>
            <input class="form_input" type="text" placeholder="Nombre"/>
            <label class="form_label" for="email">Email</label>
            <input class="form_input" type="email" placeholder="Email"/>
            <label class="form_label" for="text">Mensaje</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input class="input_enviar" type="submit" value="Enviar" />
          </form>
          <div class="footer fixed-bottom">
          <span class="parrafo-footer">Copyright 2022 | Creado por NatDev</span>
          <a href="#"><i class="bi bi-instagram icono-insta"></i></a>
          <a href="#"><i class="bi bi-facebook icono-face"></i></a>
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

console.dir(location);

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


{/* 

*/}