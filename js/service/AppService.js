import Category from '../model/Category.js';
import RecommendMenu from '../model/RecommendMenu.js';

export default class AppService {
  category;
  recommendMenus = [];

  init({ number, kindOf, category, notEats }) {
    this.category = new Category(kindOf.innerText, category.innerText);
    for (let i = 0; i < Number(number.innerText[0]); i++) {
      this.makeRecommendInstance(i, notEats);
    }
  }

  makeRecommendInstance(i, notEats) {
    this.recommendMenus.push(
      new RecommendMenu(
        this.category.getData(),
        notEats
          .get(`${i + 1}`)
          .split(',')
          .map((el) => el.trim()),
      ),
    );
  }

  decisionCategory() {}
}
