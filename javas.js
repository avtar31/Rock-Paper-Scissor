let userscore = 0;
let compscore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const comprc = document.getElementById("compr")

const gencompchoice =()=>{
    const options =["rock","paper", "scissor"] ;
   const randomINDX= Math.floor(Math.random() * 3);
   comprc.innerHTML =`computer choice is  ${options[randomINDX]}`;
   return options[randomINDX];
}
const drawgame = ()=>{
    msg.innerText= "It's a draw play again";
    msg.style.backgroundColor = "#ffefd5";
    msg.style.color = "black";
}
const showwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText= "Bhai aag lga di" ;
        msg.style.backgroundColor ="green";
        userscore++;
        userscorep.innerHTML = userscore;
    }
    else{ console.log ("you loose");
        compscore++;
        compscorep.innerHTML = compscore;
        msg.innerText= "Teri to kismat hi kharab hai";
        msg.style.backgroundColor = "red";
        msg.style.color="white";
    }
}

const playGame = (userchoice)=>{
    const compchoice =gencompchoice();
    if(userchoice === compchoice){
      drawgame();
      
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice==="paper"?false:true;
        }else if ( userchoice=== "paper"){
            userwin= compchoice ==="scissor"?false:true;
        }
        else{
            userwin = compchoice=== "rock" ?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

