<?php
echo '<pre>';
$dadosJson = file_get_contents('jsons/dados.json');
$dadosJsonDecodificados = json_decode($dadosJson);
foreach($dadosJsonDecodificados->clientes as $cliente){
    echo $cliente->id . ' - ' . $cliente->nome . PHP_EOL;
}

?>