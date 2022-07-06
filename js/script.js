console.log("funcionando");

var nome;
var email;
var camp1;
var camp2;
var camp3;

function capturaDados() {
  console.log("captura de dados");

  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  camp1 = document.getElementById("camp1").value;
  camp2 = document.getElementById("camp2").value;

  if (nome != "") {
    console.log("deu certo a captura do nome é: " + nome);
  } else {
    console.log("deu erro na captura do nome");
  }

  if (email != "") {
    console.log("deu certo a captura do email é: ", email);
  } else {
    console.log("deu erro na captura do nome");
  }

  if (camp1 != "") {
    console.log("deu certo a captura do camp1  é:", camp1);
  } else {
    console.log("deu erro na captura do camp1 ");
  }

  if (camp2 != "") {
    console.log("deu certo a captura do camp2  é:", camp2);
  } else {
    console.log("deu erro na captura do camp2 ");
  }
  return;
}

function nomeEmail() {
  console.log("entrou na função nomeEmail");
  console.log("deu certo, o nome é: ", nome, " e o email é", email);
  return;
}

function calculo() {
  console.log("entrou na função calculo");
  console.log("camp1", camp1);
  console.log("camp2", camp2);

  if (camp1 != null) {
    camp3 = camp1 * camp2;
    console.log("o valor do camp3 é: ", camp3);
  }
  return;
}

function mae() {
  console.log("entrou ma funcao mae");
  var dados = capturaDados();

  var form = nomeEmail();

  var soma = calculo();

  enviaRequest();
}

function enviaRequest() {
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  var theUrl = "/AJAX%20teste1/arquivo.php";
  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(
    JSON.stringify({
      Nome: nome,
      Email: email,
      Numero1: camp1,
      Numero2: camp2,
      Numero3: camp3,
    })
  )
//   if (this.readyState == 4 && this.status == 200) {
//     //Verifica se comunicou com o php
//     alert("Entrou na função enviaRequest()");
//     console.log(this.responseText);
//     alert(this.responseText); // é o que o arquivo php retornou de mensagem
//     // document.getElementById("demo").innerHTML = this.responseText;
//   }
}
