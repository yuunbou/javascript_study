'use strict';

// 動作のバリエーションを増やす（条件分岐）
const anser = window.prompt('ヘルプを見ますか？');
if(anser === 'yes') {
  window.alert('タップでジャンプ、障害物をよけます。');
} else if(anser === 'no') {
  window.alert('ゲーム起動中...');
} else {
  window.alert('yesかnoでお答えください。');
}
