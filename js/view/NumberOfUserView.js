export default class NumberOfUserView {
  firstNumber = document.querySelector('.number-item-container button:nth-child(1)');
  secondNumber = document.querySelector('.number-item-container button:nth-child(2)');
  thirdNumber = document.querySelector('.number-item-container button:nth-child(3)');
  forthNumber = document.querySelector('.number-item-container button:nth-child(4)');

  constructor() {}

  makeEventListener(target, event, handler) {
    target.addEventListener(event, handler);
  }

  init() {
    this.makeEventListener(this.firstNumber, 'click', this.conditionFunc);
    this.makeEventListener(this.secondNumber, 'click', this.conditionFunc);
    this.makeEventListener(this.thirdNumber, 'click', this.conditionFunc);
    this.makeEventListener(this.forthNumber, 'click', this.conditionFunc);
  }

  conditionFunc(event) {
    if (event.target.className === 'number-item') event.target.className = 'number-item-active';
    else event.target.className = 'number-item';
  }
}
