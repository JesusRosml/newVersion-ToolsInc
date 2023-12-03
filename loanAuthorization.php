<!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autorización de prestamo</title>
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
    <link rel="stylesheet" href="css/loanAuthorization/loanAuthorization.css">
    <link rel="stylesheet" href="css/loanAuthorization/index.css">
    <link rel="stylesheet" href="css/loanAuthorization/container-AuthLoan.css">
    <link rel="stylesheet" href="css/loanAuthorization/messageAlert.css">
    <link rel="stylesheet" href="css/loanAuthorization/sectionAllTools.css">
    <link rel="stylesheet" href="css/loanAuthorization/sectionAllWorkers.css">
    <link rel="stylesheet" href="css/loanAuthorization/editInformationWorker.css">
    <link rel="stylesheet" href="css/loanAuthorization/sectionDeliverTools.css">
    <link rel="stylesheet" href="css/loanAuthorization/sectionProcess.css">
</head>
<body>
    <header>
        <img src="images/toolsImageLogo.svg" alt="">
        <nav>
            <ul>
                <li><a href="welcomeUser.php">Home</a></li>
                <li><a href="#" class="ancla-margin">Autorización de prestamos</a></li>
                <li><a href="deliverTools-page.php" class="ancla-margin">Entregar Herramienta</a></li>
                <li><a href="registrationTools.php" class="ancla-margin">Registro de herramientas</a></li>
                <li><a href="registrationWorkers.php" class="ancla-margin">Registro de Trabajadores</a></li>
            </ul>
        </nav>

        <button><span class="material-symbols-outlined">logout</span>Cerrar Sesión</button>
    </header>
    <main>
        <section class="container-nav">
            <nav>
                <ul>
                    <li class="divisor-li">Sección de prestamos</li>
                    <div class="container-one" id="section-one"><li>Empezar autorización de prestamos</li></div>
                    <div class="container-two" id="section-two"><li>Prestamos de herramientas en procesos</li></div>
                    <div class="container-divisor"></div>
                    <li class="divisor-li modify-li">Sección de catalogos</li>
                    <div class="container-Cone" id="section-four"><li>Ver todas las herramientas</li></div>
                    <div class="container-Ctwo" id="section-five"><li>Ver todos los trabajadores</li></div>
                </ul>
            </nav>
        </section>
    </main>

    <script src="js/librariesCodeQR/instascan.min.js" defer></script>
    <script src="js/librariesCodeQR/jquery.min.js" defer></script>
    <script type="module" src="js/loanAuth/index.js" defer></script>
    <script type="module" src="js/loanAuth/renderTable.js" defer></script>

    <?php
        //Aquí estoy recibiendo los datos en formato JSON desde la solicitud 
        $data_JSON = file_get_contents('php://input');

        $new_data = json_decode($data_JSON, true);

        print_r($new_data)
    ?>
</body>
</html>