'use strict';

const translations = {
    'es': {
        'menu': { 
            'item1': 'Inicio', 
            'item2': 'Sobre mí', 
            'item3': 'Habilidades', 
            'item4': 'Formación', 
            'item5': 'Proyectos', 
            'item6': 'Contacto' 
        },
        'home': { 
            'home_text-1': 'Hola, soy', 
            'home_text-3': 'Desarrolladora Web Full Stack', 
            'parrafo-info': 'Creo aplicaciones web escalables y responsivas, integrando frontend, lógica de backend y bases de datos, con foco en una arquitectura clara, la usabilidad y la mantenibilidad del código.',
            'cv_button': 'Descargar CV'
        },
        'sobre-mi': {
            'title': 'Sobre <span>Mí</span>',
            'texto_sobreMi': 'Mi principal enfoque está en el desarrollo Front-End, donde diseño e implemento interfaces claras, funcionales y visualmente consistentes, asegurando una correcta integración con servicios de backend y estructuras de datos.<br><br>Abordo el desarrollo priorizando la calidad del código, la organización y la mantenibilidad a largo plazo. Me interesa trabajar en proyectos bien estructurados, donde el diseño y la ingeniería se complementen para ofrecer soluciones confiables y eficientes.'
        },
        'habilidades': { 'title': 'Mis <span>Habilidades</span>' },
        'formacion': {
            'title': 'Mi <span>Formación</span>',
            'formacion1': 'Tecnicatura en Desarrollo de Software',
            'tiempo-formacion1': 'IES Santa Fe | 2023 - 2025',
            'formacion2': 'Desarrollo Web Full Stack',
            'tiempo-formacion2': 'Prácticas Profesionalizantes & Cursos',
            'formacion3': 'Inglés',
            'tiempo-formacion3': 'Nivel B2 / C1'
        },
        'proyectos': {
            'title': 'Mis <span>Proyectos</span>',
            'btn-codigo': 'Ver Código',
            'title-proyecto1': 'BuffetI2T',
            'subt-proyecto1': 'Sistema de Gestión de Almuerzos',
            'info-proyecto1': 'Plataforma web Full Stack para la gestión de comedores corporativos. Desarrollada con <strong>Angular</strong> en el frontend y Node.js en el backend. Incorpora actualizaciones en tiempo real con <strong>Socket.io</strong> para el control de stock y pedidos, además de autenticación segura (JWT) y roles de usuario.',
            'title-proyecto2': 'ZummaX',
            'subt-proyecto2': 'Control de Finanzas Personales',
            'info-proyecto2': 'Aplicación integral para la administración de economía personal. Permite el registro de movimientos, creación de presupuestos y visualización de datos con gráficos interactivos (<strong>Chart.js</strong>). Incluye funciones de exportación a Excel y reportes detallados.'
        },
        'contacto': {
            'title': 'CONTACTO',
            'texto-intro': 'Estoy disponible para integrarme a equipos de desarrollo y aportar valor desde el primer día.<br>Podés contactarme por correo o iniciar un chat directo:',
            'btn-email': 'Enviar Correo',
            'btn-whatsapp': 'WhatsApp'
        }
    },
    'en': {
        'menu': { 
            'item1': 'Home', 
            'item2': 'About me', 
            'item3': 'Skills', 
            'item4': 'Education', 
            'item5': 'Projects', 
            'item6': 'Contact' 
        },
        'home': { 
            'home_text-1': 'Hi, I\'m', 
            'home_text-3': 'Full Stack Web Developer', 
            'parrafo-info': 'I build scalable and responsive web applications, integrating frontend, backend logic, and databases, focusing on clear architecture, usability, and code maintainability.',
            'cv_button': 'Download CV'
        },
        'sobre-mi': {
            'title': 'About <span>Me</span>',
            'texto_sobreMi': 'My main focus is on Front-End development, where I design and implement clear, functional, and visually consistent interfaces, ensuring proper integration with backend services and data structures.<br><br>I approach development prioritizing code quality, organization, and long-term maintainability. I am interested in working on well-structured projects where design and engineering complement each other to offer reliable and efficient solutions.'
        },
        'habilidades': { 'title': 'My <span>Skills</span>' },
        'formacion': {
            'title': 'My <span>Education</span>',
            'formacion1': 'Associate Degree in Software Development',
            'tiempo-formacion1': 'IES Santa Fe | 2023 - 2025',
            'formacion2': 'Full Stack Web Development',
            'tiempo-formacion2': 'Professional Practices & Courses',
            'formacion3': 'English',
            'tiempo-formacion3': 'B2 / C1 Level'
        },
        'proyectos': {
            'title': 'My <span>Projects</span>',
            'btn-codigo': 'View Code',
            'title-proyecto1': 'BuffetI2T',
            'subt-proyecto1': 'Lunch Management System',
            'info-proyecto1': 'Full Stack web platform for corporate cafeteria management. Developed with <strong>Angular</strong> on the frontend and Node.js on the backend. Features real-time updates with <strong>Socket.io</strong> for stock and order control, plus secure authentication (JWT) and user roles.',
            'title-proyecto2': 'ZummaX',
            'subt-proyecto2': 'Personal Finance Control',
            'info-proyecto2': 'Comprehensive application for personal finance management. Allows transaction tracking, budget creation, and data visualization with interactive charts (<strong>Chart.js</strong>). Includes Excel export functions and detailed reports.'
        },
        'contacto': {
            'title': 'CONTACT',
            'texto-intro': 'I am available to join development teams and bring value from day one.<br>You can contact me via email or start a direct chat:',
            'btn-email': 'Send Email',
            'btn-whatsapp': 'WhatsApp'
        }
    }
};

const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = (language) => {
    const texts = translations[language];
    
    textsToChange.forEach((textToChange) => {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        if (texts[section] && texts[section][value]) {
            if(textToChange.tagName === 'INPUT') {
                textToChange.value = texts[section][value]; 
            } else {
                textToChange.innerHTML = texts[section][value]; 
            }
        }
    });
};

if (flagsElement) {
    flagsElement.addEventListener('click', (e) => {
        const flagItem = e.target.closest('.flags__item');
        if (flagItem) {
            const language = flagItem.dataset.language;
            changeLanguage(language);
        }
    });
}

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    
    if (!x || x.length === 0) return;

    if (n > x.length) { slideIndex[no] = 1 }    
    if (n < 1) { slideIndex[no] = x.length }
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    if (x[slideIndex[no]-1]) {
        x[slideIndex[no]-1].style.display = "block";  
    }
}