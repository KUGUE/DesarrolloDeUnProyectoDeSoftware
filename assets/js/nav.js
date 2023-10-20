document.addEventListener('DOMContentLoaded', function () {
    const nav = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">
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
