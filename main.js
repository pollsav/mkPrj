import {playerOne,playerTwo,changeHp,renderHP} from './hpPlayer.js';
import {generateLogs,showResult} from './logs.js';
import {enemyAttack,playerAttack} from './attackFunc.js';
let $arena = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');

// function attack() {
//     console.log(this.name + ' ' + 'Fight')
// }
export function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if(className){
         $tag.classList.add(className);
    }
    return $tag;
};
function createPlayer (info) {
    let $playerBar = createElement('div', 'player' + info.player);
    let $progressBar = createElement('div','progressbar');
    let $character = createElement('div','character');
    let $life = createElement('div','life');
    let $name = createElement('div','name');
    let $image = createElement('img');
    

    $life.style.width = info.hp + '%';
    $name.innerText = info.name;
    $image.src = info.img;

    $playerBar.appendChild($progressBar);
    $playerBar.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($image); 
    


    return $playerBar;
};
export function createLoadButton (){
    const restartGame = createElement('div', 'reloadWrap');
    const buttonRes = createElement('button', 'button');

    buttonRes.innerText = 'Restart'
    buttonRes.addEventListener('click',()=>{
        window.location.reload()
    })

    restartGame.appendChild(buttonRes);
    $arena.appendChild(restartGame);
};
generateLogs('start',playerOne,playerTwo);
$arena.appendChild(createPlayer(playerOne));
$arena.appendChild(createPlayer(playerTwo));
$formFight.addEventListener('submit',function(e){
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();
    if(enemy.hit !== player.defence){
        playerOne.changeHp(enemy.value);
        playerOne.renderHP();
        generateLogs('hit',playerOne,playerTwo,enemy.value);
    }else{
        generateLogs('defence',playerOne,playerTwo);
    };
    if(player.hit !== enemy.defence){
         playerTwo.changeHp(player.value);
         playerTwo.renderHP();
        generateLogs('hit',playerTwo,playerOne,player.value);
    }else{
        generateLogs('defence',playerTwo,playerOne);
    };
    showResult();
});

