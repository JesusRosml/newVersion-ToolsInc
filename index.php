<!DOCTYPE html>
<html lang="es-mx">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <!-- Tipografías de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&display=swap" rel="stylesheet">
    <!-- Hojas de estilo -->
    <link rel="stylesheet" href="css/externalStyles/normalize.css">
    <link rel="stylesheet" href="css/loginScreen/index.css">
    <link rel="stylesheet" href="css/loginScreen/errorMessage.css">
</head>
<body>
    <main>
        <div class="container-nameApplication">
            <img src="images/toolsImageLogo.svg" alt="Logo que pertenece a ToolsInc, contiene un martillo y un destornillador">
            <h2>ToolsInc</h2>
        </div>

        <div class="container-form">
            <h1>Iniciar Sesión</h1>
            <span>Te damos la bienvenida</span>

            <form action="" method="POST">
                <label for="user">Ingresa tu correo electrónico</label>
                <input type="text" name="emailUser" id="email" placeholder="Correo electrónico">

                <label for="password">Ingresa tu contraseña</label>
                <input type="password" name="passwordUser" id="password" placeholder="Contraseña">

                <div class="container-viewPassword">
                    <input type="checkbox" id="viewPassowrd" value="view_Password">
                    <label class="viewPassowrd" for="viewPassowrd">Mostrar contraseña</label>
                </div>

                <button id="validateButton" type="button">Iniciar Sesión</button>
            </form>
        </div>
    </main>

    <script type="module" src="js/loginFuntionScreen/index.js"></script>
</body>
</html>