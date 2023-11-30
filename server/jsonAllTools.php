<?php 
    include("connectionDB.php");

    $consultationSQL = "SELECT * FROM tool_registration 
    JOIN tool ON tool_registration.id_tool = tool.id_tool";

    $result = $connection->query($consultationSQL);
    $data = array();

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }
    }

    $json_data = json_encode($data);
    echo $json_data;
    
?>