const menuButton = document.querySelector('.menu-toggle');
const navigationMenu = document.querySelector('.nav-menu');

if (menuButton && navigationMenu) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigationMenu.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('menu-open', isOpen);
    });

    navigationMenu.querySelectorAll('a').forEach((navLink) => {
        navLink.addEventListener('click', () => {
            navigationMenu.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
    });
}
