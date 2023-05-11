'use strict';

// FizzBuzz
let num = prompt('好きな数字を入れてください');

let judge = fizzbuzz(num);

// alert('結果は' + judge + 'です');

function fizzbuzz(num) {
  let answer;
  if(num % 3 === 0 && num % 5 === 0) {
    answer = 'fizzbuzz';
  } else if(num % 3 === 0) {
    answer = 'fizz';
  } else if(num % 5 === 0) {
    answer = 'buzz';
  } else {
    answer = num;
  }
  return answer;
}

document.getElementById('output').textContent = 'FuzzBuzzの結果は' + judge + 'です'