import { eventListener } from '../utils/handler.js';

export default class NumberOfUserView {
  numbers = new Map([
    ['firstNumber', document.querySelector('.number-item-container div:nth-child(1)')],
    ['secondNumber', document.querySelector('.number-item-container div:nth-child(2)')],
    ['thirdNumber', document.querySelector('.number-item-container div:nth-child(3)')],
    ['forthNumber', document.querySelector('.number-item-container div:nth-child(4)')],
  ]);

  init() {
    for (const value of this.numbers.values()) {
      eventListener(value, 'click', this.conditionFunc);
    }
  }

  conditionFunc(event) {
    console.dir(event.target.checked); //
  }
}
