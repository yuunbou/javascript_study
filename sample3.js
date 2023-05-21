'use strict';

// アイテムの価格と在庫を表示する
let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};
console.log(jsbook);
console.log(jsbook.title);
console.log(jsbook['price']);
jsbook.stock = 10;
console.log(jsbook.stock);