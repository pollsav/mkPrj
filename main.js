let playerOne = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    attack: () => {
        console.log(this.name + 'Fight')
    }
}
let playerTwo = {
    name: 'Skorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana'],
    attack: () => {
        console.log(this.name + 'Fight')
    }
}

const createPlayer = (player, info) => {
    let $arena = document.querySelector('.arenas');
    let $playerBar = document.createElement('div');
    let $progressBar = document.createElement('div');
    let $character = document.createElement('div');
    let $life = document.createElement('div');
    let $name = document.createElement('div');
    let $image = document.createElement('img');


    $arena.appendChild($playerBar)
    $playerBar.appendChild($progressBar);
    $playerBar.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($image); 

    $playerBar.classList.add(player);
    $progressBar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $life.style.width = info.hp + '%';
    $name.classList.add('name');
    $name.innerText = info.name;
    $image.src = info.img;
};
createPlayer('player1', playerOne);
createPlayer('player2', playerTwo);