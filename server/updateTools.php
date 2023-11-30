<?php
    include 'connectionDB.php';

    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data['id_tool'])) {
        $discharge_date = $data['discharge_date'];   
        $state_tool = $data['state_tool'];         
        $availability_tools = $data['availability_tools'];
        $id_tool = $data['id_tool']; 
        $type_tool = $data['type_tool']; 
        $brand_tool = $data['brand_tool'];
        $model_tool = $data['model_tool'];

        
        $stmt = $connection->prepare("UPDATE tool SET id_tool = ?, type_tool = ?, brand = ?, model = ? WHERE id_tool = ?");
        $stmt->bind_param("isssi", $id_tool, $type_tool, $brand_tool, $model_tool, $id_tool);
        $stmt->execute();

        $stmt2 = $connection->prepare("UPDATE tool_registration SET registration_date = ?, status = ?, availability = ? WHERE id_registration = ?");
        $stmt2->bind_param("sssi", $discharge_date, $state_tool, $availability_tools, $id_tool);
        $stmt2->execute();

        if($stmt->errno){
            echo json_encode(['error' => 'Error al actualizar en herramienta'.$stmt->error]);
            exit();
        }

        echo json_encode(['folio' => 'Se actualizo la herramienta correctamente']);
    }
?>