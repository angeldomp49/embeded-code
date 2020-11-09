<?php

$host = "";
$user = "";
$password = "";
$dbname = "";
$connection = null;
$statement = "";

$actualMonthYear = json_decode($_POST["actualMonthYear"]);

try{
    $connection = new PDO(
        $host,
        $user,
        $password,
        $dbname
    );
}
catch(Exception $e ){
    $e->getMessage();
}

$statement = "SELECT * FROM appointments WHERE MONTH(appointment) = '".$actualMonthYear->month."' AND WHERE YEAR(appointment) ='".$actualMonthYear->year."'";
$connection->exec($statement);

for($i = 0; $i <= $actualMonthYear->daysMonth ; $i++){
    ?>
    {
        "data" : [<?php
            {
                "dayMonth": $i
            }
        ?>
        ] 
    }
    
}