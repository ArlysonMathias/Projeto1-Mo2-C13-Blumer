const nome = document.querySelector("#nome"); // variável com o nome do personagem
const situacao = document.querySelector("#estado"); // variável com a situação que o personagem se encontra
const img = document.querySelector("#imagem"); // variável com a imagem principal do personagem
let buttonclick = document.querySelector("#alterar"); // variável que controla o butão

//variáveis da opção bônus

let buttonBonus = document.querySelector("#clickBonus"); // pega o botão do bônus
const imgBonus = document.querySelector("#imgBonus");
const audio = document.querySelector("#audio");

// Lista com o diretório das imagens
// "./assets/img/Baby-Groot2.png",
// "./assets/img/groot-crianca.png",
// "./assets/img/teenage-groot.png",
// "./assets/img/groot.png"

// evento do clique no botão que altera a fase da vida do groot
buttonclick.addEventListener("click", () => {
  if (buttonclick.value == "1") {
    img.src = "./assets/img/groot-crianca.png";
    nome.innerText = "Groot";
    situacao.innerText = "Kid Groot";
    buttonclick.value = "2";
  } else if (buttonclick.value == "2") {
    img.src = "./assets/img/teenage-groot.png";
    nome.innerText = "Groot";
    situacao.innerText = "Teenage Groot";
    buttonclick.value = "3";
  } else if (buttonclick.value == "3") {
    img.src = "./assets/img/groot.png";
    nome.innerText = "Groot";
    situacao.innerText = "Adult Groot";
    buttonclick.value = "4";
  } else {
    img.src = "./assets/img/Baby-Groot2.png";
    nome.innerText = "Groot";
    situacao.innerText = "Baby Groot";
    buttonclick.value = "1";
  }
});

//botão que altera o status do bônus
buttonBonus.addEventListener("click", () => {
  if (buttonBonus.value == "0") {
    imgBonus.src = "./assets/img/groot-danca.gif";
    audio.src = "./assets/audio/djcannudo--jackson-five-i-want-you-back.mp3";
    buttonBonus.value = "1";
  } else {
    imgBonus.src = "";
    audio.src = "";
    buttonBonus.value = "0";
  }
});
