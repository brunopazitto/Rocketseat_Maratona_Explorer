const elementoResposta = document.querySelector('#resposta')
const inputPerguntar = document.querySelector('#inputPerguntar')
const Peguntar = document.querySelector('#buttonPerguntar')

//Array com as previsões
const respostas = [
  "Certeza!" ,
  "Não tenho tanta certeza." ,
  "É decididamente assim." ,
  "Não conte com isso." ,
  "Sem dúvidas!" ,
  "Pergunte novamente mais tarde." ,
  "Sim, definitivamente!" ,
  "Minha resposta é não." ,
  "Você pode contar com isso." ,
  "Melhor não te dizer agora." ,
  "A meu ver, sim." ,
  "Minhas fontes dizem não." ,
  "Provavelmente." ,
  "Não é possível prever agora." ,
  "Perspectiva boa." ,
  "As perspectivas não são tão boas." ,
  "Sim." ,
  "Concentre-se e pergunte novamente." ,
  "Sinais apontam que sim." ,

]

//Ao clicar sobre button fazer pergunta
function fazerPergunta() {

    if(inputPerguntar.value == "") {
        alert("Digite sua pergunta")
        return
    }

    Peguntar.setAttribute("disabled", true)

    const Perguntar = "<div>" + inputPerguntar.valor + "<div/>"

    //Gerar número aleatório para percorrer o array
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


    elementoResposta.innerHTML = respostas[numeroAleatorio]
    elementoResposta.style.opacity = 1;

    setTimeout( function() {
        elementoResposta.style.opacity = 0;
        Perguntar.removeAttribute("desativado")
    }, 3000)

}