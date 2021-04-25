class Player {
    constructor(player,name,hp,img,weapon){
        this.player = player;
        this.name = name;
        this.hp = hp;
        this.img = img ;
        this.weapon = weapon;
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

export let playerOne = new Player(1,'Sub-Zero',100,'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',['Katana']);
export let playerTwo = new Player(2,'Skorpion',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['Katana']);
console.log(playerOne)