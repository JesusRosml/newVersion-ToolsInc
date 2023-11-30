<h3 class="viewTools-h3">Ver a todos los trabajadores</h3>

<form action="" class="form-viewTools">
    <input type="text" name="search" id="search" placeholder="Buscar trabajador">
    <button type="button">Buscar</button>
</form>

<h4 class="viewTools-h4">Trabajadores que fueron dado de alta.</h4>

<table class="table-viewTools">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Fecha de alta</th>
            <th>Area de trabajo</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody id="viewWorker-body">
        
    </tbody>
</table>

<div class="container-buttonsControllers">
    <button id="prevButtonWork">-</button>
    <div class="container-p">
        <p id="counter_pages">0</p>
    </div>
    <button id="nextButtonWork">+</button>

</div>