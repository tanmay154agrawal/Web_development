console.log("Welcome to my Tic Tac Toe")
const music=new Audio("music.mp3")
const gameover=new Audio("gameover.mp3")
const played = new Audio("ting.mp3")
let isgameover=false

let turn = "X"
const changeTurn= () => {
    return turn === 'X'?'0':'X'
}

// Check for Win
let win = () => {
    boxtext=document.getElementsByClassName("boxtext")
    wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.getElementsByClassName("info")[0].innerText= boxtext[e[0]].innerText + " Wins"
            isgameover=true
            gameover.play()
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "156px"
        }
    })

}

// Game Logic
let boxes= document.getElementsByClassName("box")
// console.log(boxes)
Array.from(boxes).forEach(element=> {
    let boxtext = element.querySelector(".boxtext")
    // console.log(boxtext)
    element.addEventListener('click',()=>{
        if (boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn()
            played.play()
            win()
            console.log(document.getElementsByClassName("info"))
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn
            }
        }
        })
    })

// Reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll("boxtext")
    Array.from(boxtext).forEach(e=>{
        e.innerText=""
    })
    turn="X"
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn
    isgameover=false
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "0px"

})