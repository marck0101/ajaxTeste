console.log("funcionando")

var nome;
var email; 
var camp1;
var camp2;
var camp3;

function capturaDados(){
    console.log("captura de dados");
   
     nome = document.getElementById("nome").value;
     email = document.getElementById("email").value;
     camp1 = document.getElementById("camp1").value;
     camp2 = document.getElementById("camp2").value;
  
    if(nome !=  ""){
        console.log('deu certo a captura do nome é: '+ nome)
    }else{console.log('deu erro na captura do nome')}

    if(email != ""){
        console.log('deu certo a captura do email é: ', email)
    }else{console.log('deu erro na captura do nome')}
   
    if(camp1 != ""){
        console.log('deu certo a captura do camp1  é:', camp1)
    }else{console.log('deu erro na captura do camp1 ')}
   
    if(camp2 != ""){
        console.log('deu certo a captura do camp2  é:', camp2)
    }else{console.log('deu erro na captura do camp2 ')}
    return
} 


function nomeEmail(){

        console.log("entrou na função nomeEmail");
        console.log("deu certo, o nome é: ", nome, " e o email é", email);
    return
}

function calculo(){
    console.log("entrou na função calculo");
    console.log("camp1", camp1);
    console.log("camp2", camp2);

    if(camp1 != null){
        camp3 = camp1 * camp2
        console.log("o valor do camp3 é: ", camp3)
    }
    return 
}



function mae(){
    console.log("entrou ma funcao mae")
    var dados = capturaDados();

    var form = nomeEmail();

    var soma = calculo();

}


function enviaRequest() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "/AJAX%20teste1/arquivo.php";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({nomeCompleto: nome, Email: email, num1: camp1, num2: camp2, num3: camp3 }));
    }