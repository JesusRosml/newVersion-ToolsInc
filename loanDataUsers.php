<?php 
    include 'server/session.php';
    include 'server/connectionDB.php';
?>

<?php 
    $employeeSelect = "SELECT id_worker, name FROM employee";
    $employeeResult = mysqli_query($connection, $employeeSelect);

    $labelOptions = "<option id='one-elements' value=''>Selecciona una trabajador</option>";

    while($row = mysqli_fetch_assoc($employeeResult)){
        $idWorker = $row['id_worker'];
        $nameWorker = $row['name'];
        $labelOptions .= "<option value='$idWorker'>$nameWorker</option>";
    }
?>


<h1>Autorización de pestamos</h1>

<div class="container-warehouseman">
    <p>Personal que esta autorizando el prestamo:</p>
    <span id="nameWarehouseman"><?php echo "$warehouseman"; ?></span>
</div>

<label for="workerName" class="label-worker">Elija el trabajador que esta solicitando el prestamo:</label>

<select name="workesName" id="workerName">
    <?php echo $labelOptions; ?>
</select>

<p>Herramientas solicitadas:</p>

<table>
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody id="bodyTable">

    </tbody>
</table>

<label for="observationAuth" class="observation-label">Escriba las observaciones</label>
<textarea placeholder="Observaciones..." name="observationAuth" id="observationAuth" wrap="hard"></textarea>

<div class="containerButtons">
    <button id="confirmAuth">Confirmar prestamo</button>
    <button id="clearFields">Limpiar todos los campos</button>
</div>