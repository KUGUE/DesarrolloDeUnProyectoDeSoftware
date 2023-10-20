document.addEventListener('DOMContentLoaded', function () {
    const nav = `
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Soporte</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', nav);
});
