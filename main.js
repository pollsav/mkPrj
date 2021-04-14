let $arena = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

let playerOne = {
    player:1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    changeHp,
    renderHP,
    elHP,
    attack,
};
console.log(playerOne.changeHp)
let playerTwo = {
    player:2,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana'],
    changeHp,
    renderHP,
    elHP,
    attack,
};


function attack() {
    console.log(this.name + ' ' + 'Fight')
}
function createElement (tag, className) {
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
function elHP () {
    const $playerLife = document.querySelector('.player'+ this.player +' .life');
    return $playerLife;
};

function changeHp (damage) {
    this.hp -= damage
    if(this.hp <= 0){
         this.hp = 0;
    };  
};

function renderHP(){
    return this.elHP().style.width = this.hp + '%';   
};
const playerWins = (name) =>{
    const $winTitle = createElement('div', 'loseTitle');
    if(name){
        $winTitle.innerText = name + ' Win';
    }else{
        $winTitle.innerText = 'drow';
    }
    
    return $winTitle;
}
function getRandom (num) {
    return Math.ceil(Math.random() * num);
};
function createLoadButton (){
    const restartGame = createElement('div', 'reloadWrap');
    const buttonRes = createElement('button', 'button');

    buttonRes.innerText = 'Restart'
    buttonRes.addEventListener('click',()=>{
        window.location.reload()
    })

    restartGame.appendChild(buttonRes);
    $arena.appendChild(restartGame);
};
// $randomButton.addEventListener('click',()=>{
    // playerOne.changeHp(getRandom(20));
    // playerTwo.changeHp(getRandom(20));
  
    // playerOne.renderHP();
    // playerTwo.renderHP();

    // if(playerOne.hp === 0 || playerTwo === 0){
    //     $randomButton.disabled = true;
    //     createLoadButton();
    //     console.log(playerOne.hp);
    //     console.log(playerTwo.hp);
    // }
    // if(playerOne.hp === 0 && playerOne.hp < playerTwo.hp){
    //     $arena.appendChild(playerWins(playerTwo.name));
    // } else if(playerTwo.hp === 0 && playerTwo.hp < playerOne.hp){
    //     $arena.appendChild(playerWins(playerOne.name));
    // }else if(playerOne.hp === 0 && playerTwo.hp === 0){
    //     $arena.appendChild(playerWins())
    // }
// });



$arena.appendChild(createPlayer(playerOne));
$arena.appendChild(createPlayer(playerTwo));
function enemyAttack(){
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3)-1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}
$formFight.addEventListener('submit',function(e){
    e.preventDefault();
    const enemy = enemyAttack();
    const attack = {

    };
   
    for (let item of $formFight){
        if(item.checked && item.name === 'hit'){
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if(item.checked && item.name === 'defence'){
            attack.defence = item.value;
        }
        item.checked = false;
    }
    console.log(enemy)
    console.log(attack)

    if(enemy.hit != attack.defence){
        playerOne.changeHp(enemy.value);
       
    }
    if(attack.hit != enemy.defence){
         playerTwo.changeHp(attack.value);
    }
    


    playerOne.renderHP();
    playerTwo.renderHP();

    if(playerOne.hp === 0 || playerTwo.hp === 0){
        $formFight.disabled = true;
        createLoadButton();
    }

    if(playerOne.hp === 0 && playerOne.hp < playerTwo.hp){
        $arena.appendChild(playerWins(playerTwo.name));
    } else if(playerTwo.hp === 0 && playerTwo.hp < playerOne.hp){
        $arena.appendChild(playerWins(playerOne.name));
    }else if(playerOne.hp === 0 && playerTwo.hp === 0){
        $arena.appendChild(playerWins())
    }
});

