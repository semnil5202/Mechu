import NumberOfUserView from '../view/NumberOfUserView.js';

export default class AppController {
  start() {
    new NumberOfUserView().init();
  }
}
