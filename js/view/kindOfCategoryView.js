export default class kindOfCategoryView {
  meal = document.querySelector('.kind-of-item-container div:nth-child(1) label');
  cafe = document.querySelector('.kind-of-item-container div:nth-child(2) label');

  constructor() {
    this.meal.addEventListener('click', this.checkKindOf);
    this.cafe.addEventListener('click', this.checkKindOf);
  }

  checkKindOf(event) {
    const category = document.querySelector('.option-category');

    if (event.target.innerText === '식사') category.classList.remove('hidden');
    if (event.target.innerText === '카페') category.classList.add('hidden');
  }
}
