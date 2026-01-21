import hamburgerMenu from "./dom/menu-hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/button_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeoLocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 17, 2026 16:21:50", "Feliz Cumpleaños Eden🤑");
    scrollTopButton(".scroll-top-btn");
    //responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/6IwUl-4pAzc?si=bhF9rJADkQiCF3lS" alt="curso js" target="_blank">Video Youtube</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=bhF9rJADkQiCF3lS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    //responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/Mbz5xX4s3jqVyS8f9" alt="Estadio Puno" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.6474521901464!2d-70.02177018730481!3d-15.838648551660013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6995eb47c787%3A0x4fef57d5b614a713!2sEstadio%20Enrique%20Torres%20Belon!5e0!3m2!1ses-419!2spe!4v1767806825145!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device-info");
    webCam("webcam");
    getGeoLocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
});

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus();