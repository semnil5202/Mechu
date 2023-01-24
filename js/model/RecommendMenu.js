export default class RecommendMenu {
  menuList = [];

  constructor(category, notEats) {
    this.menuList = category.filter((el) => !notEats.includes(el));
  }

  decisionMenu() {
    return this.menuList[Math.floor(Math.random() * this.menuList.length)];
  }

  // 먹지 않는 메뉴 걸러주는 기능 -> 설계 수정 후 진행
  //   isEatMenu() {}

  //   중복 메뉴 재추천 방지 기능
  //   this.recommendeds = []; (필드 선언으로 변경 필요)
  //   isRecommended(menu) {
  //     if (this.recommendeds.includes(menu)) return true;
  //     return false;
  //   }

  //   makeEachRecords() {
  //     for (let i = 0; i < this.number; i++) {
  //       this.recommendeds.push([]);
  //     }
  //   }
}
