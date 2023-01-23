import { eventListener } from '../utils/handler.js';

export default class NumberOfUserView {
  numbers = new Map([
    ['firstNumber', document.querySelector('.number-item-container div:nth-child(1) label')],
    ['secondNumber', document.querySelector('.number-item-container div:nth-child(2) label')],
    ['thirdNumber', document.querySelector('.number-item-container div:nth-child(3) label')],
    ['forthNumber', document.querySelector('.number-item-container div:nth-child(4) label')],
  ]);

  constructor() {
    for (const value of this.numbers.values()) {
      eventListener(value, 'click', this.checkNumber);
    }
  }

  checkNumber(event) {
    const condition = {
      '1명': 1,
      '2명': 2,
      '3명': 3,
      '4명': 4,
    };
  }
}
