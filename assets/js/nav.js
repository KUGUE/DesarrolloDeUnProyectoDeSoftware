document.addEventListener('DOMContentLoaded', function () {
    const nav = `
      <div class="nav">
        <nav>
            <div class="wrapper">
                <div class="logo"><a href="#">    <div class="logo"><a href="#"><img src="../assets/img/Logo.png" alt="Logo" style="margin-top:30px; height: 40%;  width: 40%;"></a></div></a></div>
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
        <ul class="drop-menu">
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

