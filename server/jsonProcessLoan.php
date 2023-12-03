<?php 
    include("connectionDB.php");

    $consultationSQL = "SELECT * FROM tool_history
    JOIN tool ON tool_registration.id_tool = tool.id_tool"
    ;

?>