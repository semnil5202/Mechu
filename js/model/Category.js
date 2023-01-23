import { FOOD, CAFE } from '../utils/data.js';

export default class Category {
  kindOf;
  category;

  constructor(kindOf, category) {
    this.kindOf = kindOf;
    this.category = category;
  }

  getData() {
    if (this.kindOf === '식사') return this.dataOfFood();
    if (this.kindOf === '카페') return this.dataOfCafe();
  }

  dataOfFood() {
    if (this.category === '무작위') {
      const results = [];
      const values = Object.values(FOOD);

      for (let i = 0; i < values.length; i++) {
        results.push(values[i].split(', '));
      }

      return results.reduce((acc, cur) => {
        return [...acc, ...cur];
      });
    }
    return FOOD[this.category].split(', ');
  }

  dataOfCafe() {
    return CAFE.split(', ');
  }
}
