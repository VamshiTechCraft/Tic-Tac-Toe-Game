let Boxes = document.querySelectorAll('.box');
let msgbox = document.querySelector('.msg-box');
let msgInfo = document.querySelector('#msg-info');
let resetBtn = document.getElementById('reset-btn');
let newBtn = document.querySelector('#new-btn');
let playerXTurn = true;
let btnCounts = 0;
function resetGame() {
  playerXTurn = true;
  enableBoxes();
  msgbox.classList.add('hide');
}
Boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(playerXTurn == true){
      box.innerText = 'O';
      playerXTurn = false;
      console.log(playerXTurn);
    }
    else{
      box.innerText = 'X';
      playerXTurn = true;
    }
    box.disabled = true;
    checkWinner();
    btnCounts++;
    console.log(btnCounts);
    if(btnCounts == 9){
      msgInfo.innerHTML = 'Drawww'
      msgbox.classList.remove('hide');
    }
  })
  
})
//Patterns
let winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,5,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]
function enableBoxes() {
  for(let Box of Boxes){
    Box.disabled = false;
    Box.innerHTML = '';
  }
}
function disableBoxes() {
  for(let Box of Boxes){
    Box.classList.remove('hide');
    Box.disabled = true;
    console.log('disabledddd')
  }
}
const showWinner = (pos1Val)=>{
  msgbox.classList.remove('hide');
  msgInfo.innerHTML = `Winner is '${pos1Val}'`;
}
const checkWinner = ()=>{
  for( let pattern of winPatterns){
    let pos1Val = Boxes[pattern[0]].innerHTML;
    let pos2Val = Boxes[pattern[1]].innerHTML;
    let pos3Val = Boxes[pattern[2]].innerHTML;
    console.log(pos1Val);
   if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
      if(pos1Val == pos2Val && pos2Val == pos3Val){
        showWinner(pos1Val);
        console.log('matchedd')
        disableBoxes();
      }
    }
  }
}
newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame)




