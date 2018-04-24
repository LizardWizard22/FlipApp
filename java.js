var board = document.getElementById('board');
var tilesflipped = [];
var tilesMatch = [];

function twoTiles(tiles){
  if(tilesflipped.length >= 2 ){
      board.style.pointerEvents = 'none';
      if (tilesMatch[0] === tilesMatch[1]){
      tiles[tilesflipped[0]].classList.add('reward')
      tiles[tilesflipped[1]].classList.add('reward')
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
board.addEventListener('touchend', fliptile)
});