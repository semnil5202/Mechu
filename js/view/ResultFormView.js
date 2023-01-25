export default class ResultFormView {
  resultForm = document.querySelector('.result-container');
  optionForm = document.querySelector('.option-container');
  resultMenuContainer = document.querySelector('.result-menu-container');
  imageSelectors = [];
  menus;
  number;

  // TODO : 생성 시점 고려해서 init 메서드 필요 여부 파악
  // optionForm 은 이 View 파일에서 조작하는 것이 맞는지 확인해볼것
  init(number, menus) {
    this.number = number;
    this.menus = menus;
  }

  reInitMenus(menus) {
    this.menus = menus;
  }

  renderMenuItem() {
    this.initInner();
    this.imageSelectors.push(document.querySelector('.result-menu-container div:nth-child(1) img'));
    this.initImage();

    for (let i = 1; i < this.number; i++) {
      this.makeInner(i);
      this.imageSelectors.push(
        document.querySelector(`.result-menu-container div:nth-child(${i + 1}) img`),
      );
      this.makeImage(i);
    }
  }

  // NumberOfUserView 의 initInner 메서드와 동일한 형태 -> 추상화 할 수 있는지
  initInner() {
    this.resultMenuContainer.innerHTML = `
    <div class="result-menu-item">
      <h2 class="result-number">A</h2>
      <img class="result-image" src="" alt="img" />
      <h2 class="result-menu-title">${this.menus[0]}</h2>
    </div>`;
  }

  initImage() {
    console.log(this.imageSelectors[0]);
    this.imageSelectors[0].src = `../../img/food/${this.menus[0]}.png`;
  }

  makeInner(i) {
    let user = 'B';
    if (i === 2) user = 'C';
    if (i === 3) user = 'D';

    this.resultMenuContainer.innerHTML += `
    <div class="result-menu-item">
      <h2 class="result-number">${user}</h2>
      <img class="result-image" src="" alt="img" />
      <h2 class="result-menu-title">${this.menus[i]}</h2>
    </div>`;
  }

  makeImage(i) {
    this.imageSelectors[i].src = `../../img/food/${this.menus[i]}.png`;
  }

  showResultView() {
    this.resultForm.classList.remove('hidden');
    this.optionForm.classList.add('hidden');
    this.renderMenuItem();
  }

  hideResultView() {
    this.resultForm.classList.add('hidden');
    this.optionForm.classList.remove('hidden');
  }
}
