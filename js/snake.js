game.snake = {
  game: game,
  cells: [],
  create() {
    let startCells = [
      {row: 7, col: 7},
      {row: 8, col: 7}
    ];

    for (let startCell of startCells) {
      this.cells.push(this.game.board.getCell(startCell.row, startCell.col));
    }
  },
  
  render() {
    this.cells.forEach(cell => {
      this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y)
    });
  },

  move() {
    // получить следующую ячейку
    let cell = this.getNextCell();
    // если такая ячейка есть
    this.cells.unshift(cell);
    // this.cells[0] - голова змеи
      // добавить новую ячейку в snake.cells
      this.cells.pop();
      // удалить последнюю ячейку из snake.cells


  },

  getNextCell() {
    let head = this.cells[0];
    let row = head.row - 1;
    let col = head.col;


    return this.game.board.getCell(row, col);
  }
};