<?php 
    include 'server/session.php';
    include 'server/connectionDB.php';

?>

<?php 
    $employeeSelect = "SELECT id_worker, name FROM employee";
    $employeeResult = mysqli_query($connection, $employeeSelect);

    $labelOptions = "<option id='one-deliverTools-firstElement' value=''>Selecciona una trabajador</option>";

    while($row = mysqli_fetch_assoc($employeeResult)){
        $idWorker = $row['id_worker'];
        $nameWorker = $row['name'];
        $labelOptions .= "<option value='$idWorker'>$nameWorker</option>";
    }
?>

<h3 class="deliverTools-h3">Devolución de prestamos</h3>

<div class="container-deliverTools-namewarehouseman">
    <p class="deliverTools-p">Personal que esta autorizando el prestamo: </p>
    <span id="deliverTools-nameWarehouseman"><?php echo "$warehouseman"; ?></span>
</div>

<label for="workerName" class="label-worker">Elija el trabajador que esta devolviendo la herramienta:</label>

<select name="workesName" id="deliverTools-workerName">
    <?php echo $labelOptions; ?>
</select>

<p class="deliverTools-p">Herramientas que están siendo devueltas</p>

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
    <tbody id="deliverTools-bodyTable">

    </tbody>
</table>

<label for="observationAuth" class="deliverTools-observation">Escriba las observaciones</label>

<textarea placeholder="Observaciones..." name="observationAuth" id="observationDeliverTools" wrap="hard"></textarea>

<div class="containerButtons-deliverTools">
    <button id="deliverTools-confirmAuth">Confirmar prestamo</button>
    <button id="deliverTools-clearFields">Limpiar todos los campos</button>
</div>