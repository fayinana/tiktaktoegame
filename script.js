const resetEvent = document.getElementById('reset');
let boxs = document.querySelectorAll('.box');
let turn = document.getElementById('turn-div');
const backgroundTurn = document.getElementById('background');
const win = document.getElementById('win');
const winText = document.getElementById('win-text');
const playAgain = document.getElementById('play-again');
const changeLightButton = document.getElementById('change-light');
const turnTwo = document.getElementById('turnY');
const turnOne = document.getElementById('turnX');



// =====================================================
//        tic tac toe
// =====================================================


const textType = { 
    text1 :'x',
    text2 :'o'
};


// the winning code
winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function highlight(combinnation){
    combinnation.forEach(
        index => {
            boxs[index].classList.add('highlight');
        });
    }
    
    function inactivatboxs(){
        boxs.forEach(box => {
            box.classList.add('inactive')
        });
    }
    
    resetEvent.addEventListener('click',()=>{
        location.reload(); 
    });
    
    let Count = 0;
// the playet turn higlight 
let playerTurn = textType.text1;
backgroundTurn.style.left = '0px';
turnOne.innerHTML = textType.text1;
turnOne.classList.add('odd');
turnTwo.innerHTML = textType.text2;
turnTwo.classList.add('even');



function chackForWiner(){
    winningCombinations.forEach(combinnation => {
        let chack = combinnation.every(index =>
            boxs[index].innerHTML == playerTurn);
            if(chack){
                highlight(combinnation);
                inactivatboxs();
                win.classList.add('win');
                playAgain.innerHTML = 'play again'
                playAgain.classList.add('play-again');
                winText.innerHTML = `${playerTurn} win`;
                winText.classList.add('win-first-letter') ;
            }
        } );
    } 
    
    playAgain.addEventListener('click', ()=>{
        location.reload();
    })
    
    
    
    
    boxs.forEach(box => {
        box.addEventListener('click',()=>{
            Count++;
            if(box.innerHTML !== "")
            return;
        box.innerHTML = playerTurn;
        if(Count % 2 == 0 & !chackForWiner()){
            box.classList.add('even');
        }
        else{
            box.classList.add('odd');
            
        }
        playerTurn = playerTurn == textType.text1 ? textType.text2: textType.text1;
        if(playerTurn == textType.text1){
            backgroundTurn.style.left = '0px';
            
        }
        if (playerTurn == textType.text2){
            backgroundTurn.style.left = '75px';
        }
        chackForWiner();
        if(Count == 9){
            inactivatboxs();
                win.classList.add('win');
                playAgain.innerHTML = 'play again'
                playAgain.classList.add('play-again');
                winText.innerHTML = `${playerTurn} win`;
                winText.innerHTML = 'draw';
                
                
            }
    });
}); 






// light and dark mode

changeLightButton.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    
    // Update button appearance based on mode
    if (isDarkModeEnabled) {
        changeLightButton.style.background = 'var(--clr-light)';
    changeLightButton.style.float = 'right';


  } else {
    changeLightButton.style.background = 'var(--clr-blue)';
    changeLightButton.style.float = 'left'

  }
});

// Retrieve user preference from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
        body.classList.add('dark-mode');
        changeLightButton.style.background = 'var(--clr-light)';
    } else {
        body.classList.remove('dark-mode');
    changeLightButton.style.background = 'var(--clr-blue)';
}
});





















