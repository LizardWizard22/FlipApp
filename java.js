var board = document.getElementById('board');
var tilesflipped = [];
var tilesMatch = [];

function twoTiles(){
  if(tilesflipped.length >= 2 ){
      board.style.pointerEvents = 'none';
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
     twoTiles();
      }
   }
}

document.addEventListener('DOMContentLoaded',function () {
    'use strict';
board.addEventListener('touchend', fliptile)
});