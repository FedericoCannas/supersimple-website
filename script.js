

// ANIMACION DEL FONDO - BOTON APAGAR Y ENCENDER--------------------------------
var toggleAnimationBtn = document.getElementById('toggleAnimation');
var background = document.querySelector('.background');

var animationPaused = false;

toggleAnimationBtn.addEventListener('click', function() {
    if (animationPaused) {
        background.style.animationPlayState = 'running';
        toggleAnimationBtn.textContent = 'Apagar Animación';
    } else {
        background.style.animationPlayState = 'paused';
        toggleAnimationBtn.textContent = 'Reanudar Animación';
    }
    
    animationPaused = !animationPaused;
});

// ANIMACION DEL CONTENEDOR DE LINKS DE INSTA-LINK-GIT-CONTACT-ETC--------------

document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logoLinks = logoContainer.querySelectorAll('.logo-link');
    
    logoContainer.addEventListener('click', function() {
        logoContainer.classList.toggle('show');
    });
});

const a2Logo = document.getElementById('a2-logo');

a2Logo.addEventListener('click', function() {
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.toggle('show');
});

// logo flotante carita se rie cuando pasas el mouse por encima-----------------

const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

imagen1.addEventListener('mouseenter', () => {
    imagen1.style.display = 'none';
    imagen2.style.display = 'block';
});

imagen1.addEventListener('mouseleave', () => {
    imagen1.style.display = 'block';
    imagen2.style.display = 'none';
});

// Efecto que aparecen graphic,programm, illust cuando scrolleas-----------------

document.addEventListener('DOMContentLoaded', function() {
const images = document.querySelectorAll('.graphicDesign-container img');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.7;

    images.forEach(function(image) {
    const imageTop = image.getBoundingClientRect().top;

    if (imageTop < triggerBottom) {
        image.classList.add('show-image');
    } else {
        image.classList.remove('show-image');
    }
    });
}

window.addEventListener('scroll', checkScroll);
});

// Año dinamico del footer------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const marca = document.querySelector('.marca');
    marca.textContent = `Argenfreak-Federico Cannas © ${year}. All Rights Reserved.`;
});

//------------------------------------------------------------------------------