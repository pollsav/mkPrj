let $arena = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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

const fightTime = function(){
    const time = new Date();
    return time.getHours() +':'+time.getMinutes()+':'+ time.getSeconds();
};  

const start = logs.start.replace('time', fightTime()).replace('player1',playerOne.name).replace('player2',playerTwo.name);
$chat.insertAdjacentHTML('afterbegin', start);


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
function playerAttack () {
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
    };
    return attack;
};
function endLogs(win,lose){
        const textEnd = logs['end'][Math.ceil(Math.random() * 2)].replace('[playerWins]',win.name).replace('[playerLose]', lose.name);
        const elem = `<p>${fightTime()} ${textEnd}</p>`;
        $chat.insertAdjacentHTML('afterbegin', elem);
};
function showResult(){
    if(playerOne.hp === 0 || playerTwo.hp === 0){
        const btnOff = document.querySelector('.button');
        console.log(btnOff)
        btnOff.disabled = true;
        createLoadButton();
    }

    if(playerOne.hp === 0 && playerOne.hp < playerTwo.hp){
        $arena.appendChild(playerWins(playerTwo.name));
        endLogs(playerTwo,playerOne);
    } else if(playerTwo.hp === 0 && playerTwo.hp < playerOne.hp){
        $arena.appendChild(playerWins(playerOne.name));
        endLogs(playerOne,playerTwo);
    }else if(playerOne.hp === 0 && playerTwo.hp === 0){
        $arena.appendChild(playerWins());
        const drawLog = `<p>${logs.draw}</p>`
        $chat.insertAdjacentHTML('afterbegin',drawLog);
    }
};
function generateLogs(type,player1,player2,value){
    const randomLogs = function () {
            return Math.ceil(Math.random() * 17);
    };
    let hp = `${-value}[${player1.hp}/100]`
    switch(type){
        case 'hit':
            const text = logs[type][randomLogs()].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
             const el = `<p>${fightTime()} ${text}${hp}</p>`;
             $chat.insertAdjacentHTML('afterbegin', el);
             break;
        case 'defence':
            const text2 = logs[type][Math.ceil(Math.random() * 7)].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
            const el2 = `<p>${fightTime()} ${text2}</p>`;
            $chat.insertAdjacentHTML('afterbegin', el2);
    }


};
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

