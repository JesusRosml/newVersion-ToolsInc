<?php
include 'connectionDB.php';

$name = $_POST['nameWorker'];
$number = $_POST['numberPhone'];
$email = $_POST['emailWorker'];
$area = $_POST['workerArea'];
$state = $_POST['stateWorker'];
$date = date("Y-m-d");

try {
	$connection->begin_transaction();

	$stmt = $connection->prepare("INSERT INTO employee(name, telephone, email, entry_date, worker_area, state) VALUES (?, ?, ?, ?, ?, ?)");
	$stmt->bind_param("ssssss", $name, $number, $email, $date, $area, $state);
	$stmt->execute();
	$connection->commit();
	echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado CORRECTAMENTE");</script>';
} catch (Exception $e) {
	$connection->rollback();
	echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
}
?>