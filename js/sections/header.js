export function header(activeMenuIndex = 0) {
    const menu = [
        { href: '#', text: 'Home' },
        { href: '#', text: 'About Me' },
        { href: '#', text: 'Services' },
        { href: '#', text: 'Portfolio' },
        { href: '#', text: 'Pricing' },
        { href: '#', text: 'Blog' },
        { href: '#', text: 'Pages' },
        { href: '#', text: 'CONTACT' },
    ];

    let menuHTML = '';

    for (let i = 0; i < menu.length; i++) {
        const link = menu[i];
        const active = i === activeMenuIndex ? 'active' : '';
        menuHTML += `<a class="link ${active}" href="${link.href}">${link.text}</a>`;
    }

    const HTML = `
        <header class="main-header">
            <img class="logo" src="./img/logo.png.webp" alt="Logo">
            <nav class="main-nav">${menuHTML}</nav>
        </header>`;
    document.body.insertAdjacentHTML('beforeend', HTML);
}

