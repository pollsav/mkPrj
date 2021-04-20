export function elHP () {
    const $playerLife = document.querySelector('.player'+ this.player +' .life');
    return $playerLife;
};

export function changeHp (damage) {
    this.hp -= damage
    if(this.hp <= 0){
         this.hp = 0;
    };  
};

export function renderHP(){
    return this.elHP().style.width = this.hp + '%';   
};


export let playerOne = {
    player:1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    changeHp,
    renderHP,
    elHP,
    // attack,
}; 
export let playerTwo = {
    player:2,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana'],
    changeHp,
    renderHP,
    elHP,
    // attack,
};