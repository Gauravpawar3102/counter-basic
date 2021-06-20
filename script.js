const displayNumber = document.querySelector('#value');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

let count = 0;
function increment() {
  displayNumber.textContent = count;
  return console.log(count++);
}
function zero() {
  displayNumber.textContent = 0;
  return (count = 0);
}

function decrement() {
  const d = (displayNumber.textContent = count--);
  return d;
}

increase.addEventListener('click', increment);

decrease.addEventListener('click', decrement);

reset.addEventListener('click', zero);
