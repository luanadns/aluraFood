//Definindo Arrays
var nomeDasComidas = [];
var comida = [];

function listaDeComida() {
  //Atualiza lista de comidas
  const atualizaLista = document.querySelector("#listaDeComidas");
  var select = document.querySelector("#removeComida");

  //Limpa o select
  for (var i = select.options.length - 1; i >= 0; i--) {
    select.remove(i);
  } //limpa a div que receberá o nome das comidas
  atualizaLista.innerHTML = "";

  //insere comidas
  for (var i = 0; i < nomeDasComidas.length; i++) {
    atualizaLista.innerHTML +=
      "<figure><img src=" +
      nomeDasComidas[i] +
      "><figcaption>" +
      comida[i] +
      "</figcaption></figure>";

    //insere nova opção no select
    select.add(new Option(comida[i], comida[i]));
  }
}

//Função que verifica se há erros de input pelo usuário
function verificaComida() {
  var imagemComida = document.getElementById("imagemDaComida").value;
  var comidaFavorita = document.getElementById("nomeDaComida").value;
  if (imagemComida.endsWith(".jpg") || imagemComida.endsWith(".png")) {
    //Caso não há erros, chama a função a seguir
    adicionarComida(imagemComida, comidaFavorita);
  } else {
    var erro = document.getElementById("mensagem");
    mensagem.innerHTML = "Poxa, essa imagem não termina com jpg.";
  }
  document.getElementById("imagemDaComida").value = "";
  document.getElementById("nomeDaComida").value = "";
}

//Função que insere novas comidas na lista
function adicionarComida(imagemComida, comidaFavorita) {
  var elementoImagemComida = "<img src=" + imagemComida + ">";
  var elementoComidaFavorita = comidaFavorita;
  //Verifica se a comida desejada já não foi inserida
  if (
    nomeDasComidas.includes(imagemComida) ||
    comida.includes(comidaFavorita)
  ) {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Essa comida já esta na sua lista.";
    document.getElementById("listaDeComidas").value = "";
  } else {
    //Insera o nome da comida no select, caso queira remover
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Ok, comida adicionada.";
    //empurra para o array
    nomeDasComidas.push(imagemComida);
    comida.push(comidaFavorita);
    //imprime na tela
    listaDeComida();

    document.getElementById("imagemDaComida").value = "";
    document.getElementById("nomeDaComida").value = "";
  }
}

//função para remover comida
function removerComidita() {
  var mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = "Comida removida da lista.";
  var elementoRemoveComida = document.querySelector("#removeComida").value;

  if (nomeDasComidas.indexOf(elementoRemoveComida) > -1) {
    var posicao = nomeDasComidas.indexOf(elementoRemoveComida);
    nomeDasComidas.splice(posicao, 1);
    comida.splice(posicao, 1);
  }
  listaDeComida();
}
