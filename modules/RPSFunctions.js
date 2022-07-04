export default class RpsGame {
    constructor(playerSelection, computerSelection){
        this .playerSelection =playerSelection;
        this.computerSelection = computerSelection;
    }
}


export let  gameOptions = (option)=>{
    //player and computer both chooses an option
  let optionsArr= ["Rock", "Paper", "Scissors"];
  option = optionsArr[Math.floor(Math.random()*optionsArr.length)];
    
    
    return option;
}

export let playerPosition = (playerSelection, computerSelection) => {
 playerSelection = prompt("enter your choice");
 computerSelection = gameOptions(Option);


    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You loose:" + " Paper Beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "Rock"){
        return "You win:" + " Paper Beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You win:" + " Rock Beats Scissors";
    }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You loose:" + " Rock Beats Scissors";
    }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You loose:" + " Scissors Beats paper";
    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win:" + " Scissors Beats paper";
    }else{
        return "its is a draw";
    }

}
console.log(playerPosition(playerSelection));