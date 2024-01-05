
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newgame = document.querySelector("#newgame");
let mess = document.querySelector(".mess");
let messCon = document.querySelector(".mess-con");


let turn0 = true;


let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {

       
        if (turn0) {

            box.innerText = "O";
            box.style.background="black";
            box.style.color="white";
            turn0 = false;

        } else {
            box.innerText = "X";
            box.style.background="white";
            box.style.color="black";
            turn0 = true;
        }
        box.disabled = true;
        checkWin();

    })
})

const resetGame=()=>{
    turn0 = true;
   enableGame()
   messCon.classList.add("hide")
}



const enableGame=()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        box.style.background="white";
        box.style.color="black";
        
    }
    
}

const disableGame=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

const showWinner = (winner) => {

    mess.innerText=`🥳Congratulations 🥳 Winner is ${winner}`;
    messCon.classList.remove("hide")
    disableGame()
}


const checkWin = () => {
    for (let pattern of winpattern) {
       
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[2]].innerText;
        let pos3val=boxes[pattern[1]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val)
           
            showWinner(pos1val)
        }
    }
}

//reset game
newgame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)