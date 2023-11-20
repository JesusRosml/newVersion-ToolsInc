<?php
include 'connectionDB.php';

$name = $_POST['nameWarehouseman'];
$number = $_POST['phoneWarehouseman'];
$email = $_POST['emailWarehouseman'];
$pass = $_POST['passwordWarehouseman'];
$pass2 = $_POST['passwordSecondWarehouseman'];
$state = $_POST['stateWharehouseman'];
$date = date("Y-m-d");

if ($pass != $pass2) {
	echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
    echo '<script>history.go(-1);</script>';
    echo '<script type="text/javascript">window.location.href="../registro_almacenista.php";</script>';
}else{
	$pass_hash = password_hash($pass, PASSWORD_DEFAULT);

	$stmt = $connection->prepare("SELECT email FROM warehouseman WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->fetch_assoc()) {
    	echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
        echo '<script>history.go(-1);</script>';
        echo '<script type="text/javascript">window.location.href="../registro_almacenista.php";</script>';
    }
    else{
    	try {
    		$connection->begin_transaction();

			$stmt = $connection->prepare("INSERT INTO warehouseman(name, telephone, password, email, state, entry_date) VALUES (?, ?, ?, ?, ?, ?)");
			$stmt->bind_param("ssssss", $name, $number, $pass_hash, $email, $state, $date);
			$stmt->execute();
			$connection->commit();
			echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado CORRECTAMENTE");</script>';
		} catch (Exception $e) {
			$connection->rollback();
			echo '<script language="javascript">alert("Funcion JS cuando los datos se hayan insertado INCORRECTAMENTE");</script>';
		}
    }
    $stmt->close();
}
?>