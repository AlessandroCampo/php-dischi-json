<?php


$db_array = file_get_contents('db.json');
$php_res = json_decode($db_array, true);


if (isset($_POST['single'])) {
    echo json_encode($php_res[$_POST['single']]);
} else {
    echo $db_array;
}

// 
