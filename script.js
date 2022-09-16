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

/*========================== ACCORDION ==========================*/
function accordion() {
    const accordionList = document.querySelectorAll('.dl-about dt');
    const activeClass = 'active';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((dt) => {
            dt.addEventListener('click', activeAccordion);
        });
    }
}

accordion();

/*========================== ANIMATION WHEN SCROLLING ==========================*/
function activateAnimationOnScroll() {
    const toUp = document.querySelectorAll('.js-scroll-toUp');
    const toRight = document.querySelectorAll('.js-scroll-toRight');
    const toLeft = document.querySelectorAll('.js-scroll-toLeft');
    const opacity = document.querySelectorAll('.js-scroll-opacity');

    const maxWidth = window.matchMedia('(max-width: 768px)');
    const halfOfTheWindow = maxWidth.matches
        ? window.innerHeight * 8.5
        : window.innerHeight * 0.75;

    if (toUp.length) {
        function animateScrolling() {
            toUp.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfOfTheWindow) < 0;

                if (isSectionVisible)
                    section.classList.add('active');
            });

            toRight.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfOfTheWindow) < 0;

                if (isSectionVisible)
                    section.classList.add('active');
            });

            toLeft.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfOfTheWindow) < 0;

                if (isSectionVisible)
                    section.classList.add('active');
            });

            opacity.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfOfTheWindow) < 0;

                if (isSectionVisible)
                    section.classList.add('active');
            });
        };

        animateScrolling();
        window.addEventListener('scroll', animateScrolling);
    }
};

activateAnimationOnScroll();

/*========================== ROLL SMOOTH ==========================*/
function rollSmooth() {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function nativeScroll(distanceFromTheTop) {
        window.scroll({
            top: distanceFromTheTop,
            behavior: 'smooth',
        })
    }

    function scrollToSection(event) {
        event.preventDefault();
        const maxWidth = window.matchMedia('(max-width: 768px)');

        if (maxWidth.matches) {
            const distanceFromTheTop = getDistanceFromTheTop(event.target);
            nativeScroll(distanceFromTheTop);
            //  para dispositivos com telas menores que 768px
        }

        else {
            const distanceFromTheTop = getDistanceFromTheTop(event.target) - 80;
            //  menos 80 porque é a altura do header da página.
            nativeScroll(distanceFromTheTop);
        }
    }

    menuLinks.forEach((links) => {
        links.addEventListener('click', scrollToSection);
    });
}

rollSmooth();

/* Essa função é ativada apenas para dispositivos com a tela menor que 768px */
function removeClassAndAddAnother() {
    const networks = document.querySelector('.networks');
    const maxWidth = window.matchMedia('(max-width: 768px)');

    if (maxWidth.matches) {
        networks.classList.remove('js-scroll-toLeft');
        networks.classList.add('js-scroll-toUp');
    }
}

removeClassAndAddAnother();