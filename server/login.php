<?php
include 'connectionDB.php';
$email = $_POST['emailUser'];
$pass = $_POST['passwordUser'];

$stmt = $connection->prepare("SELECT email, password, name FROM warehouseman WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($pass, $row['password'])) {
        $_SESSION['username'] = $row['name'];
        header("location: ../welcomeUser.php");
        exit();
    }
}

// Mensaje de error si la autenticación falla
echo '<script language="javascript">alert("Aqui se ejecuta tu funcion JS si los datos estan incorrectos");</script>';
$stmt->close();
?>