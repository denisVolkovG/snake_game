game.snake = {
  game: game,
  cells: [],
  moving: false,
  direction: false,
  directions: {
    up: {
      row: -1,
      col: 0
    },

    down: {
      row: 1,
      col: 0
    },

    left: {
      row: 0,
      col: -1
    },

    right: {
      row: 0,
      col: 1
    }
  },

  create() {
    let startCells = [
      {row: 7, col: 7},
      {row: 8, col: 7}
    ];
    
    this.direction = this.directions.up;

    for (let startCell of startCells) {
      this.cells.push(this.game.board.getCell(startCell.row, startCell.col));
    }
  },

  render() {
    this.cells.forEach(cell => {
      this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y)
    });
  },

  start(keyCode) {
    
    switch(keyCode) {
      case 38: 
      case 87: 
        this.direction = this.directions.up;
        break;
      case 65:
      case 37:
        this.direction = this.directions.left;
        break;
      case 68:
      case 39:
        this.direction = this.directions.right;
        break;
      case 83:
      case 40:
        this.direction = this.directions.down;
        break;
    }

    this.moving = true;
  },

  move() {
    if (!this.moving) {
      return;
    }
    // получить следующую ячейку
    let cell = this.getNextCell();
    // если такая ячейка есть
    if (cell) {
      // добавить новую ячейку в snake.cells
      this.cells.unshift(cell);
      // удалить последнюю ячейку из snake.cells
      this.cells.pop();
    }
  },

  getNextCell() {
    // this.cells[0] - голова змеи
    let head = this.cells[0];

    let row = head.row + this.direction.row;
    let col = head.col + this.direction.col;

    return this.game.board.getCell(row, col);
  }
};