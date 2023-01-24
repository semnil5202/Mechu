import AppController from './controller/AppController.js';

// TODO : 전반적인 하드코딩 상수화
// 클린코드 리팩토링

// TODO :
// 1. 반응형 CSS 작업 필요
// 2. 인원 1명일때 결과창 크기 좀 더 키우기
// 3. 이미지 삽입
// 4. 메인페이지 Mechu 이미지 추가
export default class App {
  start() {
    new AppController();
  }
}

document.addEventListener('DOMContentLoaded', new App().start);
