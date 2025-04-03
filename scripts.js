function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerchoice;
    switch (random) {
        case 0:
            computerchoice = "PAPEL";
            break;
        case 1:
            computerchoice = "PEDRA";
            break;
        case 2:
            computerchoice = "TESOURA";
            break;
    }
    return computerchoice;
 }
 
 function getHumanChoice(hPrompt) {  
     let playerchoice;
     if (hPrompt === "PEDRA" || hPrompt === "PAPEL" || hPrompt === "TESOURA") {
         playerchoice = hPrompt;
     } else {
         console.log("Digite apenas pedra, papel ou tesoura");
     }
     return playerchoice;
 }
 
 function playRound(choiceComputer, choiceHuman) {
     if (choiceComputer === choiceHuman) {
         console.log("Empate!");
     } else if (
         (choiceComputer === "PAPEL" && choiceHuman === "PEDRA") ||
         (choiceComputer === "PEDRA" && choiceHuman === "TESOURA") ||
         (choiceComputer === "TESOURA" && choiceHuman === "PAPEL")
     ) {
         console.log("Computador ganhou!");
         computerScore += 1;
     } else {
         console.log("Você ganhou!");
         humanScore += 1;
     }
     console.log("Pontuação - Você: " + humanScore + " | Computador: " + computerScore);
 }
 
 let humanScore = 0;
 let computerScore = 0;
 
 function playGame() {
     let continuePlaying = true;
 
     while (continuePlaying) {
         console.log("Pedra, papel ou Tesoura!");
         let hPrompt = String(prompt("Digite Pedra, Papel ou Tesoura: ")).toUpperCase();
 
         if (hPrompt !== "PEDRA" && hPrompt !== "PAPEL" && hPrompt !== "TESOURA") {
             console.log("Escolha inválida! Tente novamente.");
             continue;
         }
 
         let computerChoice = getComputerChoice();
         let playerChoice = getHumanChoice(hPrompt);
         
         console.log("O computador escolheu: " + computerChoice);
         console.log("Você escolheu: " + playerChoice);
         
         playRound(computerChoice, playerChoice);
 
         let userResponse = prompt("Você quer continuar jogando? (sim/não)").toLowerCase();
         
         if (userResponse !== "sim") {
             continuePlaying = false;
         }
     }
 
     console.log("Jogo Finalizado!");
     console.log("Pontuação final - Você: " + humanScore + " | Computador: " + computerScore);
     alert("Pontuação final - Você: " + humanScore + " | Computador: " + computerScore);
 }
 
 playGame();
 