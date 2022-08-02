import pugLogo from '../assets/img/pug.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.youtube.com/watch?v=Csb1GaeSnPI" target="_blank">
      <img src="${pugLogo}" class="logo" alt="Pug logo" />
    </a>
    <h1 class="title">Vite + JavaScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Pug logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
