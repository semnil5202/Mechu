import Category from '../model/category.js';

export default class AppService {
  category;
  recommendMenu;

  init({ number, kindOf, category, notEats }) {
    this.category = new Category(kindOf.innerText, category.innerText);
    console.log(this.category.getData());
  }

  decisionCategory() {}
}
