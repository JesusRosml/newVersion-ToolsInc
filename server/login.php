<?php
include 'connectionDB.php';
$email = $_POST['emailUser'];
$pass = $_POST['passwordUser'];

$stmt = $connection->prepare("SELECT email, password, name FROM warehouseman WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

#TODO
#ESTE CODIGO SE CAMBIARA CUANDO SE PUEDAN REGISTRAR ALMACENISTAS Y PODER ENCRIPTAR SU CONTRASEÑA
#ESTE CODIGO PUEDE SER SUCEPTIBLE A BYPASS 
if (($row = $result->fetch_assoc()) !== null && $pass === $row['password']) {
	$_SESSION['username'] = $row['name'];
	header("location: ../welcomeUser.php");
	exit();
}else{
	echo '<script language="javascript">alert("Aqui se ejecuta tu funcion JS si los datos estan incorrectos");</script>';
}
$stmt->close();
?>