import hamburgerMenu from './hamburger.js';
import {digitalClock, Alarm} from './reloj.js';
import {shortcuts, moveBall} from './teclado.js';
import {countdown} from './countdown.js';
import {scroll} from './scroll.js';
import {changeTheme} from './theme.js';
import responsiveMedia from './objeto_responsive.js';
import responsiveTester from './responsive_tester.js';
import userDeviceInfo from './deteccion_dispositivos.js';
import connection from './connection.js';
import webCam from './deteccion_webcam.js';
import getPosition from './geolocalizacion.js';
import busqueda from './busqueda.js';
import sortear from './sorteo.js';
import slider from './carrusel.js';
import scrollSpy from './scroll_espia.js';
import videoInteligente from './video_inteligente.js';
import contactFormValidation from './validaciones_formulario.js';
import narrador from './narrador.js';

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu('.panel-btn','.panel','.menu a');
    digitalClock('#reloj', '#activar-reloj','#desactivar-reloj');
    Alarm('./assets/bell.mp3','#activar-alarma','#desactivar-alarma');
    countdown('#countdown','2023-01-20 17:41:00','Feliz Cumpleaños 🤑​🤑​');
    scroll('.scroll-btn');
    responsiveMedia('youtube','(min-width:1024px)','<a href="https://www.youtube.com/embed/ZdL_vntfQGc" rel="noopener noreffer" target= "_blank" >Ver video</a>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdL_vntfQGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    responsiveMedia('gmaps','(min-width:1024px)','<a href ="https://goo.gl/maps/A4tJkx8moTYpQNZM6" rel="noopener noreffer" target= "_blank" >Ver mapa</a>' ,'<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d975.2673084692944!2d-76.94598134395945!3d-12.107412869676539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1ses!2spe!4v1665379323382!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    responsiveTester("responsive-tester");
    userDeviceInfo('user-agent');
    webCam('webcam');
    getPosition('geolocalizacion');
    busqueda('#entrada');
    sortear('#trigger','#lista');
    slider();
    scrollSpy();
    videoInteligente();
    contactFormValidation();
    narrador();
});

d.addEventListener('keydown',e=>{
    shortcuts(e);
    moveBall(e, '#pelota', '#escenario');
});



changeTheme('.theme-btn', 'dark');
connection('.coneccion-txt', '.coneccion');
narrador();

