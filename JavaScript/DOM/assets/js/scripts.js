function toggleDarkMode() {

    changeClasses();
    changeTexts();

}

function changeClasses() {

    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeTexts() {

    if (body.classList.contains(darkModeClass)) {

        button.innerText = lighMode;
        h1.innerText = darkMode + ' ON';

    } else {

        button.innerText = darkMode;
        h1.innerText = lighMode + ' ON';

    }

}

const darkModeClass = 'dark-mode';
const darkMode = 'Dark Mode';
const lighMode = 'Light Mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', toggleDarkMode);