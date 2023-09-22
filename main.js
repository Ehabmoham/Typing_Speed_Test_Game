// Select Main Elements
let lvl = document.querySelector('.lvl');
let durtion = document.querySelectorAll('.duration');
let choosenWord = document.querySelector('.choosen-word');
let startGame = document.querySelector('.start-game');
let input = document.querySelector('.input');
let showWords = document.querySelector('.show-words');
let rightTry = document.querySelector('.right-try');
let allWords = document.querySelector('.all-words');
// let gameOver = document.querySelector('.game-over');


// All Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

// Levels
const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2
};

// Deffault Settings
lvl.textContent = '[ Normal ]';
durtion[0].textContent = `[ ${lvls.Normal} ]`;
durtion[1].innerHTML = lvls.Normal;

rightTry.textContent = '00';
allWords.textContent = words.length;

startGame.onclick = function(){
    startGame.remove();
    input.focus();
   
    setRandowmWod();
};

function setRandowmWod(){

    let randomNum = Math.floor(Math.random() * words.length);
    let randomWord = words[randomNum];
    words.splice(randomNum , 1)
    showWords.innerHTML = '';

    choosenWord.textContent = randomWord;
    words.forEach((word)=>{

        let span = document.createElement('span');
        span.textContent = word;
        showWords.appendChild(span);

    })

    countDwon();
}

function countDwon(){
    
    let counter = setInterval(() => {
    durtion[1].innerHTML -= 1;
    if(durtion[1].innerHTML === '0'){
        clearInterval(counter);

        if(input.value.toLowerCase() === choosenWord.innerHTML.toLowerCase()){

            input.value = '';
            choosenWord.innerHTML = '';
            input.focus();

             if(Number(rightTry.textContent) < 9){

                    rightTry.textContent = '0' + (Number(rightTry.textContent) + 1);

                }else{
                    rightTry.textContent = Number(rightTry.textContent) + 1;
                }

            if(words.length > 0){
                setRandowmWod();
                durtion[1].innerHTML = lvls.Normal;

            }else{
                let finish = document.createElement('p');
                finish.className = 'finish';
                finish.appendChild(document.createTextNode('Congratz You Finish The Test'));
                showWords.appendChild(finish)
            }
        }else{

            
             let gameOver = document.createElement('div');
                gameOver.className = 'model-box game-over';
                gameOver.appendChild(document.createTextNode('game over'));
                document.querySelector('.controls').after(gameOver)
        }

        };
    }, 1000);
          
}