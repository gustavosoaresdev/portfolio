/*========================== MENU MOBILE ==========================*/
function menuMobile() {
    const btnMenuMobile = document.getElementById('btn-menu-mobile');
    function toggleMenu(event) {
        if (event.type === 'touchstart') {
            event.preventDefault();
        }

        const navigation = document.querySelector('.menu-navigation');
        navigation.classList.toggle('active');

        const active = navigation.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);

        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        }

        else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMenuMobile.addEventListener('click', toggleMenu);
    btnMenuMobile.addEventListener('touchstart', toggleMenu);

    const linksInternos = document.querySelectorAll('.ul-menu a[href^="#"]');
    function handleLink() {
        const navigation = document.querySelector('.menu-navigation');
        navigation.classList.remove('active');
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', handleLink);
    })
};

menuMobile();