export default class RecommendMenu {
  data = {
    category: [],
    notEats: [],
  };
  menuList = [];
  recommended = [];

  constructor(category, notEats) {
    this.data.category = [...category];
    this.data.notEats = [...notEats];
    this.initMenuList();
  }

  initMenuList() {
    this.menuList = this.data.category.filter((el) => !this.data.notEats.includes(el));
    this.recommended = [];
  }

  decisionMenu() {
    if (this.menuList.length === 0) this.initMenuList();
    const menu = this.menuList[Math.floor(Math.random() * this.menuList.length)];
    this.recommendedMenu(menu);
    return menu;
  }

  recommendedMenu(menu) {
    this.recommended.push(menu);
    this.deleteRecommendedMenu();
  }

  deleteRecommendedMenu() {
    this.menuList = this.menuList.filter((el) => !this.recommended.includes(el));
  }
}
