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
    <link rel="stylesheet" href="css/registrationTools/registrationWarehouseman.css">
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

        <button><span class="material-symbols-outlined">logout</span>Cerrar Sesión</button>
    </header>

    <main>
        <section class="container-form">
            <div class="container-title">
                <h1>Registro de trabajadores</h1>
            </div>

            <form action="server/registerWorker.php" method="POST">
                <label for="nameWorker">Ingrese el nombre del trabajador</label>
                <input name="nameWorker" type="text" placeholder="Nombre del trabajador" id="nameWorker">

                <label for="numberPhone">Ingrese el telefono del trabajador</label>
                <input name="numberPhone" type="text" placeholder="Numero telefónico" id="numberPhone">

                <label for="emailWorker">Ingrese el correo del trabajador</label>
                <input name="emailWorker" type="email" placeholder="Correo del trabajador" id="emailWorker">

                <label for="observationTool">Ingrese el puesto de trabajo</label>
                <input name="workerArea" type="text" placeholder="Puesto de trabajo" id="observationTool">

                <select name="stateWorker">
                    <option value="">Estado actual</option>
                    <option value="Activo">Activo</option>
                    <option value="De baja">De baja</option>
                </select>

                <button type="submit">Registrar trabajador</button>
            </form>
        </section>

        <section class="container-imageCode">
            <img src="images/img_QR.jpg" alt="">

            <p>Aún no se ha generado el codigo QR del trabajador</p>
        </section>

        <section class="container-button">
            <button id="registerStorer">Registrar almacenista</button>
        </section>

        <section class="container-warehouseman">
            <div class="container-title">
                <h1>Registro de almacenista</h1>
                <button id="closeWarehouseman">Cerrar</button>
            </div>

            <form action="server/registerWarehouseman.php" method="POST">
                <label for="nameWarehouseman">Ingrese el nombre completo</label>
                <input name="nameWarehouseman" type="text" placeholder="Nombre del almacenista" id="nameWarehouseman">

                <label for="phoneWarehouseman">Ingrese el telefóno</label>
                <input name="phoneWarehouseman" type="text" placeholder="Numero telefónico" id="phoneWarehouseman">

                <label for="emailWarehouseman">Ingrese el correo electronico</label>
                <input name="emailWarehouseman" type="email" placeholder="Correo electronico" id="emailWarehouseman">

                <label for="passwordFirstWarehouseman">Ingrese la contraseña</label>
                <input name="passwordWarehouseman" type="password" placeholder="Contraseña" id="passwordFirstWarehouseman">

                <label for="passwordSecondWarehouseman">Confirme la contraseña</label>
                <input name="passwordSecondWarehouseman" type="password" placeholder="Contraseña" id="passwordSecondWarehouseman">

                <select name="stateWharehouseman">
                    <option value="">Estado actual</option>
                    <option value="Activo">Activo</option>
                    <option value="De baja">De baja</option>
                </select>

                <button type="submit">Registrar almacenista</button>
            </form>
        </section>
    </main>

    <script type="module" src="js/registrationWorkers/index.js"></script>
</body>
</html>