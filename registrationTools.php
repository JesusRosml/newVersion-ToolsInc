<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de herramientas</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
     <!-- Tipografías de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap" rel="stylesheet">
    <!-- Hojas de estilo -->
    <link rel="stylesheet" href="css/externalStyles/normalize.css">
    <link rel="stylesheet" href="css/navegationApp.css">
    <link rel="stylesheet" href="css/registrationTools/registrationTools.css">
</head>
<body>
    <header>
        <img src="images/toolsImageLogo.svg" alt="">
        <nav>
            <ul>
                <li><a href="welcomeUser.php">Home</a></li>
                <li><a href="#" class="ancla-margin">Autorización de prestamos</a></li>
                <li><a href="#" class="ancla-margin">Registro de herramientas</a></li>
                <li><a href="#" class="ancla-margin">Registro de Trabajadores</a></li>
                <li><a href="#" class="ancla-margin">Almacen</a></li>
            </ul>
        </nav>

        <button><span class="material-symbols-outlined">logout</span>Cerrar Sesión</button>
    </header>

    <main>
        <section class="container-form">
            <div class="container-title">
                <h1>Registro de herramientas</h1>
            </div>

            <form action="">
                <label for="nameTool">Ingrese el nombre de la herramienta</label>
                <input type="text" placeholder="Nombre de la herramienta" id="nameTool">

                <label for="brandTool">Ingrese la marca de la herramienta</label>
                <input type="text" placeholder="Marca de la herramienta">

                <label for="modelTool">Ingrese el modelo de la herramienta</label>
                <input type="text" placeholder="Modelo de la herramienta">

                <label for="dataRegister">Fecha de registro</label>
                <input type="date" id="dataRegister">

                <label for="observationTool">Escriba las observaciones</label>
                <input type="text" placeholder="Observaciones" id="observationTool">

                <button>Registrar herramienta</button>
            </form>
        </section>

        <section class="container-imageCode">
            <img src="images/img_QR.jpg" alt="">

            <p>Aún no se ha generado el codigo QR de la herramienta</p>
        </section>
    </main>
</body>
</html>