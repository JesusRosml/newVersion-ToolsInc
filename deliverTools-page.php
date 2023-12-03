<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entregar Herramientas</title>
    <link rel="stylesheet" href="css/navegationApp.css">
    <link rel="stylesheet" href="css/deliverToolsPage/main.css">
    <link rel="stylesheet" href="css/externalStyles/normalize.css">
    <link rel="stylesheet" href="css/loanAuthorization/sectionDeliverTools.css">
</head>
<body>
<header>
        <img src="images/toolsImageLogo.svg" alt="">
        <nav>
            <ul>
                <li><a href="welcomeUser.php">Home</a></li>
                <li><a href="loanAuthorization.php" class="ancla-margin">Autorización de prestamos</a></li>
                <li><a href="deliverTools-page.php" class="ancla-margin">Entregar Herramienta</a></li>
                <li><a href="registrationTools.php" class="ancla-margin">Registro de herramientas</a></li>
                <li><a href="registrationWorkers.php" class="ancla-margin">Registro de Trabajadores</a></li>
            </ul>
        </nav>

        <button><span class="material-symbols-outlined">logout</span>Cerrar Sesión</button>
    </header>

    <main>

    </main>

    <script src="js/librariesCodeQR/instascan.min.js" defer></script>
    <script src="js/librariesCodeQR/jquery.min.js" defer></script>
    <script type="module" src="js/deliverToolsPage/main.js"></script>

    <?php
        //Aquí estoy recibiendo los datos en formato JSON desde la solicitud 
        $data_JSON = file_get_contents('php://input');

        $new_data = json_decode($data_JSON, true);

        print_r($new_data)
    ?>
</body>
</html>