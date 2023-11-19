<!DOCTYPE html> <!-- Este archivo se llamaba QRHerramientas -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seccion de registro</title>
    <!-- Hojas de estilo -->
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <link rel="stylesheet" href="css/externalStyles/normalize.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,800&family=Press+Start+2P&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/807171747a.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><i class="fa-solid fa-house"></i><a href="lectorQR.php">Autorización de prestamos</a></li>
                <li><i class="fa-solid fa-file-circle-plus"></i><a href="QRHerramientas.php">Registro de herramientas</a></li>
                <li><i class="fa-solid fa-users-viewfinder"></i><a href="QRTrabajadores.php">Registro de trabajadores</a></li>
                <li><i class="fa-solid fa-box-archive"></i><a href="almacen.php">Almacen</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="contenedor">
            <?php
            include("server/conection.database.php");
            include("server/register.new-objects.php");
            ?>
            <div class="container-text">
                <h3>Generador de codigo QR</h3>
                <h4>Ingrese los datos de la herramienta</h4>
            </div>

            <form method="post" class="form">
                <label for="ID-Herramienta">Escriba el ID de la herramienta</label>
                <input name="id_tool" pattern="^[a-zA-Z0-9]{10}$" title="Por favor ingrese solo letras y números. Debe tener exactamente 10 caracteres."  required id="input-tools" type="text" placeholder="Coloque el ID de la herramienta">

                <label for="Nombre-Herramienta">Escriba el nombre de la herramienta</label>
                <input class="excluido" name="name_tool" pattern="^[a-zA-Z\s]{1,50}$" title="Por favor ingrese solo letras. Máximo 50 caracteres." required id="input-nameTool" type="text" placeholder="Coloque el nombre de la herramienta">
                
                <label for="Color-Herramienta">Escriba el color de la herramienta</label>
                <input class="excluido" name="color_tool" pattern="[a-zA-Z\s]{1,30}" title="Solo se permiten letras y espacios"  required id="Color-Herramienta" type="text" placeholder="Coloque el color de la herramienta">
                
                <label for="Tipo-Herramienta">Escriba el tipo de herramienta</label>
                <input class="excluido" name="type_tool" pattern="^[a-zA-Z\s]{1,50}$" title="Por favor ingrese solo letras. Máximo 50 caracteres."   required id="Tipo-Herramienta" type="text" placeholder="Coloque el tipo de herramienta">
                
                <label for="Fecha-Herramienta">Fecha de registro</label>
                <input class="excluido" name="date_tool" max="2023-12-31" title="La fecha no puede ser mayor al año 2023"  required id="Fecha-Herramienta" type="date" placeholder="0">

                <label for="descripcion_herramienta">Escriba la descripcion de la herramienta</label>
                <input class="excluido" name="description_tool"  title="La descripcion no puede ser mayor a 300 caracteres"  required id="description_tool1" type="text">
                <input id="downloadImage" class="excluido" name="enviar" class="btn" type="submit" Value="Enviar Datos">

            </form>

            <div class="qr_code">
                <img class="imgOpen" src="images/img_QR.jpg" alt="" id="containingImage">
                
                <button class="btn-QR" >Descargar codigo QR</button>
            </div>
        </section>
    </main>

    
    <script src="js/librariesCodeQR/filesaver.js"></script>
    <script type="module" src="js/register.tool.js"></script>
</body>
</html>