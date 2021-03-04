let height = document.querySelector('#height');
let length = document.querySelector('#length');

const calculeter = (height, length, x, y) => {
  let length1 = length / x;
  let height1 = y / height;
  let all = length1 + height1;
  let all2 = all / height1;
  document.querySelector('.out-1').innerHTML = Math.round(all2) + ' шт.';
};

document.querySelector('.btn').addEventListener('click', () => {
  let radio = document.querySelectorAll('.inp_1');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      data = +radio[i].value;
      break;
    }
  }

  let radio2 = document.querySelectorAll('.inp_2');
  for (let i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
      data2 = +radio2[i].value;
      break;
    }
  }

  calculeter(height.value, length.value, data, data2);
});
