let btnReset = document.querySelector("button");
let casas = document.querySelectorAll(".casa");
let jogador = "X";
let jogadorDaVez = document.getElementById("jogadorDaVez");
jogadorDaVez.innerText = "O";
let vencedor = document.getElementById("vencedor");

//Alternar entre jogador X e jogador O
function trocarJogador() {  
  if (jogador === "X") {
    jogador = "O"  
    jogadorDaVez.innerText = " X" //Atualizando o placar
  } else {
    jogador = "X"
    jogadorDaVez.innerText = " 0" //Atualizando o placar
  }
  return jogador
}
  
//Marcar X ou O
function marcarCasa(event) {    
  let casa = event.target;
  if (casa.innerText != ""){
    return;
  } // Se a casa ja estiver preenchida, não há comopreenche-la novamente
  casa.innerText = trocarJogador();
  vitoria();
}

//Botão de reset
btnReset.addEventListener("click", () => {
  for (let i = 0; i < casas.length; i++) {
    casas[i].innerText = " ";
  }
  vencedor.innerText= " "; 
  jogadorDaVez.innerText = " ";
})

//Verificar vencedor
function vitoria() {
  if (casa1.innerText === "X" && casa2.innerText === "X" && casa3.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa4.innerText === "X" && casa5.innerText === "X" && casa6.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa7.innerText === "X" && casa8.innerText === "X" && casa9.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa1.innerText === "O" && casa2.innerText === "O" && casa3.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa4.innerText === "O" && casa5.innerText === "O" && casa6.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa7.innerText === "O" && casa8.innerText === "O" && casa9.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa1.innerText === "X" && casa4.innerText === "X" && casa7.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa2.innerText === "X" && casa5.innerText === "X" && casa8.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa3.innerText === "X" && casa6.innerText === "X" && casa9.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa1.innerText === "O" && casa4.innerText === "O" && casa7.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa2.innerText === "O" && casa5.innerText === "O" && casa8.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa3.innerText === "O" && casa6.innerText === "O" && casa9.innerText === "O") {    
    vencedor.innerText = "O"
  }
  else if (casa1.innerText === "X" && casa5.innerText === "X" && casa9.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa3.innerText === "X" && casa5.innerText === "X" && casa7.innerText === "X") {    
    vencedor.innerText = "X"

  } else if (casa1.innerText === "O" && casa5.innerText === "O" && casa9.innerText === "O") {    
    vencedor.innerText = "O"

  } else if (casa3.innerText === "O" && casa5.innerText === "O" && casa7.innerText === "O") {    
    vencedor.innerText = "O"
  }
}


