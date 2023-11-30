<?php 
    include 'connectionDB.php';

    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data['worker_id'])) {
        $worker_id = $data['worker_id'];
        $name_worker = $data['name_worker'];
        $phone_worker = $data['phone_worker'];
        $email_worker = $data['email_worker'];
        $discharge_date = $data['discharge_date'];
        $area_worker = $data['area_worker'];
        $state_worker = $data['state_worker'];

        $stmt = $connection->prepare("UPDATE employee SET name = ?, telephone = ?, email = ?, entry_date = ?, worker_area = ?, state = ? WHERE id_worker = ?");
        $stmt->bind_param("ssssssi", $name_worker, $phone_worker, $email_worker, $discharge_date, $area_worker, $state_worker, $worker_id);
        $stmt->execute();   

        echo json_encode(['folio' => 'Se actualizo el trabajador correctamente']);
    }

?>