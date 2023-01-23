export default class kindOfCategoryView {
  meal = document.querySelector('.kind-of-item-container div:nth-child(1) label');
  cafe = document.querySelector('.kind-of-item-container div:nth-child(2) label');
  category = document.querySelector('.option-category');

  constructor() {
    this.meal.addEventListener('click', () => this.displayCategory());
    this.cafe.addEventListener('click', () => this.hiddenCategory());
  }

  hiddenCategory() {
    this.category.classList.add('hidden');
  }

  displayCategory() {
    this.category.classList.remove('hidden');
  }
}
