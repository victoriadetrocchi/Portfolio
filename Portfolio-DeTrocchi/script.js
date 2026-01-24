/* ======================================================== */
/* SCRIPT PRINCIPAL: TRADUCCIONES Y MENÚ (SIN EFECTOS)      */
/* ======================================================== */

// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES (ES / EN)
// ==========================================
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
            // TEXTO COMPLETO EN ESPAÑOL
            'home_text-3': 'Desarrolladora Web Full Stack Junior', 
            'parrafo-info': 'Desarrolladora web graduada del IES Santa Fe, con enfoque en el desarrollo Front-End y conocimientos de Full Stack. Creo aplicaciones web dinámicas, responsivas y orientadas a la experiencia de usuario.',
            'cv_button': 'Descargar CV'
        },
        'sobre-mi': {
            'title': 'Sobre <span>Mí</span>',
            'texto_sobreMi': 'Soy desarrolladora web y técnica en desarrollo de software, graduada del IES Santa Fe.<br><br>Tengo un fuerte enfoque en el desarrollo Front-End, donde me especializo en crear interfaces dinámicas, responsivas y orientadas a la experiencia de usuario, sin dejar de lado la integración con lógica de servidor y bases de datos.<br><br>He trabajado en proyectos académicos aplicando tecnologías como HTML, CSS, JavaScript, Angular, Node.js, Express y MySQL.'
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
            'title': 'Proyectos <span>Destacados</span>',
            'title-proyecto1': 'Buffet12T',
            'info-proyecto1': 'Plataforma de gestión de comedores corporativos con actualizaciones en tiempo real (Socket.io). Permite a los administradores gestionar menús semanales y stock, mientras que los empleados realizan y siguen sus pedidos. Base de datos MySQL optimizada.',
            'title-proyecto2': 'Zumma Finanzas',
            'info-proyecto2': 'Sistema integral de finanzas personales Full Stack. Permite establecer presupuestos con alertas de gastos, visualizar estadísticas interactivas (Chart.js) y exportar reportes mensuales a Excel. Backend RESTful con Node.js.'
        },
        'contacto': {
            'title': '¿Hablamos?',
            'intro': '¿Tenés una propuesta, consulta o querés saber más sobre mi trabajo? Dejá tu mensaje y te respondo a la brevedad.',
            'btn-enviar': 'Enviar mensaje'
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
            // TEXTO COMPLETO EN INGLÉS (Orden Correcto)
            'home_text-3': 'Full Stack Junior Web Developer', 
            'parrafo-info': 'Web developer graduated from IES Santa Fe, focused on Front-End development with Full Stack knowledge. I build dynamic, responsive web applications oriented towards user experience.',
            'cv_button': 'Download CV'
        },
        'sobre-mi': {
            'title': 'About <span>Me</span>',
            'texto_sobreMi': 'I am a Web Developer and Software Technician graduated from IES Santa Fe.<br><br>I have a strong focus on Front-End development, specializing in creating dynamic, responsive interfaces oriented towards user experience, while also integrating server logic and databases.<br><br>I have worked on academic projects applying technologies such as HTML, CSS, JavaScript, Angular, Node.js, Express, and MySQL.'
        },
        'habilidades': { 'title': 'My <span>Skills</span>' },
        'formacion': {
            'title': 'My <span>Education</span>',
            'formacion1': 'Software Development Technician',
            'tiempo-formacion1': 'IES Santa Fe | 2023 - 2025',
            'formacion2': 'Full Stack Web Development',
            'tiempo-formacion2': 'Professional Practices & Courses',
            'formacion3': 'English',
            'tiempo-formacion3': 'B2 / C1 Level'
        },
        'proyectos': {
            'title': 'Featured <span>Projects</span>',
            'title-proyecto1': 'Buffet12T',
            'info-proyecto1': 'Corporate cafeteria management platform with real-time updates (Socket.io). Allows admins to manage weekly menus and stock, while employees place and track orders. Optimized MySQL database.',
            'title-proyecto2': 'Zumma Finance',
            'info-proyecto2': 'Comprehensive Full Stack personal finance system. Features monthly budgeting with expense alerts, interactive statistics (Chart.js), and Excel report exporting. RESTful Backend built with Node.js.'
        },
        'contacto': {
            'title': 'Let\'s Talk?',
            'intro': 'Do you have a proposal, question, or want to know more about my work? Leave a message and I\'ll reply shortly.',
            'btn-enviar': 'Send Message'
        }
    }
};

// ==========================================
// 2. LÓGICA DE CAMBIO DE IDIOMA
// ==========================================
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

// ==========================================
// 3. MENÚ HAMBURGUESA
// ==========================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

// ==========================================
// 4. LÓGICA DEL SLIDER (PROYECTOS)
// ==========================================
function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
            slide.classList.remove('active');
        }
    });

    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    slides[newIndex].classList.add('active');
}