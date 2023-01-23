export default class RecommendMenu {
  number;
  category;
  notEats;

  constructor(number, category, notEats) {
    this.number = Number(number[0]);
    this.category = category;
    this.notEats = notEats;
  }

  getResult() {
    return this.descisionMenu();
  }

  descisionMenu() {
    const recommendeds = [];
    for (let i = 0; i < this.number; i++) {
      recommendeds.push(this.makeRandomMenu());
    }
    return recommendeds;
  }

  makeRandomMenu() {
    return this.category[Math.floor(Math.random() * this.category.length)];
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
