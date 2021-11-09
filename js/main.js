const rock = document.getElementById('rock').addEventListener('click',play)
const paper = document.getElementById('paper').addEventListener('click',play)
const scissor = document.getElementById('scissor').addEventListener('click',play)
const restart = document.getElementById('restart').addEventListener('click',reset)
const pl_score = document.getElementById('pl')
const cpu_score = document.getElementById('cpu')
const tie = document.getElementById('ti')
const result = document.getElementById('res')
const cmt = document.getElementById('cmt')
const pl_choice = document.getElementById('player-choice')
const cp_choice = document.getElementById('cpu-choice')

const choices = document.querySelectorAll('.choices')
const pl = document.getElementById('player-choice1')
const cp = document.getElementById('cpu-choice1')


var scoreboard ={player :0 ,
    tie:0,
    cpu:0

}


//  Function
function play(e){
    const player = (e.target.id);
    const cpu = cpu_choice();
    const winner = choosewinner(player,cpu);
    chng(player);
    chngcpu(cpu);
    const win = winner.split(" ")
    res(win[0])
    score()
    rest(win[1],win[0])
}

function reset(){
    scoreboard.player=0;
    scoreboard.tie=0;
    scoreboard.cpu=0;
    score();
    result.innerHTML = 'Make Selection';
    cmt.innerHTML='To Start Game'
    if (screen.width > 520){result.style.fontSize = '34px';}
    pl_choice.src = 'img/player.png';
    pl.style.border = ' solid #AFE313';
    pl.style.boxShadow = 'inset 0 0 20px #AFE313, inset 0 0 30px #AFE313,0px 0px 40px #AFE313,0px 0px 50px #AFE313';
    pl.style.color = '#AFE313'
    cp_choice.src = 'img/cpu.png';
    cp.style.border = ' solid #D92121';
    cp.style.boxShadow = 'inset 0 0 20px #D92121, inset 0 0 30px #D92121,0px 0px 40px #D92121,0px 0px 50px #D92121'
    cp.style.color = '#D92121'

}


function rest(r,w){
    cmt.innerHTML = r
    if(w==='lose'){
        cmt.innerHTML = r + ' By'
    }
}

function score(){
    pl_score.innerHTML = scoreboard.player;
    cpu_score.innerHTML = scoreboard.cpu;
    tie.innerHTML = scoreboard.tie;
}

function chng(p){
    if (p==='paper'){
        pl_choice.src = 'img/paper.png';
        pl.style.color ='var(--paper)';
        pl.style.border = '2px solid var(--paper)';
        pl.style.boxShadow = 'inset 0 0 20px var(--paper), inset 0 0 30px var(--paper),0px 0px 40px var(--paper),0px 0px 50px var(--paper)';

    }else if(p==='scissor'){
        pl_choice.src = 'img/scissor.png';
        pl.style.color ='var(--scissor)';
        pl.style.border = '2px solid var(--scissor)';
        pl.style.boxShadow = 'inset 0 0 20px var(--scissor), inset 0 0 30px var(--scissor),0px 0px 40px var(--scissor),0px 0px 50px var(--scissor)';
    }else if(p==='rock'){
        pl_choice.src = 'img/rock.png';
        pl.style.color ='var(--rock)';
        pl.style.border = '2px solid var(--rock)';
        pl.style.boxShadow = 'inset 0 0 20px var(--rock), inset 0 0 30px var(--rock),0px 0px 40px var(--rock),0px 0px 50px var(--rock)';
    }
}

function chngcpu(c){
    if (c==='paper'){
        cp_choice.src = 'img/paper.png';
        cp.style.color ='var(--paper)';
        cp.style.border = '2px solid var(--paper)';
        cp.style.boxShadow = 'inset 0 0 20px var(--paper), inset 0 0 30px var(--paper),0px 0px 40px var(--paper),0px 0px 50px var(--paper)';
    }else if(c==='scissor'){
        cp_choice.src = 'img/scissor.png';
        cp.style.color ='var(--scissor)';
        cp.style.border = '2px solid var(--scissor)';
        cp.style.boxShadow = 'inset 0 0 20px var(--scissor), inset 0 0 30px var(--scissor),0px 0px 40px var(--scissor),0px 0px 50px var(--scissor)';
    }else if(c==='rock'){
        cp_choice.src = 'img/rock.png';
        cp.style.color ='var(--rock)';
        cp.style.border = '2px solid var(--rock)';
        cp.style.boxShadow = 'inset 0 0 20px var(--rock), inset 0 0 30px var(--rock),0px 0px 40px var(--rock),0px 0px 50px var(--rock)';
    }
}

function res(w){
    if(screen.width > 520){result.style.fontSize = '48px';}
    if(w==='win'){
        result.innerHTML = 'You Won'
        result.style.color = '#66FF66'
        result.style.textShadow = '1px 1px 2px #fff , 2px 2px 20px #66FF66';


    }else if(w==='lose'){
        result.innerHTML = 'You Lose'
        result.style.color = '#FF355E'
        result.style.textShadow = '1px 1px 2px #fff , 2px 2px 20px #FF355E';
    }else if(w==='draw'){
        result.innerHTML = 'Draw​​​';
        result.style.color = '#0066FF'
        result.style.textShadow = '1px 1px 1px #fff , 2px 2px 20px #0066FF, 2px 2px 30px #0066FF';

    }
}

function cpu_choice(){
    var a = Math.random()
    if (a<= 0.34){
        return 'rock'
    }else if(a<=0.67){
        return 'paper'
    }else{
        return 'scissor'
    }
}

function choosewinner(p,c){
    if(p===c){
        scoreboard.tie +=1;
        return 'draw Deflects'
    }else if (p==='rock'){
        if(c==='paper'){
            scoreboard.cpu +=1
            return 'lose Wraped By'
        }else if(c=='scissor'){
            scoreboard.player +=1
            return 'win Blunts'
        }
    }
    else if (p==='paper'){
        if(c==='scissor'){
            scoreboard.cpu +=1
            return 'lose Cut By'
        }else if(c=='rock'){
            scoreboard.player +=1
            return 'win Wraps'
        }
    }
    else if (p==='scissor'){
        if(c==='rock'){
            scoreboard.cpu +=1
            return 'lose Blunted By'
        }else if(c=='paper'){
            scoreboard.player +=1
            return 'win Cuts'
        }
     }
}