import kindOfCategoryView from '../view/kindOfCategoryView.js';
import NumberOfUserView from '../view/NumberOfUserView.js';
import { eventListener } from '../utils/handler.js';

export default class AppController {
  confirmButton;
  numberOfUserView;
  kindOfCategoryView;

  constructor() {
    this.confirmButton = document
      .querySelector('.confirm-button button')
      .addEventListener('click', this.submitForm);
    this.numberOfUserView = new NumberOfUserView(); // DI 필요
    this.kindOfCategoryView = new kindOfCategoryView();
  }

  submitForm(event) {
    const number = document.querySelector('.number-item input:checked + label');
    const kindOf = document.querySelector('.kind-of-item input:checked + label');
    const category = document.querySelector('.category-item input:checked + label');
    const notEatList = document.querySelector('.not-eat-item-container');
    const notEats = new Map();

    for (let i = 0; i < notEatList.childElementCount; i++) {
      notEats.set(
        `${i + 1}`,
        document.querySelector(`.not-eat-item-container div:nth-child(${i + 1}) input`).value,
      );
    }
  }
}
