import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./prueba-responsive.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d =document

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("./assets/alarma.mp3","#activar-alarma","#desactivar-alarma")
    countdown("countdown",
            "Oct 9, 2022 16:12:20",
            "Feliz cumple gaa")
    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
                "youtube",
                "(min-width: 1024px)",
                `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank"
                    rel="noopener">Ver Video</a>`,
                `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia(
                "gmaps",
                "(min-width: 1024px)",
                `<a href="https://goo.gl/maps/5h5mMhKYjy6djtJc6" target="_blank"
                    rel="noopener">Ver mapa</a>`,  
                `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62023.11967331696!2d-89.21525175000001!3d13.691478199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067b411775d%3A0x1f75978893fb5c96!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses-419!2spe!4v1665669873453!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester")
})


d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

/* MODO OSCURO O CLARO*/
darkTheme(".dark-theme-btn","dark-mode")

