let $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
let playerOne = {
    player:1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    changeHp: changeHp,
    renderHP: renderHP,
    elHP: elHP,
    attack: () => {}
};
let playerTwo = {
    player:2,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana'],
    changeHp: changeHp,
    renderHP: renderHP,
    elHP: elHP,
    attack: () => {}
};

const createElement = (tag, className) =>{
    const $tag = document.createElement(tag);
    if(className){
         $tag.classList.add(className);
    }
    return $tag;
};

const createPlayer = (info) => {
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

function changeHp (damage) {
    this.hp -= damage
    if(this.hp < 0){
         this.hp = 0;
    };
    return this.hp;
};
function elHP () {
    const $playerLife = document.querySelector('.player'+ this.player +' .life');
    return $playerLife;
}
function renderHP(){
    return this.elHP().style.width = this.hp + '%';   
}

function getRandom (num) {
    return Math.ceil(Math.random() * num);
}
$randomButton.addEventListener('click',()=>{
    playerOne.changeHp(getRandom(20));
    playerTwo.changeHp(getRandom(20));
  
    playerOne.renderHP();
    playerTwo.renderHP();

    if(playerOne.hp === 0 || playerTwo === 0){
        $randomButton.disabled = true;
    }
    if(playerOne.hp === 0 && playerOne.hp < playerTwo.hp){
        $arena.appendChild(playerWins(playerTwo.name));
    } else if(playerTwo.hp === 0 && playerTwo.hp < playerOne.hp){
        $arena.appendChild(playerWins(playerOne.name));
    }else if(playerOne.hp === 0 && playerTwo.hp === 0){
        $arena.appendChild(playerWins())
    }
});

const playerWins = (name) =>{
    const $winTitle = createElement('div', 'loseTitle');
    if(name){
        $winTitle.innerText = name + ' Win';
    }else{
        $winTitle.innerText = 'drow';
    }
    
    return $winTitle;
}

$arena.appendChild(createPlayer(playerOne));
$arena.appendChild(createPlayer(playerTwo));

