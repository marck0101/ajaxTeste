<?php
echo '<pre>';
/* tebalhando com json no php -- json encode, decode, error*/

// file_get_contents() ele chama uma requisição ou arquivo, links http/s, retorna alguma coisa, e converter o retorno para string
$dadosJson = file_get_contents('dados.json');
// apresenta como string na tela
// print_r($dadosJson);

// aqui ele retorna um objeto com os dados decodificados
$dadosJsonDecodificados = json_decode($dadosJson);
//apresenta os um objeto com arrays
// print_r($dadosJsonDecodificados);

//foreach para enterar arrays e objetos
// precisa ser passado por parâmetro o que ele vai percorrer apontando para qual posição quer percorrer
//cada objeto dentro de clientes, cai ser um cliente para o php, para nós
foreach($dadosJsonDecodificados ->clientes as $cliente){
// vai retornar cada objeto separadamente
// print_r($cliente);

//aqui vai mostrar na tela concatenando as variaveis
//PHP_EOL vai estar fazendo a quebra de linha
echo $cliente->id . ' - ' . $cliente->nome . PHP_EOL;
}



//para trabalhar com array ao invés objetos
// aqui estaremos trabalhando com arrays e não objetos
$dadosJsonDecodificados = json_decode($dadosJson, true);
foreach($dadosJsonDecodificados ['clientes'] as $cliente){
    echo $cliente ['id'] . ' - ' . $cliente ['nome'] . PHP_EOL;
}


// agora para gerar algum erro

$dadosJsonErro = file_get_contents('dadosErro.json');
$dadosErroDecodificados = json_decode($dadosJsonErro);
 print_r($dadosErroDecodificados);
print_r(json_last_error());

