let rstButton = document.querySelector("#rst");
let boxes = document.querySelectorAll(".box");
let mssg = document.getElementById("mssg");
let newGameBtn = document.getElementById("newGame")
let res = document.getElementById("r");
let game = document.getElementById("g");

let turnO = true;

const winPattern=[
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
         if(turnO==true){
            box.innerText = "O";
            turnO = false;
         } else {
            box.innerText = "X";
            turnO = true;
         }
         box.disabled = true;
         checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPattern){
        pos1 = pattern[0];
        pos2 = pattern[1];
        pos3 = pattern[2];
        
        if(boxes[pos1].innerText!="" && boxes[pos2].innerText!="" && boxes[pos3].innerText!=""){
           if(boxes[pos1].innerText==boxes[pos2].innerText && boxes[pos2].innerText==boxes[pos3].innerText){
              displayMssg(boxes[pos1].innerText);
              game.classList.add("hide");
              res.classList.remove("hide");
           }
        }
    }
}

function displayMssg(m){
    mssg.innerText = `Congratulations, Winner is Player ${m}`;
}

newGameBtn.addEventListener("click", ()=>{
     turnO = true;
     game.classList.remove("hide");
     res.classList.add("hide");
     enableButtons();
});

function enableButtons(){
   for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
   }
}

rstButton.addEventListener("click", ()=>{
    turnO = true;
    enableButtons();
});

