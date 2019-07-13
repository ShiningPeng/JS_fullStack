const Grid = require("./grid.js");
//负责整个游戏的调度
function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles;
}
GameManager.prototype = {
    setup: function () {
        this.grid = new Grid(this.size);
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles() {
        for (let tile = 0; tile < this.startTiles; tile++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles() {
        if (this.grid.cellAvailable()) {
            const value = Math.random() < 0.9 ? 2 : 4;
            //随机位置
            //x,y
            const cell = this.grid.randomAvailabelCell();
            const tile = {
                x:cell.x,
                y:cell.y,
                value:value
            }
            //将tile 信息插入到页面
            this.grid.insertTile(tile);
        }

    }
}

module.exports = GameManager;