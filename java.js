var tileImgs = ['A','B','C','D','E','F','G','H','I','J','K','L'];
var board = document.getElementById('board');
var tilesflipped = [];
var tilesMatch = [];
var i;

function drawBoard(event){
    event.preventDefault();
    document.getElementById('welcome').style.display = 'none'
    board.style.display = 'flex';
    var gameTiles = document.getElementById('playgame').level.value;
    console.log(gameTiles);
    var gameTileImgs = tileImgs.slice(0,gameTiles/2); 
    gameTileImgs = gameTileImgs.doubleShuffle();
    

    for(i = 0; i < gameTileImgs.length; i += 1){
        console.log(i);
        var content = '';
        content += '<section>'
        content += '<div class="front"></div>'
        content += '<div class="back">' + gameTileImgs[i] + '</div>'
        content += '</section>';

        board.insertAdjacentHTML('beforeend', content);
    }
    alert('er du her?')
}

Array.prototype.doubleShuffle = function (){
    var d;
    for(d=0; d<this.length; d = d+2) {
     this.splice(d+1, 0, this[d])
    }
    console.log(this);
    var i = this.length;
    var j;
    var temp;
    while(--i > 0 ){
        
        j = Math.floor(Math.random() * i + 1);
        console.log(j);
        temp = this[j];
        console.log(temp);
        this[j] = this[i]
        this[i] = temp;
    }

    return this;
}

function newGame(){
board.innerHTML = '';
board.style.display = 'none';
document.getElementById('welcome').style.display = 'flex';
document.getElementById('message').classList.remove('show');
}

function EndOfGame(){
    if(board.getElementsByTagName('section').length === board.getElementsByClassName('reward').length){
        document.getElementById('message').classList.add('show');
    }
}
function flipBack() {
     var tiles = board.querySelectorAll('section');
     tiles[tilesflipped[0]].classList.remove('flipped');
     tiles[tilesflipped[1]].classList.remove('flipped');
     tilesflipped =  [];
     tilesMatch = [];
     board.style.pointerEvents = 'auto';
}

function twoTiles(tiles){
  if(tilesflipped.length >= 2 ){
      board.style.pointerEvents = 'none';
      if (tilesMatch[0] === tilesMatch[1]){
      tiles[tilesflipped[0]].classList.add('reward');
      tiles[tilesflipped[1]].classList.add('reward');
      tilesflipped = [];
      tilesMatch = [];
      setTimeout(EndOfGame, 500);
      board.style.pointerEvents = 'auto';
    } else {
        setTimeout(flipBack, 1500)
    }
  }
}

function fliptile(event){
    'use strict';
    var tiles = Array.from(board.querySelectorAll('section'));
  if(event.target !== event.currentTarget && event.touches.length === 1) {
      if(!event.target.parentNode.classList.contains('flipped')){
     event.target.parentNode.classList.add('flipped');
     tilesflipped.push(tiles.indexOf(event.target.parentNode));
     console.log(tilesflipped);
     tilesMatch.push(event.target.nextElementSibling.innerHTML)
     console.log(tilesMatch)
     twoTiles(tiles);
      }
   }
}

board.addEventListener('touchstart', fliptile);
document.getElementById('message').getElementsByTagName('button')[0].addEventListener('click', newGame);
document.getElementById('playgame').addEventListener('submit', drawBoard);

