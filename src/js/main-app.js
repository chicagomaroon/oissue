/* eslint-disable no-param-reassign */
import '../scss/main.scss';

const elements = document.querySelectorAll('.no-widows');
Array.prototype.forEach.call(elements, (el, i) => {
  const wordArray = el.textContent.trim().split(' ');
  if (wordArray.length > 1) {
    wordArray[wordArray.length - 2] += `&nbsp;${wordArray[wordArray.length - 1]}`;
    wordArray.pop();
    el.innerHTML = wordArray.join(' ');
  }
});
