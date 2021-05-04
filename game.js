import {playerOne,playerTwo} from './hpPlayer.js';
import {generateLogs,showResult} from './logs.js';
import getRandom, {enemyAttack,playerAttack} from './attackFunc.js';
let $arena = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');

export default class Game {
    createArena = () =>  {
        const arenas = ['arena1','arena2','arena3','arena4','arena5']
        $arena.classList.add(arenas[(getRandom(5)-1)])
    };
    createElement (tag, className) {
        const $tag = document.createElement(tag);
        if(className){
             $tag.classList.add(className);
        }
        return $tag;
    };
    createPlayer (info) {
        let $playerBar =this.createElement('div', 'player' + info.player);
        let $progressBar = this.createElement('div','progressbar');
        let $character = this.createElement('div','character');
        let $life = this.createElement('div','life');
        let $name = this.createElement('div','name');
        let $image = this.createElement('img');
        
    
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
    createLoadButton (){
        const restartGame = this.createElement('div', 'reloadWrap');
        const buttonRes = this.createElement('button', 'button');
    
        buttonRes.innerText = 'Restart'
        buttonRes.addEventListener('click',()=>{
            window.location.pathname = "./index.html";
        })
    
        restartGame.appendChild(buttonRes);
        $arena.appendChild(restartGame);
    };
    start(){
    this.createArena();
    generateLogs('start',playerOne,playerTwo);
    $arena.appendChild(this.createPlayer(playerOne));
    $arena.appendChild(this.createPlayer(playerTwo));
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
    }
};