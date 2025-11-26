function initFooterAccordion() {
    const sections = document.querySelectorAll('.footer__section');

    // отключаем на десктопе
    if (window.innerWidth >= 910) {
        sections.forEach(section => section.classList.remove('footer__section--active'));
        return;
    }

    sections.forEach(section => {
        const title = section.querySelector('.footer__button');

        title.onclick = () => {
            if (section.classList.contains('footer__section--active')) {
                sections.forEach(section => section.classList.remove('footer__section--active'));
            } else {
                sections.forEach(section => section.classList.remove('footer__section--active'));
                section.classList.toggle('footer__section--active');
            }
        };
    });
}

initFooterAccordion();
window.addEventListener('resize', initFooterAccordion);