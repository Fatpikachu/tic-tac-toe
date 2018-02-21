$(document).ready(function(){
var board = [[0, 0 , 0],
             [0, 0 , 0],
             [0, 0 , 0]]
var player1 = true;
var numMoves = 0;
  $("td").click(function(){
    if(player1){
      if(!$(this).text()){
        $(this).html('X');
        numMoves++
        addToBoard($(this), player1)
        checkWin('X')
        player1 = !player1;
      } 
    } else {
      if(!$(this).text()){
        $(this).html('O');
        numMoves++
        addToBoard($(this), player1);
        checkWin('O')
        player1 = !player1;
      } 
    }
  });

  $("button").click(function(){
    resetGame();
  })

var resetGame = () =>{
  player1 = true;
    numMoves = 0;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        board[i][j] = 0;
      }
    }
    $("td").html('') 
}

var addToBoard = (position, player1) => {
  var mark = '';
  if(player1){
    mark = 'X';
  } else {
    mark = 'O'
  }
  if(position.attr('id') === 'A1'){
    board[0][0] = mark
  } else if(position.attr('id') === 'A2'){
    board[0][1] = mark
  } else if(position.attr('id') === 'A3'){
    board[0][2] = mark
  } else if(position.attr('id') === 'B1'){
    board[1][0] = mark
  } else if(position.attr('id') === 'B2'){
    board[1][1] = mark
  } else if(position.attr('id') === 'B3'){
    board[1][2] = mark
  } else if(position.attr('id') === 'C1'){
    board[2][0] = mark
  } else if(position.attr('id') === 'C2'){
    board[2][1] = mark
  } else if(position.attr('id') === 'C3'){
    board[2][2] = mark
  }
}

var checkWin = (val) => {
  let count = {
    col:{0: 0,
         1: 0,
         2: 0},
    row:{0: 0,
         1: 0,
         2: 0},     
    rDiagnol: 0,
    lDiagnol: 0
  }
  for(let rows = 0; rows < 3; rows++){
    for(let cols = 0; cols < 3; cols++){
      if(board[rows][cols] === val){
        count['col'][cols]++;
        count['row'][rows]++;
        if(rows === 1 && cols === 1){
        count.rDiagnol++;
        count.lDiagnol++;
        } else if(rows - cols === 0){
          count.rDiagnol++;
        } else if(rows - cols === 2 || rows - cols === -2){
        count.lDiagnol++;
        }
      }
    }
  }
  for(var item in count){
    if(typeof count[item] === 'object'){
      for(var prop in count[item]){
        if(count[item][prop] >= 3){
          alert('player ' + val + ' wins!');
          //resetGame();
          return;
        }
      }
    }
  }
  if(count.rDiagnol >= 3 || count.lDiagnol >= 3){
    alert('player ' + val + ' wins!');
    //resetGame();
    return;
  }
  if(numMoves === 9){
    alert('Draw!')
  }
}
});

