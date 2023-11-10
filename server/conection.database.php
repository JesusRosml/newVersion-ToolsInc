<?php
    $server = 'localhost';
    $userName = 'root';
    $password = '';
    $database = 'id18425440_altepetl';

    #Se hace la conexion a la BD usando el servidor,nombre de usuario,contraseña y nombre de la BD
    $conection = new mysqli( $server, $userName, $password, $database);
    #la conexion se hace en utf8 para que no haya problemas con los acentos
    $conection->set_charset("utf8mb4");
?>