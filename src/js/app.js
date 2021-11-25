import goblinImage from '../img/goblin.png';

export class Field {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;
      this.cells = [...this.element.querySelectorAll('.cell')];
      this.activeCell = null;
      this.goblin = null;
    }
    this.appearanceOfAGoblin();
    setInterval(this.goblinMovement.bind(this), 2000);
  }

  getRandomCell() {
    return this.cells[Math.floor(Math.random() * this.cells.length)];
  }

  appearanceOfAGoblin() {
    this.activeCell = this.getRandomCell();
    this.activeCell.style.position = 'relative';
    this.goblin = document.createElement('img');
    this.goblin.src = goblinImage;
    this.goblin.alt = 'Картинка гоблина';
    this.goblin.id = 'goblin';
    this.goblin.style = 'display: block; margin: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)';
    this.activeCell.appendChild(this.goblin);
  }

  goblinMovement() {
    let randomCell = this.getRandomCell();
    while (this.activeCell === this.getRandomCell()) {
      randomCell = this.getRandomCell();
    }
    this.activeCell = randomCell;
    this.activeCell.style.position = 'relative';
    document.getElementById('goblin').remove();
    this.activeCell.appendChild(this.goblin);
    console.log('переместилось');
  }
}
export default new Field(document.body);
