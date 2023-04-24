'use strict';

// 入力に応じて動作を変更する
const answer = window.prompt('ヘルプを見ますか？');
if(answer === 'yes') {
  window.alert('タップでジャンプ、障害物をよけます');
}
