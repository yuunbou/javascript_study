'use strict';

// 数当てゲーム
// ランダムで0~5までの整数を生成し定数numberに代入
const number = Math.floor(Math.random() * 6);
// 入力した定数answerに代入している
// parseIntメソッドを使っていったん整数に変換し、代入
const answer = parseInt(window.prompt('数当てゲーム。0〜5の数字を入力してね。'));

let message;
if(answer === number) {
  message = '当たり!';
} else if(answer < number) {
  message = '残念でした！もっと大きいです！';
} else if(answer > number) {
  message = '残念でした！もっと小さいです！';
} else {
  message = '0〜５の数字を入力してね';
}
window.alert(message);
