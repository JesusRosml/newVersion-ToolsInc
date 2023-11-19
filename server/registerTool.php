<?php
include 'connectionDB.php';

$type = $_POST['typeTool'];
$brand = $_POST['brandTool'];
$model = $_POST['modelTool'];
$status = $_POST['statusTool'];
$warehouseman = $_POST['warehousemanName'];
$date = date("Y-m-d");

try {
    $connection->begin_transaction();

	$checkStmt = $connection->prepare("SELECT id_tool FROM tool WHERE type_tool = ? AND brand = ? AND model = ?");
	$checkStmt->bind_param("sss", $type, $brand, $model);
	$checkStmt->execute();
	$checkResult = $checkStmt->get_result();
	$checkRow = $checkResult->fetch_assoc();

	if ($checkRow) {
	    $noFolio = $checkRow['id_tool'];
	} else {
	    $stmt = $connection->prepare("INSERT INTO tool(type_tool, brand, model) VALUES (?, ?, ?)");
	    $stmt->bind_param("sss", $type, $brand, $model);
	    $stmt->execute();
	    $noFolio = $connection->insert_id;
	}

    $sql2 = "SELECT id_warehouseman FROM warehouseman WHERE name = ?";
    $stmt = $connection->prepare($sql2);
    $stmt->bind_param("s", $warehouseman);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
    	$idWarehouseman = $row['id_warehouseman'];
    } else {
    	echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
    }


    // Tercera consulta (INSERT INTO tool_registration)
    $stmt = $connection->prepare("INSERT INTO tool_registration(registration_date, status, availability, id_tool, id_warehouseman) VALUES (?, ?, 'Disponible', ?, ?)");
    $stmt->bind_param("ssii", $date, $status, $noFolio, $idWarehouseman);
    $stmt->execute();

    // Confirmar transacción
    $connection->commit();

    echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado CORRECTAMENTE");</script>';
} catch (Exception $e) {
    // Revertir transacción en caso de error
    $connection->rollback();
    echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
}
?>
