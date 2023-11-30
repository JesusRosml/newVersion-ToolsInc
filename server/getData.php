<?php 
    include("connectionDB.php");

    if(isset($_POST['code'])) {
        $code = $_POST['code'];

        //Comprobacion de disponibilidad de la herramienta
        $sql_check = "SELECT * FROM tool_registration WHERE id_tool = '$code' AND availability = 'En prestamo'";
        $result = $connection->query($sql_check);

        if($result->num_rows > 0){
            echo json_encode(['alerta' => 'La herramienta ya esta en prestamo']);
            exit();
        }

        $sql_test = "SELECT * FROM tool_registration 
        JOIN tool ON tool_registration.id_tool = tool.id_tool 
        WHERE tool_registration.id_tool = '$code'";
        $result = $connection->query($sql_test);

        if($result && $result->num_rows > 0){
            $row = $result->fetch_assoc();
            echo json_encode($row);  // Devuelve los datos como JSON
        }else{
            echo json_encode(['error' => 'No se encontro el codigo en la base de datos']);
        }
    }
?>