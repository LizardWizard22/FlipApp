var board = document.getElementById('board');
var tilesflipped = [];

function fliptile(event){
    'use strict';
    var tiles = Array.from(board.querySelectorAll('section'));
  if(event.target !== event.currentTarget) {
     event.target.parentNode.classList.add('flipped');
     tilesflipped.push(tiles.indexOf(event.target.parentNode));
     console.log(tilesflipped);
   }
}

document.addEventListener('DOMContentLoaded',function () {
    'use strict';
board.addEventListener('touchend', fliptile)
});