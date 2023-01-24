import Category from '../model/Category.js';
import RecommendMenu from '../model/RecommendMenu.js';

export default class AppService {
  category;
  recommendMenu;

  init({ number, kindOf, category, notEats }) {
    this.category = new Category(kindOf.innerText, category.innerText);

    // TODO
    // 설계 미스 : 하나의 추천메뉴 X -> 사람한명당 인스턴스화 및 개개인 추천메뉴로
    this.recommendMenu = new RecommendMenu(number.innerText, this.category.getData(), notEats);
    console.log(this.recommendMenu.getResult());
  }

  decisionCategory() {}
}
