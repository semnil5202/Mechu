import kindOfCategoryView from '../view/kindOfCategoryView.js';
import NumberOfUserView from '../view/NumberOfUserView.js';
import AppService from '../service/AppService.js';
import ResultFormView from '../view/ResultFormView.js';

export default class AppController {
  confirmButton;
  retryButton;
  numberOfUserView;
  kindOfCategoryView;
  appService;

  // TODO : DI 작업 필요, 생성시점 조절해서 각 init 함수 재검토
  constructor() {
    this.confirmButton = document
      .querySelector('.confirm-form button')
      .addEventListener('click', (event) => this.submitForm(event));
    this.retryButton = document
      .querySelector('.retry-form button:nth-child(1)')
      .addEventListener('click', (event) => this.retryForm(event));
    this.numberOfUserView = new NumberOfUserView();
    this.kindOfCategoryView = new kindOfCategoryView();
    this.resultFormView = new ResultFormView();
    this.appService = new AppService();
  }

  // TODO : dataSet View에서 처리 가능한지?
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

    const menus = this.appService.init(dataSet);
    this.resultFormView.init(Number(dataSet.number.innerText[0]), menus);
    this.resultFormView.showResultView();
  }

  recordNotEatList(dataSet, i) {
    dataSet.notEats.set(
      `${i + 1}`,
      document.querySelector(`.not-eat-item-container div:nth-child(${i + 1}) input`).value,
    );
  }

  retryForm(event) {
    event.preventDefault();

    const menus = this.appService.reRecommendMenu();
    this.resultFormView.reInitMenus(menus);
    this.resultFormView.showResultView();
  }
}
