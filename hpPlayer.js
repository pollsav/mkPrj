import getRandom from './attackFunc.js'


let players = [];
const getPlayers = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players');
await getPlayers.then(response => {
    return response.json();
}).then(data => players = data);

const p1 = JSON.parse(localStorage.getItem('player1'));;
const p2 = players[getRandom(players.length)-1];


class Player {
    constructor(props){
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img ;  
        this.player = props.player;
    };
    elHP () {
        const $playerLife = document.querySelector('.player'+ this.player +' .life');
        return $playerLife;
    };
    
    changeHp (damage) {
        this.hp -= damage
        if(this.hp <= 0){
             this.hp = 0;
        };  
    };
    
    renderHP(){
        return this.elHP().style.width = this.hp + '%';   
    };
}

export let playerOne = new Player({...p1,player:1,});
export let playerTwo = new Player({...p2,player:2,});
