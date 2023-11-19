<!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toolsinc | Bienvenida</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <!-- Tipografías de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&display=swap" rel="stylesheet">
    <!-- Hojas de estilo -->
    <link rel="stylesheet" href="css/externalStyles/normalize.css">
    <link rel="stylesheet" href="css/welcomeScreen/welcomeScreen.css">
    <link rel="stylesheet" href="css/navegationApp.css">
</head>
<body>
    <?php
    include 'server/session.php';
    ?>
    <header>
        <img src="images/toolsImageLogo.svg" alt="">
        <nav>
            <ul>
                <li><a href="welcomeUser.php">Home</a></li>
                <li><a href="loanAuthorization.php" class="ancla-margin">Autorización de prestamos</a></li>
                <li><a href="registrationTools.php" class="ancla-margin">Registro de herramientas</a></li>
                <li><a href="registrationWorkers.php" class="ancla-margin">Registro de Trabajadores</a></li>
                <li><a href="#" class="ancla-margin">Almacen</a></li>
            </ul>
        </nav>

        <button ><a href="server/logout.php"><span class="material-symbols-outlined">logout</span>Cerrar Sesión</a></button>
    </header>

    <main>
        <section>
            <article class="container-welcome">
                <img src="images/toolsImageLogo.svg" alt="">
                <h1>Bienvenido a <span>ToolsInc</span> <?php echo $warehouseman?></h1>

                <p>
                    ¡Bienvenido a ToolsInc! El sistema de control de almacenamiento más eficiente mediante 
                    el uso de códigos QR.
                </p>

                <div class="container-buttons">
                    <a href="#" class="first-link">Autorizar prestamo</a>
                    <a href="#" class="second-link">Ver almacen</a>
                </div>
            </article>

            <article class="container-help">
                <h3>¿Necesitas ayuda?</h3>

                <div class="container-message">
                    <a href="mailto:jesusperezhidalgo50@gmail.com">
                        <img src="images/envelope-solid.svg" alt="">
                    </a>
                    <a href="https://wa.me/9212559782?text=Hola,%20necesito%20ayuda%20en%20la%20Aplicacion web" target="_blank">
                        <img src="images/whatsapp.svg" alt="">
                    </a>
                </div>
            </article>
        </section>
    </main>
</body>
</html>