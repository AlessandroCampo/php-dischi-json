<?php

$res = '';
$db_array = file_get_contents('db.json');
$php_res = json_decode($db_array, true);


if (isset($_POST['single'])) {
    $res = json_encode($php_res[$_POST['single']]);
} else {
    $res =  $db_array;
}


echo $res;
header('Content-type: application/json');

// 
