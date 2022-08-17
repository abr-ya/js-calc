const options = '1234567890.*/+-'.split('');
const special = '.*/+-'.split('');

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
  console.log('init');
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

  const keyClickHandler = (e) => {
    display.style.border = '1px solid black';
    const val = e.target.value;
    console.log(val)
    display.value += val;
  }

  const calcHandler = () => {
    console.log('calcHandler');
    if (display.value) {
      display.value = eval(display.value);
    } else {
      display.style.border = '1px solid red';
    }
  }
  
  const clearHandler = () => {
    console.log('clearHandler');
    display.style.border = '1px solid black';
    display.value = '';
  }

  options.forEach(opt => {
    createButton(opt, keyClickHandler, keys)
  });

  createButton('=', calcHandler, keys);
  createButton('C', clearHandler, keys);
}

window.addEventListener('DOMContentLoaded', init);
