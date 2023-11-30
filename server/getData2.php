<?php 
    include 'connectionDB.php';

    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data['arrayIDs'])){
        $toolsIDs = $data['arrayIDs'];
        $lenderName = $data['lender'];
        $workerID = $data['worker'];
        $textObservation = $data['observation'];
        $transactionDate = date('Y-m-d');

        //Obtener el id del prestador
        $stmt = $connection->prepare("SELECT id_warehouseman FROM warehouseman WHERE name = ?");
        $stmt->bind_param("s", $lenderName);
        $stmt->execute();
        $resultLender = $stmt->get_result();

        if ($resultLender->num_rows > 0) {
            $dataLender = $resultLender->fetch_assoc();
            $dataLenderID = $dataLender['id_warehouseman'];
        }

        $stmt = $connection->prepare("INSERT INTO loan_folio (transaction_date, state, observation) VALUES (?, 'Activo', ?)");
        $stmt->bind_param("ss", $transactionDate, $textObservation);
        $stmt->execute();

        if($stmt->errno){
            echo json_encode(['error' => 'Error al insertar en folio_prestamo']);
            exit();
        }

        $numberFolio = $connection->insert_id; 

        //Insertar datos en la tabla de history_tools
        foreach($toolsIDs as $toolID) {
            $stmt = $connection->prepare("INSERT INTO tool_history ( id_warehouseman, no_folio, id_registration, id_worker) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("iiii", $dataLenderID, $numberFolio, $toolID, $workerID);
            $stmt->execute();

            if($stmt->errno){
                echo json_encode(['error' => 'Error al insertar en historial_herramientas'.$stmt->error]);
                exit();
            }

            $stmt = $connection->prepare("UPDATE tool_registration SET availability = 'En prestamo' WHERE id_registration = ?");
            $stmt->bind_param("i", $toolID);
            $stmt->execute();

            if($stmt->errno){
                echo json_encode(['error' => 'Error al actualizar en registro_herramientas'.$stmt->error]);
                exit();
            }
        }
        echo json_encode(['folio' => $numberFolio]);
    }
?>