<?php

// header("Content-Type: application/JSON: charset=UTF-8");

// echo "TESTE: \n";
// print_r($_GET); 

// echo "TEste: \n";
// echo $_GET['teste'];

print_r($_GET);
echo "deu certo ?";

$json = file_get_contents("data.json");
$data = json_decode($json);

// $JsonParser = file_get_contents("myfile.json");
// var_dump($JsonParser);

// $Json = file_get_contents("myfile.json");
// // Converts to an array 
// $myarray = json_decode($Json, true);
// var_dump($myarray); // prints array

// Conecta no banco de dados


// Faz um insert na tabela grid

// Faz um insert na tabela formulario

// Se não tiver cliente com o mesmo nome, faz um insert na tabela

