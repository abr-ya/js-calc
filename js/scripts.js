const options = '1234567890*/+-'.split('');
const special = '*/+-'.split('');

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
}

window.addEventListener('DOMContentLoaded', init);
