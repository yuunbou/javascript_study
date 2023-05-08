'use strict';

// 税込価格を計算する


function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

alert('コーヒーメーカーの値段は' + total(8000) + '円（税込)です。')