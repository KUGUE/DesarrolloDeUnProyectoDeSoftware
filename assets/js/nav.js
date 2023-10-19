document.addEventListener('DOMContentLoaded', function () {
    const nav = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">
    <div class="nav">
    <nav>
        <div class="wrapper">
            <div class="logo"><a href="#"> <img src="../assets/img/Logo.png" alt="Logo"
                        style="height: 40%;  width: 40%;"></a></div>
            <input type="radio" name="slider" id="menu-btn">
            <input type="radio" name="slider" id="close-btn">
            <ul class="nav-links">
                <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Videos</a></li>
                <li>
                    <a href="#" class="desktop-item">Soporte</a>
                    <input type="checkbox" id="showDrop">
                    <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                    <ul class="drop-menu" style=" padding-left: 0px;">
                        <li><a href="#">Conctactanos</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </li>
            </ul>
            <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
        </div>
    </nav>
</div>
    `;

    document.body.insertAdjacentHTML('afterbegin', nav);
});

