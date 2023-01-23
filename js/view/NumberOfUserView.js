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
    const notEatItem = document.querySelector('.not-eat-item-container');
    const condition = {
      '1명': 1,
      '2명': 2,
      '3명': 3,
      '4명': 4,
    };

    notEatItem.innerHTML = `
    <div class="not-eat-item">
      <div class="not-eat-circle-mark"></div>
      <span>A : </span>
      <input placeholder=" ,로 구분지어 입력하세요. (ex: 김밥,우동)" />
    </div>`;

    for (let i = 1; i < condition[event.target.innerText]; i++) {
      let user = 'B';
      if (i === 2) user = 'C';
      if (i === 3) user = 'D';

      notEatItem.innerHTML += `
      <div class="not-eat-item">
        <div class="not-eat-circle-mark"></div>
        <span>${user} : </span>
        <input placeholder=" ,로 구분지어 입력하세요. (ex: 김밥,우동)" />
      </div>`;
    }
  }
}
