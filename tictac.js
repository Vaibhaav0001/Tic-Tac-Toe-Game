let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn"); 
let newGameBtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); 

const showWinner=(winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");

};


const resetGame =()=> {
    turnO=true;
    for(let i of boxes) {
        i.disabled=false;
        i.innerText="";
        }
    msgcontainer.classList.add("hide");
};
const finalWinner=() =>{
    for(let pattern of winPattern){
        let a1=boxes[pattern[0]].innerText;
        let a2=boxes[pattern[1]].innerText;
        let a3=boxes[pattern[2]].innerText;

        if(a1 != "" && a2 != "" && a3 != ""){
            if(a1===a2 && a2===a3){
                console.log("Winner",a1);
                alert=`Winner is ${a1}`;
                showWinner(a1);
                for(let i of boxes) {
                    i.disabled=true;
                }

                break;
            }

        }



    }
}

let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText="0";
            turnO=false;
        } else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        finalWinner();
        
    });

});

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
