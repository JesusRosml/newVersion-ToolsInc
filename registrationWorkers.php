<!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de trabajadores</title>
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
                <li><a href="loanAuthorization.php" class="ancla-margin">Autorización de prestamos</a></li>
                <li><a href="registrationTools.php" class="ancla-margin">Registro de herramientas</a></li>
                <li><a href="registrationWorkers.php" class="ancla-margin">Registro de Trabajadores</a></li>
                <li><a href="#" class="ancla-margin">Almacen</a></li>
            </ul>
        </nav>

        <button><span class="material-symbols-outlined">logout</span>Cerrar Sesión</button>
    </header>

    <main>
        <section class="container-form">
            <div class="container-title">
                <h1>Registro de trabajadores</h1>
            </div>

            <form action="">
                <label for="nameWorker">Ingrese el nombre del trabajador</label>
                <input type="text" placeholder="Nombre del trabajador" id="nameWorker">

                <label for="numberPhone">Ingrese el telefono del trabajador</label>
                <input type="text" placeholder="Numero telefónico" id="numberPhone">

                <label for="emailWorker">Ingrese el correo del trabajador</label>
                <input type="email" placeholder="Correo del trabajador" id="emailWorker">

                <label for="observationTool">Ingrese el puesto de trabajo</label>
                <input type="text" placeholder="Puesto de trabajo" id="observationTool">

                <select>
                    <option value="">Estado actual</option>
                    <option value="">Activo</option>
                    <option value="">De baja</option>
                </select>

                <button>Registrar trabajador</button>
            </form>
        </section>

        <section class="container-imageCode">
            <img src="images/img_QR.jpg" alt="">

            <p>Aún no se ha generado el codigo QR del trabajador</p>
        </section>

        <section class="container-button">
            <button id="registerStorer">Registrar almacenista</button>
        </section>
    </main>

    <script type="module" src="js/registrationWorkers/index.js"></script>
</body>
</html>