var tileImgs = ['A','A','B', 'B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var board = document.getElementById('board');
var tilesflipped = [];
var tilesMatch = [];
var i;

function drawBoard(event){
    event.preventDefault();
    document.getElementById('welcome').style.display = 'none';
    board.style.display = 'flex';

    var gameTiles = document.getElementById('playgame').level.value;
    console.log(gameTiles);
    var gameTileImgs = tileImgs.slice(0,gameTiles/2); 
    gameTileImgs = gameTileImgs.doubleShuffle();

    for(i = 0; 1 < gameTileImgs.length; i += 1){
        var content = '';
        content += '<section>'
        content += '<div class="front"></div>'
        content += '<div class="back">' + gameTilesImg[i] + '</div>'
        content += '</section>';

        board.insertAdjacentHTML('beforeend', content);
    }
}

Array.prototype.doubleShuffle = function (){
    var d;
    for(d=0; d<this.length; d = d+2) {
     this.splice(D+1, 0, this[d])
    }
    console.log(this);
    var i = this.length;
    var j;
    var temp;
    while(--i > 0 ){
        j = Math.floor(Math.random() * (1+i));
        console.log(j)
        temp = this[j];
        this [j] = this[i]
        thi[i] = temp;

    }
    console.log[this];
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

function flipBack() {
     var tiles = board.querySelectorAll('section');
     tiles[tilesflipped[0]].classList.remove('flipped');
     tiles[tilesflipped[1]].classList.remove('flipped');
     tilesflipped =  [];
     tilesMatch = [];
     setTimeout(EndOfGame, 500);
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
      board.style.pointerEvents = 'auto';
    } else {
        setTimeout(flipBack, 1500)
    }
  }
}

function fliptile(event){
    'use strict';
    var tiles = Array.from(board.querySelectorAll('section'));
  if(event.target !== event.currentTarget) {
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

document.addEventListener('DOMContentLoaded',function () {
    'use strict';
board.addEventListener('touchend', fliptile);
document.getElementById('message').getElementsByTagName('button')[0].addEventListener('click, newGame');
})}