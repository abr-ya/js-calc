const options = '1234567890.=*/+-'.split('');
const special = '.=*/+-'.split('');

const keyClickHandler = (e) => {
  console.log(e);
}

const createButton = (text, clickHandler, target) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.setAttribute('type', 'text');
  btn.value = text;
  btn.textContent = text;
  btn.addEventListener('click', clickHandler);
  target.appendChild(btn);
}

const init = () => {
  console.log('ready');
  const root = document.querySelector('#root');

  const container = document.createElement('div');
  container.classList.add('container');
  root.appendChild(container);

  const display = document.createElement('input');
  display.classList.add('display');
  display.setAttribute('type', 'text');
  container.appendChild(display);

  const keys = document.createElement('div');
  keys.classList.add('keys');
  container.appendChild(keys);

  options.forEach(opt => {
    createButton(opt, keyClickHandler, keys)
  });
}

window.addEventListener('DOMContentLoaded', init);
