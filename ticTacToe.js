const Board = function() {
  this.board = [
    '', '' ,'',
    '', '', '',
    '', '', '',
  ];
  this.totalMoves = 0;
};

Board.prototype = {
  render: function() {
    console.log('', this.board[0], '|', this.board[1], '|', this.board[2]);
    console.log('--------');
    console.log('', this.board[3], '|', this.board[4], '|', this.board[5]);
    console.log('---------');
    console.log('', this.board[6], '|', this.board[7], '|', this.board[8]);
  },
  getMove: function(symbol) {
    let move = prompt('Player, enter a location to move (1-9): ');
    if (this.board[move - 1] === '') {
      this.totalMoves++;
      return this.board[move - 1] = symbol;
    } else {
      this.getMove(symbol);
    }
  },
};

let newBoard = new Board();
newBoard.render();

newBoard.getMove();