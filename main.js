let $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')
let playerOne = {
    player:1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    attack: () => {
        console.log(this.name + 'Fight')
    }
}
let playerTwo = {
    player:2,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana'],
    attack: () => {
        console.log(this.name + 'Fight')
    }
}

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

const changeHp = (player) =>{
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= 20;
    $playerLife.style.width = player.hp + '%';

    if(player.hp < 0){
        $arena.appendChild(playerLose(player.name));
    }
};

$randomButton.addEventListener('click',()=>{
    changeHp(playerOne);
    changeHp(playerTwo);
});

const playerLose = (name) =>{
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

$arena.appendChild(createPlayer(playerOne));
$arena.appendChild(createPlayer(playerTwo));

