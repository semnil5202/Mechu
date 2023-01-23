import kindOfCategoryView from '../view/kindOfCategoryView.js';
import NumberOfUserView from '../view/NumberOfUserView.js';
import AppService from '../service/appService.js';

export default class AppController {
  confirmButton;
  numberOfUserView;
  kindOfCategoryView;
  appService;

  constructor() {
    this.confirmButton = document
      .querySelector('.confirm-form button')
      .addEventListener('click', (event) => this.submitForm(event));
    this.numberOfUserView = new NumberOfUserView(); // DI 필요
    this.kindOfCategoryView = new kindOfCategoryView();
    this.appService = new AppService();
  }

  submitForm(event) {
    event.preventDefault();

    const dataSet = {
      number: document.querySelector('.number-item input:checked + label'),
      kindOf: document.querySelector('.kind-of-item input:checked + label'),
      category: document.querySelector('.category-item input:checked + label'),
      notEatList: document.querySelector('.not-eat-item-container'),
      notEats: new Map(),
    };

    for (let i = 0; i < dataSet.notEatList.childElementCount; i++) {
      this.recordNotEatList(dataSet, i);
    }

    this.appService.init(dataSet);
  }

  recordNotEatList(dataSet, i) {
    dataSet.notEats.set(
      `${i + 1}`,
      document.querySelector(`.not-eat-item-container div:nth-child(${i + 1}) input`).value,
    );
  }
}
