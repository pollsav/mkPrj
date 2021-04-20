import {createLoadButton,createElement} from './main.js';
import {playerOne,playerTwo} from './hpPlayer.js'

export function showResult(){
    if(playerOne.hp === 0 || playerTwo.hp === 0){
        const btnOff = document.querySelector('.button');
        console.log(btnOff)
        btnOff.disabled = true;
        createLoadButton();
    }

    if(playerOne.hp === 0 && playerOne.hp < playerTwo.hp){
        $arena.appendChild(playerWins(playerTwo.name));
        generateLogs('end',playerTwo,playerOne);
    } else if(playerTwo.hp === 0 && playerTwo.hp < playerOne.hp){
        $arena.appendChild(playerWins(playerOne.name));
        generateLogs('end',playerOne,playerTwo);
    }else if(playerOne.hp === 0 && playerTwo.hp === 0){
        $arena.appendChild(playerWins());
        generateLogs('draw',playerOne,playerTwo);
    }
};

export const playerWins = (name) =>{
    const $winTitle = createElement('div', 'loseTitle');
    if(name){
        $winTitle.innerText = name + ' Win';
    }else{
        $winTitle.innerText = 'drow';
    }
    
    return $winTitle;
}

export const fightTime = function(){
    const time = new Date();
    return time.getHours() +':'+time.getMinutes()+':'+ time.getSeconds();
};  

export function generateLogs(type,player1,player2,value){
    const randomLogs = function () {
            return Math.ceil(Math.random() * 17);
    };
    let hp = `${-value}[${player1.hp}/100]`
    switch(type){
        case 'start': 
            const start = logs.start.replace('time', fightTime()).replace('player1',playerOne.name).replace('player2',playerTwo.name);
            return $chat.insertAdjacentHTML('afterbegin', start);
        case 'hit':
            const text = logs[type][randomLogs()].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
             const el = `<p>${fightTime()} ${text}${hp}</p>`;
             return  $chat.insertAdjacentHTML('afterbegin', el);
        case 'defence':
            const text2 = logs[type][Math.ceil(Math.random() * 7)].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
            const el2 = `<p>${fightTime()} ${text2}</p>`;
            return $chat.insertAdjacentHTML('afterbegin', el2);
        case 'end':
            const textEnd = logs['end'][Math.ceil(Math.random() * 2)].replace('[playerWins]',player1.name).replace('[playerLose]', player2.name);
            const elem = `<p>${fightTime()} ${textEnd}</p>`;
            return $chat.insertAdjacentHTML('afterbegin', elem);    
        case 'draw':
            const drawLog = `<p>${logs.draw}</p>`
            return $chat.insertAdjacentHTML('afterbegin',drawLog);
      
    }
};
const $chat = document.querySelector('.chat');
let $arena = document.querySelector('.arenas');
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