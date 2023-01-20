import AppController from './controller/AppController.js';

export default class App {
  start() {
    new AppController().start();
  }
}

new App().start();
