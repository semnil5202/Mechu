export default class ResultFormView {
  resultForm = document.querySelector('.result-container');
  optionForm = document.querySelector('.option-container');
  resultMenuContainer = document.querySelector('.result-menu-container');
  menus;
  number;

  init(number, menus) {
    this.number = number;
    this.menus = menus;
    console.log(this.number, this.menus);
  }

  renderMenuItem() {
    this.initInner();
    for (let i = 1; i < this.number; i++) {
      this.makeInner(i);
    }
  }

  initInner() {
    this.resultMenuContainer.innerHTML = `
    <div class="result-menu-item">
      <h2 class="result-number">A</h2>
      <img class="result-image" src="" alt="img" />
      <h2 class="result-menu-title">${this.menus[0]}</h2>
    </div>`;
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
