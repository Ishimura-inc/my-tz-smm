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
            section.classList.toggle('footer__section--active');
        };
    });
}

initFooterAccordion();
window.addEventListener('resize', initFooterAccordion);