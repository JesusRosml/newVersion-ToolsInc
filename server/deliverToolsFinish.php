<?php 
    include 'connectionDB.php';

    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data['arrayIDs'])){
        $toolsIDs = $data['arrayIDs'];
        $lenderName = $data['lender'];
        $workerID = $data['worker'];
        $textObservation = $data['observation'];
        $transactionDate = date('Y-m-d'); //Fecha en la que se devuelve la herramienta

        foreach($toolsIDs as $id_tool) {
            $updateHistory = $connection->prepare("UPDATE tool_history SET return_date = ? WHERE id_registration = ?");
            $updateHistory->bind_param("si", $transactionDate, $id_tool);
            $updateHistory->execute();

            $updateRegistration = $connection->prepare("UPDATE tool_registration SET availability = 'Disponible' WHERE id_registration = ?");
            $updateRegistration->bind_param("i", $id_tool);
            $updateRegistration->execute();

            if($updateHistory->errno){
                echo json_encode(['error' => 'Error al actualizar historial herramienta'.$updateHistory->error]);
                exit();
            }

            if($updateRegistration->errno){
                echo json_encode(['error' => 'Error al actualizar registro de herramientas'.$updateRegistration->error]);
                exit();
            }
        }

        echo json_encode(['data' => 'Se realizo la entrega de la herramienta correctamente']);     
    }
?>